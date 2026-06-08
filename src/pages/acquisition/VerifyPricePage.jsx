import React, { useState } from 'react'

export default function VerifyPricePage() {
  const [isbn, setIsbn] = useState('')

  return (
    <div className="flex flex-col h-full bg-surface">
      {/* Breadcrumb */}
      <div className="px-4 py-2 bg-surface-hover-light border-b border-surface-border">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-text-secondary">Library</span>
          <span className="text-text-muted">/</span>
          <span className="font-semibold text-text-primary">Price Verification</span>
        </div>
      </div>

      <div className="flex-1 p-8">
        <div className="max-w-md bg-surface-card border border-surface-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-text-primary whitespace-nowrap">ISBN</label>
            <input
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className="flex-1 px-3 py-2 text-sm bg-surface border border-surface-border rounded outline-none focus:ring-1 focus:ring-brand-500"
              placeholder="Enter ISBN..."
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button className="px-6 py-2 text-sm font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded shadow-sm transition-colors">
              Check Price
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
