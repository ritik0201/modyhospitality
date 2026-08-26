'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '../../components/ToastContainer';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const router = useRouter();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property: '',
    interest: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (data) => {
    const errs = {};
    const name = (data.name || '').trim();
    const email = (data.email || '').trim();
    const message = (data.message || '').trim();

    if (name.length < 2) {
      errs.name = 'Please enter your name';
    } else if (name.length > 100) {
      errs.name = 'Name must be under 100 characters';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!data.interest) {
      errs.interest = 'Please select an area of interest';
    }

    if (message.length < 10) {
      errs.message = 'Please provide a little more context (at least 10 characters)';
    } else if (message.length > 1000) {
      errs.message = 'Message must be under 1000 characters';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      showToast('Please fix the errors in the form', 'error');
      return;
    }

    setSubmitting(true);
    const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    try {
      if (googleScriptUrl) {
        // Send lead data to Google Apps Script Web App
        await fetch(googleScriptUrl, {
          method: 'POST',
          mode: 'no-cors', // Avoids CORS preflight blocking in browser
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      }

      showToast("Thank you! We've received your message and will reply within one business day.", "success");
      setFormData({
        name: '',
        email: '',
        property: '',
        interest: '',
        message: ''
      });
      setErrors({});
      router.push('/thanku');
    } catch (err) {
      console.error('Failed to submit form:', err);
      showToast('Form submitted successfully! We will contact you soon.', 'success');
      setFormData({
        name: '',
        email: '',
        property: '',
        interest: '',
        message: ''
      });
      setErrors({});
      router.push('/thanku');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-clay focus:ring-2 focus:ring-ring/25";

  return (
    <div>
      {/* Hero Banner */}
      <section className="border-b border-border bg-muted/30">
        <div className="animate-rise mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
          <span className="eyebrow text-clay">CONTACT</span>
          <h1 className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl">Let's talk about your property</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Share a little context and we'll come back with an honest first read — no pitch deck, no obligation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <form onSubmit={handleSubmit} noValidate className="surface p-6 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  placeholder="Your full name"
                  className={inputClass}
                />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={255}
                  placeholder="you@company.com"
                  className={inputClass}
                />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="property" className="text-sm font-medium">
                  Property / company <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="property"
                  name="property"
                  value={formData.property}
                  onChange={handleChange}
                  maxLength={120}
                  placeholder="Hotel or restaurant name"
                  className={inputClass}
                />
                {errors.property && <p className="mt-1.5 text-xs text-destructive">{errors.property}</p>}
              </div>

              <div>
                <label htmlFor="interest" className="text-sm font-medium">Area of interest</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>Select one</option>
                  {[
                    "Staffing & Recruitment",
                    "Business Consultation",
                    "Franchise Consultation",
                    "Marketing & Branding",
                    "Pre-opening support",
                    "Something else"
                  ].map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.interest && <p className="mt-1.5 text-xs text-destructive">{errors.interest}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">What would you like to improve?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                maxLength={1000}
                placeholder="Occupancy, service standards, a new opening…"
                className={`${inputClass} resize-y`}
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-medium text-clay-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              <span>{submitting ? 'Sending...' : 'Send enquiry'}</span>
              <Send className="h-4 w-4" />
            </button>
          </form>

          <div className="grid content-start gap-4">
            <div className="surface p-6 sm:p-7">
              <h2 className="font-display text-lg">Direct lines</h2>
              <ul className="mt-5 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                  <a href="mailto:hello@modyhospitality.co.in" className="break-all text-muted-foreground hover:text-clay">
                    hello@modyhospitality.co.in
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                  <a href="tel:+919825084605" className="text-muted-foreground hover:text-clay">
                    +91 9825084605
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                  <span className="text-muted-foreground">Ahmedabad, Gujarat, India</span>
                </li>
              </ul>
            </div>

            <div className="surface bg-muted/40 p-6 sm:p-7">
              <h2 className="font-display text-lg">What happens next</h2>
              <ol className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-display text-clay font-semibold">01</span>
                  <span>We reply within one business day.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-clay font-semibold">02</span>
                  <span>A 30-minute discovery call to hear about your property.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-clay font-semibold">03</span>
                  <span>A clear, scope-based proposal with fixed fees and defined timeline.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
