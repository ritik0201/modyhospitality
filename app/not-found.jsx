import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <span className="eyebrow text-clay">404</span>
      <h1 className="mt-3 font-display text-3xl font-medium sm:text-5xl">Page not found</h1>
      <p className="mt-3 max-w-md text-xs text-muted-foreground sm:text-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-xs font-semibold text-clay-foreground transition-opacity hover:opacity-90 sm:text-sm"
      >
        <span>Back to Home</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
