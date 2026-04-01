import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Mail, Phone } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
  order_index: number;
}

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    const { data } = await supabase
      .from('team_members')
      .select('*')
      .order('order_index', { ascending: true });

    if (data) setTeamMembers(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Meet the dedicated individuals serving to spread God's word across Zambia
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : teamMembers.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">Our team information will be available soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  {member.image_url ? (
                    <img
                      src={member.image_url}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  {member.bio && (
                    <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-20 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're always looking for passionate individuals who want to serve God and make a
              difference in people's lives. Whether you're interested in full-time ministry,
              volunteering, or partnering with us, we'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-gray-800 mb-3">Volunteer Opportunities</h4>
              <p className="text-gray-600 mb-4">
                Get involved in our programs and help us reach more people with God's word
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                Learn More
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-gray-800 mb-3">Career Opportunities</h4>
              <p className="text-gray-600 mb-4">
                Explore full-time ministry positions and join our dedicated team
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors w-full">
                View Openings
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-900 text-white rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Have questions or want to connect with our team? We'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <Mail size={20} className="text-blue-400" />
              <span>Info@scriptureunionzambia.org.zm</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={20} className="text-blue-400" />
              <span>+260 763 670 0777</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
