'use client';

import { ArrowRight, Zap, Settings, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

interface MachineCardProps {
  title: string;
  description: string;
  category: string;
  specs: { label: string; value: string }[];
  index: number;
}

export default function MachineCard({ title, description, category, specs, index }: MachineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      <div className="h-48 bg-gray-100 relative overflow-hidden">
        {/* Abstract futuristic pattern representing the machine */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#A24CDC_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#A24CDC] border border-[#A24CDC]/10">
          {category}
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
             <Settings className="w-16 h-16 text-gray-300 group-hover:text-[#A24CDC] transition-colors duration-500" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#A24CDC] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6 mt-auto">
          {specs.map((spec, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase tracking-wider">{spec.label}</span>
              <span className="text-sm font-semibold text-gray-800">{spec.value}</span>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 hover:border-[#A24CDC]/30 hover:text-[#A24CDC] transition-all">
          View Specs <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
