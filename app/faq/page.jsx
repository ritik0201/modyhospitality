'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Quote, ArrowRight } from 'lucide-react';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="border-b border-border bg-muted/30">
        <div className="animate-rise mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
          <span className="eyebrow text-clay">TRUST &amp; ANSWERS</span>
          <h1 className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl">What clients say — and what you're probably wondering</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Honest words from operators we've worked with, followed by the questions we're asked most often before an engagement begins.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="grid gap-4 lg:grid-cols-3">
          <figure className="surface flex flex-col p-6 sm:p-7">
            <Quote className="h-5 w-5 text-clay" />
            <blockquote className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              "Mody rebuilt our service culture from the floor up. Within a year we were outperforming properties twice our size."
            </blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <div className="text-xs font-medium sm:text-sm">Anita Raval</div>
              <div className="text-[0.7rem] text-muted-foreground sm:text-xs">General Manager, Coastal Resort Group</div>
            </figcaption>
          </figure>

          <figure className="surface flex flex-col p-6 sm:p-7">
            <Quote className="h-5 w-5 text-clay" />
            <blockquote className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              "The clarity of their operating playbook is what made our five-city rollout possible without diluting the brand."
            </blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <div className="text-xs font-medium sm:text-sm">Dev Suri</div>
              <div className="text-[0.7rem] text-muted-foreground sm:text-xs">Founder, Veranda Hotels</div>
            </figcaption>
          </figure>

          <figure className="surface flex flex-col p-6 sm:p-7">
            <Quote className="h-5 w-5 text-clay" />
            <blockquote className="mt-3 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              "Menu engineering alone paid for the engagement in a quarter. The team is precise, calm and deeply commercial."
            </blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <div className="text-xs font-medium sm:text-sm">Chef Marco Bene</div>
              <div className="text-[0.7rem] text-muted-foreground sm:text-xs">Culinary Director, Atelier Dining</div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="border-t border-border bg-muted/30 py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <span className="eyebrow text-clay">FAQ</span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl">Frequently asked questions</h2>
          <div className="mt-6 w-full sm:mt-8" id="faq-accordion">
            {/* FAQ 0 */}
            <div className={`accordion-item border-b border-border ${openIndex === 0 ? 'open' : ''}`}>
              <button
                type="button"
                onClick={() => toggleFaq(0)}
                className="accordion-trigger flex w-full items-center justify-between py-4 text-left font-display text-sm sm:py-5 sm:text-base"
              >
                <span>What kinds of properties do you work with?</span>
                <ChevronDown className="chev h-4 w-4 shrink-0 text-clay transition-transform duration-200" />
              </button>
              <div className="accordion-content">
                <div>
                  <p className="pb-4 text-xs leading-relaxed text-muted-foreground sm:pb-5 sm:text-sm">
                    Luxury and boutique hotels, resorts, heritage properties, standalone fine-dining restaurants and multi-outlet F&amp;B groups. Engagements typically start at 40 keys or a single flagship outlet.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 1 */}
            <div className={`accordion-item border-b border-border ${openIndex === 1 ? 'open' : ''}`}>
              <button
                type="button"
                onClick={() => toggleFaq(1)}
                className="accordion-trigger flex w-full items-center justify-between py-4 text-left font-display text-sm sm:py-5 sm:text-base"
              >
                <span>How long does a typical engagement run?</span>
                <ChevronDown className="chev h-4 w-4 shrink-0 text-clay transition-transform duration-200" />
              </button>
              <div className="accordion-content">
                <div>
                  <p className="pb-4 text-xs leading-relaxed text-muted-foreground sm:pb-5 sm:text-sm">
                    A focused diagnostic runs four to six weeks. Full operational or brand transformations usually run six to twelve months, with a defined handover phase so your team owns the outcome.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className={`accordion-item border-b border-border ${openIndex === 2 ? 'open' : ''}`}>
              <button
                type="button"
                onClick={() => toggleFaq(2)}
                className="accordion-trigger flex w-full items-center justify-between py-4 text-left font-display text-sm sm:py-5 sm:text-base"
              >
                <span>Do you work on-site or remotely?</span>
                <ChevronDown className="chev h-4 w-4 shrink-0 text-clay transition-transform duration-200" />
              </button>
              <div className="accordion-content">
                <div>
                  <p className="pb-4 text-xs leading-relaxed text-muted-foreground sm:pb-5 sm:text-sm">
                    Both. Discovery and training are on-site by default; strategy, financial modelling and reviews run remotely on a fixed cadence so travel cost stays proportionate.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className={`accordion-item border-b border-border ${openIndex === 3 ? 'open' : ''}`}>
              <button
                type="button"
                onClick={() => toggleFaq(3)}
                className="accordion-trigger flex w-full items-center justify-between py-4 text-left font-display text-sm sm:py-5 sm:text-base"
              >
                <span>How is pricing structured?</span>
                <ChevronDown className="chev h-4 w-4 shrink-0 text-clay transition-transform duration-200" />
              </button>
              <div className="accordion-content">
                <div>
                  <p className="pb-4 text-xs leading-relaxed text-muted-foreground sm:pb-5 sm:text-sm">
                    Fixed-fee for defined scopes, retainer for ongoing advisory, and performance-linked components where the outcome is measurable — for example RevPAR or cover growth.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className={`accordion-item border-b border-border ${openIndex === 4 ? 'open' : ''}`}>
              <button
                type="button"
                onClick={() => toggleFaq(4)}
                className="accordion-trigger flex w-full items-center justify-between py-4 text-left font-display text-sm sm:py-5 sm:text-base"
              >
                <span>Can you help with pre-opening projects?</span>
                <ChevronDown className="chev h-4 w-4 shrink-0 text-clay transition-transform duration-200" />
              </button>
              <div className="accordion-content">
                <div>
                  <p className="pb-4 text-xs leading-relaxed text-muted-foreground sm:pb-5 sm:text-sm">
                    Yes. Concept definition, operating budgets, recruitment, SOP writing, vendor selection and the launch runway are all part of our pre-opening practice.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className={`accordion-item border-b border-border ${openIndex === 5 ? 'open' : ''}`}>
              <button
                type="button"
                onClick={() => toggleFaq(5)}
                className="accordion-trigger flex w-full items-center justify-between py-4 text-left font-display text-sm sm:py-5 sm:text-base"
              >
                <span>What happens after the engagement ends?</span>
                <ChevronDown className="chev h-4 w-4 shrink-0 text-clay transition-transform duration-200" />
              </button>
              <div className="accordion-content">
                <div>
                  <p className="pb-4 text-xs leading-relaxed text-muted-foreground sm:pb-5 sm:text-sm">
                    You keep every manual, model and dashboard we build. Most clients keep a light quarterly review retainer so standards hold once we step back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="surface bg-clay p-7 text-center sm:p-14">
          <h2 className="font-display text-xl text-clay-foreground sm:text-4xl">Have a question not listed here?</h2>
          <p className="mx-auto mt-3 max-w-xl text-xs text-clay-foreground/80 sm:text-sm">
            Reach out directly and our team will get back to you within one business day.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-2.5 text-xs font-medium text-foreground transition-opacity hover:opacity-90 sm:px-7 sm:py-3 sm:text-sm"
          >
            Ask us directly <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}



