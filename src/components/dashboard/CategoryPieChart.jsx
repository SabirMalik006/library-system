import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { categoryDistribution } from '../../data/mockData'

const COLORS = ['#0f6a3d', '#2fa66a', '#76c79a', '#8b5cf6', '#f59e0b', '#a3d9b1']

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-surface-card border border-surface-border rounded-xl px-3 py-2 text-xs shadow-card">
        <span className="text-text-primary">{payload[0].name}: </span>
        <span className="font-semibold text-brand-500">{payload[0].value}%</span>
      </div>
    )
  }
  return null
}

export default function CategoryPieChart() {
  return (
    <div className="card p-4 sm:p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-text-primary">Category Distribution</h3>
        <p className="text-xs text-text-muted mt-0.5">Breakdown by subject area</p>
      </div>

      <ResponsiveContainer width="100%" height={210}>
        <PieChart>
          <Pie
            data={categoryDistribution}
            cx="50%" cy="50%"
            innerRadius={50}
            outerRadius={75}
            paddingAngle={3}
            dataKey="value"
            stroke="none"
          >
            {categoryDistribution.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-3 justify-center">
        {categoryDistribution.map((item, i) => (
          <div key={item.name} className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: COLORS[i] }} />
            <span className="text-[10px] sm:text-[11px] text-text-muted">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
