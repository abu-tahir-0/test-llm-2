import { Plus, Minus } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      question: "How long does the initial setup take?",
      answer: "Standard deployment typically takes 2-4 weeks from design approval to full operation, depending on the complexity of the workflow."
    },
    {
      question: "Can Apex Machina units integrate with existing software?",
      answer: "Yes, our systems are designed with open APIs and support standard industrial protocols like MQTT, OPC UA, and ROS2."
    },
    {
      question: "What kind of maintenance is required?",
      answer: "Our machines feature self-diagnostic capabilities. Routine physical maintenance is usually required every 5,000 hours of operation."
    },
    {
      question: "Do you offer financing or leasing options?",
      answer: "We provide flexible 'Robotics-as-a-Service' (RaaS) models as well as traditional leasing and purchase options."
    },
    {
      question: "What industries do you currently serve?",
      answer: "We primarily serve aerospace, automotive, electronics assembly, and medical device manufacturing sectors."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">FAQ</h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about our technology and process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                  <Plus className="w-5 h-5 text-[#A24CDC]" />
                </button>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 bg-[#A24CDC]/5 rounded-3xl border border-[#A24CDC]/10 text-center">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-8">Our engineering team is ready to help you with your specific requirements.</p>
            <button className="px-8 py-3 bg-[#A24CDC] text-white rounded-xl font-bold hover:shadow-lg hover:shadow-[#A24CDC]/20 transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
