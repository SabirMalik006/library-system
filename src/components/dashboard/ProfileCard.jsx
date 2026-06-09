import React from 'react'
import { Mail, MapPin, User, Edit3, Calendar, Shield } from 'lucide-react'
import { user } from '../../data/mockData'

export default function ProfileCard() {
  return (
    <div className="card-hover p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="relative shrink-0">
          <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white text-lg font-bold">
            {user.name.charAt(0)}
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-accent-green border-2 border-surface-card" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <h2 className="text-sm font-semibold text-text-primary">{user.name}</h2>
            <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">
              <Shield size={10} />
              {user.role}
            </span>
          </div>
          <p className="sm:hidden text-xs text-text-muted">{user.id}</p>
        </div>
      </div>

      <div className="flex-1 min-w-0 w-full sm:w-auto">
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-text-muted">
          <span className="hidden sm:flex items-center gap-1"><User size={11} /> {user.id}</span>
          <span className="flex items-center gap-1"><Mail size={11} /> {user.email}</span>
          <span className="flex items-center gap-1"><MapPin size={11} /> {user.location}</span>
          <span className="flex items-center gap-1"><Calendar size={11} /> Joined {user.joinDate}</span>
        </div>
      </div>

      <button className="btn-ghost text-xs h-8 px-4 w-full sm:w-auto mt-2 sm:mt-0">
        <Edit3 size={11} />
        Edit Profile
      </button>
    </div>
  )
}
