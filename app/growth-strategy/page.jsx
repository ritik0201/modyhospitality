import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export const metadata = {
  title: 'Business Consultation & RevPAR Strategy | Mody Hospitality Consultants',
  description: 'Strategic growth, financial modelling, menu engineering, and operational advisory for luxury hotels, resorts, and restaurant groups.',
};

export default function GrowthStrategyPage() {
  return (
    <div>
      {/* Section 1: Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-16">
        <div className="animate-rise grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="eyebrow text-clay">BUSINESS CONSULTATION</span>
            <h1 className="mt-4 font-display text-3xl leading-tight sm:text-5xl lg:text-6xl">
              Strategy that shows up on the P&amp;L
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              Strategic growth and operational advisory for owners who measure success in occupancy, covers and margin.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay px-5 py-3 text-xs font-medium text-clay-foreground transition-opacity hover:opacity-90 sm:px-6 sm:text-sm"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src="/images/business-hero.jpg"
              alt="Minimalist modern office interior"
              loading="lazy"
              decoding="async"
              width="1600"
              height="1000"
              className="h-56 w-full object-cover sm:h-80 lg:h-[26rem]"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Overview / Description with Image */}
      <section className="border-y border-border bg-muted/30 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="text-xs leading-relaxed text-muted-foreground sm:text-base space-y-4">
              <p>
                We help hospitality owners and operators make smarter decisions — whether you are repositioning a flagship property, optimising an existing operation or planning a new venture. Every recommendation is grounded in data and tested against real market conditions.
              </p>
              <p>
                Our consultants bring hands-on experience running hotels and restaurants, so you get practical advice that works in the real world, not theoretical frameworks that look good on paper.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src="/images/loft-workspace.jpg"
                alt="Business team collaborating in modern loft workspace"
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
                className="h-56 w-full object-cover sm:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Approach / What We Deliver */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <span className="eyebrow text-clay">OUR APPROACH</span>
        <h2 className="mt-2 font-display text-2xl sm:text-4xl">What we deliver</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="surface p-6 sm:p-9">
            <h3 className="font-display text-lg font-semibold sm:text-xl">Feasibility &amp; Concept</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">Market studies, competitive analysis and concept validation before capital is committed.</p>
          </div>
          <div className="surface p-6 sm:p-9">
            <h3 className="font-display text-lg font-semibold sm:text-xl">Revenue Management</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">Rate strategy, channel mix optimisation and menu engineering to lift RevPAR and average spend.</p>
          </div>
          <div className="surface p-6 sm:p-9">
            <h3 className="font-display text-lg font-semibold sm:text-xl">Operational Audits</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">End-to-end reviews of SOPs, staffing ratios, procurement processes and guest journey mapping.</p>
          </div>
          <div className="surface p-6 sm:p-9">
            <h3 className="font-display text-lg font-semibold sm:text-xl">Cost Optimisation</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">Supplier renegotiation, wastage control and energy efficiency programmes that protect margin.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Key Features / Everything You Need */}
      <section className="border-t border-border bg-muted/30 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src="/images/business-hero.jpg"
                alt="Modern corporate office interior"
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
                className="h-60 w-full object-cover sm:h-96 lg:h-[28rem]"
              />
            </div>

            <div>
              <span className="eyebrow text-clay">KEY FEATURES</span>
              <h2 className="mt-2 font-display text-2xl sm:text-4xl">Everything you need</h2>
              <div className="mt-6 space-y-2.5 sm:space-y-3">
                <div className="surface flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                  <Check className="h-4 w-4 shrink-0 text-clay" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">Custom financial modelling &amp; sensitivity analysis</span>
                </div>
                <div className="surface flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                  <Check className="h-4 w-4 shrink-0 text-clay" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">Competitive benchmarking against market peers</span>
                </div>
                <div className="surface flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                  <Check className="h-4 w-4 shrink-0 text-clay" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">Revenue management system selection &amp; setup</span>
                </div>
                <div className="surface flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                  <Check className="h-4 w-4 shrink-0 text-clay" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">Menu engineering &amp; pricing optimisation</span>
                </div>
                <div className="surface flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                  <Check className="h-4 w-4 shrink-0 text-clay" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">Procurement audit &amp; vendor negotiation support</span>
                </div>
                <div className="surface flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                  <Check className="h-4 w-4 shrink-0 text-clay" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">Monthly KPI dashboards &amp; performance reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Guaranteed Results / Outcomes You Can Expect */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <span className="eyebrow text-clay">GUARANTEED RESULTS</span>
        <h2 className="mt-2 font-display text-2xl sm:text-4xl">Outcomes you can expect</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
          <div className="surface flex items-center gap-3.5 p-5 sm:p-6">
            <Check className="h-4 w-4 shrink-0 text-clay sm:h-5 sm:w-5" />
            <span className="text-xs font-medium text-foreground sm:text-sm">Clear, data-backed growth roadmap</span>
          </div>
          <div className="surface flex items-center gap-3.5 p-5 sm:p-6">
            <Check className="h-4 w-4 shrink-0 text-clay sm:h-5 sm:w-5" />
            <span className="text-xs font-medium text-foreground sm:text-sm">Improved RevPAR and average cover value</span>
          </div>
          <div className="surface flex items-center gap-3.5 p-5 sm:p-6">
            <Check className="h-4 w-4 shrink-0 text-clay sm:h-5 sm:w-5" />
            <span className="text-xs font-medium text-foreground sm:text-sm">Leaner cost base without service compromise</span>
          </div>
          <div className="surface flex items-center gap-3.5 p-5 sm:p-6">
            <Check className="h-4 w-4 shrink-0 text-clay sm:h-5 sm:w-5" />
            <span className="text-xs font-medium text-foreground sm:text-sm">Reporting owners can actually act on</span>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-10">
        <div className="surface bg-clay p-7 text-center sm:p-14">
          <h2 className="font-display text-xl text-clay-foreground sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs text-clay-foreground/80 sm:text-sm">
            Tell us about your property and we will come back with a candid read of what is possible.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-2.5 text-xs font-medium text-foreground transition-opacity hover:opacity-90 sm:px-7 sm:py-3 sm:text-sm"
          >
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
