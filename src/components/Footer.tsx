import { Notebook as Facebook, Battery as Twitter, Drama as Instagram, Route as Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">SU</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Scripture Union</h3>
                <p className="text-sm text-blue-400">Zambia</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
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
                    className="text-gray-400 hover:text-white transition-colors text-sm"
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
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partnership')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Partner With Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('community')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Join Community
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
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
                <Mail size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Info@scriptureunionzambia.org.zm</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Phone size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+260 763 670 0777</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Zambia</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Scripture Union Zambia. All rights reserved.</p>
          <button
            onClick={() => onNavigate('admin')}
            className="mt-2 text-gray-600 hover:text-gray-400 text-xs"
          >
            Admin
          </button>
        </div>
      </div>
    </footer>
  );
}
