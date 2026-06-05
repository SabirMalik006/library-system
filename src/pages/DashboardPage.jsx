import React from 'react'
import StatCard from '../components/ui/StatCard'
import OverduePanel from '../components/dashboard/OverduePanel'
import FreshArrivals from '../components/dashboard/FreshArrivals'
import PeriodicalsPanel from '../components/dashboard/PeriodicalsPanel'
import DigitalCollectionPanel from '../components/dashboard/DigitalCollectionPanel'
import ProfileCard from '../components/dashboard/ProfileCard'
import { statsData } from '../data/mockData'
import { Rss } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6 animate-fade-in max-w-[1600px] mx-auto">
      {/* Page title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-2xl text-slate-100">Dashboard</h1>
          <p className="text-xs font-mono text-slate-500 mt-0.5">
            Friday, 05 June 2026 · Good Afternoon
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse-slow" />
          <span className="text-xs font-mono text-slate-500">System Online</span>
        </div>
      </div>

      {/* Profile strip */}
      <ProfileCard />

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((s, i) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Library news */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-slate-700/20 flex items-center justify-center">
              <Rss size={14} className="text-accent-cyan" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-slate-100 text-sm">Library News</h3>
              <p className="text-[10px] text-slate-500 font-mono">Latest announcements and updates</p>
            </div>
          </div>
          <button className="text-xs font-mono text-accent-cyan hover:underline">See all</button>
        </div>

        <div className="space-y-3 text-xs text-slate-300">
          <div className="rounded-xl bg-surface p-4 border border-surface-border">
            <p className="font-semibold text-slate-100">My Profile</p>
            <p>Mr. Muhammad Umar</p>
            <p className="text-slate-500">Good Afternoon</p>
          </div>
          <div className="rounded-xl bg-surface p-4 border border-surface-border">
            <p className="font-semibold text-slate-100">Profile Info</p>
            <p>ID: adminumarndulib@gmail.com</p>
            <p>SYK Library, NDU, E-9, Islamabad</p>
            <button className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-accent-cyan hover:underline">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Data panels */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <DigitalCollectionPanel />
        <PeriodicalsPanel />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <OverduePanel />
        <FreshArrivals />
      </div>
    </div>
  )
}
