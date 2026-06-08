import React, { useState } from 'react'
import { Search, RefreshCw, Barcode } from 'lucide-react'

export default function StockTakingPage() {
  const [barcode, setBarcode] = useState('')

  return (
    <div className="flex flex-col h-full bg-surface">
      {/* Breadcrumb */}
      <div className="px-4 py-2 bg-surface-hover-light border-b border-surface-border">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-text-secondary">Stock Taking</span>
          <span className="text-text-muted">/</span>
          <span className="font-semibold text-text-primary">Stock Taking</span>
        </div>
      </div>

      <div className="flex-1 p-8">
        <div className="max-w-xl bg-surface-card border border-surface-border rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-bold text-text-primary mb-6 uppercase tracking-wider">Stock Verification</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                <Barcode size={20} className="text-brand-500" />
              </div>
              <div className="flex-1">
                <label className="block text-[11px] font-semibold text-text-secondary uppercase mb-1">Enter Barcode / Accession No.</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={barcode}
                    onChange={(e) => setBarcode(e.target.value)}
                    className="flex-1 px-3 py-2 text-sm bg-surface border border-surface-border rounded outline-none focus:ring-1 focus:ring-brand-500"
                    placeholder="Scan or type here..."
                  />
                  <button className="px-4 py-2 text-xs font-medium text-white bg-brand-500 hover:bg-brand-600 rounded transition-colors flex items-center gap-1.5">
                    <Search size={14} />
                    Verify
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-surface rounded border border-surface-border border-dashed text-center">
              <p className="text-xs text-text-muted italic">Scan a book barcode to verify its status in the stock.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
