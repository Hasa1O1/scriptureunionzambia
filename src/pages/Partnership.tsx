import { useState } from 'react';
import { Handshake, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Partnership() {
  const [formData, setFormData] = useState({
    organization_name: '',
    contact_name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from('partnership_requests').insert([formData]);

    if (!error) {
      setSuccess(true);
      setFormData({
        organization_name: '',
        contact_name: '',
        email: '',
        phone: '',
        message: '',
      });
      setTimeout(() => setSuccess(false), 5000);
    }

    setSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Partner With Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Join us in our mission to spread God's word and transform lives across Zambia and beyond
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Building Kingdom Partnerships
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe in the power of partnership. Together, we can achieve more for God's kingdom
            and reach more people with the life-changing message of the gospel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Handshake className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Church Partnerships</h3>
            <p className="text-gray-600 leading-relaxed">
              Collaborate with us in youth ministry, Bible teaching programs, and community
              outreach initiatives that strengthen local congregations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Corporate Partnerships</h3>
            <p className="text-gray-600 leading-relaxed">
              Support our mission through corporate sponsorships, employee engagement programs, and
              CSR initiatives that make a real difference.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Handshake className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">International Partners</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with us for cross-cultural missions, resource sharing, and global ministry
              opportunities that expand God's kingdom.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Partner With Scripture Union Zambia?
            </h2>
            <ul className="space-y-4">
              {[
                'Proven track record of impactful ministry',
                'Strong local presence and community relationships',
                'Transparent and accountable operations',
                'Part of the global Scripture Union movement',
                'Committed to excellence and biblical integrity',
                'Experienced leadership and dedicated team',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Partnership Application
            </h2>

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                Thank you for your interest in partnering with us! We'll review your application
                and be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="organization_name" className="block text-gray-700 font-semibold mb-2">
                  Organization Name *
                </label>
                <input
                  type="text"
                  id="organization_name"
                  name="organization_name"
                  value={formData.organization_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="contact_name" className="block text-gray-700 font-semibold mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  id="contact_name"
                  name="contact_name"
                  value={formData.contact_name}
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
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Partnership Proposal *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your organization and how you'd like to partner with us..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? 'Submitting...' : 'Submit Application'}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Partnership?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're happy to discuss partnership opportunities and answer any questions you may have.
            Get in touch with us today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Email Us
            </button>
            <button className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Call Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