// import React from 'react';
// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';

// export const metadata = {
//   title: 'Case Studies & Measurable Track Record | Mody Hospitality Consultants',
//   description: 'Explore proven resort turnarounds, fine dining launches, and 5-city franchise rollouts with real RevPAR and occupancy metrics.',
// };

// export default function CaseStudiesPage() {
//   return (
//     <div>
//       {/* Hero Banner */}
//       <section className="border-b border-border bg-muted/30">
//         <div className="animate-rise mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
//           <span className="eyebrow text-clay">SELECTED WORK</span>
//           <h1 className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl">Results, measured in the only numbers that matter</h1>
//           <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
//             A sample of engagements across resorts, fine dining and franchise groups — each one handed back to a team that could run it without us.
//           </p>
//         </div>
//       </section>

//       <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
//         <div className="grid gap-4 lg:grid-cols-2">
//           {/* Case Study 1 */}
//           <article className="surface flex flex-col overflow-hidden">
//             <img
//               src="/images/case-study-coastal.webp"
//               alt="A 240-key resort turnaround in eleven months"
//               loading="lazy"
//               decoding="async"
//               width="1200"
//               height="800"
//               className="h-48 w-full object-cover sm:h-60"
//             />
//             <div className="flex flex-1 flex-col p-6 sm:p-7">
//               <span className="eyebrow text-clay">Coastal Resort Group</span>
//               <p className="mt-1 text-xs text-muted-foreground">Luxury Resort · Goa</p>
//               <h2 className="mt-3 font-display text-lg sm:text-2xl">A 240-key resort turnaround in eleven months</h2>
//               <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">Rebuilt the operating model, retrained the service brigade and repositioned the property in the premium leisure segment.</p>
//               <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-5 sm:gap-4">
//                 <div>
//                   <div className="font-display text-base font-bold text-clay sm:text-xl">+38%</div>
//                   <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">RevPAR</div>
//                 </div>
//                 <div>
//                   <div className="font-display text-base font-bold text-clay sm:text-xl">-22%</div>
//                   <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">Staff attrition</div>
//                 </div>
//                 <div>
//                   <div className="font-display text-base font-bold text-clay sm:text-xl">4.8</div>
//                   <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">Guest rating</div>
//                 </div>
//               </div>
//             </div>
//           </article>

