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
import StockTakingPage from './pages/stocktaking/StockTakingPage'
import StartProcessPage from './pages/stocktaking/StartProcessPage'

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [collapsed, setCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      case 'stocktaking-stock-taking':
        return <StockTakingPage />
      case 'stocktaking-start-process':
        return <StartProcessPage />
      default:
        return <PlaceholderPage section={activeSection} />
    }
  }

  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden bg-surface relative">
        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <div className={`
          fixed inset-y-0 left-0 z-40 lg:relative lg:z-0 transform transition-transform duration-200 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <Sidebar
            activeSection={activeSection}
            onSelect={(section) => {
              setActiveSection(section)
              setIsMobileMenuOpen(false)
            }}
            collapsed={collapsed}
          />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <Topbar
            onToggleSidebar={() => {
              if (window.innerWidth < 1024) {
                setIsMobileMenuOpen(!isMobileMenuOpen)
              } else {
                setCollapsed(c => !c)
              }
            }}
            collapsed={collapsed}
            isMobileMenuOpen={isMobileMenuOpen}
          />

          <main className="flex-1 overflow-y-auto">
            {renderContent()}
          </main>

          <footer className="text-center text-[10px] sm:text-xs text-text-muted py-3 border-t border-surface-border bg-surface-card px-4">
            &copy; 2026 LibMax &middot; SYK Library NDU &middot; <span className="hidden sm:inline">Terms of Use &middot; Privacy Statement</span>
            <span className="sm:hidden">v1.0.0</span>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}
