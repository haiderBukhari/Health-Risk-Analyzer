import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Are you an agency?",
      answer: "No. We embed a full-time team inside your workflows and run it with full transparency."
    },
    {
      question: "Do we need to buy tools?",
      answer: "No. We bring the stack—dialer, enrichment, email infrastructure, LinkedIn execution, and a single revenue dashboard."
    },
    {
      question: "How do you measure success?",
      answer: "Pipeline added, coverage vs target, connect→meeting rate, show rate, stage conversion, cycle time, and booked revenue."
    },
    {
      question: "Can you work with our existing reps?",
      answer: "Yes. We plug in as operators: fix deliverability, refresh lists, coach live calls, and standardize the handoff to your calendar."
    },
    {
      question: "What about compliance and deliverability?",
      answer: "We manage sending domains, warmup rhythms, list hygiene, and opt-out discipline to maximize inbox placement and call connects."
    },
    {
      question: "Where are the teams based?",
      answer: "We specialize in nearshore, full-time talent aligned to US time zones."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-primary via-primary-glow to-foreground bg-clip-text text-transparent">
            FAQ
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-soft px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <button 
            className="text-lg text-primary hover:text-primary-glow transition-colors duration-300 font-medium underline decoration-primary/30 hover:decoration-primary-glow"
            onClick={() => window.open('https://calendly.com/bruno-leadmamut/30min', '_blank')}
          >
            See the operating cadence
          </button>
        </div>
      </div>
    </section>
  );
};