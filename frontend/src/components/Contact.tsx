
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      company: formData.get('company'),
      leads: formData.get('leads'),
      message: formData.get('message')
    };
    
    // Create mailto link with form data for both email addresses
    const subject = encodeURIComponent('Strategy Call Request - ' + data.company);
    const body = encodeURIComponent(`
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Company: ${data.company}
Current Monthly Inbound Leads: ${data.leads}

Message:
${data.message}
    `);
    
    window.location.href = `mailto:contact@leadmamut.com,bruno@leadmamut.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF6B35] to-[#374151] bg-clip-text text-transparent">
            Ready to Install Outbound?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Install a complete outbound system without the overhead. Let's discuss how our outbound installation integrates with your startup.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#374151]">Get Your Outbound Plugin</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="firstName" placeholder="First Name" className="h-12" required />
                  <Input name="lastName" placeholder="Last Name" className="h-12" required />
                </div>
                <Input name="email" placeholder="Email Address" type="email" className="h-12" required />
                <Input name="company" placeholder="Company Name" className="h-12" required />
                <Input name="leads" placeholder="Current Monthly Inbound Leads" className="h-12" />
                <Textarea name="message" placeholder="Tell us about your outbound challenges and goals..." className="min-h-32" />
                <Button type="submit" className="w-full bg-[#FF6B35] hover:bg-[#E55A2B] text-white h-12 text-lg">
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#FF6B35] w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#374151]">Email Us</h4>
                    <p className="text-gray-600">Contact@leadmamut.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#FF6B35] w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#374151]">Visit Us</h4>
                    <p className="text-gray-600">30 N Gould St Ste N<br />Sheridan, WY 82801</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Perfect Installation For:</h3>
              <ul className="space-y-2 text-orange-100">
                <li>• Startups maxing out inbound channels</li>
                <li>• Companies avoiding hiring complexity</li>
                <li>• Teams needing predictable outbound systems</li>
                <li>• Businesses wanting plug & play solutions</li>
              </ul>
              <Button 
                variant="secondary" 
                className="bg-white text-[#FF6B35] hover:bg-gray-100 mt-6"
                onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}
              >
                Book Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
