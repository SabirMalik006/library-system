import React from 'react'
import { Newspaper, Monitor, BookOpen } from 'lucide-react'
import { periodicals } from '../../data/mockData'

export default function PeriodicalsPanel() {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-violet-500/15 flex items-center justify-center">
            <Newspaper size={14} className="text-accent-violet" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-slate-100 text-sm">Periodicals (Fresh Arrivals)</h3>
            <p className="text-[10px] text-slate-500 font-mono">Newly added periodicals</p>
          </div>
        </div>
        <button className="text-xs font-mono text-accent-cyan hover:underline">See all</button>
      </div>

      <ul className="space-y-2">
        {periodicals.map(p => (
          <li
            key={p.id}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-surface border border-surface-border
              hover:border-violet-500/25 hover:bg-surface-hover transition-all cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
              {p.type === 'Digital' ? <Monitor size={14} className="text-accent-violet" /> : <BookOpen size={14} className="text-accent-violet" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-body text-slate-300 truncate">{p.title}</p>
              <p className="text-[10px] font-mono text-slate-600">{p.freq}</p>
            </div>
            <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full flex-shrink-0
              ${p.type === 'Digital'
                ? 'bg-cyan-500/10 text-accent-cyan'
                : 'bg-slate-700/40 text-slate-400'}`}>
              {p.type}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
