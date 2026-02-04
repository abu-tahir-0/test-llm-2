'use client';

import { motion } from 'framer-motion';
import MachineCard from '@/components/MachineCard';

export default function MachinesPage() {
  const machines = Array.from({ length: 25 }).map((_, i) => ({
    title: `Apex ${String.fromCharCode(65 + (i % 26))}-${100 + i}`,
    description: `Advanced industrial solution for high-precision manufacturing. This unit features next-gen AI integration and optimized power consumption for 24/7 operations.`,
    category: i % 3 === 0 ? 'Assembly' : i % 3 === 1 ? 'Fabrication' : 'Quality Control',
    specs: [
      { label: 'Efficiency', value: `${90 + (i % 10)}%` },
      { label: 'Output', value: `${200 + i * 10}/hr` },
    ],
  }));

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A24CDC] to-purple-600">Fleet</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of autonomous manufacturing units, designed for the next generation of industrial production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machines.map((machine, i) => (
            <MachineCard
              key={i}
              index={i % 6} // Stagger animation based on row-ish
              {...machine}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
