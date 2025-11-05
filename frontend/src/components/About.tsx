
import { CheckCircle } from "lucide-react";

export const About = () => {
  const features = [
    "Embedded in your CRM, domains, and Slack",
    "You own all assets and data", 
    "Build-Operate-Transfer model available",
    "Zero black box operations",
    "Weekly metrics and call coaching",
    "Full SOPs and manager training on transfer"
  ];

  return (
    <section id="about" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Beautiful About Us section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent">
            About Us
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-2xl text-muted-foreground mb-8 leading-relaxed font-medium text-center">
              Lead Mamut builds and runs embedded outbound cells for founders and sales leaders who want reliable pipeline without the overhead of building ops from scratch. We are operators—inside your CRM and Slack—focused on revenue, not vanity metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
