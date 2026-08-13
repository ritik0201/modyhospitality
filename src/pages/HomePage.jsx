import React from 'react';
import { Link } from 'react-router-dom';
import PartnersMarquee from './PartnersMarquee';
import { ArrowRight, ArrowUpRight, Quote } from 'lucide-react';

const heroStats = [
  { value: "50+", title: "Projects delivered", desc: "Across 10 countries" },
  { value: "100+", title: "Hospitality partners", desc: "Hotels, resorts & restaurants" },
  { value: "25+", title: "Years experience", desc: "Combined team expertise" },
  { value: "10+", title: "Countries served", desc: "From India to the Middle East" }
];

const services = [
  {
    to: "/staff-development",
    icon: "01",
    title: "Staffing & Recruitment",
    desc: "HR & talent management",
    full: "We source, train and retain exceptional hospitality talent — from executive leadership to front-line service teams. Our proven frameworks reduce hiring time by 40% while improving cultural fit and service consistency.",
    image: "/images/staff-hero.jpg"
  },
  {
    to: "/growth-strategy",
    icon: "02",
    title: "Business Consultation",
    desc: "Strategic growth & operations",
    full: "Data-driven strategy consulting that moves the needle on RevPAR, average cover, and operational margin. We build the financial models, operating plans and performance dashboards that owners and investors actually use.",
    image: "/images/business-hero.jpg"
  },
  {
    to: "/franchise",
    icon: "03",
    title: "Franchise Consultation",
    desc: "Franchise setup & expansion",
    full: "End-to-end franchise development: concept documentation, unit economics, operator screening and multi-site quality assurance. We help you scale without diluting the brand experience.",
    image: "/images/franchise-hero.jpg"
  },
  {
    to: "/brand-excellence",
    icon: "04",
    title: "Marketing & Branding",
    desc: "Brand strategy & excellence",
    full: "Positioning, visual identity, digital presence and guest experience design that commands premium rates. We transform properties into destinations that guests seek out and return to.",
    image: "/images/branding-hero.jpg"
  }
];

const featuredCaseStudy = {
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
};

const pillarsData = {
  description: "We combine deep operational experience with commercial rigor. Having managed flagship properties and international restaurant groups, our partners bring practical, high-impact strategies tailored to your exact market context.",
  image: "/images/why-mody-resort.jpg",
  items: [
    { title: "Outcome-driven strategy", desc: "Focus on metrics that directly impact your P&L." },
    { title: "Hands-on execution", desc: "We work alongside your leadership team on the ground." },
    { title: "Bespoke solutions", desc: "No cookie-cutter templates or generic playbooks." },
    { title: "Enduring impact", desc: "Systems built for long-term operational autonomy." }
  ]
};

const testimonials = [
  {
    quote: "Mody rebuilt our service culture from the floor up. Within a year we were outperforming properties twice our size.",
    name: "Anita Raval",
    role: "General Manager, Coastal Resort Group"
  },
  {
    quote: "The clarity of their operating playbook is what made our five-city rollout possible without diluting the brand.",
    name: "Dev Suri",
    role: "Founder, Veranda Hotels"
  },
  {
    quote: "Menu engineering alone paid for the engagement in a quarter. The team is precise, calm and deeply commercial.",
    name: "Chef Marco Bene",
    role: "Culinary Director, Atelier Dining"
  }
];

const processSteps = [
  {
    num: "01",
    title: "Diagnostic & Audit",
    desc: "We analyze your operations, financial models, and guest touchpoints to uncover key growth drivers."
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    desc: "We develop a custom action plan with clear KPIs, financial targets, and operational milestones."
  },
  {
    num: "03",
    title: "Implementation & Training",
    desc: "We embed with your team to execute changes, update SOPs, and train leadership."
  },
  {
    num: "04",
    title: "Handover & Governance",
    desc: "We establish monitoring systems and handover ownership to ensure sustained performance."
  }
];

const insights = [
  {
    tag: "OPERATIONS",
    title: "Maximising revenue through operational excellence",
    body: "How streamlined operations lift both profitability and guest satisfaction scores.",
    read: "6 min read"
  },
  {
    tag: "PEOPLE",
    title: "Building a world-class hospitality team",
    body: "Hiring, training and retention strategies that turn your workforce into an advantage.",
    read: "8 min read"
  },
  {
    tag: "BRAND",
    title: "Positioning your property as a luxury destination",
    body: "From brand identity to guest experience design — the blueprint for premium rates.",
    read: "5 min read"
  }
];

