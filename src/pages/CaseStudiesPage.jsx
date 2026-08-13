import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    slug: "coastal-resort-turnaround",
    client: "Coastal Resort Group",
    sector: "Luxury Resort · Goa",
    title: "A 240-key resort turnaround in eleven months",
    summary: "Rebuilt the operating model, retrained the service brigade and repositioned the property in the premium leisure segment.",
    metrics: [
      { value: "+38%", label: "RevPAR" },
      { value: "-22%", label: "Staff attrition" },
      { value: "4.8", label: "Guest rating" }
    ],
    image: "/images/case-study-coastal.jpg"
  },
  {
    slug: "fine-dining-launch",
    client: "Atelier Dining",
    sector: "Fine Dining · Mumbai",
    title: "Launching a chef-led restaurant to a full book",
    summary: "Concept development, menu engineering and a launch plan that filled the reservation book from week one.",
    metrics: [
      { value: "92%", label: "Seat occupancy" },
      { value: "+31%", label: "Average cover" },
      { value: "6 wks", label: "To profitability" }
    ],
    image: "/images/case-study-atelier.jpg"
  },
  {
    slug: "boutique-franchise-rollout",
    client: "Veranda Hotels",
    sector: "Boutique Franchise · Pan-India",
    title: "Franchise playbook for a five-city rollout",
    summary: "Built the operating manuals, partner vetting framework and training academy behind a controlled expansion.",
    metrics: [
      { value: "5", label: "Cities opened" },
      { value: "18 mo", label: "Rollout window" },
      { value: "100%", label: "Standards audit" }
    ],
    image: "/images/branding-hero.jpg"
  },
  {
    slug: "heritage-brand-refresh",
    client: "Rajmahal Heritage",
    sector: "Heritage Palace Hotel · Jaipur",
    title: "Repositioning a heritage palace for global travellers",
    summary: "A brand refresh, guest journey redesign and distribution strategy aimed at international luxury demand.",
    metrics: [
      { value: "+54%", label: "Direct bookings" },
      { value: "+2.1x", label: "Media reach" },
      { value: "+27%", label: "ADR" }
    ],
    image: "/images/case-study-heritage.jpg"
  }
];

const CaseStudiesPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="border-b border-border bg-muted/30">
        <div className="animate-rise mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
          <span className="eyebrow text-clay">SELECTED WORK</span>
          <h1 className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl">Results, measured in the only numbers that matter</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            A sample of engagements across resorts, fine dining and franchise groups — each one handed back to a team that could run it without us.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="grid gap-4 lg:grid-cols-2">
          {caseStudies.map((item) => (
            <article key={item.slug} className="surface flex flex-col overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
                className="h-48 w-full object-cover sm:h-60"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="eyebrow text-clay">{item.client}</span>
                <p className="mt-1 text-xs text-muted-foreground">{item.sector}</p>
                <h2 className="mt-3 font-display text-lg sm:text-2xl">{item.title}</h2>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{item.summary}</p>
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-5 sm:gap-4">
                  {item.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-base font-bold text-clay sm:text-xl">{m.value}</div>
                      <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="surface mt-10 flex flex-col items-center gap-4 p-7 text-center sm:mt-12 sm:gap-5 sm:p-12">
          <h3 className="font-display text-lg sm:text-2xl">Have a property with similar ambitions?</h3>
          <p className="max-w-xl text-xs text-muted-foreground sm:text-sm">
            We only take on engagements where we can define clear, measurable impact from day one.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-2.5 text-xs font-medium text-clay-foreground transition-opacity hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
          >
            Discuss a potential engagement <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
