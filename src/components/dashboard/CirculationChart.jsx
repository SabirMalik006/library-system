import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'
import { circulationChart } from '../../data/mockData'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-card border border-surface-border rounded-xl p-3 shadow-xl text-xs font-mono">
        <p className="text-slate-300 mb-2 font-display font-semibold">{label}</p>
        {payload.map(p => (
          <div key={p.dataKey} className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span className="text-slate-400 capitalize">{p.dataKey}:</span>
            <span className="text-slate-200">{p.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function CirculationChart() {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display font-semibold text-slate-100 text-base">Circulation Overview</h3>
          <p className="text-xs text-slate-500 font-body mt-0.5">Books issued, returned & overdue — 2026</p>
        </div>
        <div className="flex gap-2">
          {['1M','3M','6M','YTD'].map(t => (
            <button key={t} className={`text-[11px] font-mono px-2.5 py-1 rounded-lg transition-all
              ${t === '6M' ? 'bg-brand-800/60 text-accent-cyan border border-brand-700/40' : 'text-slate-500 hover:text-slate-300'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={230}>
        <AreaChart data={circulationChart} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="gIssued" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#22d3ee" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}    />
            </linearGradient>
            <linearGradient id="gReturned" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#a3e635" stopOpacity={0.2}  />
              <stop offset="95%" stopColor="#a3e635" stopOpacity={0}    />
            </linearGradient>
            <linearGradient id="gOverdue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#fbbf24" stopOpacity={0.2}  />
              <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}    />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e2536" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'JetBrains Mono' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#64748b', fontSize: 11, fontFamily: 'JetBrains Mono' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="issued"   stroke="#22d3ee" strokeWidth={2} fill="url(#gIssued)"   dot={false} />
          <Area type="monotone" dataKey="returned" stroke="#a3e635" strokeWidth={2} fill="url(#gReturned)" dot={false} />
          <Area type="monotone" dataKey="overdue"  stroke="#fbbf24" strokeWidth={2} fill="url(#gOverdue)"  dot={false} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex gap-5 mt-3">
        {[
          { label: 'Issued',   color: '#22d3ee' },
          { label: 'Returned', color: '#a3e635' },
          { label: 'Overdue',  color: '#fbbf24' },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
            <span className="text-[11px] font-mono text-slate-500">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
