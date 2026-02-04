'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Cpu, Activity, Zap, CheckCircle2 } from 'lucide-react';
import MachineCard from '@/components/MachineCard';

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const machines = [
    {
      title: "AM-X100 Assembler",
      description: "High-precision robotic arm capable of micron-level assembly tasks with AI-driven error correction.",
      category: "Assembly",
      specs: [{ label: "Precision", value: "0.01mm" }, { label: "Speed", value: "2m/s" }],
    },
    {
      title: "Optimus Forge 9",
      description: "Heavy-duty additive manufacturing unit for aerospace-grade titanium components.",
      category: "3D Printing",
      specs: [{ label: "Volume", value: "1000L" }, { label: "Material", value: "Ti-6Al-4V" }],
    },
    {
      title: "Neural Sorter V2",
      description: "Computer vision quality control system processing 5000 units per minute.",
      category: "Quality Control",
      specs: [{ label: "Accuracy", value: "99.99%" }, { label: "Throughput", value: "5k/min" }],
    }
  ];

  return (
    <div className="bg-white text-gray-900">
      
      {/* SECTION 1: HERO */}
      <section ref={targetRef} className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0" />
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <motion.div 
          style={{ opacity, scale, y: position }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#A24CDC]/10 text-[#A24CDC] text-sm font-semibold mb-6 tracking-wide border border-[#A24CDC]/20">
              MANUFACTURING REIMAGINED
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900">
              The New <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A24CDC] to-purple-600">Industrial</span><br />
              Revolution
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Apex Machina combines next-gen robotics, AI precision, and sustainable engineering to build the factories of tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/machines" className="px-8 py-4 bg-[#A24CDC] text-white rounded-lg font-semibold shadow-lg shadow-[#A24CDC]/30 hover:shadow-xl hover:shadow-[#A24CDC]/40 hover:-translate-y-1 transition-all duration-300">
                Explore The Fleet
              </Link>
              <Link href="/process" className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-lg font-semibold hover:border-[#A24CDC] hover:text-[#A24CDC] transition-all duration-300">
                How It Works
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* SECTION 2: STATS */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A24CDC] to-transparent opacity-50" />
        
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Activity, label: "Efficiency Increase", value: "400%", color: "text-[#68B435]" },
              { icon: Zap, label: "Energy Reduction", value: "-65%", color: "text-yellow-400" },
              { icon: Cpu, label: "AI Operations", value: "24/7", color: "text-[#A24CDC]" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-[#A24CDC]/50 transition-colors"
              >
                <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color}`} />
                <h3 className="text-5xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MACHINE SHOWCASE */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">The Fleet</h2>
              <p className="text-gray-600 max-w-xl">
                Our proprietary line of autonomous manufacturing units. Designed for speed, built for longevity.
              </p>
            </div>
            <Link href="/machines" className="hidden md:flex items-center text-[#A24CDC] font-semibold hover:gap-2 transition-all">
              View All Machines <ArrowRight className="ml-1 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {machines.map((machine, i) => (
              <MachineCard key={i} index={i} {...machine} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/machines" className="inline-flex items-center text-[#A24CDC] font-semibold">
              View All Machines <ArrowRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROCESS TEASER */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
               <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#A24CDC_0%,transparent_70%)] opacity-10" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 border-2 border-dashed border-gray-300 rounded-full animate-spin-slow" />
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-gray-300">PROCESS VISUAL</div>
                 </div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">From CAD to Reality</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We don't just sell machines; we integrate a complete production ecosystem. Our software parses your CAD files, optimizes the assembly path, and deploys instructions to the fleet instantly.
              </p>
              
              <ul className="space-y-4 mb-10">
                {['Instant Design Parsing', 'AI Material Optimization', 'Real-time Quality Monitoring'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#68B435] w-6 h-6" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/process" className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-[#A24CDC] transition-colors shadow-lg">
                Learn The Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="py-32 bg-[#A24CDC] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Automate?</h2>
          <p className="text-purple-100 text-xl max-w-2xl mx-auto mb-10">
            Join the industrial revolution. Scale your production with Apex Machina's intelligent fleet today.
          </p>
          <Link href="/contact" className="px-10 py-5 bg-white text-[#A24CDC] text-lg font-bold rounded-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
            Start Your Production
          </Link>
        </div>
      </section>
    </div>
  );
}
