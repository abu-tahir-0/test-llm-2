'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  Users, 
  TrendingUp, 
  Plus, 
  MoreVertical,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';
import { clsx } from 'clsx';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Posts', value: '24', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Open Roles', value: '12', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Applications', value: '148', icon: Users, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Avg. Engagement', value: '8.4%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  const recentContent = [
    { id: 1, title: 'The Future of AI in Robotics', type: 'Blog', status: 'Published', date: 'Oct 24, 2023' },
    { id: 2, title: 'Senior Robotics Engineer', type: 'Career', status: 'Open', date: 'Oct 22, 2023' },
    { id: 3, title: 'Sustainable Manufacturing Trends', type: 'Blog', status: 'Draft', date: 'Oct 20, 2023' },
    { id: 4, title: 'Product Designer', type: 'Career', status: 'Closed', date: 'Oct 15, 2023' },
    { id: 5, title: 'Scaling Production with AM-X100', type: 'Blog', status: 'Published', date: 'Oct 12, 2023' },
  ];

  return (
    <div className="pb-12">
      <div className="">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <LayoutDashboard className="w-8 h-8 text-[#A24CDC]" />
              Admin Dashboard
            </h1>
            <p className="text-gray-500 mt-1">Manage your platform content and performance.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
              Export Data
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#A24CDC] text-white rounded-lg text-sm font-medium hover:bg-[#8b3ec2] transition-colors shadow-sm">
              <Plus className="w-4 h-4" />
              New Content
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={clsx('p-3 rounded-xl', stat.bg)}>
                  <stat.icon className={clsx('w-6 h-6', stat.color)} />
                </div>
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Management Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Recent Content</h2>
            <div className="flex gap-2">
              <select className="text-sm border-gray-200 rounded-lg focus:ring-[#A24CDC] focus:border-[#A24CDC]">
                <option>All Types</option>
                <option>Blog</option>
                <option>Careers</option>
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Title</th>
                  <th className="px-6 py-4 font-semibold">Type</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentContent.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-900">{item.title}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={clsx(
                        'text-xs px-2.5 py-1 rounded-full font-medium',
                        item.type === 'Blog' ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'
                      )}>
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={clsx(
                        'flex items-center gap-1.5 text-xs font-medium',
                        item.status === 'Published' || item.status === 'Open' ? 'text-green-600' : 
                        item.status === 'Draft' ? 'text-gray-500' : 'text-red-500'
                      )}>
                        <span className={clsx(
                          'w-1.5 h-1.5 rounded-full',
                          item.status === 'Published' || item.status === 'Open' ? 'bg-green-600' : 
                          item.status === 'Draft' ? 'bg-gray-500' : 'bg-red-500'
                        )} />
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {item.date}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-1.5 text-gray-400 hover:text-[#A24CDC] transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <p className="text-sm text-gray-500">Showing 5 of 36 entries</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-200 rounded bg-white text-sm disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1 border border-gray-200 rounded bg-white text-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
