import { RefreshCw, ClipboardCheck, HelpCircle, ShieldAlert } from 'lucide-react';

export default function ReturnsPolicyPage() {
  const sections = [
    {
      icon: RefreshCw,
      title: "Return Eligibility",
      content: "Due to the custom-engineered nature of our products, returns are typically only accepted for manufacturing defects."
    },
    {
      icon: ClipboardCheck,
      title: "Inspection Process",
      content: "All returned units undergo rigorous testing to determine the cause of failure before a refund or replacement is issued."
    },
    {
      icon: ShieldAlert,
      title: "Warranty Support",
      content: "Most issues can be resolved through our comprehensive warranty and on-site support services without needing a return."
    },
    {
      icon: HelpCircle,
      title: "Refund Process",
      content: "Approved refunds are processed within 30 days. Restocking fees may apply for non-defective returns."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Returns <span className="text-[#A24CDC]">& Refunds</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our commitment to quality and your satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[#A24CDC]/10 rounded-xl flex items-center justify-center mb-6">
                <section.icon className="w-6 h-6 text-[#A24CDC]" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Support & Service</h2>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            We stand behind our products. If you encounter any issues with your Apex Machina equipment, please contact our support team immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
