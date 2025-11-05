import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
export const Hero = () => {
  return <section id="home" className="pt-20 pb-16 bg-gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent leading-tight animate-fade-in">
            We embed full-time outbound teams inside your company
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-6 max-w-5xl mx-auto leading-relaxed font-medium">
            Operators in your CRM and Slack—recruited, trained, managed, and run by us.
          </p>
          
          <p className="text-xl text-muted-foreground/80 mb-12 max-w-4xl mx-auto font-medium">
            Tools included. Results measured in revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground text-xl px-12 py-8 rounded-2xl shadow-elegant hover:shadow-glow hover:scale-105 transition-all duration-300 group font-bold" onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}>
              See how the cell works
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button size="lg" variant="outline" className="text-xl px-12 py-8 rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group font-bold backdrop-blur-sm bg-card/50" onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}>
              <Play className="mr-3 group-hover:scale-125 transition-transform duration-300" />
              Meet your first BDRs
            </Button>
          </div>

          {/* Value Pillars */}
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-border/50 shadow-soft">
            <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Value Pillars</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-primary-foreground font-bold text-xl">🔗</span>
                </div>
                <h4 className="font-bold text-primary text-lg mb-2">Embedded, not outsourced</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">We work inside your tools, meetings, and workflows. Zero black box.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-glow w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-white font-bold text-xl">👥</span>
                </div>
                <h4 className="font-bold text-primary-glow text-lg mb-2">Full-time operators</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">A cell of 1–4 BDRs focused on your accounts every day.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-foreground w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-background font-bold text-xl">🛠️</span>
                </div>
                <h4 className="font-bold text-foreground text-lg mb-2">Stack included</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Dialer, enrichment, email infrastructure, LinkedIn execution, dashboards.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-primary-foreground font-bold text-xl">💰</span>
                </div>
                <h4 className="font-bold text-primary text-lg mb-2">Revenue-first</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">We track pipeline added, win rate, cycle time, and booked revenue.</p>
              </div>
              
              <div className="text-center md:col-span-2 lg:col-span-1">
                <div className="bg-primary-glow w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-white font-bold text-xl">⚙️</span>
                </div>
                <h4 className="font-bold text-primary-glow text-lg mb-2">Managed end-to-end</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Recruiting, coaching, list health, deliverability, and reporting.</p>
              </div>
            </div>
          </div>

          {/* What we run daily */}
          <div className="bg-primary/5 rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground text-center">What we run daily</h3>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
              ICP and account selection • list refresh & data QA • multi-channel outreach (email, calls, LinkedIn) • reply triage & booking • time-zoned call blocks • live call coaching • objection handling • calendar handoff • weekly iteration.
            </p>
          </div>

          {/* Outcomes we monitor */}
          <div className="bg-foreground/5 rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Outcomes we monitor</h3>
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">Pipeline added (USD) • Pipeline coverage vs target (3–5×) • Connect→Meeting rate • Show rate • Stage conversion • Won revenue.</p>
          </div>

          {/* Who this helps */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Who this helps</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              Founders and sales leaders who want consistent outbound without hiring a whole ops stack—SaaS, software services, fintech, health, and staffing.
            </p>
            
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" onClick={() => window.location.href = '/one-pager'}>
              Get the 1-page operating model
            </Button>
          </div>
        </div>
      </div>
    </section>;
};