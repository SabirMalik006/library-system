import React from 'react'
import { AlertTriangle, ChevronRight } from 'lucide-react'
import { overDueBooks } from '../../data/mockData'

export default function OverduePanel() {
  return (
    <div className="card p-6 h-full">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center">
            <AlertTriangle size={14} className="text-accent-amber" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-slate-100 text-sm">Overdue Books</h3>
            <p className="text-[10px] text-slate-500 font-mono">{overDueBooks.length} items pending</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xs font-mono text-slate-500 bg-surface p-2 rounded-md border border-surface-border">
            5 June
          </div>
          <button className="text-xs font-mono text-accent-cyan hover:underline">See all</button>
        </div>
      </div>

      <ul className="space-y-2">
        {overDueBooks.map(book => (
          <li
            key={book.id}
            className="flex items-center gap-3 p-3 rounded-xl bg-surface hover:bg-surface-hover
              border border-surface-border hover:border-amber-500/20 transition-all group cursor-pointer"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
              <span className="text-[10px] font-mono text-accent-amber font-bold">-{book.days}d</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-body text-slate-300 truncate leading-tight">{book.title}</p>
              <p className="text-[10px] font-mono text-slate-600 mt-0.5">Due: {book.dueDate}</p>
            </div>
            <ChevronRight size={14} className="text-slate-600 group-hover:text-accent-amber transition-colors flex-shrink-0" />
          </li>
        ))}
      </ul>

      <button className="w-full mt-4 py-2.5 rounded-xl text-xs font-display font-semibold text-accent-amber
        bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/15 transition-all">
        Send Reminders
      </button>
    </div>
  )
}
