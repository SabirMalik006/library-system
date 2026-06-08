import React, { useState } from 'react'
import { Plus, RefreshCw } from 'lucide-react'
import { budgetAllocations as initialAllocations } from '../../data/mockData'

export default function BudgetAllocationPage() {
  const [allocations, setAllocations] = useState(initialAllocations)
  const [selectedSession, setSelectedSession] = useState('Select one...')

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <div className="flex flex-col h-full bg-surface">
      {/* Breadcrumb */}
      <div className="px-4 py-2 bg-surface-hover-light border-b border-surface-border">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-text-secondary">Acquisition</span>
          <span className="text-text-muted">/</span>
          <span className="font-semibold text-text-primary">Budget Allocation</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-4 p-4 border-b border-surface-border bg-surface-card">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded shadow-sm transition-colors">
            <Plus size={14} className="text-amber-500" />
            Allocate
          </button>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-text-secondary">Budget Session:</label>
          <select
            value={selectedSession}
            onChange={(e) => setSelectedSession(e.target.value)}
            className="w-40 px-2 py-1.5 text-xs bg-surface border border-surface-border rounded focus:outline-none focus:ring-1 focus:ring-brand-500"
          >
            <option>Select one...</option>
            <option>2011</option>
            <option>2016/2017</option>
          </select>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto p-4">
        <div className="border border-surface-border rounded bg-surface-card overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-hover-light border-b border-surface-border text-xs font-bold text-text-primary uppercase tracking-wider">
              <tr>
                <th className="p-2 border-r border-surface-border">Category</th>
                <th className="p-2 border-r border-surface-border text-right">Actual Amount</th>
                <th className="p-2 flex items-center justify-between">
                  <span className="text-right flex-1">Remaining Amount</span>
                  <RefreshCw size={12} className="text-brand-500 cursor-pointer ml-2" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {allocations.map((item) => (
                <tr key={item.id} className="hover:bg-surface-hover-soft transition-colors">
                  <td className="p-2 text-xs text-text-primary font-medium border-r border-surface-border">
                    {item.category}
                  </td>
                  <td className="p-2 text-xs text-text-primary font-mono text-right border-r border-surface-border">
                    {formatCurrency(item.actualAmount)}
                  </td>
                  <td className="p-2 text-xs text-text-primary font-mono text-right">
                    {formatCurrency(item.remainingAmount)}
                  </td>
                </tr>
              ))}
              {allocations.length === 0 && (
                <tr>
                  <td colSpan="3" className="p-8 text-center text-text-muted text-xs italic">
                    No allocation records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
