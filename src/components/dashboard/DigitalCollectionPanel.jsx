import React from 'react'
import { HardDrive, Download, FileDigit, Upload } from 'lucide-react'
import { digitalCollection } from '../../data/mockData'

export default function DigitalCollectionPanel() {
  return (
    <div className="card-hover p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center">
            <HardDrive size={14} className="text-brand-500" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text-primary">Digital Collection</h3>
            <p className="text-[10px] text-text-muted">Latest digital titles</p>
          </div>
        </div>
        <button className="text-[11px] font-medium text-brand-500 hover:text-brand-600 transition-colors">See all</button>
      </div>

      <ul className="space-y-1.5">
        {digitalCollection.map(item => (
          <li
            key={item.id}
            className="flex items-center gap-3 px-2.5 py-2 rounded-card bg-surface border border-surface-border
              hover:border-brand-300/40 transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0">
              <FileDigit size={14} className="text-brand-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-text-primary truncate">{item.title}</p>
              <p className="text-[10px] text-text-muted mt-0.5">{item.type} &middot; {item.size}</p>
            </div>
            <button className="p-1.5 rounded-full text-text-muted hover:text-brand-500 hover:bg-brand-500/10
              transition-all opacity-0 group-hover:opacity-100">
              <Download size={12} />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-3.5 border-2 border-dashed border-surface-border rounded-card p-5 text-center
        hover:border-brand-300/40 transition-all cursor-pointer">
        <Upload size={18} className="mx-auto text-text-muted mb-1.5" />
        <p className="text-xs text-text-muted">
          Drop files or <span className="text-brand-500 font-medium">browse</span> to upload
        </p>
      </div>
    </div>
  )
}
