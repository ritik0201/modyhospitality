import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const FranchisePage = () => {
  return (
    <div>
      {/* Section 1: Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-16">
        <div className="animate-rise grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="eyebrow text-clay">FRANCHISE CONSULTATION</span>
            <h1 className="mt-4 font-display text-3xl leading-tight sm:text-5xl lg:text-6xl">
              Scale the concept, not the chaos
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              Franchise setup and expansion support that turns a successful property into a repeatable, protectable system.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-clay px-5 py-3 text-xs font-medium text-clay-foreground transition-opacity hover:opacity-90 sm:px-6 sm:text-sm"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src="/images/franchise-hero.jpg"
              alt="Warm ambient modern restaurant interior"
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
                Franchising is the fastest path to scale — but only if the blueprint is rock-solid. We help hospitality concepts build franchise systems that protect brand integrity while enabling rapid, profitable growth.
              </p>
              <p>
                From documenting every SOP to training franchisees and monitoring compliance, our end-to-end franchise practice gives you the confidence to expand without compromising the guest experience that made you successful.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src="/images/banquet-table.jpg"
                alt="Elegant banquet table setting in dining hall"
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
            <h3 className="font-display text-lg font-semibold sm:text-xl">Franchise Model Design</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">Unit economics, fee structures and territory planning built for sustainable royalty income.</p>
          </div>
          <div className="surface p-6 sm:p-9">
            <h3 className="font-display text-lg font-semibold sm:text-xl">Operations Manuals</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">Documented SOPs, brand standards and training kits that every franchisee can execute consistently.</p>
          </div>
          <div className="surface p-6 sm:p-9">
            <h3 className="font-display text-lg font-semibold sm:text-xl">Franchisee Selection</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">Screening frameworks and structured onboarding to attract partners who protect and enhance the brand.</p>
          </div>
          <div className="surface p-6 sm:p-9">
            <h3 className="font-display text-lg font-semibold sm:text-xl">Rollout Support</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">Site selection, pre-opening critical paths and multi-unit performance monitoring systems.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Key Features / Everything You Need */}
      <section className="border-t border-border bg-muted/30 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src="/images/franchise-hero.jpg"
                alt="Restaurant interior"
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
                  <span className="text-xs font-medium text-foreground sm:text-sm">Complete franchise disclosure document preparation</span>
                </div>
                <div className="surface flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                  <Check className="h-4 w-4 shrink-0 text-clay" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">Territory mapping &amp; market saturation analysis</span>
                </div>
                <div className="surface flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                  <Check className="h-4 w-4 shrink-0 text-clay" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">Franchisee training academy &amp; certification</span>
                </div>
                <div className="surface flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                  <Check className="h-4 w-4 shrink-0 text-clay" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">Mystery guest programme for quality assurance</span>
                </div>
                <div className="surface flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                  <Check className="h-4 w-4 shrink-0 text-clay" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">Centralised supply chain &amp; vendor management</span>
                </div>
                <div className="surface flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                  <Check className="h-4 w-4 shrink-0 text-clay" />
                  <span className="text-xs font-medium text-foreground sm:text-sm">Multi-unit performance benchmarking platform</span>
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
            <span className="text-xs font-medium text-foreground sm:text-sm">A franchise package ready to take to market</span>
          </div>
          <div className="surface flex items-center gap-3.5 p-5 sm:p-6">
            <Check className="h-4 w-4 shrink-0 text-clay sm:h-5 sm:w-5" />
            <span className="text-xs font-medium text-foreground sm:text-sm">Consistent guest experience across all units</span>
          </div>
          <div className="surface flex items-center gap-3.5 p-5 sm:p-6">
            <Check className="h-4 w-4 shrink-0 text-clay sm:h-5 sm:w-5" />
            <span className="text-xs font-medium text-foreground sm:text-sm">Faster, lower-risk new openings</span>
          </div>
          <div className="surface flex items-center gap-3.5 p-5 sm:p-6">
            <Check className="h-4 w-4 shrink-0 text-clay sm:h-5 sm:w-5" />
            <span className="text-xs font-medium text-foreground sm:text-sm">Compliance and quality visibility at scale</span>
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
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-2.5 text-xs font-medium text-foreground transition-opacity hover:opacity-90 sm:px-7 sm:py-3 sm:text-sm"
          >
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;
