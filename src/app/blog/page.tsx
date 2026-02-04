import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Collaborative Robotics",
      excerpt: "How cobots are changing the way humans and machines work together on the factory floor.",
      date: "Oct 24, 2023",
      author: "Dr. Sarah Chen",
      category: "Robotics"
    },
    {
      title: "AI in Quality Control: Beyond the Human Eye",
      excerpt: "Exploring the precision of neural networks in identifying microscopic manufacturing defects.",
      date: "Oct 18, 2023",
      author: "Marcus Thorne",
      category: "Artificial Intelligence"
    },
    {
      title: "Sustainable Manufacturing Practices",
      excerpt: "Reducing the carbon footprint of heavy industry through intelligent energy management.",
      date: "Oct 12, 2023",
      author: "Elena Rodriguez",
      category: "Sustainability"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Insights</h1>
            <p className="text-xl text-gray-600">The latest news and thoughts from the forefront of industrial tech.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <article key={index} className="flex flex-col">
              <div className="aspect-video bg-gray-100 rounded-2xl mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400 font-medium">
                  Blog Image
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-[#A24CDC] font-medium">{post.category}</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 hover:text-[#A24CDC] transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <Link href="#" className="text-[#A24CDC] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
