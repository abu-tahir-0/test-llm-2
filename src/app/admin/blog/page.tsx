'use client';

import React, { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Edit, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { clsx } from 'clsx';

const blogPosts = [
  { id: 1, title: 'The Future of AI in Robotics', author: 'Dr. Sarah Chen', status: 'Published', date: 'Oct 24, 2023', views: '1.2k' },
  { id: 2, title: 'Sustainable Manufacturing Trends', author: 'Michael Roberts', status: 'Draft', date: 'Oct 20, 2023', views: '-' },
  { id: 3, title: 'Scaling Production with AM-X100', author: 'James Wilson', status: 'Published', date: 'Oct 12, 2023', views: '850' },
  { id: 4, title: 'Robotics in Modern Healthcare', author: 'Dr. Emily Watson', status: 'Scheduled', date: 'Nov 05, 2023', views: '-' },
  { id: 5, title: 'Human-Robot Collaboration Safety', author: 'Sarah Jenkins', status: 'Published', date: 'Oct 05, 2023', views: '2.1k' },
  { id: 6, title: 'Evolution of Sensor Technology', author: 'David Miller', status: 'Draft', date: 'Sep 28, 2023', views: '-' },
  { id: 7, title: 'AI Ethics in Automation', author: 'Dr. Sarah Chen', status: 'Published', date: 'Sep 15, 2023', views: '3.4k' },
];

export default function BlogManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pb-12">
      <div className="">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#A24CDC]" />
              Blog Management
            </h1>
            <p className="text-gray-500 mt-1">Create, edit, and manage your blog articles.</p>
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#A24CDC] text-white rounded-xl font-semibold hover:bg-[#8b3ec2] transition-all shadow-lg shadow-purple-200">
            <Plus className="w-5 h-5" />
            New Article
          </button>
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#A24CDC] transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#A24CDC] text-sm font-medium">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
              <option>Scheduled</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors">
              <Filter className="w-4 h-4" />
              More Filters
            </button>
          </div>
        </div>

        {/* Blog Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Article Title</th>
                  <th className="px-6 py-4 font-semibold">Author</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Views</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {blogPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900 group-hover:text-[#A24CDC] transition-colors">{post.title}</span>
                        <span className="text-xs text-gray-400 mt-0.5">ID: BLOG-{post.id}024</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                      {post.author}
                    </td>
                    <td className="px-6 py-4">
                      <span className={clsx(
                        'flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full w-fit',
                        post.status === 'Published' ? 'bg-green-50 text-green-700' : 
                        post.status === 'Draft' ? 'bg-gray-100 text-gray-600' : 'bg-blue-50 text-blue-700'
                      )}>
                        {post.status === 'Published' && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {post.status === 'Draft' && <AlertCircle className="w-3.5 h-3.5" />}
                        {post.status === 'Scheduled' && <Clock className="w-3.5 h-3.5" />}
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {post.date}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {post.views}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-gray-400 hover:text-[#A24CDC] hover:bg-purple-50 rounded-lg transition-all" title="Preview">
                          <Eye className="w-4.5 h-4.5" />
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
              Showing <span className="text-gray-900">1 to 7</span> of <span className="text-gray-900">32</span> articles
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
