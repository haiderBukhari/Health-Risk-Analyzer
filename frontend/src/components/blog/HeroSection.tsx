
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl?: string;
  category?: string;
  date?: string;
  readTime?: string;
}

export const HeroSection = ({ 
  title, 
  description, 
  imageUrl,
  category = "Strategy",
  date = "June 15, 2025", 
  readTime = "5 min read" 
}: HeroSectionProps) => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-[#FF6B35] hover:text-[#E55A2B] mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
            <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
            <div className="flex items-center gap-1">
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>{readTime}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#374151] leading-tight">
            {title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
