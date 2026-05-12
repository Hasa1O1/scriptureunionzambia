import { Notebook as Facebook, Battery as Twitter, Drama as Instagram, Route as Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative overflow-hidden bg-brand-blue text-white">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-brand-red/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-100">Join the mission</p>
              <h3 className="mt-3 text-3xl font-black md:text-4xl">Partner with Scripture Union Zambia to shape the next generation.</h3>
            </div>
            <button
              onClick={() => onNavigate('partnership')}
              className="rounded-full bg-brand-red px-7 py-4 text-sm font-black text-white shadow-xl shadow-red-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-rose-700"
            >
              Get Involved
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-brand-blue font-black">SU</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Scripture Union</h3>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-100">Zambia</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-7">
              Spreading the word of God and building a community of faith across Zambia and beyond.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Team', 'Blog'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('donate')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partnership')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  Partner With Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('community')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  Join Community
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Mail size={18} className="text-red-200 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Info@scriptureunionzambia.org.zm</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Phone size={18} className="text-red-200 mt-1 flex-shrink-0" />
                <span className="text-blue-100">+260 763 670 0777</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={18} className="text-red-200 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Zambia</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="rounded-full bg-white/10 p-2 text-blue-100 transition-all hover:-translate-y-1 hover:bg-brand-red hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 text-blue-100 transition-all hover:-translate-y-1 hover:bg-brand-red hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 text-blue-100 transition-all hover:-translate-y-1 hover:bg-brand-red hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="rounded-full bg-white/10 p-2 text-blue-100 transition-all hover:-translate-y-1 hover:bg-brand-red hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 text-center text-sm text-blue-100">
          <p>&copy; {new Date().getFullYear()} Scripture Union Zambia. All rights reserved.</p>
          <button
            onClick={() => onNavigate('admin')}
            className="mt-2 text-blue-200 hover:text-white text-xs"
          >
            Admin
          </button>
        </div>
      </div>
    </footer>
  );
}
