import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';

export default function TermsPage() {
  const terms = [
    {
      icon: FileText,
      title: "Agreement to Terms",
      content: "By accessing our services, you agree to be bound by these terms. If you do not agree with any part, you may not use our services."
    },
    {
      icon: CheckCircle,
      title: "Service Usage",
      content: "Our robotic systems and software must be used in accordance with provided safety guidelines and operating manuals."
    },
    {
      icon: AlertCircle,
      title: "Liability",
      content: "Apex Machina is not liable for indirect, incidental, or consequential damages arising from the use or inability to use our systems."
    },
    {
      icon: Scale,
      title: "Governing Law",
      content: "These terms are governed by the laws of the jurisdiction in which Apex Machina is registered, without regard to conflict of law principles."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Terms of <span className="text-[#A24CDC]">Service</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Please read these terms carefully before using our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {terms.map((term, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[#A24CDC]/10 rounded-xl flex items-center justify-center mb-6">
                <term.icon className="w-6 h-6 text-[#A24CDC]" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{term.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {term.content}
              </p>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">General Provisions</h2>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            These Terms of Service ("Terms") govern your access to and use of Apex Machina's website, products, and services.
          </p>
          <p className="mb-4">
            We reserve the right to withdraw or amend our service, and any service or material we provide via the service, in our sole discretion without notice.
          </p>
        </div>
      </div>
    </div>
  );
}
