import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { circulationChart } from '../../data/mockData'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-surface-card border border-surface-border rounded-xl px-3 py-2.5 text-xs shadow-lg">
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

export default function CirculationChart() {
  const [range, setRange] = useState('6M')

  return (
    <div className="card p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <h3 className="text-sm font-semibold text-text-primary">Circulation Overview</h3>
          <p className="text-xs text-text-muted mt-0.5">Monthly issued, returned &amp; overdue</p>
        </div>
        <div className="flex self-start sm:self-auto gap-1 bg-surface rounded-full p-0.5 border border-surface-border overflow-x-auto">
          {['1M','3M','6M','YTD'].map(t => (
            <button
              key={t}
              onClick={() => setRange(t)}
              className={`text-[11px] font-medium px-2.5 sm:px-3 py-1 rounded-full transition-all whitespace-nowrap ${
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

      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={circulationChart} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-surface-border)" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#80848e', fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#80848e', fontSize: 10 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--color-surface-hover)' }} />
          <Bar dataKey="issued" fill="#0f6a3d" radius={[4,4,0,0]} barSize={window.innerWidth < 640 ? 12 : 20} />
          <Bar dataKey="returned" fill="#2fa66a" radius={[4,4,0,0]} barSize={window.innerWidth < 640 ? 12 : 20} />
          <Bar dataKey="overdue" fill="#76c79a" radius={[4,4,0,0]} barSize={window.innerWidth < 640 ? 12 : 20} />
        </BarChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 pt-3.5 border-t border-surface-border-soft">
        {[
          { label: 'Issued', color: '#0f6a3d' },
          { label: 'Returned', color: '#2fa66a' },
          { label: 'Overdue', color: '#76c79a' },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: l.color }} />
            <span className="text-[11px] sm:text-xs text-text-muted">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
