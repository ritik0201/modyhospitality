import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ToastProvider } from '../components/ToastContainer';

export const metadata = {
  title: 'Mody Hospitality Consultants | Luxury Hotel & Restaurant Advisory',
  description: 'Premier hospitality consulting firm specializing in luxury hotel management, resort turnarounds, fine-dining concept launch, staff recruitment, and franchise expansion.',
  keywords: ['hospitality consultants', 'hotel consulting', 'restaurant management', 'luxury resort advisory'],
  authors: [{ name: 'Mody Hospitality Consultants' }],
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var e = localStorage.getItem("mody-theme");
                  if ("dark" === e || (!e && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                    document.documentElement.classList.add("dark");
                  }
                } catch (err) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ToastProvider>
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