const HomePage = () => {
  return (
    <div>
      {/* 1. Hero Section - Exact Match with Reference Image */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="animate-rise grid gap-4 lg:grid-cols-[1.38fr_0.62fr] lg:items-stretch">
          
          {/* Left Main Surface Card */}
          <div className="surface flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <span className="eyebrow text-clay tracking-[0.2em] font-semibold text-[0.7rem] uppercase">
                HOSPITALITY CONSULTANTS
              </span>
              <h1 className="mt-5 font-display text-3xl font-medium leading-[1.12] sm:text-5xl lg:text-[3.25rem] text-foreground">
                Quiet Precision Behind<br className="hidden sm:inline" /> Remarkable Hospitality.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                We partner with luxury hotels, resorts and fine-dining groups to sharpen operations, build teams and grow revenue — without noise.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-xs font-semibold text-clay-foreground transition-opacity hover:opacity-90 sm:text-sm"
              >
                <span>Book a consult</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-6 py-3 text-xs font-semibold text-foreground transition-colors hover:bg-muted sm:text-sm"
              >
                See our work
              </Link>
            </div>
          </div>

          {/* Right Side: Image + Stat Card Grid */}
          <div className="grid gap-4">
            
            {/* Top Image Card */}
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src="/images/hero-poolside.jpg"
                alt="Luxury resort pool deck and thatched lodge"
                width="800"
                height="600"
                fetchpriority="high"
                decoding="async"
                className="h-48 w-full object-cover sm:h-60 lg:h-56"
              />
            </div>

            {/* Bottom 2x2 Stats Surface Card */}
            <div className="surface grid grid-cols-2 gap-y-4 gap-x-3 p-4 text-center sm:p-5 sm:gap-x-4">
              {heroStats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <div className="font-display text-xl font-bold text-clay sm:text-2xl lg:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[0.7rem] font-semibold text-foreground sm:text-xs leading-tight">
                    {stat.title}
                  </div>
                  <div className="mt-0.5 text-[0.6rem] text-muted-foreground leading-tight sm:text-[0.68rem]">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 2. Practice Areas Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow text-clay">PRACTICE AREAS</span>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl">Four disciplines, one standard</h2>
          </div>
          <p className="max-w-md text-xs text-muted-foreground sm:text-base">
            Four targeted practices engineered to improve margins, raise service standards and build enterprise value.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Link
            to={services[0].to}
            className="group surface flex flex-col justify-between overflow-hidden p-0 transition-colors duration-200 hover:border-clay hover:shadow-lift lg:col-span-2"
          >
            <div className="h-48 w-full overflow-hidden sm:h-64">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-clay">{services[0].icon}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-clay" />
                </div>
                <h3 className="mt-3 font-display text-lg sm:text-2xl">{services[0].title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{services[0].desc}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">{services[0].full}</p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-medium text-clay">
                <span>Explore practice</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>

          <Link
            to={services[1].to}
            className="group surface flex flex-col justify-between overflow-hidden p-0 transition-colors duration-200 hover:border-clay hover:shadow-lift"
          >
            <div className="h-48 w-full overflow-hidden sm:h-64">
              <img
                src={services[1].image}
                alt={services[1].title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-clay">{services[1].icon}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-clay" />
                </div>
                <h3 className="mt-3 font-display text-lg sm:text-xl">{services[1].title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{services[1].desc}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">{services[1].full}</p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-medium text-clay">
                <span>Explore practice</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>

          <Link
            to={services[2].to}
            className="group surface flex flex-col justify-between overflow-hidden p-0 transition-colors duration-200 hover:border-clay hover:shadow-lift"
          >
            <div className="h-48 w-full overflow-hidden sm:h-64">
              <img
                src={services[2].image}
                alt={services[2].title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-clay">{services[2].icon}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-clay" />
                </div>
                <h3 className="mt-3 font-display text-lg sm:text-xl">{services[2].title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{services[2].desc}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">{services[2].full}</p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-medium text-clay">
                <span>Explore practice</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>

          <Link
            to={services[3].to}
            className="group surface flex flex-col justify-between overflow-hidden p-0 transition-colors duration-200 hover:border-clay hover:shadow-lift lg:col-span-2"
          >
            <div className="h-48 w-full overflow-hidden sm:h-64">
              <img
                src={services[3].image}
                alt={services[3].title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-clay">{services[3].icon}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-clay" />
                </div>
                <h3 className="mt-3 font-display text-lg sm:text-2xl">{services[3].title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{services[3].desc}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">{services[3].full}</p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-medium text-clay">
                <span>Explore practice</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Featured Case Study Section */}
      <section className="border-t border-border bg-muted/30 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
            <div className="overflow-hidden rounded-3xl border border-border min-h-[240px] sm:min-h-[300px] lg:min-h-[420px]">
              <img
                src={featuredCaseStudy.image}
                alt={featuredCaseStudy.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="surface flex flex-col justify-between p-6 sm:p-10">
              <div>
                <span className="eyebrow text-clay">FEATURED CASE STUDY</span>
                <h2 className="mt-3 font-display text-xl sm:text-3xl leading-tight">
                  {featuredCaseStudy.title}
                </h2>
                <p className="mt-1.5 text-xs text-muted-foreground">{featuredCaseStudy.sector}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {featuredCaseStudy.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {featuredCaseStudy.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-lg font-bold text-clay sm:text-2xl">{m.value}</div>
                      <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">{m.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/case-studies"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-clay hover:underline"
                >
                  <span>Read full case study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Mody Consultants Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={pillarsData.image}
              alt="Luxury hotel resort exterior"
              className="h-60 w-full object-cover sm:h-96 lg:h-[28rem]"
            />
          </div>

          <div>
            <span className="eyebrow text-clay">WHY MODY CONSULTANTS</span>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl">Expertise refined through excellence</h2>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-base">
              {pillarsData.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {pillarsData.items.map((item, idx) => (
                <div key={idx} className="surface p-4 sm:p-5">
                  <h3 className="font-display text-sm font-semibold sm:text-base">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Client Stories Section */}
      <section className="border-t border-border bg-muted/30 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="eyebrow text-clay">CLIENT STORIES</span>
          <div className="grid gap-4 mt-6 sm:mt-8 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="surface flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <Quote className="h-5 w-5 text-clay" />
                  <blockquote className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    "{t.quote}"
                  </blockquote>
                </div>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="text-xs font-medium sm:text-sm">{t.name}</div>
                  <div className="text-[0.7rem] text-muted-foreground sm:text-xs">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Approach Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src="/images/approach-meeting.jpg"
              alt="Consultants in board meeting"
              className="h-60 w-full object-cover sm:h-96 lg:h-[28rem]"
            />
          </div>

          <div>
            <span className="eyebrow text-clay">OUR APPROACH</span>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl">A process built for results</h2>

            <div className="mt-6 space-y-3 sm:space-y-4">
              {processSteps.map((step) => (
                <div key={step.num} className="surface flex items-start gap-3.5 p-4 sm:p-5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clay/10 font-display text-xs font-semibold text-clay sm:h-8 sm:w-8">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold sm:text-base">{step.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Latest Insights Section */}
      <section className="border-t border-border bg-muted/30 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow text-clay">PERSPECTIVES</span>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl">Latest insights</h2>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-medium text-clay hover:underline">
              <span>View all articles</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((item) => (
              <div key={item.title} className="surface flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <span className="eyebrow text-clay">{item.tag}</span>
                  <h3 className="mt-3 font-display text-base font-medium leading-snug sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>{item.read}</span>
                  <Link to="/contact" className="font-medium text-clay hover:underline">
                    Read article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Partnerships & Track Record Section */}
      <PartnersMarquee />

      {/* 9. CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-10">
        <div className="surface bg-clay p-7 text-center sm:p-14">
          <h2 className="font-display text-xl text-clay-foreground sm:text-4xl">
            Ready to transform your property?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs text-clay-foreground/80 sm:text-sm">
            Tell us where you are today. We will come back with a candid view of what is possible — no pitch, no obligation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-2.5 text-xs font-medium text-foreground transition-opacity hover:opacity-90 sm:px-7 sm:py-3 sm:text-sm"
            >
              Book a consult <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-clay-foreground/30 px-6 py-2.5 text-xs font-medium text-clay-foreground transition-opacity hover:bg-clay-foreground/10 sm:px-7 sm:py-3 sm:text-sm"
            >
              View case studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
