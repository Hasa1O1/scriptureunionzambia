import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
  order_index: number;
}

interface CouncilMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'John Banda',
      role: 'National Director',
      bio: 'Leading Scripture Union Zambia with over 15 years of ministry experience.',
      image_url: '',
      order_index: 1
    },
    {
      id: '2',
      name: 'Mary Phiri',
      role: 'Programs Coordinator',
      bio: 'Overseeing all youth programs and camp initiatives across the country.',
      image_url: '',
      order_index: 2
    },
    {
      id: '3',
      name: 'David Mwamba',
      role: 'School Ministry Lead',
      bio: 'Coordinating Bible engagement programs in schools throughout Zambia.',
      image_url: '',
      order_index: 3
    },
  ];

  const councilMembers: CouncilMember[] = [
    {
      id: '1',
      name: 'Rev. Dr. James Chanda',
      role: 'Council Chairman',
      bio: 'Providing spiritual leadership and guidance to Scripture Union Zambia for over 20 years.',
      image_url: ''
    },
    {
      id: '2',
      name: 'Mrs. Grace Mwamba',
      role: 'Council Secretary',
      bio: 'Managing council operations and ensuring effective governance and compliance.',
      image_url: ''
    },
    {
      id: '3',
      name: 'Mr. Peter Phiri',
      role: 'Council Treasurer',
      bio: 'Overseeing financial stewardship and resource management for the organization.',
      image_url: ''
    },
    {
      id: '4',
      name: 'Dr. Sarah Banda',
      role: 'Council Member',
      bio: 'Bringing expertise in education and youth development to guide our programs.',
      image_url: ''
    },
    {
      id: '5',
      name: 'Mr. Michael Musonda',
      role: 'Council Member',
      bio: 'Contributing business and strategic planning expertise to support our mission.',
      image_url: ''
    },
    {
      id: '6',
      name: 'Mrs. Esther Tembo',
      role: 'Council Member',
      bio: 'Providing pastoral care and counseling expertise for our youth programs.',
      image_url: ''
    },
  ];

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

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Council Members</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our council provides spiritual leadership, governance, and strategic guidance to Scripture Union Zambia
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {councilMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-brand-red to-red-700 flex items-center justify-center">
                  {member.image_url ? (
                    <img
                      src={member.image_url}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                      <span className="text-brand-red text-3xl font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-brand-red font-semibold mb-4">{member.role}</p>
                  {member.bio && (
                    <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

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
              <Link to="/community" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full text-center">
                Learn More
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-gray-800 mb-3">Career Opportunities</h4>
              <p className="text-gray-600 mb-4">
                Explore full-time ministry positions and join our dedicated team
              </p>
              <Link to="/contact" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors w-full text-center">
                View Openings
              </Link>
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
