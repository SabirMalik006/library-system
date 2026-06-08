import React from 'react'
import { Construction } from 'lucide-react'

export default function PlaceholderPage({ section }) {
  const title = section.replace(/-/g, ' ')

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[70vh] gap-6 text-center p-8">
      <div className="w-16 h-16 rounded-full bg-brand-500/10 border border-brand-200 flex items-center justify-center">
        <Construction size={26} className="text-brand-500" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-text-primary capitalize">{title}</h2>
        <p className="text-sm text-text-secondary mt-1.5 max-w-sm">
          This section is part of the SYK Library system. Content will load here when implemented.
        </p>
      </div>
      <span className="text-xs text-text-muted bg-surface border border-surface-border px-4 py-1.5 rounded-full">
        Section: /{section}
      </span>
    </div>
  )
}