//           {/* Case Study 2 */}
//           <article className="surface flex flex-col overflow-hidden">
//             <img
//               src="/images/case-study-atelier.webp"
//               alt="Launching a chef-led restaurant to a full book"
//               loading="lazy"
//               decoding="async"
//               width="1200"
//               height="800"
//               className="h-48 w-full object-cover sm:h-60"
//             />
//             <div className="flex flex-1 flex-col p-6 sm:p-7">
//               <span className="eyebrow text-clay">Atelier Dining</span>
//               <p className="mt-1 text-xs text-muted-foreground">Fine Dining · Mumbai</p>
//               <h2 className="mt-3 font-display text-lg sm:text-2xl">Launching a chef-led restaurant to a full book</h2>
//               <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">Concept development, menu engineering and a launch plan that filled the reservation book from week one.</p>
//               <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-5 sm:gap-4">
//                 <div>
//                   <div className="font-display text-base font-bold text-clay sm:text-xl">92%</div>
//                   <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">Seat occupancy</div>
//                 </div>
//                 <div>
//                   <div className="font-display text-base font-bold text-clay sm:text-xl">+31%</div>
//                   <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">Average cover</div>
//                 </div>
//                 <div>
//                   <div className="font-display text-base font-bold text-clay sm:text-xl">6 wks</div>
//                   <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">To profitability</div>
//                 </div>
//               </div>
//             </div>
//           </article>

//           {/* Case Study 3 */}
//           <article className="surface flex flex-col overflow-hidden">
//             <img
//               src="/images/branding-hero.webp"
//               alt="Franchise playbook for a five-city rollout"
//               loading="lazy"
//               decoding="async"
//               width="1200"
//               height="800"
//               className="h-48 w-full object-cover sm:h-60"
//             />
//             <div className="flex flex-1 flex-col p-6 sm:p-7">
//               <span className="eyebrow text-clay">Veranda Hotels</span>
//               <p className="mt-1 text-xs text-muted-foreground">Boutique Franchise · Pan-India</p>
//               <h2 className="mt-3 font-display text-lg sm:text-2xl">Franchise playbook for a five-city rollout</h2>
//               <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">Built the operating manuals, partner vetting framework and training academy behind a controlled expansion.</p>
//               <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-5 sm:gap-4">
//                 <div>
//                   <div className="font-display text-base font-bold text-clay sm:text-xl">5</div>
//                   <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">Cities opened</div>
//                 </div>
//                 <div>
//                   <div className="font-display text-base font-bold text-clay sm:text-xl">18 mo</div>
//                   <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">Rollout window</div>
//                 </div>
//                 <div>
//                   <div className="font-display text-base font-bold text-clay sm:text-xl">100%</div>
//                   <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">Standards audit</div>
//                 </div>
//               </div>
//             </div>
//           </article>

//           {/* Case Study 4 */}
//           <article className="surface flex flex-col overflow-hidden">
//             <img
//               src="/images/case-study-heritage.webp"
//               alt="Repositioning a heritage palace for global travellers"
//               loading="lazy"
//               decoding="async"
//               width="1200"
//               height="800"
//               className="h-48 w-full object-cover sm:h-60"
//             />
//             <div className="flex flex-1 flex-col p-6 sm:p-7">
//               <span className="eyebrow text-clay">Rajmahal Heritage</span>
//               <p className="mt-1 text-xs text-muted-foreground">Heritage Palace Hotel · Jaipur</p>
//               <h2 className="mt-3 font-display text-lg sm:text-2xl">Repositioning a heritage palace for global travellers</h2>
//               <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">A brand refresh, guest journey redesign and distribution strategy aimed at international luxury demand.</p>
//               <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-5 sm:gap-4">
//                 <div>
//                   <div className="font-display text-base font-bold text-clay sm:text-xl">+54%</div>
//                   <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">Direct bookings</div>
//                 </div>
//                 <div>
//                   <div className="font-display text-base font-bold text-clay sm:text-xl">+2.1x</div>
//                   <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">Media reach</div>
//                 </div>
//                 <div>
//                   <div className="font-display text-base font-bold text-clay sm:text-xl">+27%</div>
//                   <div className="mt-0.5 text-[0.65rem] text-muted-foreground sm:text-xs">ADR</div>
//                 </div>
//               </div>
//             </div>
//           </article>
//         </div>

//         <div className="surface mt-10 flex flex-col items-center gap-4 p-7 text-center sm:mt-12 sm:gap-5 sm:p-12">
//           <h3 className="font-display text-lg sm:text-2xl">Have a property with similar ambitions?</h3>
//           <p className="max-w-xl text-xs text-muted-foreground sm:text-sm">
//             We only take on engagements where we can define clear, measurable impact from day one.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-2.5 text-xs font-medium text-clay-foreground transition-opacity hover:opacity-90 sm:px-6 sm:py-3 sm:text-sm"
//           >
//             Discuss a potential engagement <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }



