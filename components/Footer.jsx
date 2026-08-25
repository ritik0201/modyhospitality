import React from 'react';
import Link from 'next/link';

const services = [
  { to: "/staff-development", title: "Staffing & Recruitment" },
  { to: "/growth-strategy", title: "Business Consultation" },
  { to: "/franchise", title: "Franchise Consultation" },
  { to: "/brand-excellence", title: "Marketing & Branding" }
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex min-w-0 items-center gap-2.5">
            <picture>
              <source srcSet="/images/logo.webp" type="image/webp" />
              <img
                className="h-8 w-auto shrink-0 object-contain"
                src="/images/logo.png"
                alt="Mody logo"
                width="123"
                height="64"
                decoding="async"
              />
            </picture>
            <span className="min-w-0">
              <span className="block font-display text-lg font-semibold">Mody</span>
              <span className="eyebrow block text-[0.58rem] text-muted-foreground">Hospitality Consultants</span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Turning hospitality properties into industry benchmarks through strategic guidance and operational mastery.
          </p>
        </div>

        <div>
          <h4 className="eyebrow text-clay">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-clay">Home</Link>
            </li>
            {/* <li>
              <Link href="/case-studies" className="transition-colors hover:text-clay">Case Studies</Link>
            </li> */}
            <li>
              <Link href="/faq" className="transition-colors hover:text-clay">Testimonials &amp; FAQ</Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-clay">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-clay">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {services.map((svc) => (
              <li key={svc.to}>
                <Link href={svc.to} className="transition-colors hover:text-clay">
                  {svc.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-clay">Get in Touch</h4>
          <div className="mt-5 space-y-4 text-sm">
            <div>
              <span className="eyebrow block text-[0.58rem] text-muted-foreground/70">Email</span>
              <a href="mailto:hello@modyconsultants.com" className="break-all text-muted-foreground transition-colors hover:text-clay">
                hello@modyconsultants.com
              </a>
            </div>
            <div>
              <span className="eyebrow block text-[0.58rem] text-muted-foreground/70">Phone</span>
              <a href="tel:+919825084605" className="text-muted-foreground transition-colors hover:text-clay">
                +91 9825084605
              </a>
            </div>
            <div>
              <span className="eyebrow block text-[0.58rem] text-muted-foreground/70">Location</span>
              <span className="text-muted-foreground">Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Mody Hospitality Consultants. All rights reserved.</p>
          <p>Transforming visions into premium experiences.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
