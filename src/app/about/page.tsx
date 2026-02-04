import { Cpu, Users, Target, Shield } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Cpu,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in robotics and AI every single day."
    },
    {
      icon: Users,
      title: "Human-Centric",
      description: "Our technology is designed to augment human capability, not replace it."
    },
    {
      icon: Target,
      title: "Precision",
      description: "In manufacturing, every micron matters. We deliver unmatched accuracy."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Industrial-grade systems built to run 24/7 without compromise."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Building the <span className="text-[#A24CDC]">Future</span> of Industry
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded in 2024, Apex Machina is dedicated to revolutionizing the manufacturing landscape through advanced robotics and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To democratize high-precision manufacturing by providing accessible, intelligent, and scalable robotic solutions for businesses of all sizes.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              A world where production is seamless, sustainable, and limited only by human imagination, powered by the Apex Machina ecosystem.
            </p>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-[#A24CDC]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#A24CDC]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
