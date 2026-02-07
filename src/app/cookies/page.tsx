import { Cookie, Info, Settings, ShieldCheck } from 'lucide-react';

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      icon: ShieldCheck,
      title: "Essential Cookies",
      content: "These are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you."
    },
    {
      icon: Info,
      title: "Analytical Cookies",
      content: "These allow us to count visits and traffic sources so we can measure and improve the performance of our site."
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      content: "These enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers."
    },
    {
      icon: Cookie,
      title: "Targeting Cookies",
      content: "These may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Cookie <span className="text-[#A24CDC]">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We use cookies to improve your experience on our website. This policy explains how we use them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {cookieTypes.map((type, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[#A24CDC]/10 rounded-xl flex items-center justify-center mb-6">
                <type.icon className="w-6 h-6 text-[#A24CDC]" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{type.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {type.content}
              </p>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Control Cookies</h2>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
          </p>
        </div>
      </div>
    </div>
  );
}
