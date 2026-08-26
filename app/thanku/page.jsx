'use client';

import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { CheckCircle2, Sparkles, Home } from 'lucide-react';

export default function ThankYouPage() {
  const triggerCrackers = useCallback(() => {
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Initial celebratory firecracker burst
    confetti({
      ...defaults,
      particleCount: 90,
      spread: 120,
      origin: { y: 0.55, x: 0.5 },
      colors: ['#c87a56', '#d99b73', '#eab308', '#22c55e', '#ef4444', '#3b82f6']
    });

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 40 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.15, 0.35), y: Math.random() - 0.2 },
        colors: ['#c87a56', '#f59e0b', '#10b981', '#6366f1']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.65, 0.85), y: Math.random() - 0.2 },
        colors: ['#c87a56', '#eab308', '#06b6d4', '#ec4899']
      });
    }, 250);
  }, []);

  useEffect(() => {
    triggerCrackers();
  }, [triggerCrackers]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center -z-10 overflow-hidden">
        <div className="w-[400px] h-[400px] bg-clay/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-md w-full">
        <div className="surface p-8 sm:p-10 text-center shadow-lift animate-rise">
          {/* Checkmark Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-clay/15 text-clay mb-5">
            <CheckCircle2 className="h-9 w-9 text-clay" />
          </div>

          {/* Clean Thank You Heading */}
          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Thank You!
          </h1>

          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            Your message has been sent successfully. We will get back to you within 1 business day.
          </p>

          {/* Firecrackers Trigger */}
          <button
            type="button"
            onClick={triggerCrackers}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-clay/30 bg-clay/10 text-clay text-xs font-semibold hover:bg-clay/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Burst Crackers Again 🎆</span>
          </button>

          {/* Action Button */}
          <div className="mt-8 border-t border-border pt-6">
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay px-6 py-3 text-xs font-semibold text-clay-foreground transition-opacity hover:opacity-90 shadow-sm"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
