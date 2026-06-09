import React from 'react'
import { ArrowRight, UserPlus, Search, FileBarChart, PlusCircle, MessageSquare, Upload } from 'lucide-react'

const iconMap = {
  UserPlus,
  Search,
  FileBarChart,
  PlusCircle,
  MessageSquare,
  Upload,
}

const colorMap = {
  blue:   'border-brand-200 hover:border-brand-300 text-brand-500 bg-brand-50/50',
  green:  'border-accent-green/20 hover:border-accent-green/40 text-accent-green bg-green-50/50',
  purple: 'border-accent-purple/20 hover:border-accent-purple/40 text-accent-purple bg-purple-50/50',
  amber:  'border-accent-amber/20 hover:border-accent-amber/40 text-accent-amber bg-amber-50/50',
}

export default function ActionCard({ title, desc, icon, color, label, delta, imageUrl }) {
  const c = colorMap[color] || colorMap.blue
  const Icon = iconMap[icon] || ArrowRight
  
  // Support both old and new prop patterns
  const displayTitle = title || label
  const displayDesc = desc || delta

  return (
    <div className={`card-hover p-4 sm:p-5 flex items-center gap-4 cursor-pointer group ${c.split(' ')[0]}`}>
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${c.split(' ').slice(2).join(' ')} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}>
        {imageUrl ? (
          <img src={imageUrl} alt={displayTitle} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
        ) : (
          <Icon size={18} className="sm:size-20" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-text-primary truncate">{displayTitle}</p>
        <p className="text-[11px] sm:text-xs text-text-muted mt-0.5 line-clamp-1">{displayDesc}</p>
      </div>
      <ArrowRight size={16} className="text-text-muted group-hover:text-brand-500 transition-colors shrink-0 group-hover:translate-x-1" />
    </div>
  )
}
