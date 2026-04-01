import { BookOpen, Users, Heart, School, Hop as Home, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Bible Reading Programs',
      description:
        'Daily Bible reading guides and resources for individuals, families, and groups. Our materials help people engage with Scripture in meaningful and transformative ways.',
      features: [
        'Daily Bible reading notes',
        'Study guides for all ages',
        'Digital and print resources',
        'Group study materials',
      ],
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Youth Camps & Programs',
      description:
        'Residential camps and day programs that combine fun activities with biblical teaching, helping young people grow in their faith and develop leadership skills.',
      features: [
        'Holiday camps',
        'Leadership training',
        'Spiritual retreats',
        'Adventure activities',
      ],
      color: 'red',
    },
    {
      icon: School,
      title: 'School Ministry',
      description:
        'Christian education programs in schools, including assemblies, lunch clubs, and after-school groups that introduce students to the Christian faith.',
      features: [
        'School assemblies',
        'Scripture Union clubs',
        'Teacher training',
        'Resource provision',
      ],
      color: 'blue',
    },
    {
      icon: Home,
      title: 'Family Ministry',
      description:
        'Resources and programs to help families grow in faith together, strengthening family relationships through shared spiritual practices.',
      features: [
        'Family devotional materials',
        'Parenting workshops',
        'Family events',
        'Home group resources',
      ],
      color: 'red',
    },
    {
      icon: Heart,
      title: 'Community Outreach',
      description:
        'Serving local communities through various programs that demonstrate God\'s love and address practical needs while sharing the gospel.',
      features: [
        'Community service projects',
        'Evangelism training',
        'Support programs',
        'Local partnerships',
      ],
      color: 'blue',
    },
    {
      icon: Globe,
      title: 'International Connections',
      description:
        'Connecting with the global Scripture Union movement and facilitating partnerships between Zambian Christians and the international church.',
      features: [
        'International partnerships',
        'Exchange programs',
        'Global prayer network',
        'Resource sharing',
      ],
      color: 'red',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Services & Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Equipping people of all ages to encounter God through His Word and live out their faith
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through a variety of programs and resources, we help people engage with Scripture,
            grow in their faith, and make a difference in their communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const bgColor = service.color === 'blue' ? 'bg-blue-100' : 'bg-red-100';
            const textColor = service.color === 'blue' ? 'text-blue-600' : 'text-red-600';
            const borderColor = service.color === 'blue' ? 'border-blue-600' : 'border-red-600';

            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 ${borderColor}`}
              >
                <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  <Icon className={textColor} size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 ${service.color === 'blue' ? 'bg-blue-600' : 'bg-red-600'} rounded-full`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Through these programs, we're seeing lives transformed across Zambia
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Youth Reached Annually</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
              <p className="text-gray-600">Schools Partnered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-gray-600">Volunteers Active</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">20+</div>
              <p className="text-gray-600">Years of Service</p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gray-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you want to volunteer, partner with us, or participate in our programs,
            there's a place for you
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Volunteer
            </button>
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Partner With Us
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
