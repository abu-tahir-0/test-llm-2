'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  Package, 
  TrendingUp, 
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from 'lucide-react';
import { clsx } from 'clsx';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const data = [
  { name: 'Jan', activity: 400 },
  { name: 'Feb', activity: 300 },
  { name: 'Mar', activity: 600 },
  { name: 'Apr', activity: 800 },
  { name: 'May', activity: 500 },
  { name: 'Jun', activity: 900 },
  { name: 'Jul', activity: 750 },
];

const stats = [
  { 
    label: 'Total Users', 
    value: '2,543', 
    change: '+12.5%', 
    trend: 'up',
    icon: Users, 
    color: 'text-blue-600', 
    bg: 'bg-blue-50' 
  },
  { 
    label: 'Total Orders', 
    value: '1,205', 
    change: '+8.2%', 
    trend: 'up',
    icon: ShoppingBag, 
    color: 'text-purple-600', 
    bg: 'bg-purple-50' 
  },
  { 
    label: 'Total Products', 
    value: '48', 
    change: '-2.4%', 
    trend: 'down',
    icon: Package, 
    color: 'text-orange-600', 
    bg: 'bg-orange-50' 
  },
];

export default function AdminDashboard() {
  return (
    <div className="pb-12">
      <div className="">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <LayoutDashboard className="w-8 h-8 text-[#A24CDC]" />
            Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-1">Overview of your platform performance and activity.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={clsx('p-3 rounded-xl', stat.bg)}>
                  <stat.icon className={clsx('w-6 h-6', stat.color)} />
                </div>
                <div className={clsx(
                  'flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full',
                  stat.trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
                )}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Activity Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Platform Activity</h2>
              <p className="text-sm text-gray-500">Monthly engagement and interactions</p>
            </div>
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <Tooltip 
                  cursor={{ fill: '#f9fafb' }}
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' 
                  }}
                />
                <Bar 
                  dataKey="activity" 
                  radius={[6, 6, 0, 0]}
                  barSize={40}
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === data.length - 1 ? '#A24CDC' : '#e5e7eb'} 
                      className="hover:fill-[#A24CDC] transition-colors duration-300"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity List (Optional but adds to the layout) */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">New user registered</p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-[#A24CDC]">View</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
