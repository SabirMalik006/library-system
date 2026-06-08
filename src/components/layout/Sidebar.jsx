import React, { useState, useCallback } from 'react'
import {
  LayoutDashboard, ShoppingCart, Package, RefreshCw, BookOpen,
  Monitor, ArrowLeftRight, Newspaper, FileText, Link,
  GraduationCap, MessageSquare, Rss, Settings, BarChart3,
  Library, ChevronDown,
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
      { label: 'Dashboard', icon: 'LayoutDashboard', section: 'dashboard' },
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
      { label: 'Feedback',       icon: 'MessageSquare', section: 'feedback' },
      { label: 'Library News',   icon: 'Rss',           section: 'news'     },
    ],
  },
]

export default function Sidebar({ activeSection, onSelect, collapsed }) {
  const [openSections, setOpenSections] = useState(() => {
    const set = new Set()
    navGroups.forEach(g =>
      g.items.forEach(item => {
        if (item.subitems?.some(s => s.section === activeSection)) set.add(item.section)
      })
    )
    return set
  })

  const toggleOpen = useCallback(section => {
    setOpenSections(prev => {
      const next = new Set(prev)
      if (next.has(section)) next.delete(section)
      else next.add(section)
      return next
    })
  }, [])

  const isActive = item =>
    activeSection === item.section ||
    item.subitems?.some(s => activeSection === s.section)

  const isParentOfActive = item =>
    item.subitems?.some(s => activeSection === s.section)

  return (
    <aside
      className={`flex flex-col h-full bg-surface-card border-r border-surface-border
        transition-all duration-200 ease-out z-20 select-none
        ${collapsed ? 'w-[52px]' : 'w-56'}`}
    >
      {/* Brand */}
      <div className={`flex items-center h-12 border-b border-surface-border
        ${collapsed ? 'justify-center' : 'gap-2.5 px-3'}`}>
        <div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center shrink-0">
          <Library size={12} className="text-white" />
        </div>
        {!collapsed && (
          <div className="min-w-0 leading-tight">
            <p className="text-[13px] font-semibold text-text-primary">SYK Library</p>
            <p className="text-[9px] text-text-muted">NDU &middot; Islamabad</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-1.5 scrollbar-hide">
        {navGroups.map((group, gi) => (
          <div key={group.label} className={gi > 0 ? 'mt-5' : ''}>
            {!collapsed && (
              <p className="px-2 mb-1 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                {group.label}
              </p>
            )}
            <ul className="space-y-0.5">
              {group.items.map(item => {
                const Icon = iconMap[item.icon]
                const active = isActive(item)
                const parentActive = isParentOfActive(item)
                const hasSubitems = item.subitems?.length > 0
                const isOpen = openSections.has(item.section)

                return (
                  <li key={item.section}>
                    <div className="relative flex items-center">
                      {active && !collapsed && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-brand-500 rounded-r-full" />
                      )}
                      <button
                        onClick={() => {
                          if (hasSubitems && !collapsed) toggleOpen(item.section)
                          onSelect(item.section)
                        }}
                        title={collapsed ? item.label : undefined}
                        className={`
                          flex items-center w-full rounded-md text-sm transition-colors duration-150
                          ${collapsed
                            ? 'justify-center h-9 w-9 mx-auto'
                            : 'gap-2.5 px-2.5 py-1.5'
                          }
                          ${active
                            ? 'text-white bg-brand-500 font-medium'
                            : parentActive
                              ? 'text-brand-500'
                              : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'
                          }
                        `}
                      >
                        {Icon && <Icon size={16} className="shrink-0" />}
                        {!collapsed && (
                          <span className="flex-1 text-left text-[13px] truncate">{item.label}</span>
                        )}
                      </button>
                      {!collapsed && hasSubitems && (
                        <button
                          onClick={() => toggleOpen(item.section)}
                          className="p-1 mr-0.5 rounded text-text-muted hover:text-text-primary hover:bg-surface-hover transition-colors"
                        >
                          <ChevronDown size={13} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {!collapsed && hasSubitems && (
                      <div className={`overflow-hidden transition-all duration-200 ease-out
                        ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="mt-0.5 space-y-0.5 relative">
                          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-surface-border" />
                          {item.subitems.map(sub => {
                            const subActive = activeSection === sub.section
                            return (
                              <li key={sub.section} className="relative">
                                <button
                                  onClick={() => onSelect(sub.section)}
                                  className={`
                                    w-full text-left text-[12px] py-1.5 pl-8 pr-2.5 rounded-md transition-colors duration-150
                                    ${subActive
                                      ? 'text-brand-600 bg-brand-50 font-medium'
                                      : 'text-text-muted hover:text-text-secondary hover:bg-surface-hover'
                                    }
                                  `}
                                >
                                  <span className={`absolute left-[14px] top-1/2 -translate-y-1/2 w-2 h-px rounded-full
                                    ${subActive ? 'bg-brand-400' : 'bg-surface-border'}`} />
                                  {sub.label}
                                </button>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-surface-border py-1.5 px-1.5 space-y-0.5">
        {[
          { icon: BarChart3, label: 'Reports' },
          { icon: Settings, label: 'Settings' },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            title={collapsed ? label : undefined}
            className={`flex items-center rounded-md text-sm text-text-secondary
              hover:text-text-primary hover:bg-surface-hover transition-colors duration-150
              ${collapsed ? 'justify-center h-9 w-9 mx-auto' : 'gap-2.5 px-2.5 py-1.5 w-full'}`}
          >
            <Icon size={16} className="shrink-0" />
            {!collapsed && <span className="text-[13px]">{label}</span>}
          </button>
        ))}
      </div>
    </aside>
  )
}
