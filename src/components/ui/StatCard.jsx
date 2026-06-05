import React from 'react'

const colorMap = {
  cyan:   { glow: 'shadow-cyan-500/10',  dot: 'bg-accent-cyan',   text: 'text-accent-cyan',   ring: 'ring-accent-cyan/20',  bg: 'bg-cyan-500/10'   },
  lime:   { glow: 'shadow-lime-500/10',  dot: 'bg-accent-lime',   text: 'text-accent-lime',   ring: 'ring-lime-400/20',    bg: 'bg-lime-500/10'   },
  amber:  { glow: 'shadow-amber-500/10', dot: 'bg-accent-amber',  text: 'text-accent-amber',  ring: 'ring-amber-400/20',   bg: 'bg-amber-500/10'  },
  violet: { glow: 'shadow-violet-500/10',dot: 'bg-accent-violet', text: 'text-accent-violet', ring: 'ring-violet-400/20',  bg: 'bg-violet-500/10' },
}

export default function StatCard({ label, value, delta, color, icon: Icon, imageUrl }) {
  const c = colorMap[color] || colorMap.cyan

  return (
    <div className={`card p-5 shadow-lg ${c.glow} hover:scale-[1.02] transition-transform duration-200 group`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-9 h-9 rounded-xl ${c.bg} ring-1 ${c.ring} flex items-center justify-center overflow-hidden`}>
          {imageUrl ? (
            <img src={imageUrl} alt={label} className="w-8 h-8 object-cover rounded-md" />
          ) : (
            Icon && <Icon size={17} className={c.text} />
          )}
        </div>
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${c.bg} ${c.text} ring-1 ${c.ring}`}>
          LIVE
        </span>
      </div>
      <p className={`font-display font-bold text-3xl ${c.text} leading-none mb-1`}>
        {typeof value === 'number' ? value.toLocaleString() : value}
      </p>
      <p className="text-slate-400 text-xs font-body mt-1">{label}</p>
      <p className="text-slate-600 text-[10px] font-mono mt-2 border-t border-surface-border pt-2">{delta}</p>
    </div>
  )
}
