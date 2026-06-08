import React, { useState } from 'react'
import { Plus, Trash2, RefreshCw } from 'lucide-react'
import { purchasingList as initialList } from '../../data/mockData'

export default function PurchasingListPage() {
  const [list, setList] = useState(initialList)
  const [budget, setBudget] = useState('2016/2017')
  const [category, setCategory] = useState('Computer Science')

  return (
    <div className="flex flex-col h-full bg-surface">
      {/* Breadcrumb */}
      <div className="px-4 py-2 bg-surface-hover-light border-b border-surface-border">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-text-secondary">Acquisition</span>
          <span className="text-text-muted">/</span>
          <span className="font-semibold text-text-primary">Purchasing List</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-4 p-4 border-b border-surface-border bg-surface-card">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded shadow-sm transition-colors">
            <Plus size={14} className="text-amber-500" />
            New Record
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded shadow-sm transition-colors">
            <Trash2 size={14} className="text-amber-500" />
            Remove
          </button>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-text-secondary">Budget:</label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-32 px-2 py-1.5 text-xs bg-surface border border-surface-border rounded focus:outline-none focus:ring-1 focus:ring-brand-500"
            >
              <option>2011</option>
              <option>2016/2017</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-text-secondary">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-40 px-2 py-1.5 text-xs bg-surface border border-surface-border rounded focus:outline-none focus:ring-1 focus:ring-brand-500"
            >
              <option>Computer Science</option>
              <option>Military Science</option>
              <option>Social Science</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto p-4">
        <div className="border border-surface-border rounded bg-surface-card overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-hover-light border-b border-surface-border text-xs font-bold text-text-primary uppercase tracking-wider">
              <tr>
                <th className="w-10 p-2 text-center border-r border-surface-border">
                  <input type="checkbox" className="rounded border-surface-border text-brand-500 focus:ring-brand-500" />
                </th>
                <th className="p-2 border-r border-surface-border">Title</th>
                <th className="p-2 border-r border-surface-border">Author</th>
                <th className="p-2 flex items-center justify-between">
                  <span>Purchase Date</span>
                  <RefreshCw size={12} className="text-brand-500 cursor-pointer ml-2" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {list.length > 0 ? (
                list.map((item) => (
                  <tr key={item.id} className="hover:bg-surface-hover-soft transition-colors">
                    <td className="p-2 text-center border-r border-surface-border">
                      <input type="checkbox" className="rounded border-surface-border text-brand-500 focus:ring-brand-500" />
                    </td>
                    <td className="p-2 text-[11px] text-text-primary font-medium border-r border-surface-border">{item.title}</td>
                    <td className="p-2 text-[11px] text-text-primary border-r border-surface-border">{item.author}</td>
                    <td className="p-2 text-[11px] text-text-secondary font-mono">{item.purchaseDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-text-muted text-xs italic">
                    No record found
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
