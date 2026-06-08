import React from 'react'
import { Newspaper, Monitor, BookOpen, Clock } from 'lucide-react'
import { periodicals } from '../../data/mockData'

export default function PeriodicalsPanel() {
  return (
    <div className="card-hover p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center">
            <Newspaper size={14} className="text-accent-purple" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary">Periodicals</h3>
            <p className="text-[10px] text-text-muted">Newly added periodicals</p>
          </div>
        </div>
        <button className="text-[11px] font-medium text-brand-500 hover:text-brand-600 transition-colors">See all</button>
      </div>

      <ul className="space-y-1.5">
        {periodicals.map(p => (
          <li
            key={p.id}
            className="flex items-center gap-3 px-2.5 py-2 rounded-card bg-surface border border-surface-border
              hover:border-accent-purple/30 transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0">
              {p.type === 'Digital' ? (
                <Monitor size={14} className="text-accent-purple" />
              ) : (
                <BookOpen size={14} className="text-accent-purple" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-text-primary truncate">{p.title}</p>
              <p className="text-[10px] text-text-muted mt-0.5 flex items-center gap-1">
                <Clock size={9} /> {p.freq}
              </p>
            </div>
            <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full shrink-0 ${
              p.type === 'Digital'
                ? 'bg-brand-500/10 text-brand-500'
                : 'bg-surface-border-half text-text-muted'
            }`}>
              {p.type}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
