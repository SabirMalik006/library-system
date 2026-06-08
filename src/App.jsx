import React, { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Sidebar from './components/layout/Sidebar'
import Topbar from './components/layout/Topbar'
import DashboardPage from './pages/DashboardPage'
import PlaceholderPage from './pages/PlaceholderPage'
import SuppliersPage from './pages/acquisition/SuppliersPage'
import BudgetPage from './pages/acquisition/BudgetPage'
import BudgetAllocationPage from './pages/acquisition/BudgetAllocationPage'
import SuggestionsPage from './pages/acquisition/SuggestionsPage'
import PurchasingListPage from './pages/acquisition/PurchasingListPage'
import OrdersPage from './pages/acquisition/OrdersPage'
import VerifyPricePage from './pages/acquisition/VerifyPricePage'

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [collapsed, setCollapsed] = useState(false)

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardPage />
      case 'acquisition-suppliers':
        return <SuppliersPage />
      case 'acquisition-budget':
        return <BudgetPage />
      case 'acquisition-budget-allocation':
        return <BudgetAllocationPage />
      case 'acquisition-suggestions':
        return <SuggestionsPage />
      case 'acquisition-purchasing-list':
        return <PurchasingListPage />
      case 'acquisition-orders':
        return <OrdersPage />
      case 'acquisition-verify-price':
        return <VerifyPricePage />
      default:
        return <PlaceholderPage section={activeSection} />
    }
  }

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
            {renderContent()}
          </main>

          <footer className="text-center text-xs text-text-muted py-3 border-t border-surface-border bg-surface-card">
            &copy; 2026 LibMax &middot; SYK Library NDU &middot; Terms of Use &middot; Privacy Statement
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}
