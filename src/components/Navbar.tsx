import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  void currentPage;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Team', href: '/team' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    window.setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 0);
  };

  const handleNavigate = (href: string) => {
    setIsMenuOpen(false);
    onNavigate?.(href.replace('/', '') || 'home');
    scrollToTop();
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <img src="/su_zambia_logo.png" alt="Scripture Union Zambia" className="h-12 w-auto" />
          </div>

          <div className="hidden lg:flex items-center rounded-full border border-slate-100 bg-white px-2 py-2 shadow-soft">
            {links.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => handleNavigate(link.href)} className="rounded-full px-4 py-2 text-sm font-bold text-brand-blue transition-all hover:bg-blue-50 hover:text-brand-red">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/donate" onClick={() => handleNavigate('/donate')} className="rounded-full bg-brand-red px-6 py-3 text-sm font-black tracking-wide text-white shadow-lg shadow-red-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-700">
              Donate Now
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-brand-blue shadow-soft transition-all hover:border-brand-red/30 hover:text-brand-red lg:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-2 shadow-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavigate(link.href)}
                className="rounded-2xl px-4 py-3 text-base font-bold text-brand-blue transition-all hover:bg-blue-50 hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => handleNavigate('/donate')}
              className="mt-2 rounded-2xl bg-brand-red px-4 py-3 text-center text-base font-black text-white shadow-lg shadow-red-900/20 transition-all hover:bg-rose-700"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}