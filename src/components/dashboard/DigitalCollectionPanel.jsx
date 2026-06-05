import React from 'react'
import { HardDrive, Download, FileDigit } from 'lucide-react'
import { digitalCollection } from '../../data/mockData'

export default function DigitalCollectionPanel() {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/15 flex items-center justify-center">
            <HardDrive size={14} className="text-accent-cyan" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-slate-100 text-sm">Digital Collection (Fresh Arrivals)</h3>
            <p className="text-[10px] text-slate-500 font-mono">Latest digital titles</p>
          </div>
        </div>
        <button className="text-xs font-mono text-accent-cyan hover:underline">See all</button>
      </div>

      <ul className="space-y-2">
        {digitalCollection.map(item => (
          <li
            key={item.id}
            className="flex items-center gap-3 px-3 py-3 rounded-xl bg-surface border border-surface-border
              hover:border-cyan-500/20 transition-all group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
              <FileDigit size={14} className="text-accent-cyan" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-body text-slate-300 truncate">{item.title}</p>
              <p className="text-[10px] font-mono text-slate-600">{item.type} · {item.size}</p>
            </div>
            <button className="p-1.5 rounded-lg text-slate-600 hover:text-accent-cyan hover:bg-cyan-500/10 transition-all opacity-0 group-hover:opacity-100">
              <Download size={13} />
            </button>
          </li>
        ))}
      </ul>

      {/* Upload zone */}
      <div className="mt-4 border border-dashed border-surface-border rounded-xl p-4 text-center
        hover:border-accent-cyan/30 transition-all cursor-pointer group">
        <p className="text-xs font-body text-slate-600 group-hover:text-slate-400 transition-colors">
          Drop files or <span className="text-accent-cyan">browse</span> to upload
        </p>
      </div>
    </div>
  )
}
