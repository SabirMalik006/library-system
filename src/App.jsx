import React, { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import Topbar from './components/layout/Topbar'
import DashboardPage from './pages/DashboardPage'
import PlaceholderPage from './pages/PlaceholderPage'

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-brand-600 top-0 left-1/4" style={{ animationDuration: '14s' }} />
      <div className="orb w-80 h-80 bg-accent-cyan bottom-1/4 right-1/3" style={{ animationDuration: '10s', animationDirection: 'alternate-reverse' }} />
      <div className="orb w-64 h-64 bg-accent-violet top-1/2 right-1/4" style={{ animationDuration: '17s' }} />

      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onSelect={setActiveSection}
        collapsed={collapsed}
      />

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Topbar
          onToggleSidebar={() => setCollapsed(c => !c)}
          collapsed={collapsed}
        />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-grid-pattern">
          {activeSection === 'dashboard'
            ? <DashboardPage />
            : <PlaceholderPage section={activeSection} />
          }
        </main>

        {/* Footer */}
        <footer className="text-center text-[10px] font-mono text-slate-700 py-2 border-t border-surface-border">
          © 2026 LibMax · SYK Library NDU · Terms of Use · Privacy Statement
        </footer>
      </div>
    </div>
  )
}
