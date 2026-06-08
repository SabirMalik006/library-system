import React from 'react'
import StatCard from '../components/ui/StatCard'
import ActionCard from '../components/ui/ActionCard'
import OverduePanel from '../components/dashboard/OverduePanel'
import FreshArrivals from '../components/dashboard/FreshArrivals'
import PeriodicalsPanel from '../components/dashboard/PeriodicalsPanel'
import DigitalCollectionPanel from '../components/dashboard/DigitalCollectionPanel'
import CirculationChart from '../components/dashboard/CirculationChart'
import CategoryDonut from '../components/dashboard/CategoryDonut'
import CirculationAreaChart from '../components/dashboard/CirculationAreaChart'
import CategoryPieChart from '../components/dashboard/CategoryPieChart'
import ProfileCard from '../components/dashboard/ProfileCard'
import { statsData, recentActivity, libraryNews } from '../data/mockData'
import { Rss, Activity, ExternalLink } from 'lucide-react'

function SectionHeader({ icon: Icon, color, title, subtitle, action }) {
  const colorClasses = {
    green: 'bg-accent-green/10 text-accent-green',
    purple: 'bg-accent-purple/10 text-accent-purple',
  }
  const cc = colorClasses[color] || colorClasses.green
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2.5">
        <div className={`w-8 h-8 rounded-full ${cc} flex items-center justify-center`}>
          <Icon size={14} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
          {subtitle && <p className="text-[11px] text-text-muted">{subtitle}</p>}
        </div>
      </div>
      {action && (
        <button className="text-[11px] font-medium text-brand-500 hover:text-brand-600 transition-colors flex items-center gap-1">
          {action} <ExternalLink size={10} />
        </button>
      )}
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
          <div className="flex items-center gap-2 mt-1 text-xs text-text-muted">
            <span>Fri, 05 Jun 2026</span>
            <span className="w-1 h-1 rounded-full bg-text-muted opacity-40" />
            <span>Good Afternoon</span>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-medium text-accent-green bg-accent-green/10 px-3 py-1.5 rounded-full border border-accent-green/20">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green" />
          All Systems Operational
        </span>
      </div>

      <ProfileCard />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {statsData.slice(0, 4).map(s => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <CirculationChart />
        </div>
        <CategoryDonut />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <CirculationAreaChart />
        </div>
        <CategoryPieChart />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="card p-5">
          <SectionHeader
            icon={Rss}
            color="green"
            title="Library News"
            subtitle="Latest updates"
            action="View all"
          />
          <div className="space-y-3">
            {libraryNews.map(news => (
              <div key={news.id} className="p-3.5 rounded-card bg-surface border border-surface-border hover:border-brand-300/40 transition-colors cursor-pointer">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-xs font-medium text-text-primary leading-snug">{news.title}</p>
                  <span className="shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-500">
                    {news.tag}
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed mt-1">{news.excerpt}</p>
                <p className="text-[10px] text-text-muted mt-2">{news.date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:col-span-2 card p-5">
          <SectionHeader
            icon={Activity}
            color="purple"
            title="Recent Activity"
            subtitle="Library operations log"
          />
          <div className="divide-y divide-surface-border-soft">
            {recentActivity.map(act => (
              <div key={act.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0 hover:bg-surface-hover -mx-2 px-2 rounded-lg transition-colors">
                <span className={`w-2 h-2 rounded-full shrink-0 ${
                  act.type === 'issue' ? 'bg-brand-500' :
                  act.type === 'return' ? 'bg-accent-green' :
                  act.type === 'member' ? 'bg-accent-purple' :
                  act.type === 'overdue' ? 'bg-accent-amber' :
                  'bg-accent-rose'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-text-primary truncate">
                    <span className="font-medium">{act.action}</span>
                    {act.item && <span className="text-text-secondary"> &mdash; {act.item}</span>}
                  </p>
                  <p className="text-[11px] text-text-muted mt-0.5">
                    {act.user && <>{act.user} &middot; </>}
                    {act.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <DigitalCollectionPanel />
        <PeriodicalsPanel />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <OverduePanel />
        <FreshArrivals />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {statsData.slice(4).map(s => (
          <ActionCard key={s.label} {...s} />
        ))}
      </div>
    </div>
  )
}
