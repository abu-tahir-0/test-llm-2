import { Settings, Zap, BarChart, ShieldCheck, Globe, Headphones } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Settings,
      title: "Custom Automation",
      description: "Tailored robotic workflows designed specifically for your production line requirements."
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Go from CAD design to physical prototype in record time with our integrated fleet."
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Real-time data insights and predictive maintenance to keep your operations at peak efficiency."
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "AI-powered vision systems that detect defects with 99.9% accuracy."
    },
    {
      icon: Globe,
      title: "Global Deployment",
      description: "Remote setup and monitoring capabilities for manufacturing facilities worldwide."
    },
    {
      icon: Headphones,
      title: "24/7 Technical Support",
      description: "Dedicated engineering support to ensure your production never stops."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive industrial solutions powered by the latest advancements in robotics and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-[#A24CDC] hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#A24CDC]/10 transition-colors">
                <service.icon className="w-6 h-6 text-gray-600 group-hover:text-[#A24CDC]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
