'use client';

import MachineCard from '@/components/MachineCard';

const machines = [
  {
    title: "AM-X100 Assembler",
    description: "High-precision robotic arm capable of micron-level assembly tasks with AI-driven error correction. Perfect for electronics and micro-mechanics.",
    category: "Assembly",
    specs: [{ label: "Precision", value: "0.01mm" }, { label: "Speed", value: "2m/s" }],
  },
  {
    title: "Optimus Forge 9",
    description: "Heavy-duty additive manufacturing unit for aerospace-grade titanium components. Features inert gas chamber and dual-laser sintering.",
    category: "3D Printing",
    specs: [{ label: "Volume", value: "1000L" }, { label: "Material", value: "Ti-6Al-4V" }],
  },
  {
    title: "Neural Sorter V2",
    description: "Computer vision quality control system processing 5000 units per minute. Detects defects as small as 5 microns.",
    category: "Quality Control",
    specs: [{ label: "Accuracy", value: "99.99%" }, { label: "Throughput", value: "5k/min" }],
  },
  {
    title: "Titan Hauler",
    description: "Autonomous logistical unit for heavy payload transport within the factory floor. Lidar-guided navigation.",
    category: "Logistics",
    specs: [{ label: "Payload", value: "2000kg" }, { label: "Battery", value: "12h" }],
  },
  {
    title: "Flux Welder Pro",
    description: "Multi-axis welding bot compatible with TIG, MIG, and Laser welding. Adaptive seam tracking.",
    category: "Fabrication",
    specs: [{ label: "Axes", value: "7" }, { label: "Power", value: "15kW" }],
  },
  {
    title: "Nano Etch Z",
    description: "Laser etching system for serialization and decorative finishing on any metal surface.",
    category: "Finishing",
    specs: [{ label: "Spot Size", value: "20µm" }, { label: "Speed", value: "500char/s" }],
  }
];

export default function MachinesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="bg-white border-b border-gray-200 py-16 mb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Fleet</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our catalog of industrial automation units. Each machine connects seamlessly to the Apex Core network for synchronized production.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {machines.map((machine, i) => (
            <MachineCard key={i} index={i} {...machine} />
          ))}
        </div>
      </div>
    </div>
  );
}
