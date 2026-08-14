import React from 'react';
import Link from 'next/link';
import PartnersMarquee from '../components/PartnersMarquee';
import { ArrowRight, ArrowUpRight, Quote } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
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
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-xs font-semibold text-clay-foreground transition-opacity hover:opacity-90 sm:text-sm"
              >
                <span>Book a consult</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
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
                fetchPriority="high"
                decoding="async"
                className="h-48 w-full object-cover sm:h-60 lg:h-56"
              />
            </div>

            {/* Bottom 2x2 Stats Surface Card */}
            <div className="surface grid grid-cols-2 gap-y-4 gap-x-3 p-4 text-center sm:p-5 sm:gap-x-4">
              <div className="flex flex-col items-center justify-center">
                <div className="font-display text-xl font-bold text-clay sm:text-2xl lg:text-3xl">50+</div>
                <div className="mt-0.5 text-[0.7rem] font-semibold text-foreground sm:text-xs leading-tight">Projects delivered</div>
                <div className="mt-0.5 text-[0.6rem] text-muted-foreground leading-tight sm:text-[0.68rem]">Across 10 countries</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="font-display text-xl font-bold text-clay sm:text-2xl lg:text-3xl">100+</div>
                <div className="mt-0.5 text-[0.7rem] font-semibold text-foreground sm:text-xs leading-tight">Hospitality partners</div>
                <div className="mt-0.5 text-[0.6rem] text-muted-foreground leading-tight sm:text-[0.68rem]">Hotels, resorts &amp; restaurants</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="font-display text-xl font-bold text-clay sm:text-2xl lg:text-3xl">25+</div>
                <div className="mt-0.5 text-[0.7rem] font-semibold text-foreground sm:text-xs leading-tight">Years experience</div>
                <div className="mt-0.5 text-[0.6rem] text-muted-foreground leading-tight sm:text-[0.68rem]">Combined team expertise</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="font-display text-xl font-bold text-clay sm:text-2xl lg:text-3xl">10+</div>
                <div className="mt-0.5 text-[0.7rem] font-semibold text-foreground sm:text-xs leading-tight">Countries served</div>
                <div className="mt-0.5 text-[0.6rem] text-muted-foreground leading-tight sm:text-[0.68rem]">From India to the Middle East</div>
              </div>
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
            href="/staff-development"
            className="group surface flex flex-col justify-between overflow-hidden p-0 transition-colors duration-200 hover:border-clay hover:shadow-lift lg:col-span-2"
          >
            <div className="h-48 w-full overflow-hidden sm:h-64">
              <img
                src="/images/staff-hero.jpg"
                alt="Staffing & Recruitment"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-clay">01</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-clay" />
                </div>
                <h3 className="mt-3 font-display text-lg sm:text-2xl">Staffing &amp; Recruitment</h3>
                <p className="mt-1 text-xs text-muted-foreground">HR &amp; talent management</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">We source, train and retain exceptional hospitality talent — from executive leadership to front-line service teams. Our proven frameworks reduce hiring time by 40% while improving cultural fit and service consistency.</p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-medium text-clay">
                <span>Explore practice</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>

          <Link
            href="/growth-strategy"
            className="group surface flex flex-col justify-between overflow-hidden p-0 transition-colors duration-200 hover:border-clay hover:shadow-lift"
          >
            <div className="h-48 w-full overflow-hidden sm:h-64">
              <img
                src="/images/business-hero.jpg"
                alt="Business Consultation"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-clay">02</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-clay" />
                </div>
                <h3 className="mt-3 font-display text-lg sm:text-xl">Business Consultation</h3>
                <p className="mt-1 text-xs text-muted-foreground">Strategic growth &amp; operations</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">Data-driven strategy consulting that moves the needle on RevPAR, average cover, and operational margin. We build the financial models, operating plans and performance dashboards that owners and investors actually use.</p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-medium text-clay">
                <span>Explore practice</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>

          <Link
            href="/franchise"
            className="group surface flex flex-col justify-between overflow-hidden p-0 transition-colors duration-200 hover:border-clay hover:shadow-lift"
          >
            <div className="h-48 w-full overflow-hidden sm:h-64">
              <img
                src="/images/franchise-hero.jpg"
                alt="Franchise Consultation"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-clay">03</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-clay" />
                </div>
                <h3 className="mt-3 font-display text-lg sm:text-xl">Franchise Consultation</h3>
                <p className="mt-1 text-xs text-muted-foreground">Franchise setup &amp; expansion</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">End-to-end franchise development: concept documentation, unit economics, operator screening and multi-site quality assurance. We help you scale without diluting the brand experience.</p>
              </div>
              <div className="mt-5 flex items-center gap-1 text-xs font-medium text-clay">
                <span>Explore practice</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>

          <Link
            href="/brand-excellence"
            className="group surface flex flex-col justify-between overflow-hidden p-0 transition-colors duration-200 hover:border-clay hover:shadow-lift lg:col-span-2"
          >
            <div className="h-48 w-full overflow-hidden sm:h-64">
              <img
                src="/images/branding-hero.jpg"
                alt="Marketing & Branding"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold text-clay">04</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-clay" />
                </div>
                <h3 className="mt-3 font-display text-lg sm:text-2xl">Marketing &amp; Branding</h3>
                <p className="mt-1 text-xs text-muted-foreground">Brand strategy &amp; excellence</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">Positioning, visual identity, digital presence and guest experience design that commands premium rates. We transform properties into destinations that guests seek out and return to.</p>
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
                src="/images/case-study-coastal.jpg"
                alt="A 240-key resort turnaround in eleven months"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="surface flex flex-col justify-between p-6 sm:p-10">
              <div>
                <span className="eyebrow text-clay">FEATURED CASE STUDY</span>
                <h2 className="mt-3 font-display text-xl sm:text-3xl leading-tight">
                  A 240-key resort turnaround in eleven months
                </h2>
                <p className="mt-1.5 text-xs text-muted-foreground">Luxury Resort · Goa</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Rebuilt the operating model, retrained the service brigade and repositioned the property in the premium leisure segment.
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <div>
                    <div className="font-display text-lg font-bold text-clay sm:text-2xl">+38%</div>
                    <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">RevPAR</div>
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold text-clay sm:text-2xl">-22%</div>
                    <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">Staff attrition</div>
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold text-clay sm:text-2xl">4.8</div>
                    <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">Guest rating</div>
                  </div>
                </div>

                <Link
                  href="/case-studies"
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
              src="/images/why-mody-resort.jpg"
              alt="Luxury hotel resort exterior"
              className="h-60 w-full object-cover sm:h-96 lg:h-[28rem]"
            />
          </div>

          <div>
            <span className="eyebrow text-clay">WHY MODY CONSULTANTS</span>
            <h2 className="mt-2 font-display text-2xl sm:text-4xl">Expertise refined through excellence</h2>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-base">
              We combine deep operational experience with commercial rigor. Having managed flagship properties and international restaurant groups, our partners bring practical, high-impact strategies tailored to your exact market context.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
              <div className="surface p-4 sm:p-5">
                <h3 className="font-display text-sm font-semibold sm:text-base">Outcome-driven strategy</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">Focus on metrics that directly impact your P&amp;L.</p>
              </div>
              <div className="surface p-4 sm:p-5">
                <h3 className="font-display text-sm font-semibold sm:text-base">Hands-on execution</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">We work alongside your leadership team on the ground.</p>
              </div>
              <div className="surface p-4 sm:p-5">
                <h3 className="font-display text-sm font-semibold sm:text-base">Bespoke solutions</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">No cookie-cutter templates or generic playbooks.</p>
              </div>
              <div className="surface p-4 sm:p-5">
                <h3 className="font-display text-sm font-semibold sm:text-base">Enduring impact</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">Systems built for long-term operational autonomy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Client Stories Section */}
      <section className="border-t border-border bg-muted/30 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <span className="eyebrow text-clay">CLIENT STORIES</span>
          <div className="grid gap-4 mt-6 sm:mt-8 lg:grid-cols-3">
            <figure className="surface flex flex-col justify-between p-6 sm:p-7">
              <div>
                <Quote className="h-5 w-5 text-clay" />
                <blockquote className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  "Mody rebuilt our service culture from the floor up. Within a year we were outperforming properties twice our size."
                </blockquote>
              </div>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="text-xs font-medium sm:text-sm">Anita Raval</div>
                <div className="text-[0.7rem] text-muted-foreground sm:text-xs">General Manager, Coastal Resort Group</div>
              </figcaption>
            </figure>

            <figure className="surface flex flex-col justify-between p-6 sm:p-7">
              <div>
                <Quote className="h-5 w-5 text-clay" />
                <blockquote className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  "The clarity of their operating playbook is what made our five-city rollout possible without diluting the brand."
                </blockquote>
              </div>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="text-xs font-medium sm:text-sm">Dev Suri</div>
                <div className="text-[0.7rem] text-muted-foreground sm:text-xs">Founder, Veranda Hotels</div>
              </figcaption>
            </figure>

            <figure className="surface flex flex-col justify-between p-6 sm:p-7">
              <div>
                <Quote className="h-5 w-5 text-clay" />
                <blockquote className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  "Menu engineering alone paid for the engagement in a quarter. The team is precise, calm and deeply commercial."
                </blockquote>
              </div>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="text-xs font-medium sm:text-sm">Chef Marco Bene</div>
                <div className="text-[0.7rem] text-muted-foreground sm:text-xs">Culinary Director, Atelier Dining</div>
              </figcaption>
            </figure>
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
              <div className="surface flex items-start gap-3.5 p-4 sm:p-5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clay/10 font-display text-xs font-semibold text-clay sm:h-8 sm:w-8">
                  01
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold sm:text-base">Diagnostic &amp; Audit</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">We analyze your operations, financial models, and guest touchpoints to uncover key growth drivers.</p>
                </div>
              </div>

              <div className="surface flex items-start gap-3.5 p-4 sm:p-5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clay/10 font-display text-xs font-semibold text-clay sm:h-8 sm:w-8">
                  02
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold sm:text-base">Strategy &amp; Roadmap</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">We develop a custom action plan with clear KPIs, financial targets, and operational milestones.</p>
                </div>
              </div>

              <div className="surface flex items-start gap-3.5 p-4 sm:p-5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clay/10 font-display text-xs font-semibold text-clay sm:h-8 sm:w-8">
                  03
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold sm:text-base">Implementation &amp; Training</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">We embed with your team to execute changes, update SOPs, and train leadership.</p>
                </div>
              </div>

              <div className="surface flex items-start gap-3.5 p-4 sm:p-5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clay/10 font-display text-xs font-semibold text-clay sm:h-8 sm:w-8">
                  04
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold sm:text-base">Handover &amp; Governance</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">We establish monitoring systems and handover ownership to ensure sustained performance.</p>
                </div>
              </div>
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
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs font-medium text-clay hover:underline">
              <span>View all articles</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="surface flex flex-col justify-between p-6 sm:p-7">
              <div>
                <span className="eyebrow text-clay">OPERATIONS</span>
                <h3 className="mt-3 font-display text-base font-medium leading-snug sm:text-lg">Maximising revenue through operational excellence</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">How streamlined operations lift both profitability and guest satisfaction scores.</p>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>6 min read</span>
                <Link href="/contact" className="font-medium text-clay hover:underline">
                  Read article
                </Link>
              </div>
            </div>

            <div className="surface flex flex-col justify-between p-6 sm:p-7">
              <div>
                <span className="eyebrow text-clay">PEOPLE</span>
                <h3 className="mt-3 font-display text-base font-medium leading-snug sm:text-lg">Building a world-class hospitality team</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Hiring, training and retention strategies that turn your workforce into an advantage.</p>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>8 min read</span>
                <Link href="/contact" className="font-medium text-clay hover:underline">
                  Read article
                </Link>
              </div>
            </div>

            <div className="surface flex flex-col justify-between p-6 sm:p-7">
              <div>
                <span className="eyebrow text-clay">BRAND</span>
                <h3 className="mt-3 font-display text-base font-medium leading-snug sm:text-lg">Positioning your property as a luxury destination</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">From brand identity to guest experience design — the blueprint for premium rates.</p>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>5 min read</span>
                <Link href="/contact" className="font-medium text-clay hover:underline">
                  Read article
                </Link>
              </div>
            </div>
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
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-2.5 text-xs font-medium text-foreground transition-opacity hover:opacity-90 sm:px-7 sm:py-3 sm:text-sm"
            >
              Book a consult <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-clay-foreground/30 px-6 py-2.5 text-xs font-medium text-clay-foreground transition-opacity hover:bg-clay-foreground/10 sm:px-7 sm:py-3 sm:text-sm"
            >
              View case studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
