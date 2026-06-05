import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { categoryDistribution } from '../../data/mockData'

const COLORS = ['#22d3ee', '#a3e635', '#a78bfa', '#fbbf24', '#fb7185', '#38bdf8']

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-card border border-surface-border rounded-xl px-3 py-2 text-xs font-mono shadow-xl">
        <span className="text-slate-200">{payload[0].name}: </span>
        <span className="text-accent-cyan font-semibold">{payload[0].value}%</span>
      </div>
    )
  }
  return null
}

export default function CategoryDonut() {
  return (
    <div className="card p-6 h-full">
      <div className="mb-5">
        <h3 className="font-display font-semibold text-slate-100 text-base">Collection by Category</h3>
        <p className="text-xs text-slate-500 font-body mt-0.5">Distribution across 6 domains</p>
      </div>

      <div className="relative">
        <ResponsiveContainer width="100%" height={180}>
          <PieChart>
            <Pie
              data={categoryDistribution}
              cx="50%" cy="50%"
              innerRadius={55} outerRadius={80}
              paddingAngle={3}
              dataKey="value"
            >
              {categoryDistribution.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="font-display font-bold text-xl text-slate-100">24,680</p>
          <p className="text-[10px] font-mono text-slate-500">total books</p>
        </div>
      </div>

      <ul className="space-y-2 mt-4">
        {categoryDistribution.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: COLORS[i] }} />
            <span className="text-xs font-body text-slate-400 flex-1">{item.name}</span>
            <span className="text-xs font-mono text-slate-500">{item.value}%</span>
            <div className="w-16 h-1 rounded-full bg-surface-border overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${item.value}%`, background: COLORS[i] }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
