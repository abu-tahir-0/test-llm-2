import Link from 'next/link';
import { Cpu, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 bg-[#A24CDC] rounded-lg">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                APEX<span className="text-[#A24CDC]">MACHINA</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining industrial manufacturing with AI-driven robotics and next-gen precision engineering.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Platform</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/machines" className="hover:text-[#A24CDC] transition-colors">The Fleet</Link></li>
              <li><Link href="/process" className="hover:text-[#A24CDC] transition-colors">Our Process</Link></li>
              <li><Link href="/contact" className="hover:text-[#A24CDC] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-[#A24CDC] transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-[#A24CDC] transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-[#A24CDC] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-[#A24CDC] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-[#A24CDC] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-[#A24CDC] transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Apex Machina Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link>
            <Link href="/returns" className="hover:text-white transition-colors">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
