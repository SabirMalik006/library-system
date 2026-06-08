import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { circulationChart } from '../../data/mockData'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-surface-card border border-surface-border rounded-xl px-3 py-2.5 text-xs shadow-card">
        <p className="font-semibold text-text-primary mb-1.5">{label}</p>
        {payload.map(p => (
          <div key={p.dataKey} className="flex items-center gap-2 text-text-secondary">
            <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span className="capitalize">{p.dataKey}:</span>
            <span className="font-semibold text-text-primary">{p.value}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function CirculationAreaChart() {
  const [range, setRange] = useState('6M')

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold text-text-primary">Monthly Trends</h3>
          <p className="text-xs text-text-muted mt-0.5">Issued vs returned vs overdue</p>
        </div>
        <div className="flex gap-1 bg-surface rounded-full p-0.5 border border-surface-border">
          {['1M','3M','6M','YTD'].map(t => (
            <button
              key={t}
              onClick={() => setRange(t)}
              className={`text-[11px] font-medium px-3 py-1 rounded-full transition-all ${
                t === range
                  ? 'bg-surface-card text-text-primary shadow-sm border border-surface-border'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={circulationChart} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="ai" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0f6a3d" stopOpacity={0.12} />
              <stop offset="95%" stopColor="#0f6a3d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="ar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2fa66a" stopOpacity={0.12} />
              <stop offset="95%" stopColor="#2fa66a" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="ao" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#76c79a" stopOpacity={0.12} />
              <stop offset="95%" stopColor="#76c79a" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-surface-border)" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#80848e', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#80848e', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#0f6a3d', strokeWidth: 1, strokeDasharray: '4 4' }} />
          <Area type="monotone" dataKey="issued" stroke="#0f6a3d" strokeWidth={2} fill="url(#ai)" dot={false} />
          <Area type="monotone" dataKey="returned" stroke="#2fa66a" strokeWidth={2} fill="url(#ar)" dot={false} />
          <Area type="monotone" dataKey="overdue" stroke="#76c79a" strokeWidth={2} fill="url(#ao)" dot={false} />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex items-center gap-5 mt-4 pt-3.5 border-t border-surface-border-soft">
        {[
          { label: 'Issued', color: '#0f6a3d' },
          { label: 'Returned', color: '#2fa66a' },
          { label: 'Overdue', color: '#76c79a' },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: l.color }} />
            <span className="text-xs text-text-muted">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
