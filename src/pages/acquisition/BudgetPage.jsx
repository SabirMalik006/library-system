import React, { useState } from 'react'
import { Plus, Trash2, RefreshCw } from 'lucide-react'
import { budgets as initialBudgets } from '../../data/mockData'

export default function BudgetPage() {
  const [budgets, setBudgets] = useState(initialBudgets)
  const [selectedIds, setSelectedIds] = useState(new Set())

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(new Set(budgets.map(b => b.id)))
    } else {
      setSelectedIds(new Set())
    }
  }

  const handleSelectOne = (id) => {
    const next = new Set(selectedIds)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setSelectedIds(next)
  }

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
          <span className="text-text-secondary">Library</span>
          <span className="text-text-muted">/</span>
          <span className="font-semibold text-text-primary">Budget</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-4 p-4 border-b border-surface-border bg-surface-card">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded shadow-sm transition-colors">
            <Plus size={14} className="text-amber-500" />
            New Budget
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded shadow-sm transition-colors">
            <Trash2 size={14} className="text-amber-500" />
            Remove Budget
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto p-4">
        <div className="border border-surface-border rounded bg-surface-card overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-hover-light border-b border-surface-border text-xs font-bold text-text-primary uppercase tracking-wider">
              <tr>
                <th className="w-10 p-2 text-center border-r border-surface-border">
                  <input 
                    type="checkbox" 
                    onChange={handleSelectAll}
                    checked={selectedIds.size === budgets.length && budgets.length > 0}
                    className="rounded border-surface-border text-brand-500 focus:ring-brand-500"
                  />
                </th>
                <th className="p-2 border-r border-surface-border">Session</th>
                <th className="p-2 border-r border-surface-border text-right">Total Budget</th>
                <th className="p-2 flex items-center justify-between">
                  <span className="text-right flex-1">Remaining Budget</span>
                  <RefreshCw size={12} className="text-brand-500 cursor-pointer ml-2" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {budgets.map((budget) => (
                <tr key={budget.id} className="hover:bg-surface-hover-soft transition-colors">
                  <td className="p-2 text-center border-r border-surface-border">
                    <input 
                      type="checkbox" 
                      checked={selectedIds.has(budget.id)}
                      onChange={() => handleSelectOne(budget.id)}
                      className="rounded border-surface-border text-brand-500 focus:ring-brand-500"
                    />
                  </td>
                  <td className="p-2 text-xs text-text-primary font-medium border-r border-surface-border">
                    {budget.session}
                  </td>
                  <td className="p-2 text-xs text-text-primary font-mono text-right border-r border-surface-border">
                    {formatCurrency(budget.totalBudget)}
                  </td>
                  <td className="p-2 text-xs text-text-primary font-mono text-right">
                    {formatCurrency(budget.remainingBudget)}
                  </td>
                </tr>
              ))}
              {budgets.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-text-muted text-xs italic">
                    No budget records found
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
