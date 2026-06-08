import React, { useState } from 'react'
import { Check, X, RefreshCw } from 'lucide-react'
import { suggestions as initialSuggestions } from '../../data/mockData'

export default function SuggestionsPage() {
  const [suggestions, setSuggestions] = useState(initialSuggestions)
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [role, setRole] = useState('Select Role...')
  const [status, setStatus] = useState('Select Status...')

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(new Set(suggestions.map(s => s.id)))
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

  return (
    <div className="flex flex-col h-full bg-surface">
      {/* Breadcrumb */}
      <div className="px-4 py-2 bg-surface-hover-light border-b border-surface-border">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-text-secondary">Acquisition</span>
          <span className="text-text-muted">/</span>
          <span className="font-semibold text-text-primary">Suggestions</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-4 p-4 border-b border-surface-border bg-surface-card">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded shadow-sm transition-colors">
            <Check size={14} className="text-amber-500" />
            Accept
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded shadow-sm transition-colors">
            <X size={14} className="text-amber-500" />
            Reject
          </button>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-32 px-2 py-1.5 text-xs bg-surface border border-surface-border rounded focus:outline-none focus:ring-1 focus:ring-brand-500"
          >
            <option>Select Role...</option>
            <option>Admin</option>
            <option>Member</option>
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-32 px-2 py-1.5 text-xs bg-surface border border-surface-border rounded focus:outline-none focus:ring-1 focus:ring-brand-500"
          >
            <option>Select Status...</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
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
                    checked={selectedIds.size === suggestions.length && suggestions.length > 0}
                    className="rounded border-surface-border text-brand-500 focus:ring-brand-500"
                  />
                </th>
                <th className="p-2 border-r border-surface-border">Title</th>
                <th className="p-2 border-r border-surface-border">Author</th>
                <th className="p-2 border-r border-surface-border">MemberID</th>
                <th className="p-2 flex items-center justify-between">
                  <span className="flex-1">Name</span>
                  <RefreshCw size={12} className="text-brand-500 cursor-pointer ml-2" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {suggestions.map((item) => (
                <tr key={item.id} className="hover:bg-surface-hover-soft transition-colors">
                  <td className="p-2 text-center border-r border-surface-border">
                    <input 
                      type="checkbox" 
                      checked={selectedIds.has(item.id)}
                      onChange={() => handleSelectOne(item.id)}
                      className="rounded border-surface-border text-brand-500 focus:ring-brand-500"
                    />
                  </td>
                  <td className="p-2 text-[11px] text-text-primary font-medium border-r border-surface-border">
                    {item.title}
                  </td>
                  <td className="p-2 text-[11px] text-text-primary border-r border-surface-border">
                    {item.author}
                  </td>
                  <td className="p-2 text-[11px] text-text-secondary border-r border-surface-border font-mono">
                    {item.memberId}
                  </td>
                  <td className="p-2 text-[11px] text-text-primary">
                    {item.name}
                  </td>
                </tr>
              ))}
              {suggestions.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-text-muted text-xs italic">
                    No suggestions found
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
