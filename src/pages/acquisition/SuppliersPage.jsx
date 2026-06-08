import React, { useState } from 'react'
import { Plus, Trash2, Search, RefreshCw } from 'lucide-react'
import { suppliers as initialSuppliers } from '../../data/mockData'

export default function SuppliersPage() {
  const [suppliers, setSuppliers] = useState(initialSuppliers)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIds, setSelectedIds] = useState(new Set())

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(new Set(suppliers.map(s => s.id)))
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

  const filteredSuppliers = suppliers.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full bg-surface">
      {/* Breadcrumb */}
      <div className="px-4 py-2 bg-surface-hover-light border-b border-surface-border">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-text-secondary">Acquisition</span>
          <span className="text-text-muted">/</span>
          <span className="font-semibold text-text-primary">Suppliers</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-4 p-4 border-b border-surface-border bg-surface-card">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded shadow-sm transition-colors">
            <Plus size={14} className="text-amber-500" />
            New Supplier
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded shadow-sm transition-colors">
            <Trash2 size={14} className="text-amber-500" />
            Remove Supplier
          </button>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-text-secondary">Search By Name:</label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-48 pl-2 pr-8 py-1.5 text-xs bg-surface border border-surface-border rounded focus:outline-none focus:ring-1 focus:ring-brand-500"
            />
          </div>
          <button className="px-3 py-1.5 text-xs font-medium text-white bg-brand-500 hover:bg-brand-600 rounded shadow-sm transition-colors">
            Go
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto p-4">
        <div className="border border-surface-border rounded bg-surface-card overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-hover-light border-b border-surface-border">
              <tr>
                <th className="w-10 p-2 text-center border-r border-surface-border">
                  <input 
                    type="checkbox" 
                    onChange={handleSelectAll}
                    checked={selectedIds.size === suppliers.length && suppliers.length > 0}
                    className="rounded border-surface-border text-brand-500 focus:ring-brand-500"
                  />
                </th>
                <th className="p-2 text-xs font-bold text-text-primary uppercase tracking-wider flex items-center justify-between">
                  Name
                  <RefreshCw size={12} className="text-brand-500 cursor-pointer" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {filteredSuppliers.map((supplier) => (
                <tr key={supplier.id} className="hover:bg-surface-hover-soft transition-colors">
                  <td className="p-2 text-center border-r border-surface-border">
                    <input 
                      type="checkbox" 
                      checked={selectedIds.has(supplier.id)}
                      onChange={() => handleSelectOne(supplier.id)}
                      className="rounded border-surface-border text-brand-500 focus:ring-brand-500"
                    />
                  </td>
                  <td className="p-2 text-xs text-text-primary font-medium">
                    {supplier.name}
                  </td>
                </tr>
              ))}
              {filteredSuppliers.length === 0 && (
                <tr>
                  <td colSpan="2" className="p-8 text-center text-text-muted text-xs italic">
                    No suppliers found
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
