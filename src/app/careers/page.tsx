import React from 'react';
import Link from 'next/link';

const openPositions = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote / London',
    type: 'Full-time',
  },
  {
    id: 3,
    title: 'Backend Developer (Node.js)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    id: 4,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'San Francisco',
    type: 'Full-time',
  },
  {
    id: 5,
    title: 'Customer Success Lead',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Join our mission to build the future.
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We're looking for passionate, creative, and driven individuals to help us solve complex problems and create meaningful impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#open-positions"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                View Openings
              </a>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors backdrop-blur-sm"
              >
                Our Culture
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why work with us?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We believe in fostering an environment where everyone can do their best work and grow both personally and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Remote-First',
                description: 'Work from anywhere in the world. We value output over hours spent in an office.',
                icon: '🌍',
              },
              {
                title: 'Growth Mindset',
                description: 'Annual learning budget, mentorship programs, and clear career progression paths.',
                icon: '📈',
              },
              {
                title: 'Inclusive Culture',
                description: 'A diverse team where every voice is heard and respected. We celebrate our differences.',
                icon: '🤝',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Open Positions</h2>
              <p className="text-slate-600">Find your next challenge and help us grow.</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                {openPositions.length} Openings
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="group block p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-y-2 gap-x-4 mt-2 text-slate-500 text-sm">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="w-full md:w-auto px-6 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't see a role that fits?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people to join our team. Send us your resume and we'll keep you in mind for future openings.
          </p>
          <a
            href="mailto:careers@example.com"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            General Application
          </a>
        </div>
      </section>
    </div>
  );
}
