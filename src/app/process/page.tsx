'use client';

import { motion } from 'framer-motion';
import { UploadCloud, Cpu, Box, Truck } from 'lucide-react';

export default function ProcessPage() {
  const steps = [
    {
      id: "01",
      title: "Design Upload",
      description: "Upload your CAD files (STEP, IGES, STL) directly to our secure cloud. Our system instantly parses geometry for manufacturability.",
      icon: UploadCloud,
    },
    {
      id: "02",
      title: "AI Optimization",
      description: "Apex Core AI analyzes your part topology and suggests material reductions or structural reinforcements to optimize cost and weight.",
      icon: Cpu,
    },
    {
      id: "03",
      title: "Autonomous Production",
      description: "Once approved, the job is dispatched to the most suitable machine in The Fleet. Real-time telemetry monitors every micron of fabrication.",
      icon: Box,
    },
    {
      id: "04",
      title: "Quality & Logistics",
      description: "Finished parts undergo automated optical inspection before being crated and shipped via our logistics partners.",
      icon: Truck,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="bg-[#1a1a1a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#A24CDC_0%,transparent_40%)] opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-[#A24CDC] font-bold tracking-widest uppercase text-sm mb-4 block">How It Works</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">From Concept to Crate</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            We've removed the friction from manufacturing. No endless email chains, no quoting delays. Just pure production velocity.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Text Side */}
                <div className={`w-full md:w-1/2 flex ${i % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className={`max-w-md ${i % 2 !== 0 ? 'text-left' : 'text-left md:text-right'}`}>
                    <span className="text-6xl font-bold text-gray-100 mb-4 block">{step.id}</span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon/Center Side */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-[#A24CDC] flex items-center justify-center shadow-xl shadow-[#A24CDC]/30 rotate-3 transition-transform hover:rotate-0">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Empty Side for balance */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
