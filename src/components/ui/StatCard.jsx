import React, { useEffect, useState, useRef } from 'react'

const colorMap = {
  blue:   { dot: 'bg-brand-500',       text: 'text-brand-500',     bg: 'bg-brand-50',     ring: 'ring-brand-500/20' },
  green:  { dot: 'bg-accent-green',    text: 'text-accent-green',  bg: 'bg-green-50',     ring: 'ring-accent-green/20' },
  amber:  { dot: 'bg-accent-amber',    text: 'text-accent-amber',  bg: 'bg-amber-50',     ring: 'ring-accent-amber/20' },
  purple: { dot: 'bg-accent-purple',   text: 'text-accent-purple', bg: 'bg-purple-50',    ring: 'ring-accent-purple/20' },
}

function AnimatedValue({ value, className }) {
  const [displayed, setDisplayed] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current && typeof value === 'number') {
        done.current = true
        const target = value
        const duration = 800
        const start = performance.now()
        const tick = now => {
          const p = Math.min((now - start) / duration, 1)
          setDisplayed(Math.round(target * p))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  if (typeof value !== 'number') return <p className={`text-2xl sm:text-3xl font-bold leading-none ${className}`}>{value}</p>
  return <p ref={ref} className={`text-2xl sm:text-3xl font-bold leading-none tabular-nums ${className}`}>{displayed.toLocaleString()}</p>
}

export default function StatCard({ label, value, delta, color, icon: Icon, imageUrl }) {
  const c = colorMap[color] || colorMap.blue

  return (
    <div className="card-hover p-4 sm:p-5 relative">
      <div className="flex items-center justify-between mb-4 sm:mb-5">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-surface-border-soft flex items-center justify-center bg-surface-card">
          {imageUrl ? (
            <img src={imageUrl} alt={label} className="w-4 h-4 object-contain" />
          ) : (
            Icon && <Icon size={16} className={c.text} />
          )}
        </div>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.bg} ${c.text}`}>LIVE</span>
      </div>
      <AnimatedValue value={value} className={c.text} />
      <p className="text-text-secondary text-xs mt-1">{label}</p>
      <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-surface-border-soft">
        <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
        <span className="text-text-muted text-[11px]">{delta}</span>
      </div>
    </div>
  )
}
