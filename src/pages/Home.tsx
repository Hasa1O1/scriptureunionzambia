import { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, Users, Heart, Globe } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface HomeProps {
  onNavigate: (page: string) => void;
}

interface Testimonial {
  id: string;
  name: string;
  content: string;
  role: string;
  image_url: string;
}

export default function Home({ onNavigate }: HomeProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [email, setEmail] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .eq('featured', true)
      .limit(3);

    if (data) setTestimonials(data);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase
      .from('newsletter_subscriptions')
      .insert([{ email }]);

    if (!error) {
      setSubscribeSuccess(true);
      setEmail('');
      setTimeout(() => setSubscribeSuccess(false), 3000);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Spreading God's Word Across Zambia
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Join us in our mission to reach youth, build communities, and share the gospel
                throughout Zambia and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('community')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2"
                >
                  Join Our Community <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-all border-2 border-white"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <BookOpen className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Biblical Teaching</h3>
                      <p className="text-blue-100">Spreading God's word through scripture</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Youth Outreach</h3>
                      <p className="text-blue-100">Engaging young people in faith</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Globe className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Global Impact</h3>
                      <p className="text-blue-100">Connecting Christians worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Scripture Union Zambia is dedicated to making God's Good News known to children, young
            people, and families, and encouraging people of all ages to meet God daily through the
            Bible and prayer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Word of God</h3>
            <p className="text-gray-600 leading-relaxed">
              We spread the gospel through Bible studies, scripture reading programs, and teaching
              materials that bring people closer to God.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-red-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Care</h3>
            <p className="text-gray-600 leading-relaxed">
              Building supportive communities where believers can grow together in faith, fellowship,
              and service to others.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Youth Ministry</h3>
            <p className="text-gray-600 leading-relaxed">
              Engaging young people through camps, school programs, and youth groups that nurture
              spiritual growth and leadership.
            </p>
          </div>
        </div>

        {testimonials.length > 0 && (
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
              What People Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg">
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl mb-8 text-blue-100">
            Subscribe to our newsletter for updates on events, programs, and spiritual resources
          </p>
          {subscribeSuccess ? (
            <div className="bg-white/20 backdrop-blur-lg rounded-lg p-4 max-w-md mx-auto">
              <p className="text-white font-semibold">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
