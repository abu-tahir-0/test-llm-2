'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center animate-in zoom-in duration-300">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Request Received</h2>
          <p className="text-gray-600">Our engineering team will review your specs shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="w-full md:w-2/5 bg-gray-900 text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Start Production</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Tell us about your project. Whether it's a prototype or a million-unit run, we have the capacity.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">HQ Address</span>
                <p className="font-medium">100 Future Way,<br/>Sector 7, Neo Tokyo</p>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</span>
                <p className="font-medium">build@apexmachina.com</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-3/5 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#A24CDC] focus:ring-2 focus:ring-[#A24CDC]/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#A24CDC] focus:ring-2 focus:ring-[#A24CDC]/20 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Email</label>
                <input type="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#A24CDC] focus:ring-2 focus:ring-[#A24CDC]/20 outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#A24CDC] focus:ring-2 focus:ring-[#A24CDC]/20 outline-none transition-all bg-white">
                  <option>Prototyping</option>
                  <option>Mass Production</option>
                  <option>Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[#A24CDC] focus:ring-2 focus:ring-[#A24CDC]/20 outline-none transition-all"></textarea>
              </div>

              <button type="submit" className="w-full py-3 bg-[#A24CDC] text-white font-bold rounded-lg shadow-md hover:bg-[#8e3bc9] hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Send Request <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
