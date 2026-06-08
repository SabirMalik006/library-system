import React, { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Sidebar from './components/layout/Sidebar'
import Topbar from './components/layout/Topbar'
import DashboardPage from './pages/DashboardPage'
import PlaceholderPage from './pages/PlaceholderPage'

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [collapsed, setCollapsed] = useState(false)

  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden bg-surface">
        <Sidebar
          activeSection={activeSection}
          onSelect={setActiveSection}
          collapsed={collapsed}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <Topbar
            onToggleSidebar={() => setCollapsed(c => !c)}
            collapsed={collapsed}
          />

          <main className="flex-1 overflow-y-auto">
            {activeSection === 'dashboard'
              ? <DashboardPage />
              : <PlaceholderPage section={activeSection} />
            }
          </main>

          <footer className="text-center text-xs text-text-muted py-3 border-t border-surface-border bg-surface-card">
            &copy; 2026 LibMax &middot; SYK Library NDU &middot; Terms of Use &middot; Privacy Statement
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}
