import { useState } from 'react';
import { Users, Heart, Globe, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Community() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    country: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from('community_members').insert([formData]);

    if (!error) {
      setSuccess(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        country: '',
      });
      setTimeout(() => setSuccess(false), 5000);
    }

    setSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Join Our Community</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Become part of a global family of believers committed to growing in faith and spreading
            God's word
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            A Community of Faith and Fellowship
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When you join the Scripture Union Zambia community, you become part of a worldwide
            movement of Christians dedicated to engaging with God's Word and living out their faith.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Connect</h3>
            <p className="text-gray-600 leading-relaxed">
              Build meaningful relationships with other believers, share your faith journey, and
              grow together in community.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Grow</h3>
            <p className="text-gray-600 leading-relaxed">
              Access resources, events, and programs designed to help you deepen your relationship
              with God and understand His Word.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Globe className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Serve</h3>
            <p className="text-gray-600 leading-relaxed">
              Discover opportunities to use your gifts and talents in ministry, outreach, and
              service to others.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Community Member Benefits
            </h2>
            <ul className="space-y-4">
              {[
                'Regular updates on events, programs, and ministry opportunities',
                'Access to exclusive resources and Bible study materials',
                'Invitations to community gatherings and fellowship events',
                'Prayer support from our community and leadership',
                'Opportunities to serve and make a difference',
                'Connection with believers across Zambia and internationally',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Join Today</h2>
            <p className="text-gray-600 mb-6">
              Membership is completely free and open to everyone. Simply fill out the form below
              to become part of our community.
            </p>

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                Welcome to the Scripture Union Zambia community! We're excited to have you with us.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="full_name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-gray-700 font-semibold mb-2">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g., Zambia"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? 'Joining...' : 'Join Community'}
                <Send size={20} />
              </button>

              <p className="text-sm text-gray-500 text-center">
                By joining, you agree to receive updates and communications from Scripture Union
                Zambia. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Already a Member?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Stay connected with us through our social media channels and upcoming events.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View Events
            </button>
            <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
