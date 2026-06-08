import React, { useState } from 'react'
import { Search, Bell, Plus, LogOut, Menu, X } from 'lucide-react'
import { user } from '../../data/mockData'
import { useTheme } from '../../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export default function Topbar({ onToggleSidebar, collapsed }) {
  const [searchVal, setSearchVal] = useState('')
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="h-14 flex items-center gap-4 px-5 border-b border-surface-border bg-surface-card">
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-full text-text-muted hover:bg-surface-hover hover:text-text-primary transition-colors shrink-0"
        title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <Menu size={16} /> : <X size={16} />}
      </button>

      <div className="relative flex-1 max-w-md">
        <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
        <input
          value={searchVal}
          onChange={e => setSearchVal(e.target.value)}
          placeholder="Search books, members..."
          className="w-full bg-surface border border-surface-border rounded-full pl-9 pr-4 py-2 text-xs text-text-primary
            placeholder-text-muted outline-none transition-colors duration-150
            focus:border-brand-300 focus:ring-2 focus:ring-brand-500/10"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-text-muted hover:bg-surface-hover hover:text-text-primary transition-colors"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        <button className="relative p-2 rounded-full text-text-muted hover:bg-surface-hover hover:text-text-primary transition-colors">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent-rose ring-2 ring-surface-card" />
        </button>

        <button className="btn-primary text-xs h-8 px-4">
          <Plus size={14} />
          <span>Add Book</span>
        </button>

        <div className="flex items-center gap-2.5 pl-3 ml-1 border-l border-surface-border">
          <div className="w-7 h-7 rounded-full bg-brand-500 flex items-center justify-center text-white text-[10px] font-semibold">
            {user.name.charAt(0)}
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-xs font-medium text-text-primary">{user.name}</p>
            <p className="text-[10px] text-text-muted">{user.role}</p>
          </div>
          <button className="p-1.5 rounded-full text-text-muted hover:text-accent-rose hover:bg-surface-hover transition-colors">
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </header>
  )
}
