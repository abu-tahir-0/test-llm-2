'use client';

import React from 'react';
import { 
  Settings, 
  Globe, 
  Bell, 
  Shield, 
  Database, 
  Mail, 
  Monitor,
  Save
} from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="pb-12">
      <div className="">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Settings className="w-8 h-8 text-[#A24CDC]" />
            Platform Settings
          </h1>
          <p className="text-gray-500 mt-1">Configure your platform preferences and system settings.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { icon: Globe, label: 'General', active: true },
              { icon: Monitor, label: 'Appearance', active: false },
              { icon: Bell, label: 'Notifications', active: false },
              { icon: Shield, label: 'Security & Privacy', active: false },
              { icon: Mail, label: 'Email Configuration', active: false },
              { icon: Database, label: 'Backup & Data', active: false },
            ].map((item, i) => (
              <button
                key={i}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  item.active 
                    ? 'bg-white text-[#A24CDC] shadow-sm' 
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Settings Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900">General Settings</h2>
                <p className="text-sm text-gray-500">Basic platform configuration and branding.</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Platform Name</label>
                    <input 
                      type="text" 
                      defaultValue="RoboTech Admin"
                      className="w-full px-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#A24CDC] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Support Email</label>
                    <input 
                      type="email" 
                      defaultValue="support@robotech.com"
                      className="w-full px-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#A24CDC] transition-all"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700">Platform URL</label>
                    <input 
                      type="url" 
                      defaultValue="https://admin.robotech.com"
                      className="w-full px-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#A24CDC] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Platform Description</label>
                  <textarea 
                    rows={4}
                    defaultValue="Next-generation robotics management and content platform."
                    className="w-full px-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#A24CDC] transition-all"
                  />
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#A24CDC]" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Maintenance Mode</p>
                      <p className="text-xs text-gray-500">Disable public access to the platform.</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#A24CDC]"></div>
                  </label>
                </div>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-[#A24CDC] text-white rounded-xl font-bold hover:bg-[#8b3ec2] transition-all shadow-md">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden border-red-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-red-600">Danger Zone</h2>
                <p className="text-sm text-gray-500">Irreversible actions that affect the entire platform.</p>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900">Clear System Cache</p>
                  <p className="text-xs text-gray-500">This will rebuild all static pages and clear session data.</p>
                </div>
                <button className="px-4 py-2 text-red-600 border border-red-200 rounded-xl text-sm font-bold hover:bg-red-50 transition-colors">
                  Clear Cache
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
