import React from 'react'
import { Construction } from 'lucide-react'

export default function PlaceholderPage({ section }) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] gap-4 text-center p-8">
      <div className="w-16 h-16 rounded-2xl bg-surface-card border border-surface-border flex items-center justify-center">
        <Construction size={28} className="text-accent-cyan" />
      </div>
      <h2 className="font-display font-bold text-xl text-slate-200 capitalize">{section.replace(/-/g,' ')}</h2>
      <p className="text-sm font-body text-slate-500 max-w-xs">
        This section is part of the SYK Library system. Content will load here when implemented.
      </p>
      <span className="text-xs font-mono text-slate-600 bg-surface-card border border-surface-border px-3 py-1 rounded-full">
        Section: /{section}
      </span>
    </div>
  )
}
