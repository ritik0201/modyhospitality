import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const partnerStats = [
  { value: "100+", title: "Properties advised", desc: "across luxury hotels & F&B" },
  { value: "25+", title: "Years combined experience", desc: "in luxury hospitality management" },
  { value: "500+", title: "Professionals trained", desc: "through our service academies" },
  { value: "5", title: "Star rating average", desc: "from client performance reviews" }
];

const partnerLogos = [
  { label: "Salt Water Garden Restaurant", src: "/images/partners/logo-01-salt-water-garden.webp" },
  { label: "The Spice Yard", src: "/images/partners/logo-02-spice-yard.webp" },
  { label: "Fire & Flavors", src: "/images/partners/logo-03-fire-flavors.webp" },
  { label: "Caspian Spice", src: "/images/partners/logo-04-caspian-spice.webp" },
  { label: "Kurry Karamat", src: "/images/partners/logo-05-kurry-karamat.webp" },
  { label: "The Dolly Lama's", src: "/images/partners/logo-06-dolly-lamas.webp" },
  { label: "Farm @ Home", src: "/images/partners/logo-07-farm-home.webp" },
  { label: "Hills Restro", src: "/images/partners/logo-08-hills-restro.webp" },
  { label: "Camp Leo, Gir Pride Resort", src: "/images/partners/logo-09-camp-leo.webp" },
  { label: "Hotel Maple Inn", src: "/images/partners/logo-10-maple-inn.webp" },
  { label: "Urban Zykaa", src: "/images/partners/logo-11-urban-zykaa.webp" },
  { label: "Casa Riva", src: "/images/partners/logo-12-casa-riva.webp" },
  { label: "RMD Hotels & Resorts", src: "/images/partners/logo-13-rmd-hotels.webp" },
  { label: "Sweet Chilli", src: "/images/partners/logo-14-sweet-chilli.webp" },
  { label: "Street Zaika", src: "/images/partners/logo-15-street-zaika.webp" }
];

const PartnersMarquee = () => {
  const numsRef = useRef([]);
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const animatePartnerCount = (el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      const suffix = el.dataset.suffix || "";
      const dur = 1400;
      let t0 = null;

      const step = (t) => {
        if (!t0) t0 = t;
        const p = Math.min((t - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * ease) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const currentNums = numsRef.current.filter(Boolean);
    if (!("IntersectionObserver" in window)) {
      currentNums.forEach(animatePartnerCount);
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            animatePartnerCount(entry.target);
          }
        });
      }, { threshold: 0.4 });

      currentNums.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    let animId;
    const speed = 1.2;

    const initPos = () => {
      if (trackRef.current) {
        const setWidth = trackRef.current.scrollWidth / 3;
        posRef.current = -setWidth;
      }
    };

    initPos();

    const render = () => {
      if (!isHoveredRef.current && trackRef.current) {
        const setWidth = trackRef.current.scrollWidth / 3;
        posRef.current += speed;

        if (posRef.current >= 0) {
          posRef.current = -setWidth;
        }

        trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      }
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    window.addEventListener('resize', initPos);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', initPos);
    };
  }, []);

  const marqueeLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center">
        <span className="eyebrow text-clay">PARTNERSHIPS &amp; TRACK RECORD</span>
        <h2 className="mt-2 font-display text-2xl sm:text-4xl">
          Trusted by Leading Hospitality Brands
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xs text-muted-foreground sm:text-base">
          From boutique resorts to fine-dining icons, we work side-by-side with visionary founders and management teams to build lasting value.
        </p>
      </div>

      <div className="mt-8 grid gap-3 grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:mt-10">
        {partnerStats.map((stat, i) => (
          <div key={i} className="surface p-5 text-center sm:p-6">
            <div
              ref={(el) => (numsRef.current[i] = el)}
              data-count={stat.value.replace(/[^0-9]/g, '')}
              data-suffix={stat.value.replace(/[0-9]/g, '')}
              className="font-display text-2xl font-bold text-clay sm:text-4xl"
            >
              {stat.value}
            </div>
            <div className="mt-1 text-xs font-semibold text-foreground sm:text-sm">{stat.title}</div>
            <div className="mt-0.5 text-[0.7rem] text-muted-foreground sm:text-xs">{stat.desc}</div>
          </div>
        ))}
      </div>

      <div className="partners-marquee mt-8 sm:mt-12">
        <div
          ref={trackRef}
          className="partners-track-js"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
        >
          {marqueeLogos.map((partner, i) => (
            <Link
              key={`${partner.src}-${i}`}
              to="/contact"
              className="partners-card"
              aria-label={partner.label}
            >
              <img
                src={partner.src}
                alt={`${partner.label} logo`}
                width="400"
                height="400"
                decoding="async"
                loading="eager"
                className="partners-logo"
              />
            </Link>
          ))}
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground sm:mt-10 sm:text-sm">
        Our clients trust us because we focus on long-term partnerships, measurable business growth, operational excellence, and exceptional hospitality standards.
      </p>
    </section>
  );
};

export default PartnersMarquee;
