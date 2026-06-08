import React from 'react'
import { ArrowRight } from 'lucide-react'

const colorMap = {
  blue:   'border-brand-200 hover:border-brand-300 text-brand-500 bg-brand-50/50',
  green:  'border-accent-green/20 hover:border-accent-green/40 text-accent-green bg-green-50/50',
  amber:  'border-accent-amber/20 hover:border-accent-amber/40 text-accent-amber bg-amber-50/50',
}

export default function ActionCard({ label, delta, color, imageUrl }) {
  const c = colorMap[color] || colorMap.blue

  return (
    <div className={`card-hover p-5 flex items-center gap-4 cursor-pointer group ${c.split(' ')[0]}`}>
      <div className={`w-12 h-12 rounded-full ${c.split(' ').slice(2).join(' ')} flex items-center justify-center shrink-0`}>
        {imageUrl && (
          <img src={imageUrl} alt={label} className="w-6 h-6 object-contain" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-text-primary">{label}</p>
        <p className="text-xs text-text-muted mt-0.5">{delta}</p>
      </div>
      <ArrowRight size={16} className="text-text-muted group-hover:text-brand-500 transition-colors shrink-0" />
    </div>
  )
}
