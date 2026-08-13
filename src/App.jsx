import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastProvider } from './components/ToastContainer';
import HomePage from './pages/HomePage';
import StaffDevelopmentPage from './pages/services/StaffDevelopmentPage';
import GrowthStrategyPage from './pages/services/GrowthStrategyPage';
import FranchisePage from './pages/services/FranchisePage';
import BrandExcellencePage from './pages/services/BrandExcellencePage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const pageSEO = {
  "/": {
    title: "Mody Hospitality Consultants | Luxury Hotel & Restaurant Advisory",
    description: "Quiet precision behind remarkable hospitality. We partner with luxury hotels, resorts and fine-dining groups to sharpen operations, build teams and grow revenue."
  },
  "/staff-development": {
    title: "Staffing & Recruitment Advisory | Mody Hospitality Consultants",
    description: "HR and talent management for properties where service is the product — from executive sourcing to 90-day onboarding and service academies."
  },
  "/growth-strategy": {
    title: "Business Consultation & RevPAR Strategy | Mody Hospitality Consultants",
    description: "Strategic growth, financial modelling, menu engineering, and operational advisory for luxury hotels, resorts, and restaurant groups."
  },
  "/franchise": {
    title: "Franchise Setup & Expansion Advisory | Mody Hospitality Consultants",
    description: "End-to-end franchise development: unit economics, SOP manuals, operator vetting, and multi-site quality assurance."
  },
  "/brand-excellence": {
    title: "Marketing & Brand Strategy | Mody Hospitality Consultants",
    description: "Brand positioning, identity design, digital booking optimization, and guest experience design for premium hospitality properties."
  },
  "/case-studies": {
    title: "Case Studies & Measurable Track Record | Mody Hospitality Consultants",
    description: "Explore proven resort turnarounds, fine dining launches, and 5-city franchise rollouts with real RevPAR and occupancy metrics."
  },
  "/faq": {
    title: "Testimonials & FAQ | Mody Hospitality Consultants",
    description: "Read genuine operator reviews and get answers to key questions about our diagnostic process, pricing models, and engagement duration."
  },
  "/contact": {
    title: "Book a Consult | Mody Hospitality Consultants",
    description: "Schedule a diagnostic call with practice leads to discuss your property's financial models, team development, and operational targets."
  }
};

function DynamicSEOHandler() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const currentSEO = pageSEO[location.pathname] || {
      title: "Mody Hospitality Consultants",
      description: "Premier hospitality consulting for luxury hotels, resorts, and fine dining establishments."
    };

    // Update document title
    document.title = currentSEO.title;

    // Helper function to set meta tag content
    const setMetaTag = (selector, attribute, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('name=')) {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        } else if (selector.includes('property=')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attribute, value);
    };

    // Helper for canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentUrl = `https://modyconsultants.com${location.pathname === '/' ? '' : location.pathname}`;
    canonical.setAttribute('href', currentUrl);

    // Update Meta Description
    setMetaTag('meta[name="description"]', 'content', currentSEO.description);

    // Update OG & Twitter Meta Tags
    setMetaTag('meta[property="og:title"]', 'content', currentSEO.title);
    setMetaTag('meta[property="og:description"]', 'content', currentSEO.description);
    setMetaTag('meta[property="og:url"]', 'content', currentUrl);
    setMetaTag('meta[name="twitter:title"]', 'content', currentSEO.title);
    setMetaTag('meta[name="twitter:description"]', 'content', currentSEO.description);
    setMetaTag('meta[name="twitter:url"]', 'content', currentUrl);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <ToastProvider>
      <DynamicSEOHandler />
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/staff-development" element={<StaffDevelopmentPage />} />
            <Route path="/growth-strategy" element={<GrowthStrategyPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/brand-excellence" element={<BrandExcellencePage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
