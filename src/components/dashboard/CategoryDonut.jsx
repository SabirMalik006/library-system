import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { categoryDistribution } from '../../data/mockData'

const COLORS = ['#0f6a3d', '#2fa66a', '#76c79a', '#8b5cf6', '#f59e0b', '#a3d9b1']

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-surface-card border border-surface-border rounded-xl px-3 py-2 text-xs shadow-lg">
        <span className="text-text-primary">{payload[0].name}: </span>
        <span className="font-semibold text-brand-500">{payload[0].value}%</span>
      </div>
    )
  }
  return null
}

export default function CategoryDonut() {
  return (
    <div className="card p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-text-primary">Collection by Category</h3>
        <p className="text-xs text-text-muted mt-0.5">Distribution across 6 domains</p>
      </div>

      <div className="relative">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={categoryDistribution}
              cx="50%" cy="60%"
              startAngle={180}
              endAngle={0}
              innerRadius={65}
              outerRadius={95}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
              cornerRadius={6}
            >
              {categoryDistribution.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-4">
          <p className="text-2xl font-bold text-text-primary tabular-nums">24,680</p>
          <p className="text-[10px] text-text-muted">total books</p>
        </div>
      </div>

      <ul className="space-y-2.5 mt-4 pt-4 border-t border-surface-border-soft">
        {categoryDistribution.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: COLORS[i] }} />
            <span className="text-xs text-text-secondary flex-1">{item.name}</span>
            <span className="text-[11px] text-text-muted font-mono tabular-nums">{item.value}%</span>
            <div className="w-16 h-1.5 rounded-full bg-surface-border-half overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${item.value}%`, background: COLORS[i] }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
