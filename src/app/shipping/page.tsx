import { Truck, Globe, Package, Clock } from 'lucide-react';

export default function ShippingPolicyPage() {
  const policies = [
    {
      icon: Truck,
      title: "Delivery Methods",
      content: "We use specialized industrial transport services for all robot deliveries to ensure safe and secure arrival."
    },
    {
      icon: Globe,
      title: "International Shipping",
      content: "We ship worldwide. Custom duties and taxes are handled according to the Incoterms specified in your contract."
    },
    {
      icon: Package,
      title: "Handling & Packaging",
      content: "Each machine is crated in reinforced industrial packaging designed to withstand long-distance transit."
    },
    {
      icon: Clock,
      title: "Lead Times",
      content: "Standard lead times vary by model. Generally, shipping commences 4-8 weeks after order confirmation."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Shipping <span className="text-[#A24CDC]">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How we deliver our advanced robotic systems to your facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {policies.map((policy, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[#A24CDC]/10 rounded-xl flex items-center justify-center mb-6">
                <policy.icon className="w-6 h-6 text-[#A24CDC]" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{policy.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {policy.content}
              </p>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Logistics Details</h2>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            Our logistics team works closely with you to coordinate the arrival and installation of your Apex Machina equipment.
          </p>
        </div>
      </div>
    </div>
  );
}
