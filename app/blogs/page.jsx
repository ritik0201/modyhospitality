'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  Tag,
  TrendingUp,
  Award,
  Layers,
  Building2,
  Users,
  UtensilsCrossed,
  Send,
  CheckCircle2,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const CATEGORY_ITEMS = [
  {
    name: 'Operations',
    description: 'Yield optimization, RevPAR management, inventory controls, and food cost architecture.',
    icon: TrendingUp,
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    count: 2
  },
  {
    name: 'Branding & Marketing',
    description: 'Brand positioning, luxury identity design, direct booking growth, and guest experience curves.',
    icon: Award,
    badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    count: 2
  },
  {
    name: 'Staff Training',
    description: 'Service culture building, staff retention systems, skill mastery maps, and SOP execution.',
    icon: Users,
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    count: 2
  }
];

const BLOG_POSTS = [
  {
    id: 'revpar-strategy-2026',
    title: 'Maximizing RevPAR in 2026: Beyond Traditional Yield Management',
    category: 'Operations',
    categoryColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    date: 'Aug 24, 2026',
    readTime: '6 min read',
    author: {
      name: 'Rajesh Mody',
      role: 'Founder & Principal Consultant',
      avatar: 'RM'
    },
    image: '/images/business-hero.webp',
    excerpt: 'Traditional occupancy-focused pricing is failing boutique properties. Discover how modern RevPAR growth combines hyper-segmentation, dynamic F&B packages, and ancillary revenue streams.',
    featured: true
  },
  {
    id: 'staff-retention-playbook',
    title: 'The Service Culture Playbook: Solving Staff Attrition in Luxury Hospitality',
    category: 'Staff Training',
    categoryColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    date: 'Aug 18, 2026',
    readTime: '5 min read',
    author: {
      name: 'Anita Raval',
      role: 'Senior Hospitality Advisor',
      avatar: 'AR'
    },
    image: '/images/staff-hero.webp',
    excerpt: 'High turnover depletes service quality and damages guest trust. Learn how structured career ladders and continuous SOP training reduced attrition by 22% in our recent client engagements.',
    featured: false
  },
  {
    id: 'menu-engineering-fine-dining',
    title: 'Menu Engineering & Profitability: How Atelier Dining Increased Cover Value by 31%',
    category: 'Operations',
    categoryColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    date: 'Aug 12, 2026',
    readTime: '8 min read',
    author: {
      name: 'Chef Marco Bene',
      role: 'Culinary Strategy Lead',
      avatar: 'MB'
    },
    image: '/images/dining-setting.webp',
    excerpt: 'A deep dive into food cost architecture, dish placement physics, and inventory management that turned around a premium dining outlet within six weeks of launch.',
    featured: false
  },
  {
    id: 'five-city-franchise-expansion',
    title: 'Scaling Without Diluting: The 5-City Franchise Expansion Guide',
    category: 'Branding & Marketing',
    categoryColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    date: 'Aug 05, 2026',
    readTime: '7 min read',
    author: {
      name: 'Dev Suri',
      role: 'Franchise Operations Director',
      avatar: 'DS'
    },
    image: '/images/franchise-hero.webp',
    excerpt: 'Expanding a boutique hospitality brand across multiple regions requires ironclad SOP playbooks, rigorous partner screening, and automated quality compliance audits.',
    featured: false
  },
  {
    id: 'heritage-property-repositioning',
    title: 'Repositioning Heritage Properties for the Global Luxury Traveler',
    category: 'Branding & Marketing',
    categoryColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    date: 'Jul 28, 2026',
    readTime: '6 min read',
    author: {
      name: 'Rajesh Mody',
      role: 'Founder & Principal Consultant',
      avatar: 'RM'
    },
    image: '/images/case-study-heritage.webp',
    excerpt: 'How historic palaces and heritage hotels can weave authentic regional storytelling into modern luxury guest journeys to boost direct bookings by over 50%.',
    featured: false
  },
  {
    id: 'tech-driven-guest-experience',
    title: 'High Touch vs. High Tech: Balancing Automation with Warm Hospitality',
    category: 'Staff Training',
    categoryColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    date: 'Jul 19, 2026',
    readTime: '4 min read',
    author: {
      name: 'Anita Raval',
      role: 'Senior Hospitality Advisor',
      avatar: 'AR'
    },
    image: '/images/wooden-conference.webp',
    excerpt: 'Contactless check-ins and AI concierge apps are reshaping hotels. Discover how to introduce digital convenience without losing the essential human warmth of hospitality.',
    featured: false
  }
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'Boutique Hotel / Resort',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: 'Boutique Hotel / Resort',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/50 via-background to-background py-14 sm:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-clay/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="animate-rise mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-2 text-clay">
            <Sparkles className="h-4 w-4" />
            <span className="eyebrow text-clay">HOSPITALITY INSIGHTS</span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Blogs &amp; Operational Perspectives
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Proven methodologies on yield management, staff development, restaurant positioning, and franchise expansion from Mody Hospitality Consultants.
          </p>

          {/* Search Input */}
          <div className="mt-8 relative w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blogs by title, topic or keyword..."
              className="w-full rounded-full border border-border bg-card/90 py-3 pl-10 pr-4 text-xs shadow-sm transition-colors focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay sm:text-sm"
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 space-y-20">

        {/* 2. CATEGORY SECTION */}
        <section id="categories" className="scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow text-clay">EXPLORE BY TOPIC</span>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Blog Categories</h2>
            </div>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-xs font-semibold text-clay hover:underline"
              >
                Clear Category Filter ({selectedCategory})
              </button>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORY_ITEMS.map((cat) => {
              const IconComp = cat.icon;
              const isSelected = selectedCategory === cat.name;
              return (
                <div
                  key={cat.name}
                  onClick={() => setSelectedCategory(isSelected ? 'All' : cat.name)}
                  className={`group cursor-pointer flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 ${
                    isSelected
                      ? 'border-clay bg-clay/5 shadow-md'
                      : 'border-border bg-card hover:border-clay/40 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${cat.badgeColor}`}>
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-[0.7rem] font-semibold px-2.5 py-0.5 rounded-full border border-border bg-muted/50 text-muted-foreground">
                        {cat.count} Article{cat.count === 1 ? '' : 's'}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-foreground group-hover:text-clay transition-colors sm:text-lg">
                      {cat.name}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-clay">
                    <span>{isSelected ? 'Filter Active' : 'View Articles'}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. LATEST BLOGS SECTION */}
        <section id="latest-blogs" className="scroll-mt-24">
          <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
            <div>
              <span className="eyebrow text-clay">ARTICLES &amp; READS</span>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                {selectedCategory === 'All' ? 'Latest Blogs' : `${selectedCategory} Blogs`}
              </h2>
            </div>
            <span className="text-xs text-muted-foreground">
              Showing {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute left-3 top-3">
                        <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold backdrop-blur-md ${post.categoryColor}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 text-[0.7rem] text-muted-foreground">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-base font-bold leading-snug text-foreground sm:text-lg">
                        {post.title}
                      </h3>

                      <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-border px-5 py-4 bg-muted/20">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-clay text-[0.65rem] font-bold text-clay-foreground">
                        {post.author.avatar}
                      </div>
                      <div>
                        <p className="text-[0.72rem] font-medium text-foreground leading-none">{post.author.name}</p>
                        <p className="text-[0.6rem] text-muted-foreground mt-0.5">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <p className="font-display text-base font-semibold">No blog posts match your criteria</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Try selecting a different category or clearing your search term.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 rounded-full bg-clay px-4 py-2 text-xs font-medium text-clay-foreground"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

        {/* 4. CONTACT FORM & BUTTON SECTION */}
        <section id="contact-section" className="scroll-mt-24">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="grid gap-0 lg:grid-cols-12">

              {/* Left Column: Direct Info & Contact Button */}
              <div className="bg-muted/40 p-8 sm:p-12 lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
                <div>
                  <span className="eyebrow text-clay">GET IN TOUCH</span>
                  <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl lg:text-4xl text-foreground">
                    Have a property inquiry or custom project?
                  </h2>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    Whether you operate a boutique hotel, resort, fine dining venue, or multi-unit franchise, our senior consultants are ready to discuss your growth goals.
                  </p>

                  <div className="mt-8 space-y-4 text-xs sm:text-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay">
                        <Mail className="h-4 w-4" />
                      </div>
                      <a href="mailto:hello@modyhospitality.co.in" className="text-foreground hover:text-clay transition-colors">
                        hello@modyhospitality.co.in
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay">
                        <Phone className="h-4 w-4" />
                      </div>
                      <a href="tel:+919825084605" className="text-foreground hover:text-clay transition-colors">
                        +91 9825084605
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-clay/10 text-clay">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span className="text-muted-foreground">
                        Ahmedabad, Gujarat, India
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">Prefer dedicated consultation details?</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-xs font-semibold text-clay-foreground transition-opacity hover:opacity-90 sm:text-sm"
                  >
                    Go to Full Contact Page <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="p-8 sm:p-12 lg:col-span-7">
                <h3 className="font-display text-xl font-bold sm:text-2xl text-foreground">
                  Send Us a Direct Message
                </h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-600 dark:text-emerald-400 flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display text-base font-bold">Message Sent Successfully!</h4>
                      <p className="mt-1 text-xs leading-relaxed">
                        Thank you for reaching out to Mody Hospitality Consultants. A senior consultant will contact you shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikram Sharma"
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="v.sharma@resort.com"
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-foreground mb-1.5">
                          Property / Business Type
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay sm:text-sm"
                        >
                          <option value="Boutique Hotel / Resort">Boutique Hotel / Resort</option>
                          <option value="Restaurant / Fine Dining">Restaurant / Fine Dining</option>
                          <option value="Franchise Group">Franchise Group</option>
                          <option value="Heritage Property">Heritage Property</option>
                          <option value="Pre-Opening Project">Pre-Opening Project</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your property, goals, or consulting requirements..."
                        className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay sm:text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3 text-xs font-semibold text-clay-foreground transition-opacity hover:opacity-90 sm:text-sm"
                    >
                      Send Message <Send className="h-3.5 w-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
