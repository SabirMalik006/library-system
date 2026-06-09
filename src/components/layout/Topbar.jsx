import React, { useState } from 'react'
import { Search, Bell, Plus, LogOut, Menu, X } from 'lucide-react'
import { user } from '../../data/mockData'
import { useTheme } from '../../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export default function Topbar({ onToggleSidebar, collapsed, isMobileMenuOpen }) {
  const [searchVal, setSearchVal] = useState('')
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="h-14 flex items-center gap-3 sm:gap-4 px-4 sm:px-5 border-b border-surface-border bg-surface-card">
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-full text-text-muted hover:bg-surface-hover hover:text-text-primary transition-colors shrink-0 lg:hidden"
        title="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-full text-text-muted hover:bg-surface-hover hover:text-text-primary transition-colors shrink-0 hidden lg:block"
        title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? <Menu size={16} /> : <X size={16} />}
      </button>

      <div className="relative flex-1 max-w-md hidden md:block">
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

      <div className="md:hidden">
        <button className="p-2 rounded-full text-text-muted hover:bg-surface-hover transition-colors">
          <Search size={18} />
        </button>
      </div>

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
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

        <button className="btn-primary text-xs h-8 px-2 sm:px-4">
          <Plus size={14} />
          <span className="hidden sm:inline">Add Book</span>
        </button>

        <div className="flex items-center gap-2 pl-2 sm:pl-3 ml-1 border-l border-surface-border">
          <div className="w-7 h-7 rounded-full bg-brand-500 flex items-center justify-center text-white text-[10px] font-semibold shrink-0">
            {user.name.charAt(0)}
          </div>
          <div className="hidden lg:block leading-tight">
            <p className="text-xs font-medium text-text-primary">{user.name}</p>
            <p className="text-[10px] text-text-muted">{user.role}</p>
          </div>
          <button className="p-1.5 rounded-full text-text-muted hover:text-accent-rose hover:bg-surface-hover transition-colors ml-1 sm:ml-0">
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </header>
  )
}
