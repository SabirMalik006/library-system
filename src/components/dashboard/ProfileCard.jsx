import React from 'react'
import { Mail, MapPin, User, Edit3 } from 'lucide-react'
import { user } from '../../data/mockData'

export default function ProfileCard() {
  return (
    <div className="card p-5 flex items-center gap-4">
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} className="w-14 h-14 rounded-2xl object-cover ring-2 ring-brand-700/40" />
        ) : (
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-accent-cyan flex items-center justify-center text-surface font-display font-bold text-xl ring-2 ring-brand-700/40">
            {user.name.charAt(0)}
          </div>
        )}
        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent-lime ring-2 ring-surface-card" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <p className="font-display font-semibold text-slate-100 text-sm truncate">{user.name}</p>
          <div className="flex flex-col text-[10px] text-slate-400">
            <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-accent-lime/10 text-accent-lime border border-lime-500/20">{user.role}</span>
            <span className="mt-1 text-[10px] font-mono">{user.id}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-0.5">
          <span className="flex items-center gap-1 text-[10px] font-mono text-slate-500">
            <User size={10} /> {user.id}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-mono text-slate-500 truncate">
            <Mail size={10} /> {user.email}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-mono text-slate-500">
            <MapPin size={10} /> {user.location}
          </span>
        </div>
      </div>

      <button className="btn-ghost flex items-center gap-1.5 flex-shrink-0">
        <Edit3 size={13} />
        <span className="hidden sm:inline">Edit</span>
      </button>
    </div>
  )
}
