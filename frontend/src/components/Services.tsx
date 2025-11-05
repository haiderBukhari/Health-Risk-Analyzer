import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
export const Services = () => {
  return <section id="services" className="py-24 bg-gradient-subtle relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* How It Works */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-gradient-primary w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
              <span className="text-primary-foreground font-bold text-2xl">1</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Diagnose (Week 0–1)</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Define ICP, target accounts, messaging themes, success metrics, and reporting cadence.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-gradient-primary w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
              <span className="text-primary-foreground font-bold text-2xl">2</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Build (Week 1–3)</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Recruit and hire the cell. Set up domains, deliverability, data sources, sequences, dialer, and dashboards inside your stack.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-gradient-primary w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-elegant">
              <span className="text-primary-foreground font-bold text-2xl">3</span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Run (Week 4+)</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We manage the day-to-day: list health, call blocks, reply QA, coaching, objection handling, meeting notes, and weekly reviews. You see everything in your CRM and dashboard.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mb-20">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}>
              See a sample dashboard
            </Button>
            
            <Button size="lg" className="bg-gradient-primary text-primary-foreground text-lg px-8 py-4 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300" onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}>
              Schedule a 12-minute overview
            </Button>
          </div>
        </div>

        {/* Offer Section */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 mb-20 border border-border/50 shadow-soft">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Embedded Outbound Cell (Build & Run)</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We recruit, train, manage, and operate a full-time outbound cell inside your company.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Included */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Included</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">👥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">People</h4>
                    <p className="text-muted-foreground">1–4 BDRs (full-time, embedded).</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">⚙️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Ops</h4>
                    <p className="text-muted-foreground">List strategy, sequencing, call blocks, reply triage, calendar handoff, weekly iteration.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">🛠️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Stack</h4>
                    <p className="text-muted-foreground">Email infrastructure & deliverability, dialer with recordings, data enrichment & verification, LinkedIn execution, revenue dashboard.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">📊</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Management</h4>
                    <p className="text-muted-foreground">Coaching, QA, pipeline reviews, and clear KPIs tied to revenue.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What you own */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">What you own</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                All data, sequences, dashboards, domains, and outcomes inside your CRM and tools.
              </p>
              
              <Button size="lg" className="bg-gradient-primary text-primary-foreground text-lg px-8 py-4 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300 w-full" onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}>
                Talk to an operator
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
            {/* Installation Starter */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-2">Starter</h3>
              <div className="text-3xl font-bold text-primary mb-4">$6,490/mo.</div>
              <div className="bg-primary/10 rounded-lg px-3 py-1 mb-4 inline-block">
                <span className="text-primary font-semibold text-sm">12k contacts/month</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">1 BDR (full-time)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Part-time AI operator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Email infrastructure included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Enrichment & outreach tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Daily iterations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Custom workflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Dedicated cell lead</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Custom integrations</span>
                </div>
              </div>
            </div>
            
            {/* Growth */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 shadow-soft relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">Most Popular</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Growth</h3>
              <div className="text-3xl font-bold text-primary mb-4">$9,990/mo.</div>
              <div className="bg-primary/10 rounded-lg px-3 py-1 mb-4 inline-block">
                <span className="text-primary font-semibold text-sm">18k contacts/month</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">2 BDRs (full-time)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Part-time AI operator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Enhanced email infrastructure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Advanced enrichment & outreach tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Daily iterations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Custom workflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Dedicated cell lead</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Custom integrations</span>
                </div>
              </div>
            </div>
            
            {/* Scale */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-2">Scale</h3>
              <div className="text-3xl font-bold text-primary mb-4">$13,490/mo.</div>
              <div className="bg-primary/10 rounded-lg px-3 py-1 mb-4 inline-block">
                <span className="text-primary font-semibold text-sm">24k contacts/month</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">3 BDRs (full-time)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Part-time AI operator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Premium email infrastructure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Premium enrichment & outreach suite</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Daily iterations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Custom workflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Dedicated cell lead</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Custom integrations</span>
                </div>
              </div>
            </div>
            
            {/* Enterprise */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-soft">
              <h3 className="text-xl font-bold text-foreground mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-primary mb-4">$16,990/mo.</div>
              <div className="bg-primary/10 rounded-lg px-3 py-1 mb-4 inline-block">
                <span className="text-primary font-semibold text-sm">30k+ contacts/month</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">4 BDRs (full-time)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Part-time AI operator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Enterprise email infrastructure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Enterprise-grade tool suite</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Daily iterations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Custom workflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Dedicated cell lead</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span className="text-muted-foreground">Custom integrations</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 rounded-3xl p-6 max-w-4xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground mb-4">
              No media spend. No extra vendor wrangling. Stack included.
            </p>
            <p className="text-lg text-muted-foreground">
              Ask for a quick scope and we'll map cell size to your revenue target and ACV.
            </p>
          </div>
          
          <Button size="lg" className="bg-gradient-primary text-primary-foreground text-lg px-8 py-4 rounded-xl shadow-elegant hover:shadow-glow transition-all duration-300" onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}>
            Map my target → cell size
          </Button>
        </div>

        {/* Staff Augmentation Alternative */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-12 border border-border/30">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Just Need Staff Augmentation?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              <strong className="text-primary">Mamut Talent</strong> is our alternative for companies who prefer simple staff augmentation. 
              Elite Latin American BDRs who integrate directly as your team members—no embedded operations, just great talent.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-white font-bold text-xl">🎓</span>
                </div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Elite Talent Pool</h4>
                <p className="text-muted-foreground leading-relaxed">Top 150 Latin American universities with C1/C2 English and proven business acumen.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-white font-bold text-xl">💰</span>
                </div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Simple Pricing</h4>
                <p className="text-muted-foreground leading-relaxed">Starting at $2,500/month per BDR. All-inclusive with no hidden fees or overhead.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <span className="text-white font-bold text-xl">⚡</span>
                </div>
                <h4 className="font-bold text-xl mb-3 text-foreground">Quick Deployment</h4>
                <p className="text-muted-foreground leading-relaxed">Pre-trained BDRs ready in 7-14 days. Your management, your processes.</p>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Perfect for teams who:</strong> Already have outbound processes, want to manage their own BDRs, 
                or prefer traditional staff augmentation over embedded operations.
              </p>
            </div>

            <Button size="lg" variant="outline" className="text-lg px-8 py-4 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" onClick={() => window.open('/one-pagers/mamut-talent', '_blank')}>
              Explore Mamut Talent Staff Augmentation →
            </Button>
          </div>
        </div>
      </div>
    </section>;
};