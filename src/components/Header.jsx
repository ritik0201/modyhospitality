import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
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
  }, [location.pathname]);

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
    return location.pathname === path;
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <picture>
              <source srcset="/images/logo.webp" type="image/webp" />
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
              <span className="eyebrow mt-1 hidden truncate text-[0.58rem] text-muted-foreground sm:block">
                Hospitality Consultants
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center justify-center gap-1 lg:flex">
            <Link
              to="/"
              className={`rounded-full px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground ${
                isNavActive('/') ? 'bg-muted text-foreground' : 'text-foreground/70'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
              >
                Services <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </button>

              <div className="invisible absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="surface overflow-hidden p-2 shadow-lift">
                  {services.map((svc) => (
                    <Link
                      key={svc.to}
                      to={svc.to}
                      className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                    >
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-clay/10 font-display text-xs font-semibold text-clay">
                        {svc.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover/item:text-clay">
                          <span>{svc.title}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity group-hover/item:opacity-100" />
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">{svc.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/case-studies"
              className={`rounded-full px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground ${
                isNavActive('/case-studies') ? 'bg-muted text-foreground' : 'text-foreground/70'
              }`}
            >
              Case Studies
            </Link>

            <Link
              to="/faq"
              className={`rounded-full px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground ${
                isNavActive('/faq') ? 'bg-muted text-foreground' : 'text-foreground/70'
              }`}
            >
              Testimonials &amp; FAQ
            </Link>

            <Link
              to="/contact"
              className={`rounded-full px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground ${
                isNavActive('/contact') ? 'bg-muted text-foreground' : 'text-foreground/70'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:border-clay hover:text-clay"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Link
              to="/contact"
              className="hidden items-center gap-1.5 rounded-full bg-clay px-5 py-2.5 text-sm font-medium text-clay-foreground transition-opacity hover:opacity-90 lg:inline-flex"
            >
              Book a Consult
            </Link>

            <button
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card lg:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-xl transition-opacity lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="fixed left-0 right-0 top-[60px] z-40 max-h-[calc(100vh-60px)] overflow-y-auto border-t border-border bg-background p-5 shadow-2xl lg:hidden">
          <Link
            to="/"
            className={`block py-3 text-sm font-medium ${isNavActive('/') ? 'text-clay' : ''}`}
          >
            Home
          </Link>

          <button
            type="button"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex w-full items-center justify-between py-3 text-sm font-medium"
          >
            <span>Services</span>
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>

          {mobileServicesOpen && (
            <div className="ml-1 border-l border-clay/40 pl-4 py-2 space-y-3">
              {services.map((svc) => (
                <Link
                  key={svc.to}
                  to={svc.to}
                  className={`block text-sm ${isNavActive(svc.to) ? 'font-medium text-clay' : 'text-muted-foreground'}`}
                >
                  {svc.title}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/case-studies"
            className={`block py-3 text-sm font-medium ${isNavActive('/case-studies') ? 'text-clay' : ''}`}
          >
            Case Studies
          </Link>

          <Link
            to="/faq"
            className={`block py-3 text-sm font-medium ${isNavActive('/faq') ? 'text-clay' : ''}`}
          >
            Testimonials &amp; FAQ
          </Link>

          <Link
            to="/contact"
            className={`block py-3 text-sm font-medium ${isNavActive('/contact') ? 'text-clay' : ''}`}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="mt-4 flex items-center justify-center rounded-full bg-clay px-5 py-3 text-sm font-medium text-clay-foreground"
          >
            Book a Consult
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
