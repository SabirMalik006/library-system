import React, { useState } from 'react'
import { Sparkles, Search } from 'lucide-react'
import { freshArrivals } from '../../data/mockData'

const categoryColors = {
  Politics:    'text-accent-cyan   bg-cyan-500/10',
  Technology:  'text-accent-violet bg-violet-500/10',
  Science:     'text-accent-lime   bg-lime-500/10',
  Military:    'text-accent-amber  bg-amber-500/10',
  Geography:   'text-brand-300    bg-brand-800/40',
  Leadership:  'text-rose-400     bg-rose-500/10',
  Strategy:    'text-orange-400   bg-orange-500/10',
  Cyber:       'text-accent-violet bg-violet-500/10',
  Fiction:     'text-pink-400     bg-pink-500/10',
  Economics:   'text-emerald-400  bg-emerald-500/10',
  Environment: 'text-green-400    bg-green-500/10',
  Geopolitics: 'text-accent-cyan  bg-cyan-500/10',
}

export default function FreshArrivals() {
  const [q, setQ] = useState('')
  const filtered = freshArrivals.filter(b =>
    b.title.toLowerCase().includes(q.toLowerCase()) ||
    b.category.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-lime-500/15 flex items-center justify-center">
            <Sparkles size={14} className="text-accent-lime" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-slate-100 text-sm">Fresh Arrivals</h3>
            <p className="text-[10px] text-slate-500 font-mono">{freshArrivals.length} new titles</p>
          </div>
        </div>
        <button className="text-xs font-mono text-accent-cyan hover:underline">See all</button>
      </div>

      {/* search */}
      <div className="relative mb-4">
        <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 pointer-events-none" />
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Filter arrivals…"
          className="w-full bg-surface border border-surface-border rounded-xl pl-8 pr-3 py-2 text-xs font-body
            text-slate-400 placeholder-slate-600 focus:outline-none focus:border-accent-lime/40 transition-all"
        />
      </div>

      <ul className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
        {filtered.map((book, i) => (
          <li
            key={book.id}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-hover
              border border-transparent hover:border-surface-border transition-all group cursor-pointer"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <span className="w-5 h-5 flex-shrink-0 rounded-md bg-surface-border flex items-center justify-center
              text-[10px] font-mono text-slate-600">
              {i + 1}
            </span>
            <p className="text-xs font-body text-slate-400 group-hover:text-slate-200 transition-colors flex-1 truncate">
              {book.title}
            </p>
            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-md flex-shrink-0 ${categoryColors[book.category] || 'text-slate-500 bg-surface-border'}`}>
              {book.category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
