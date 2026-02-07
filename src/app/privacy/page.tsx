import { Shield, Eye, Lock, Globe } from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    {
      icon: Eye,
      title: "Data Collection",
      content: "We collect information that you provide directly to us, including your name, email address, and company details when you inquire about our services or sign up for our newsletter."
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction."
    },
    {
      icon: Globe,
      title: "International Transfers",
      content: "Your data may be processed in countries where our servers are located, ensuring they have adequate data protection laws in place."
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal data. Contact our support team for any data-related requests."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Privacy <span className="text-[#A24CDC]">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At Apex Machina, we take your privacy seriously. This policy explains how we collect, use, and protect your information.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Policy Information</h2>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            This Privacy Policy describes our policies and procedures on the collection, use and disclosure of your information when you use the Service and tells you about your privacy rights and how the law protects you.
          </p>
          <p className="mb-4">
            We use your Personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
          {/* More content can be added here */}
        </div>
      </div>
    </div>
  );
}
