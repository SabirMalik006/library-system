import React, { useState } from 'react'
import { Search, Bell, Menu, X, LogOut, Plus } from 'lucide-react'
import { user } from '../../data/mockData'

export default function Topbar({ onToggleSidebar, collapsed }) {
  const [searchVal, setSearchVal] = useState('')

  return (
    <header className="h-16 flex items-center gap-4 px-6 border-b border-surface-border bg-surface-card/80 backdrop-blur-md sticky top-0 z-30">
      {/* Collapse toggle */}
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-lg text-slate-400 hover:bg-surface-hover hover:text-slate-200 transition-all"
      >
        {collapsed ? <Menu size={18} /> : <X size={18} />}
      </button>

      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
        <input
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
          placeholder="Search books, members, resources…"
          className="w-full bg-surface border border-surface-border rounded-xl pl-9 pr-4 py-2 text-sm font-body text-slate-300
            placeholder-slate-600 focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all"
        />
      </div>

      <div className="ml-auto flex items-center gap-3">
        {/* Quick add */}
        <button className="btn-primary flex items-center gap-2 hidden sm:flex">
          <Plus size={15} />
          Add Book
        </button>

        {/* Notifications */}
        <div className="relative">
          <button className="p-2 rounded-lg text-slate-400 hover:bg-surface-hover hover:text-slate-200 transition-all">
            <Bell size={18} />
          </button>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent-rose ring-2 ring-surface-card" />
        </div>

        {/* User */}
        <div className="flex items-center gap-2.5 pl-3 border-l border-surface-border">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-600 to-accent-cyan flex items-center justify-center text-surface font-display font-bold text-sm">
            {user.name.charAt(0)}
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-display font-semibold text-slate-200 leading-tight">{user.name.split(' ').slice(1).join(' ')}</p>
            <p className="text-[10px] text-slate-500 font-mono">{user.role}</p>
          </div>
          <button className="p-1.5 rounded-lg text-slate-500 hover:text-accent-rose hover:bg-surface-hover transition-all ml-1">
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </header>
  )
}
