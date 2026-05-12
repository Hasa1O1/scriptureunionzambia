interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  void currentPage;
  void onNavigate;

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

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue text-sm font-black text-white shadow-lg shadow-blue-950/15">
              SU
            </div>
            <div>
              <span className="block text-xl font-black tracking-tight text-brand-blue">
                Scripture Union
              </span>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-brand-red">
                Zambia
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center rounded-full border border-slate-100 bg-white px-2 py-2 shadow-soft">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-bold text-brand-blue transition-all hover:bg-blue-50 hover:text-brand-red">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a href="/donate" className="rounded-full bg-brand-red px-6 py-3 text-sm font-black tracking-wide text-white shadow-lg shadow-red-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-700">
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}