import React, { useState } from 'react'
import { Plus, RefreshCw } from 'lucide-react'
import { orders as initialOrders } from '../../data/mockData'

export default function OrdersPage() {
  const [orders, setOrders] = useState(initialOrders)
  const [searchBy, setSearchBy] = useState('Select...')
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="flex flex-col h-full bg-surface">
      {/* Breadcrumb */}
      <div className="px-4 py-2 bg-surface-hover-light border-b border-surface-border">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-text-secondary">Library</span>
          <span className="text-text-muted">/</span>
          <span className="font-semibold text-text-primary">Orders</span>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-4 p-4 border-b border-surface-border bg-surface-card">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-primary bg-surface hover:bg-surface-hover border border-surface-border rounded shadow-sm transition-colors">
            <Plus size={14} className="text-amber-500" />
            Add New
          </button>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-text-secondary">Search By:</label>
          <select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
            className="w-32 px-2 py-1.5 text-xs bg-surface border border-surface-border rounded focus:outline-none focus:ring-1 focus:ring-brand-500"
          >
            <option>Select...</option>
            <option>Order No.</option>
            <option>Supplier</option>
          </select>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-48 px-2 py-1.5 text-xs bg-surface border border-surface-border rounded focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
          <button className="px-3 py-1.5 text-xs font-medium text-white bg-brand-500 hover:bg-brand-600 rounded shadow-sm transition-colors">
            Go
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 overflow-auto p-4">
        <div className="border border-surface-border rounded bg-surface-card overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-hover-light border-b border-surface-border text-xs font-bold text-text-primary uppercase tracking-wider">
              <tr>
                <th className="p-2 border-r border-surface-border">Order No.</th>
                <th className="p-2 border-r border-surface-border">Supplier</th>
                <th className="p-2 border-r border-surface-border">Order Date</th>
                <th className="p-2 flex items-center justify-between">
                  <span>Order Status</span>
                  <RefreshCw size={12} className="text-brand-500 cursor-pointer ml-2" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order.id} className="hover:bg-surface-hover-soft transition-colors">
                    <td className="p-2 text-[11px] text-text-primary font-mono border-r border-surface-border">{order.orderNo}</td>
                    <td className="p-2 text-[11px] text-text-primary border-r border-surface-border">{order.supplier}</td>
                    <td className="p-2 text-[11px] text-text-secondary font-mono border-r border-surface-border">{order.orderDate}</td>
                    <td className="p-2 text-[11px] text-text-primary font-medium">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-text-muted text-xs italic">
                    No orders found
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
