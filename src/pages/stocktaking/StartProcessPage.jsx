import React, { useState } from 'react'
import { Play, AlertCircle, Calendar } from 'lucide-react'

export default function StartProcessPage() {
  const [session, setSession] = useState('2026-2027')

  return (
    <div className="flex flex-col h-full bg-surface">
      {/* Breadcrumb */}
      <div className="px-4 py-2 bg-surface-hover-light border-b border-surface-border">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-text-secondary">Library</span>
          <span className="text-text-muted">/</span>
          <span className="font-semibold text-text-primary">Start Stock Taking Process</span>
        </div>
      </div>

      <div className="flex-1 p-8">
        <div className="max-w-2xl bg-surface-card border border-surface-border rounded-lg overflow-hidden shadow-sm">
          <div className="bg-amber-50 border-b border-amber-100 p-4 flex items-center gap-3">
            <AlertCircle className="text-amber-500" size={20} />
            <div>
              <h3 className="text-sm font-bold text-amber-900">Important Notice</h3>
              <p className="text-[11px] text-amber-700">Starting a new stock taking process will initialize the system for current inventory verification.</p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-text-secondary uppercase flex items-center gap-1.5">
                  <Calendar size={13} />
                  Stock Taking Session
                </label>
                <select
                  value={session}
                  onChange={(e) => setSession(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-surface border border-surface-border rounded outline-none focus:ring-1 focus:ring-brand-500"
                >
                  <option>2024-2025</option>
                  <option>2025-2026</option>
                  <option>2026-2027</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-surface-border">
              <button className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-brand-500 hover:bg-brand-600 rounded-md shadow-md transition-all active:scale-95">
                <Play size={16} fill="currentColor" />
                Initialize Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
