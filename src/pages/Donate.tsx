import { Heart, Globe, Users, BookOpen } from 'lucide-react';

export default function Donate() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-xl text-red-100 max-w-3xl leading-relaxed">
            Your generous donations help us reach more people with God's word and transform lives
            across Zambia
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Make a Difference Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every contribution, no matter the size, helps us continue our mission of spreading the
            gospel and serving communities throughout Zambia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-xl">
            <Heart className="mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">Why Your Support Matters</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Provides Bible study materials to children and youth</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Funds youth camps and leadership training programs</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Supports community outreach and evangelism</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Enables ministry in schools and rural communities</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-gray-200">
            <div className="text-center mb-8">
              <div className="inline-block bg-red-100 p-4 rounded-full mb-4">
                <Heart className="text-red-600" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Donate Now</h3>
              <p className="text-gray-600">
                Support our mission through our GoFundMe campaign
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-xl mb-6">
              <p className="text-gray-700 text-center leading-relaxed">
                Click the button below to visit our GoFundMe page and make a secure donation. Every
                contribution helps us continue our vital work.
              </p>
            </div>

            <a
              href="https://gofund.me/your-campaign-link"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-red-600 text-white text-center px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Donate via GoFundMe
            </a>

            <p className="text-sm text-gray-500 text-center mt-4">
              Secure donation processing through GoFundMe
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Your Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <BookOpen className="text-blue-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">$50</h4>
              <p className="text-gray-600">Provides Bibles for 10 children</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Users className="text-blue-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">$100</h4>
              <p className="text-gray-600">Sponsors a youth camp participant</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Globe className="text-blue-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">$250</h4>
              <p className="text-gray-600">Supports a school ministry program</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">$500</h4>
              <p className="text-gray-600">Funds a complete community outreach</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Other Ways to Give</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Interested in making a recurring donation, corporate sponsorship, or partnering with us
            in other ways? We'd love to discuss how you can support our mission.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Us About Giving
          </button>
        </div>
      </div>
    </div>
  );
}
