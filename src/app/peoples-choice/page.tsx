'use client';

import { motion } from 'framer-motion';
import { Star, Award, Users, ThumbsUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const items = [
  {
    id: 1,
    title: "AM-X100 Assembler",
    votes: "12,405",
    rating: 4.9,
    description: "The industry standard for high-precision robotic assembly. Voted #1 for reliability three years in a row.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    tags: ["Robotics", "Precision", "AI-Driven"]
  },
  {
    id: 2,
    title: "Neural Sorter V2",
    votes: "9,820",
    rating: 4.8,
    description: "Revolutionary computer vision system that redefined quality control standards across the globe.",
    image: "https://images.unsplash.com/photo-1565515110173-97362741a672?auto=format&fit=crop&q=80&w=800",
    tags: ["Vision", "QC", "Neural Net"]
  },
  {
    id: 3,
    title: "Optimus Forge 9",
    votes: "8,150",
    rating: 4.7,
    description: "The people's choice for heavy-duty additive manufacturing. Unmatched volume and material versatility.",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    tags: ["3D Printing", "Industrial", "Titanium"]
  },
  {
    id: 4,
    title: "Apex Control Hub",
    votes: "7,640",
    rating: 4.9,
    description: "The central nervous system of the modern factory. Highly praised for its intuitive interface and real-time analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
    tags: ["Software", "Analytics", "Control"]
  }
];

export default function PeoplesChoicePage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-[#A24CDC] font-bold mb-4">
                <Award className="w-6 h-6" />
                <span className="tracking-wider uppercase text-sm">Community Awards 2024</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                People's <span className="text-[#A24CDC]">Choice</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Discover the machines and technologies that are transforming industries, as voted by our global community of engineers and manufacturers.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Users className="text-gray-400 w-5 h-5" />
                  <span className="text-gray-900 font-semibold">50k+ Voters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                  <span className="text-gray-900 font-semibold">4.8 Avg Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="text-[#68B435] w-5 h-5" />
                  <span className="text-gray-900 font-semibold">99% Satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-16">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 shadow-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg">
                          #{index + 1} Most Popular
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-[#A24CDC] transition-colors">
                      {item.title}
                    </h2>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="ml-2 font-bold text-gray-900">{item.rating}</span>
                      </div>
                      <div className="h-4 w-px bg-gray-300" />
                      <div className="text-gray-500 font-medium">{item.votes} votes</div>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="pt-4 flex flex-wrap gap-4">
                      <Link 
                        href={`/machines`} 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-[#A24CDC] transition-all shadow-lg"
                      >
                        View Specifications <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 border border-gray-200 rounded-lg font-semibold hover:border-[#A24CDC] hover:text-[#A24CDC] transition-all">
                        Read Reviews
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Didn't see your favorite?</h2>
            <p className="text-gray-400 text-lg mb-10">
              Our community awards are updated quarterly. Cast your vote for the next generation of industrial excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#A24CDC] text-white rounded-lg font-bold hover:bg-[#b35ef0] transition-all shadow-lg shadow-[#A24CDC]/20">
                Cast Your Vote
              </button>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-700 text-white rounded-lg font-bold hover:bg-gray-800 transition-all">
                Nominate a Machine
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
