'use client';

import { motion } from 'framer-motion';
import { Star, Users, Award, ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import Link from 'next/link';

export default function PeoplesChoicePage() {
  const items = [
    {
      id: 1,
      title: "AM-X100 Assembler",
      votes: "12,402",
      rating: 4.9,
      description: "Voted #1 for reliability in high-speed assembly lines for three consecutive years.",
      tags: ["Reliability", "Speed"],
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Neural Sorter V2",
      votes: "10,150",
      rating: 4.8,
      description: "The community's favorite for its intuitive AI training interface and accuracy.",
      tags: ["AI", "Precision"],
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Optimus Forge 9",
      votes: "9,820",
      rating: 4.7,
      description: "Highly praised for its material versatility and massive build volume.",
      tags: ["3D Printing", "Scale"],
      color: "bg-emerald-500"
    },
    {
      id: 4,
      title: "Titan Grip Pro",
      votes: "8,440",
      rating: 4.9,
      description: "The most durable robotic gripper as rated by heavy industry partners.",
      tags: ["Durability", "Power"],
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#A24CDC_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A24CDC]/20 border border-[#A24CDC]/30 text-[#A24CDC] text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>2024 Community Awards</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              People's <span className="text-[#A24CDC]">Choice</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Discover the machines and technologies rated highest by our global community of engineers and manufacturers.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#A24CDC]" />
                <span>50k+ Active Voters</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.8 Avg. Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className={`md:w-1/3 ${item.color} opacity-90 flex items-center justify-center p-8 text-white`}>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-1">{item.rating}</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 fill-current ${i < 4 ? 'text-white' : 'text-white/40'}`} />
                        ))}
                      </div>
                      <div className="text-xs uppercase tracking-widest opacity-80">Rating</div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A24CDC] transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex gap-2 mt-2">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                        {item.votes}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {item.description}
                    </p>
                    <Link 
                      href={`/machines`} 
                      className="inline-flex items-center gap-2 text-[#A24CDC] font-semibold hover:gap-3 transition-all"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voting CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gray-900 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#A24CDC] opacity-10 blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-white mb-4">Have your say in the next fleet.</h2>
                <p className="text-gray-400">
                  We're currently collecting feedback for our Q4 hardware updates. Your input directly influences our engineering roadmap.
                </p>
              </div>
              <button className="px-8 py-4 bg-[#A24CDC] text-white rounded-xl font-bold hover:bg-[#b35ef0] transition-colors whitespace-nowrap">
                Cast Your Vote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
