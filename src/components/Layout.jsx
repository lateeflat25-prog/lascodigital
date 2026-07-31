import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_URL, WHATSAPP_MESSAGE, SOCIALS } from '@/lib/servicesData';

const LOGO = 'https://media.base44.com/images/public/6a69ef8ee16a943803f515ba/72785de0f_IMG_8234.jpg';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waLink = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="min-h-screen bg-cloud">
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cloud/90 backdrop-blur-md shadow-soft' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={LOGO}
              alt="Lasco Digital Solutions"
              className="h-9 md:h-11 w-auto object-contain mix-blend-multiply"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 gradient-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-brand hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} /> Book a Call
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-navy"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden bg-cloud border-t border-border">
            <nav className="px-5 py-4 flex flex-col">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-navy font-medium border-b border-border/60 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 gradient-brand text-white px-5 py-3 rounded-full text-sm font-semibold"
              >
                <MessageCircle size={16} /> Book a Free Strategy Call
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-cloud border-t border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <img src={LOGO} alt="Lasco Digital Solutions" className="h-12 w-auto object-contain mix-blend-multiply mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Built to solve, designed to scale. Performance marketing that turns ad spend into predictable business growth.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-navy mb-4 uppercase tracking-wider">Navigate</h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-muted-foreground hover:text-navy transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-navy mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-2.5">
                <li><Link to="/services/meta-ads" className="text-sm text-muted-foreground hover:text-navy transition-colors">Meta Ads</Link></li>
                <li><Link to="/services/tiktok-ads" className="text-sm text-muted-foreground hover:text-navy transition-colors">TikTok Ads</Link></li>
                <li><Link to="/services/google-ads" className="text-sm text-muted-foreground hover:text-navy transition-colors">Google Ads</Link></li>
                <li><Link to="/services/social-media-management" className="text-sm text-muted-foreground hover:text-navy transition-colors">Social Media Management</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-navy mb-4 uppercase tracking-wider">Connect</h4>
              <ul className="space-y-2.5">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-navy transition-colors">{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Lasco Digital Solutions. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-navy transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-muted-foreground hover:text-navy transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}