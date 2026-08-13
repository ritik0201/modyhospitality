import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const offerings = [
  {
    title: "Positioning & Identity",
    body: "Brand architecture, narrative development and visual identity aligned to your target guest persona."
  },
  {
    title: "Digital Presence",
    body: "Website design, OTA content strategy, social media management and reputation optimisation that convert lookers to bookers."
  },
  {
    title: "Guest Experience Design",
    body: "Signature moments mapped across the entire guest journey, from pre-arrival to post-stay follow-up."
  },
  {
    title: "Campaigns & Partnerships",
    body: "Seasonal campaigns, PR strategy and strategic collaborations that build demand at premium rate points."
  }
];

const features = [
  "Brand identity & visual guideline development",
  "Website & direct booking engine optimisation",
  "OTA content & channel management strategy",
  "Social media content calendar & execution",
  "Guest feedback system design & analysis",
  "PR & influencer partnership programmes"
];

const outcomes = [
  "A distinctive, defensible brand position",
  "Higher direct booking share",
  "Stronger review scores and repeat stays",
  "Pricing power in a crowded market"
];

const BrandExcellencePage = () => {
  return (
    <div>
      {/* Section 1: Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-16">
        <div className="animate-rise grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="eyebrow text-clay">MARKETING &amp; BRANDING</span>
            <h1 className="mt-4 font-display text-3xl leading-tight sm:text-5xl lg:text-6xl">
              Command the rate your property deserves
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              Brand strategy and excellence programmes that position your property as a destination, not an option.
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
              src="/images/branding-hero.jpg"
              alt="Elegant hotel lobby detail"
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
                Your brand is not just a logo — it is the entire experience a guest has from the moment they discover your property to long after they check out. We build brands that command premium rates and create loyal advocates.
              </p>
              <p>
                Whether you are launching a new concept or repositioning an existing property, our brand practice combines strategic thinking with creative execution to deliver measurable commercial results.
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src="/images/dining-setting.jpg"
                alt="Luxury dining table setting"
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
          {offerings.map((offering) => (
            <div key={offering.title} className="surface p-6 sm:p-9">
              <h3 className="font-display text-lg font-semibold sm:text-xl">{offering.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{offering.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Key Features / Everything You Need */}
      <section className="border-t border-border bg-muted/30 py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src="/images/branding-hero.jpg"
                alt="Hotel lobby"
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
                {features.map((feat, idx) => (
                  <div key={idx} className="surface flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
                    <Check className="h-4 w-4 shrink-0 text-clay" />
                    <span className="text-xs font-medium text-foreground sm:text-sm">{feat}</span>
                  </div>
                ))}
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
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="surface flex items-center gap-3.5 p-5 sm:p-6">
              <Check className="h-4 w-4 shrink-0 text-clay sm:h-5 sm:w-5" />
              <span className="text-xs font-medium text-foreground sm:text-sm">{outcome}</span>
            </div>
          ))}
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

export default BrandExcellencePage;
