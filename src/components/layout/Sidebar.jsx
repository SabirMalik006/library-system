import React, { useState } from 'react'
import {
  LayoutDashboard, ShoppingCart, Package, RefreshCw, BookOpen,
  Monitor, ArrowLeftRight, Newspaper, FileText, Link,
  GraduationCap, MessageSquare, Rss, Settings, BarChart2,
  Library, ChevronRight,
} from 'lucide-react'

const iconMap = {
  LayoutDashboard, ShoppingCart, Package, RefreshCw, BookOpen,
  Monitor, ArrowLeftRight, Newspaper, FileText, Link,
  GraduationCap, MessageSquare, Rss,
}

const navGroups = [
  {
    label: 'Main',
    items: [
      { label: 'Dashboard',         icon: 'LayoutDashboard', section: 'dashboard'   },
    ],
  },
  {
    label: 'Library Operations',
    items: [
      {
        label: 'Acquisition', icon: 'ShoppingCart', section: 'acquisition',
        subitems: [
          { label: 'Suppliers', section: 'acquisition-suppliers' },
          { label: 'Budget', section: 'acquisition-budget' },
          { label: 'Budget Allocation', section: 'acquisition-budget-allocation' },
          { label: 'Suggestions', section: 'acquisition-suggestions' },
          { label: 'Purchasing List', section: 'acquisition-purchasing-list' },
          { label: 'Orders', section: 'acquisition-orders' },
          { label: 'Verify Price', section: 'acquisition-verify-price' },
        ],
      },
      {
        label: 'Stock Taking', icon: 'Package', section: 'stocktaking',
        subitems: [
          { label: 'Stock Taking', section: 'stocktaking-stock-taking' },
          { label: 'Start Process', section: 'stocktaking-start-process' },
          { label: 'Missing Books', section: 'stocktaking-missing-books' },
          { label: 'Complete Process', section: 'stocktaking-complete-process' },
          { label: 'Summary', section: 'stocktaking-summary' },
        ],
      },
      {
        label: 'Circulation', icon: 'RefreshCw', section: 'circulation',
        subitems: [
          { label: 'Members', section: 'circulation-members' },
          { label: 'Member History', section: 'circulation-member-history' },
          { label: 'Issue', section: 'circulation-issue' },
          { label: 'Receive', section: 'circulation-receive' },
          { label: 'Barcode Receive', section: 'circulation-barcode-receive' },
          { label: 'Fine', section: 'circulation-fine' },
          { label: 'Membership Request', section: 'circulation-membership-request' },
          { label: 'My Request', section: 'circulation-my-request' },
          { label: 'Secondary Members', section: 'circulation-secondary-members' },
          { label: 'Book Status', section: 'circulation-book-status' },
          { label: 'Book History', section: 'circulation-book-history' },
          { label: 'Overdue', section: 'circulation-overdue' },
          { label: 'Card Printing', section: 'circulation-card-printing' },
        ],
      },
      { label: 'Cataloguing', icon: 'BookOpen', section: 'cataloguing' },
      {
        label: 'Migration', icon: 'ArrowLeftRight', section: 'migration',
        subitems: [
          { label: 'Import Supplier', section: 'migration-import-supplier' },
          { label: 'Import Publisher', section: 'migration-import-publisher' },
          { label: 'Import Members', section: 'migration-import-members' },
          { label: 'Import Books', section: 'migration-import-books' },
          { label: 'AcadMax Member Sync', section: 'migration-acadmax-member-sync' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    items: [
      {
        label: 'Digital Resources', icon: 'Monitor', section: 'digital',
        subitems: [
          { label: 'Fresh Collection', section: 'digital-fresh-collection' },
          { label: 'Collection', section: 'digital-collection' },
          { label: 'E-Books', section: 'digital-e-books' },
        ],
      },
      {
        label: 'Periodicals', icon: 'Newspaper', section: 'periodicals',
        subitems: [
          { label: 'Fresh Arrivals', section: 'periodicals-fresh-arrivals' },
          { label: 'Periodicals', section: 'periodicals-list' },
          { label: 'Periodical Attendance', section: 'periodicals-attendance' },
          { label: 'Articles', section: 'periodicals-articles' },
          { label: 'Subjects', section: 'periodicals-subjects' },
          { label: 'Periodicals Subjects', section: 'periodicals-periodicals-subjects' },
          { label: 'Article Subjects', section: 'periodicals-article-subjects' },
        ],
      },
      {
        label: 'Newspaper', icon: 'FileText', section: 'newspaper',
        subitems: [
          { label: 'Newspaper', section: 'newspaper-list' },
          { label: 'Attendance', section: 'newspaper-attendance' },
          { label: 'Newspaper Articles', section: 'newspaper-articles' },
        ],
      },
      {
        label: 'E-Resources Links', icon: 'Link', section: 'eresources',
        subitems: [
          { label: 'E-Links', section: 'eresources-links' },
        ],
      },
      {
        label: 'Research Papers', icon: 'GraduationCap', section: 'research',
        subitems: [
          { label: 'Research Papers', section: 'research-papers' },
          { label: 'Theses Papers', section: 'research-theses-papers' },
          { label: 'Theses List', section: 'research-theses-list' },
          { label: 'Stickers Print', section: 'research-stickers-print' },
        ],
      },
    ],
  },
  {
    label: 'Admin',
    items: [
      { label: 'Feedback',          icon: 'MessageSquare',   section: 'feedback'    },
      { label: 'Library News',      icon: 'Rss',             section: 'news'        },
    ],
  },
]

export default function Sidebar({ activeSection, onSelect, collapsed }) {
  const [openSections, setOpenSections] = useState([])

  const toggleOpenSection = section => {
    setOpenSections(prev =>
      prev.includes(section)
        ? prev.filter(item => item !== section)
        : [...prev, section]
    )
  }

  return (
    <aside
      className={`
        flex flex-col h-full bg-surface-card border-r border-surface-border
        transition-all duration-300
        ${collapsed ? 'w-16' : 'w-60'}
      `}
    >
      {/* Logo */}
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-surface-border ${collapsed ? 'justify-center' : ''}`}>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-brand-700 flex items-center justify-center flex-shrink-0">
          <Library size={16} className="text-surface" />
        </div>
        {!collapsed && (
          <div>
            <p className="font-display font-700 text-sm text-slate-100 leading-tight">SYK Library</p>
            <p className="text-[10px] text-slate-500 font-mono">NDU · E-9 Islamabad</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-5">
        {navGroups.map(group => (
          <div key={group.label}>
            {!collapsed && (
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-600 px-3 mb-1.5">
                {group.label}
              </p>
            )}
            <ul className="space-y-0.5">
              {group.items.map(item => {
                const Icon = iconMap[item.icon]
                const active = activeSection === item.section
                const hasSubitems = item.subitems && item.subitems.length > 0
                const isOpen = openSections.includes(item.section)
                return (
                  <li key={item.section}>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelect(item.section)}
                      title={collapsed ? item.label : undefined}
                      className={`
                        w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                        transition-all duration-200 group
                        ${active
                          ? 'bg-brand-900/60 text-accent-cyan border border-brand-700/40'
                          : 'text-slate-400 hover:bg-surface-hover hover:text-slate-200'}
                        ${collapsed ? 'justify-center' : ''}
                      `}
                    >
                      {Icon && <Icon size={16} className="flex-shrink-0" />}
                      {!collapsed && <span className="flex-1 text-left font-body">{item.label}</span>}
                      {!collapsed && active && <ChevronRight size={12} className="text-accent-cyan" />}
                    </button>
                    {!collapsed && hasSubitems && (
                      <button
                        type="button"
                        onClick={e => {
                          e.stopPropagation()
                          toggleOpenSection(item.section)
                        }}
                        className={`p-2 rounded-lg text-slate-400 hover:text-accent-cyan hover:bg-surface-hover transition-all duration-200 ${active ? 'text-accent-cyan' : ''}`}
                      >
                        <ChevronRight size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                      </button>
                    )}
                    </div>
                    {!collapsed && hasSubitems && (
                      <ul className={`mt-1 space-y-1 pl-9 overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                        {item.subitems.map(subitem => {
                          const subActive = activeSection === subitem.section
                          return (
                            <li key={subitem.section}>
                              <button
                                onClick={() => onSelect(subitem.section)}
                                className={
                                  `w-full text-left text-[11px] font-body rounded-xl px-3 py-2 transition-all duration-200
                                  ${subActive
                                    ? 'bg-brand-900/50 text-accent-cyan border border-brand-700/40'
                                    : 'text-slate-500 hover:bg-surface-hover hover:text-slate-200'}`
                                }
                              >
                                {subitem.label}
                              </button>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom links */}
      <div className={`border-t border-surface-border px-2 py-3 space-y-0.5`}>
        {[
          { icon: BarChart2, label: 'Reports' },
          { icon: Settings, label: 'Settings' },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            title={collapsed ? label : undefined}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-400
              hover:bg-surface-hover hover:text-slate-200 transition-all duration-200 font-body
              ${collapsed ? 'justify-center' : ''}`}
          >
            <Icon size={16} className="flex-shrink-0" />
            {!collapsed && <span>{label}</span>}
          </button>
        ))}
      </div>
    </aside>
  )
}
