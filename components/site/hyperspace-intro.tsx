'use client'

import { useEffect, useRef, useState } from 'react'

const bootLines = [
  'INITIALIZING IDENTITY.SYS ......... OK',
  'MOUNTING /portfolio/projects ...... OK',
  'CALIBRATING MODEL STACK ........... OK',
  'HYPERSPACE INTRO .................. ENGAGED',
]

export function HyperspaceIntro({
  onFinish,
}: {
  onFinish?: () => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [booted, setBooted] = useState(false)
  const [warping, setWarping] = useState(false)
  const [exiting, setExiting] = useState(false)
  const [finished, setFinished] = useState(false)
  const [flashVisible, setFlashVisible] = useState(false)
  const [lines, setLines] = useState(['', '', '', ''])
  const warpStartRef = useRef<number>(0)
  const flashFiredRef = useRef(false)
  const warpDoneRef = useRef(false)
  const skippedRef = useRef(false)
  const timersRef = useRef<number[]>([])
  const exitTimerRef = useRef<number | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (finished) {
      document.body.style.overflow = ''
    }
  }, [finished])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return
    const ctx = context

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.max(1, window.devicePixelRatio || 1)
    let width = 0
    let height = 0
    let cx = 0
    let cy = 0
    let raf = 0

    function resize() {
      const canvasElement = canvasRef.current
      if (!canvasElement) return
      const rect = canvasElement.getBoundingClientRect()
      width = canvasElement.width = rect.width * dpr
      height = canvasElement.height = rect.height * dpr
      cx = width / 2
      cy = height / 2
    }

    function makeStar() {
      return {
        angle: Math.random() * Math.PI * 2,
        z: Math.random(),
        speed: 0.0015 + Math.random() * 0.0035,
        amber: Math.random() < 0.15,
      }
    }

    const stars = Array.from({ length: 280 }, makeStar)

    function triggerArrival() {
      if (warpDoneRef.current || skippedRef.current) return
      warpDoneRef.current = true
      setWarping(false)
      setExiting(true)
      setFlashVisible(true)
      window.setTimeout(() => {
        setFlashVisible(false)
      }, 200)
      exitTimerRef.current = window.setTimeout(() => {
        setFinished(true)
        onFinish?.()
      }, 450)
    }

    function frame() {
      const now = performance.now()
      const warpStart = warpStartRef.current
      const warpT = warpStart ? Math.min(1, (now - warpStart) / 1600) : 0

      if (warpStart && warpT >= 0.8 && !flashFiredRef.current) {
        flashFiredRef.current = true
        setFlashVisible(true)
        window.setTimeout(() => setFlashVisible(false), 180)
      }

      if (warpStart && warpT >= 1 && !warpDoneRef.current) {
        triggerArrival()
      }

      const fadeAlpha = warpStart ? Math.max(0.025, 0.32 - warpT * 0.295) : 0.32
      ctx.fillStyle = 'rgba(7,7,7,' + fadeAlpha + ')'
      ctx.fillRect(0, 0, width, height)
      const maxR = Math.hypot(cx, cy)
      const speedMult = warpStart ? 1 + Math.pow(warpT, 2.2) * 90 : 1
      const trailMult = warpStart ? 1 + Math.pow(warpT, 1.5) * 22 : 1

      for (let i = 0; i < stars.length; i += 1) {
        const star = stars[i]
        star.z += star.speed * speedMult * (1 + star.z * 4)
        if (star.z > 1) {
          stars[i] = makeStar()
          continue
        }

        const r0 = star.z * maxR
        const trailLen = (6 + star.z * 46) * trailMult
        const r1 = Math.min(maxR * 1.08, r0 + trailLen)
        const x0 = cx + Math.cos(star.angle) * r0
        const y0 = cy + Math.sin(star.angle) * r0
        const x1 = cx + Math.cos(star.angle) * r1
        const y1 = cy + Math.sin(star.angle) * r1
        const alpha = Math.min(1, star.z * 1.6)

        if (warpStart && warpT > 0.25) {
          ctx.strokeStyle = star.amber
            ? 'rgba(255,210,60,' + Math.min(1, alpha * 1.4) + ')'
            : 'rgba(90,255,160,' + Math.min(1, alpha * 1.4) + ')'
        } else {
          ctx.strokeStyle = star.amber
            ? 'rgba(255,176,0,' + alpha + ')'
            : 'rgba(57,255,106,' + alpha + ')'
        }

        ctx.lineWidth = Math.max(0.5, star.z * 2.4 * (warpStart ? 1 + warpT : 1))
        ctx.beginPath()
        ctx.moveTo(x0, y0)
        ctx.lineTo(x1, y1)
        ctx.stroke()
      }

      if (!reduceMotion) {
        raf = requestAnimationFrame(frame)
      }
    }

    resize()
    window.addEventListener('resize', resize)
    frame()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
      if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current)
    }
  }, [onFinish])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timers: number[] = []

    function clearTimers() {
      timersRef.current.forEach(window.clearTimeout)
      timersRef.current.length = 0
    }

    function revealComplete() {
      clearTimers()
      setLines(bootLines)
      setBooted(true)
    }

    if (reduceMotion) {
      revealComplete()
      return undefined
    }

    let lineIndex = 0
    let charIndex = 0

    function tick() {
      if (lineIndex >= bootLines.length) {
        return
      }

      setLines((current) => {
        const next = [...current]
        const line = bootLines[lineIndex] ?? ''
        next[lineIndex] = line.slice(0, Math.min(charIndex + 1, line.length))
        return next
      })

      charIndex += 1
      if (charIndex >= bootLines[lineIndex].length) {
        lineIndex += 1
        charIndex = 0
        if (lineIndex >= bootLines.length) {
          timersRef.current.push(window.setTimeout(revealComplete, 120))
        } else {
          timersRef.current.push(window.setTimeout(tick, 120))
        }
        return
      }
      timersRef.current.push(window.setTimeout(tick, 14))
    }

    timersRef.current.push(window.setTimeout(tick, 120))
    return () => clearTimers()
  }, [])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        skipIntro()
      }
    }

    function onWheel() {
      if (booted && !warping && !exiting && !skippedRef.current) {
        startWarp()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('wheel', onWheel, { passive: true })
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('wheel', onWheel)
    }
  }, [booted, warping, exiting])

  function clearTimers() {
    timersRef.current.forEach(window.clearTimeout)
    timersRef.current.length = 0
  }

  function skipIntro() {
    if (skippedRef.current) return
    skippedRef.current = true
    clearTimers()
    if (exitTimerRef.current) {
      window.clearTimeout(exitTimerRef.current)
      exitTimerRef.current = null
    }
    document.body.style.overflow = ''
    setFinished(true)
    onFinish?.()
  }

  function startWarp() {
    if (warping || exiting || skippedRef.current) return
    setBooted(true)
    setWarping(true)
    setLines(bootLines)
    warpStartRef.current = performance.now()
    flashFiredRef.current = false
    setFlashVisible(false)
  }

  if (finished) {
    return null
  }

  return (
    <section
      id="intro"
      className={`hyperspace-intro ${booted ? 'hyperspace-booted' : ''} ${warping ? 'hyperspace-warping' : ''} ${exiting ? 'hyperspace-arriving' : ''}`}
      aria-label="Portfolio intro"
    >
      <div className={`hyperspace-warp-flash ${flashVisible ? 'active' : ''}`} aria-hidden="true" />
      <canvas ref={canvasRef} className="hyperspace-warp" aria-hidden="true" />
      <div className="hyperspace-scanlines" aria-hidden="true" />
      <div className="hyperspace-vignette" aria-hidden="true" />

      <div className="hyperspace-frame" aria-hidden="true">
        <span className="hyperspace-corner hyperspace-tl" />
        <span className="hyperspace-corner hyperspace-tr" />
        <span className="hyperspace-corner hyperspace-bl" />
        <span className="hyperspace-corner hyperspace-br" />
      </div>

      <div className="hyperspace-hud">
        <span className="hyperspace-tag-tl">SYS.001 // BOOT.SEQ</span>
        <span className="hyperspace-tag-tr">
          <span className="hyperspace-rec-dot" />
          REC // LIVE
        </span>
        <span className="hyperspace-tag-bl">
          <button
            type="button"
            onClick={skipIntro}
          >
            ESC // Skip intro
          </button>
        </span>
        <span className="hyperspace-tag-br">VECTOR 07.K // WARP</span>
      </div>

      <div className="hyperspace-stage">
        <div className="hyperspace-boot-log" aria-live="polite">
          {lines.map((line, index) => (
            <span key={index} className="hyperspace-line">
              {line}
            </span>
          ))}
        </div>

        <div className="hyperspace-titleblock">
          <h1 className="hyperspace-glitch" data-text="KEVAL AMIN">
            <span className="hyperspace-card-letter">K</span>
            EVAL <span className="hyperspace-card-letter">A</span>
            MIN
          </h1>
          <p className="hyperspace-role">
            ML Engineer <b>//</b> Data Scientist <b>//</b> Applied AI Builder
          </p>
          <button
            className={`hyperspace-cta ${warping ? 'warp-engaged' : ''}`}
            type="button"
            onClick={startWarp}
            disabled={exiting}
          >
            {warping ? 'WARP ENGAGING…' : 'Enter Portfolio'}{' '}
            <span aria-hidden="true">▼</span>
          </button>
        </div>
      </div>
    </section>
  )
}
