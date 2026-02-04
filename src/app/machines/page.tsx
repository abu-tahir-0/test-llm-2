'use client';

import { useState } from 'react';
import { Cpu, Zap, Shield, ArrowRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { clsx } from 'clsx';

const machines = [
  {
    id: 'apex-alpha-1',
    name: 'Apex Alpha-1',
    category: 'Precision Assembly',
    description: 'High-speed robotic arm designed for micro-electronics and intricate assembly tasks.',
    specs: {
      precision: '0.01mm',
      speed: '2.5m/s',
      payload: '5kg',
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    status: 'Available',
    color: 'bg-blue-500',
  },
  {
    id: 'titan-v3',
    name: 'Titan V3',
    category: 'Heavy Duty',
    description: 'Industrial-grade heavy lifter capable of handling large scale components with ease.',
    specs: {
      precision: '0.1mm',
      speed: '1.2m/s',
      payload: '500kg',
    },
    image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
    status: 'Limited',
    color: 'bg-orange-500',
  },
  {
    id: 'spectre-x',
    name: 'Spectre X',
    category: 'Quality Control',
    description: 'AI-powered visual inspection system with sub-micron defect detection capabilities.',
    specs: {
      precision: '0.001mm',
      speed: 'N/A',
      payload: 'N/A',
    },
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800',
    status: 'Available',
    color: 'bg-purple-500',
  },
  {
    id: 'nexus-prime',
    name: 'Nexus Prime',
    category: 'Collaborative',
    description: 'Cobot designed to work safely alongside human operators in shared workspaces.',
    specs: {
      precision: '0.05mm',
      speed: '1.5m/s',
      payload: '10kg',
    },
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    status: 'New',
    color: 'bg-green-500',
  },
];

const categories = ['All', 'Precision Assembly', 'Heavy Duty', 'Quality Control', 'Collaborative'];

export default function MachinesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMachines = machines.filter((machine) => {
    const matchesCategory = activeCategory === 'All' || machine.category === activeCategory;
    const matchesSearch = machine.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          machine.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            The <span className="text-[#A24CDC]">Fleet</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our range of AI-driven industrial machines, engineered for the next generation of manufacturing excellence.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={clsx(
                  'px-5 py-2 rounded-full text-sm font-medium transition-all border',
                  activeCategory === category
                    ? 'bg-[#A24CDC] text-white border-[#A24CDC] shadow-md'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#A24CDC] hover:text-[#A24CDC]'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search machines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A24CDC]/20 focus:border-[#A24CDC] transition-all bg-white"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredMachines.map((machine) => (
            <div
              key={machine.id}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row"
            >
              <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={clsx(
                    'px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm',
                    machine.color
                  )}>
                    {machine.status}
                  </span>
                </div>
              </div>

              <div className="p-8 md:w-3/5 flex flex-col">
                <div className="mb-4">
                  <span className="text-[#A24CDC] text-sm font-semibold uppercase tracking-wider">
                    {machine.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">{machine.name}</h3>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {machine.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8 border-t border-gray-50 pt-6">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Precision</p>
                    <p className="text-sm font-semibold text-gray-900">{machine.specs.precision}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Speed</p>
                    <p className="text-sm font-semibold text-gray-900">{machine.specs.speed}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Payload</p>
                    <p className="text-sm font-semibold text-gray-900">{machine.specs.payload}</p>
                  </div>
                </div>

                <div className="mt-auto">
                  <Link
                    href={`/machines/${machine.id}`}
                    className="inline-flex items-center gap-2 text-[#A24CDC] font-bold text-sm group/link"
                  >
                    View Technical Specs
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMachines.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
              <Filter className="text-gray-400 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">No machines found</h3>
            <p className="text-gray-500">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </main>
  );
}
