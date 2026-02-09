'use client';

import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  Search, 
  Shield, 
  Mail, 
  MoreVertical, 
  Edit, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  BadgeCheck,
  User
} from 'lucide-react';
import { clsx } from 'clsx';

const users = [
  { id: 1, name: 'Alex Johnson', email: 'alex.j@example.com', role: 'Admin', status: 'Active', joined: 'Oct 24, 2023', avatar: 'AJ' },
  { id: 2, name: 'Sarah Wilson', email: 'sarah.w@example.com', role: 'Editor', status: 'Active', joined: 'Oct 20, 2023', avatar: 'SW' },
  { id: 3, name: 'Michael Chen', email: 'm.chen@example.com', role: 'User', status: 'Inactive', joined: 'Oct 12, 2023', avatar: 'MC' },
  { id: 4, name: 'Emily Davis', email: 'emily.d@example.com', role: 'User', status: 'Active', joined: 'Oct 05, 2023', avatar: 'ED' },
  { id: 5, name: 'Robert Miller', email: 'r.miller@example.com', role: 'Editor', status: 'Suspended', joined: 'Sep 28, 2023', avatar: 'RM' },
  { id: 6, name: 'Jessica Taylor', email: 'j.taylor@example.com', role: 'User', status: 'Active', joined: 'Sep 15, 2023', avatar: 'JT' },
];

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pb-12">
      <div className="">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Users className="w-8 h-8 text-[#A24CDC]" />
              User Management
            </h1>
            <p className="text-gray-500 mt-1">Manage platform users, roles, and permissions.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#A24CDC] text-white rounded-xl font-semibold hover:bg-[#8b3ec2] transition-all shadow-lg shadow-purple-200">
            <UserPlus className="w-5 h-5" />
            Add User
          </button>
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search users by name or email..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#A24CDC] transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#A24CDC] text-sm font-medium">
              <option>All Roles</option>
              <option>Admin</option>
              <option>Editor</option>
              <option>User</option>
            </select>
            <select className="px-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#A24CDC] text-sm font-medium">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Suspended</option>
            </select>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">User</th>
                  <th className="px-6 py-4 font-semibold">Role</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Joined Date</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#A24CDC]/10 flex items-center justify-center text-[#A24CDC] font-bold text-sm">
                          {user.avatar}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{user.name}</span>
                          <span className="text-xs text-gray-500">{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {user.role === 'Admin' ? (
                          <Shield className="w-4 h-4 text-purple-600" />
                        ) : user.role === 'Editor' ? (
                          <BadgeCheck className="w-4 h-4 text-blue-600" />
                        ) : (
                          <User className="w-4 h-4 text-gray-400" />
                        )}
                        <span className="text-sm font-medium text-gray-700">{user.role}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={clsx(
                        'text-xs font-bold px-2.5 py-1 rounded-full',
                        user.status === 'Active' ? 'bg-green-50 text-green-700' : 
                        user.status === 'Inactive' ? 'bg-gray-100 text-gray-600' : 'bg-red-50 text-red-700'
                      )}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {user.joined}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-gray-400 hover:text-[#A24CDC] hover:bg-purple-50 rounded-lg transition-all" title="Send Email">
                          <Mail className="w-4.5 h-4.5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit">
                          <Edit className="w-4.5 h-4.5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
                          <Trash2 className="w-4.5 h-4.5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
                          <MoreVertical className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
            <p className="text-sm text-gray-500 font-medium">
              Showing <span className="text-gray-900">1 to 6</span> of <span className="text-gray-900">156</span> users
            </p>
            <div className="flex gap-2">
              <button className="p-2 border border-gray-200 rounded-lg bg-white text-gray-400 hover:bg-gray-50 disabled:opacity-50 transition-colors" disabled>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 border border-gray-200 rounded-lg bg-white text-gray-600 hover:bg-gray-50 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
