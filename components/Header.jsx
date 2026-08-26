'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';

const services = [
  {
    to: "/staff-development",
    icon: "01",
    title: "Staffing & Recruitment",
    desc: "HR & talent management"
  },
  {
    to: "/growth-strategy",
    icon: "02",
    title: "Business Consultation",
    desc: "Strategic growth & operations"
  },
  {
    to: "/franchise",
    icon: "03",
    title: "Franchise Consultation",
    desc: "Franchise setup & expansion"
  },
  {
    to: "/brand-excellence",
    icon: "04",
    title: "Marketing & Branding",
    desc: "Brand strategy & excellence"
  }
];

const Header = () => {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleTheme = () => {
    const nextDark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', nextDark);
    setIsDark(nextDark);
    try {
      localStorage.setItem('mody-theme', nextDark ? 'dark' : 'light');
    } catch (e) {}
  };

  const toggleMobileMenu = () => {
    const nextState = !mobileOpen;
    setMobileOpen(nextState);
    if (nextState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const isNavActive = (path) => {
    return pathname === path;
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
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
            <span className="min-w-0 leading-none">
              <span className="block truncate font-display text-lg font-semibold tracking-tight">Mody</span>
              <span className="eyebrow mt-0.5 block truncate text-[0.52rem] text-muted-foreground sm:mt-1 sm:text-[0.58rem]">
                Hospitality Consultants
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center justify-center gap-1 lg:flex">
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground ${
                isNavActive('/') ? 'bg-muted font-medium text-foreground' : 'text-muted-foreground'
              }`}
            >
              Home
            </Link>

            <div className="group relative">
              <button
                type="button"
                className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground ${
                  pathname.startsWith('/staff-development') ||
                  pathname.startsWith('/growth-strategy') ||
                  pathname.startsWith('/franchise') ||
                  pathname.startsWith('/brand-excellence')
                    ? 'bg-muted font-medium text-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4 text-clay transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="pointer-events-none absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="surface p-3 shadow-lift">
                  <div className="space-y-1">
                    {services.map((svc) => (
                      <Link
                        key={svc.to}
                        href={svc.to}
                        className="group/item flex items-center gap-3 rounded-2xl p-2.5 transition-colors hover:bg-muted/70"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-clay/10 font-display text-xs font-semibold text-clay">
                          {svc.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between text-xs font-semibold text-foreground group-hover/item:text-clay">
                            <span>{svc.title}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover/item:opacity-100" />
                          </div>
                          <p className="mt-0.5 text-[0.7rem] text-muted-foreground leading-tight">{svc.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* <Link
              href="/case-studies"
              className={`rounded-full px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground ${
                isNavActive('/case-studies') ? 'bg-muted font-medium text-foreground' : 'text-muted-foreground'
              }`}
            >
              Case Studies
            </Link> */}

            <Link
              href="/faq"
              className={`rounded-full px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground ${
                isNavActive('/faq') ? 'bg-muted font-medium text-foreground' : 'text-muted-foreground'
              }`}
            >
              Testimonials &amp; FAQ
            </Link>

            <Link
              href="/contact"
              className={`rounded-full px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground ${
                isNavActive('/contact') ? 'bg-muted font-medium text-foreground' : 'text-muted-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Link
              href="/contact"
              className="hidden rounded-full bg-clay px-5 py-2.5 text-xs font-semibold text-clay-foreground transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Book a consult
            </Link>

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-card/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[61px] z-40 flex flex-col bg-background/98 p-6 backdrop-blur-2xl lg:hidden animate-rise">
          <div className="flex flex-1 flex-col justify-between space-y-6 overflow-y-auto">
            <nav className="space-y-2">
              <Link
                href="/"
                className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                  isNavActive('/') ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted/50'
                }`}
              >
                Home
              </Link>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted/50"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 text-clay transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-2 space-y-1.5 pl-4">
                    {services.map((svc) => (
                      <Link
                        key={svc.to}
                        href={svc.to}
                        className="flex items-center gap-3 rounded-xl p-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                      >
                        <span className="font-display text-xs font-semibold text-clay">{svc.icon}</span>
                        <span>{svc.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/case-studies"
                className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                  isNavActive('/case-studies') ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted/50'
                }`}
              >
                Case Studies
              </Link>

              <Link
                href="/faq"
                className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                  isNavActive('/faq') ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted/50'
                }`}
              >
                Testimonials &amp; FAQ
              </Link>

              <Link
                href="/contact"
                className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                  isNavActive('/contact') ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted/50'
                }`}
              >
                Contact
              </Link>
            </nav>

            <div className="space-y-4 pt-4 border-t border-border">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-full bg-clay py-3.5 text-sm font-semibold text-clay-foreground"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
