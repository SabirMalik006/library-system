import React, { useState } from 'react'
import { Sparkles, Search } from 'lucide-react'
import { freshArrivals } from '../../data/mockData'

const catColor = {
  Politics:    'text-brand-500 bg-brand-500/10',
  Technology:  'text-accent-purple bg-accent-purple/10',
  Science:     'text-accent-green bg-accent-green/10',
  Military:    'text-accent-amber bg-accent-amber/10',
  Geography:   'text-brand-500 bg-brand-500/10',
  Leadership:  'text-rose-500 bg-rose-500/10',
  Strategy:    'text-orange-500 bg-orange-500/10',
  Cyber:       'text-accent-purple bg-accent-purple/10',
  Fiction:     'text-pink-500 bg-pink-500/10',
  Economics:   'text-emerald-500 bg-emerald-500/10',
  Environment: 'text-green-500 bg-green-500/10',
  Geopolitics: 'text-brand-500 bg-brand-500/10',
}

export default function FreshArrivals() {
  const [q, setQ] = useState('')
  const filtered = freshArrivals.filter(b =>
    b.title.toLowerCase().includes(q.toLowerCase()) ||
    b.category.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <div className="card-hover p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-accent-green/10 flex items-center justify-center">
            <Sparkles size={14} className="text-accent-green" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary">Fresh Arrivals</h3>
            <p className="text-[10px] text-text-muted">{freshArrivals.length} new titles</p>
          </div>
        </div>
        <button className="text-[11px] font-medium text-brand-500 hover:text-brand-600 transition-colors">See all</button>
      </div>

      <div className="relative mb-3">
        <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Filter arrivals..."
          className="w-full bg-surface border border-surface-border rounded-full pl-8 pr-4 py-2 text-xs text-text-primary
            placeholder-text-muted outline-none transition-colors duration-150
            focus:border-brand-300 focus:ring-2 focus:ring-brand-500/10"
        />
      </div>

      <ul className="space-y-0.5 max-h-72 overflow-y-auto scrollbar-hide">
        {filtered.map((book, i) => (
          <li
            key={book.id}
            className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg hover:bg-surface-hover transition-colors cursor-pointer"
          >
            <span className="w-5 h-5 rounded flex items-center justify-center bg-surface-border-half text-[10px] text-text-muted font-mono shrink-0">
              {i + 1}
            </span>
            <p className="text-xs text-text-secondary flex-1 truncate">{book.title}</p>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 ${catColor[book.category] || 'bg-surface-border-half text-text-muted'}`}>
              {book.category}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
