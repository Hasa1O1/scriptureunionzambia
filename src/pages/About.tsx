import { Target, Eye, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About Scripture Union Zambia</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Dedicated to spreading God's word and building faith communities across Zambia
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Scripture Union Zambia is a Christian NGO committed to making God's Good News known
                to children, young people, and families throughout Zambia and beyond.
              </p>
              <p>
                We are part of the worldwide Scripture Union movement, working in partnership with
                local churches and Christian organizations to reach people of all ages with the
                life-transforming message of Jesus Christ.
              </p>
              <p>
                Through Bible reading programs, youth camps, school ministry, and community
                outreach, we help people encounter God through His Word and grow in their faith
                journey.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Core Values</h3>
            <div className="space-y-4">
              {[
                { title: 'Biblical', desc: 'Rooted in Scripture and sound doctrine' },
                { title: 'Prayer', desc: 'Dependent on God through prayer' },
                { title: 'Excellence', desc: 'Committed to quality in all we do' },
                { title: 'Integrity', desc: 'Operating with honesty and transparency' },
                { title: 'Partnership', desc: 'Working together with churches and organizations' },
              ].map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-800">{value.title}</p>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-blue-600">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To make God's Good News known to children, young people, and families, and to
              encourage people of all ages to meet God daily through the Bible and prayer.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-red-600">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-red-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A Zambia where people of all ages are committed followers of Jesus Christ, actively
              living out their faith and transforming their communities.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <BookOpen className="text-blue-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Bible Engagement</h4>
              <p className="text-gray-600">
                Providing resources and programs to help people read and understand God's Word
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Award className="text-blue-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Youth Ministry</h4>
              <p className="text-gray-600">
                Running camps, school programs, and youth groups across Zambia
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Target className="text-blue-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Community Impact</h4>
              <p className="text-gray-600">
                Partnering with churches to reach and serve local communities
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-gray-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Story</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether through partnership, volunteering, or prayer support, you can be part of what
            God is doing in Zambia
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
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
