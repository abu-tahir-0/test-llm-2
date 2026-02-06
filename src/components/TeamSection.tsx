'use client';

import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const team: TeamMember[] = [
  {
    name: 'Dr. Elena Vance',
    role: 'Chief Executive Officer',
    bio: 'Former Lead Robotics Engineer at NASA with 15+ years in autonomous systems.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Marcus Thorne',
    role: 'Chief Technology Officer',
    bio: 'Pioneer in neural network architectures for industrial automation.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    socials: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Design',
    bio: 'Award-winning industrial designer focused on human-machine interaction.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    name: 'Julian Vane',
    role: 'VP of Engineering',
    bio: 'Expert in large-scale manufacturing systems and precision robotics.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Minds Behind <span className="text-[#A24CDC]">APEX</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our team brings together world-class experts in robotics, AI, and industrial design to build the future of manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-4">
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} className="text-white hover:text-[#A24CDC] transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} className="text-white hover:text-[#A24CDC] transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} className="text-white hover:text-[#A24CDC] transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#A24CDC] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#A24CDC] font-medium text-sm mb-3 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
