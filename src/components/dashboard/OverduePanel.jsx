import React from 'react'
import { AlertTriangle, ChevronRight, Send } from 'lucide-react'
import { overDueBooks } from '../../data/mockData'

export default function OverduePanel() {
  return (
    <div className="card-hover p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-accent-amber/10 flex items-center justify-center">
            <AlertTriangle size={14} className="text-accent-amber" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary">Overdue Books</h3>
            <p className="text-[10px] text-text-muted">{overDueBooks.length} items pending</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-text-muted bg-surface px-2.5 py-1 rounded-full border border-surface-border">5 Jun</span>
          <button className="text-[11px] font-medium text-brand-500 hover:text-brand-600 transition-colors">See all</button>
        </div>
      </div>

      <ul className="space-y-1.5">
        {overDueBooks.map(book => (
          <li
            key={book.id}
            className="flex items-center gap-3 p-2.5 rounded-card bg-surface border border-surface-border
              hover:border-accent-amber/30 transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-accent-amber/10 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-accent-amber tabular-nums">-{book.days}d</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-text-primary truncate">{book.title}</p>
              <p className="text-[10px] text-text-muted mt-0.5">
                Due {book.dueDate} &middot; {book.member}
              </p>
            </div>
            <ChevronRight size={13} className="text-text-muted shrink-0 opacity-30 group-hover:opacity-60 transition-opacity" />
          </li>
        ))}
      </ul>

      <button className="w-full mt-3.5 text-xs font-medium px-3 py-2.5 rounded-full
        bg-accent-amber/10 text-accent-amber border border-accent-amber/20
        hover:bg-accent-amber/15 transition-all flex items-center justify-center gap-1.5">
        <Send size={12} />
        Send Reminders
      </button>
    </div>
  )
}
