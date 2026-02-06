'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in <span className="text-[#A24CDC]">Touch</span>
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions about our fleet or ready to start your production? Our team of experts is here to help you navigate the future of manufacturing.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#A24CDC]/10 rounded-lg text-[#A24CDC]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-gray-600">hello@apexmachina.com</p>
                    <p className="text-gray-600">support@apexmachina.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#A24CDC]/10 rounded-lg text-[#A24CDC]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 000-0000</p>
                    <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#A24CDC]/10 rounded-lg text-[#A24CDC]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Visit Us</h4>
                    <p className="text-gray-600">
                      123 Innovation Drive<br />
                      Silicon Valley, CA 94025
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl shadow-gray-100"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#A24CDC] focus:ring-2 focus:ring-[#A24CDC]/20 outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#A24CDC] focus:ring-2 focus:ring-[#A24CDC]/20 outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#A24CDC] focus:ring-2 focus:ring-[#A24CDC]/20 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-[#A24CDC] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#8e3ec4] transition-colors shadow-lg shadow-[#A24CDC]/20"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
