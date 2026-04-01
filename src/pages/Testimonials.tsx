import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Testimonial {
  id: string;
  name: string;
  content: string;
  role: string;
  image_url: string;
  featured: boolean;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) setTestimonials(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Testimonials</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Hear from people whose lives have been transformed through Scripture Union Zambia
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">Testimonials will be available soon.</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {testimonials
                .filter((t) => t.featured)
                .map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-xl relative"
                  >
                    <Quote className="absolute top-6 right-6 text-white/20" size={48} />
                    <p className="text-lg mb-6 leading-relaxed relative z-10">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        {testimonial.image_url ? (
                          <img
                            src={testimonial.image_url}
                            alt={testimonial.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-blue-600 font-bold text-xl">
                            {testimonial.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-blue-100">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials
                .filter((t) => !t.featured)
                .map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Quote className="text-blue-600 mb-4" size={32} />
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        {testimonial.image_url ? (
                          <img
                            src={testimonial.image_url}
                            alt={testimonial.name}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-white font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}

        <div className="mt-20 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Share Your Story</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Have you been impacted by Scripture Union Zambia? We'd love to hear your story and how
            God has worked in your life through our programs and ministry.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Share Your Testimony
          </button>
        </div>
      </div>
    </div>
  );
}
