import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  year: string;
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'gallery' | 'portfolio'>('gallery');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | PortfolioItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Youth Gathering',
      description: 'Young people attending a Scripture Union event',
      image_url: '/462327626_3817841565131512_3105741374037572772_n.jpg',
      category: 'Events'
    },
    {
      id: '2',
      title: 'Scripture Union Camps',
      description: 'Promotional material for Scripture Union Camps',
      image_url: '/515443642_1153385956815761_1429405437632139446_n.jpg',
      category: 'Camps'
    },
    {
      id: '3',
      title: 'School Outreach',
      description: 'Scripture Union engaging with students at Nyamphande Boarding Secondary School',
      image_url: '/515493919_1153385816815775_5257536905134674602_n.jpg',
      category: 'School Ministry'
    },
    {
      id: '4',
      title: 'Impacting the Next Generation',
      description: 'Poster highlighting Scripture Union\'s mission to nurture young people',
      image_url: '/628853463_1340596101428078_5237788768145361674_n.jpg',
      category: 'Promotional'
    },
    {
      id: '5',
      title: 'Become a Volunteer',
      description: 'Poster encouraging volunteering with Scripture Union Zambia',
      image_url: '/629234937_1335280031959685_5645147075016249036_n.jpg',
      category: 'Volunteer'
    },
    {
      id: '6',
      title: 'Book Stall',
      description: 'Individuals browsing books at a Scripture Union book stall',
      image_url: '/646282342_1351845693636452_5849163424167388565_n.jpg',
      category: 'Events'
    },
    {
      id: '7',
      title: 'Community Event',
      description: 'Scripture Union community gathering',
      image_url: '/729451545_1447678804053140_2645793966506090363_n.jpg',
      category: 'Community'
    },
    {
      id: '8',
      title: 'Youth Program',
      description: 'Young people participating in Scripture Union activities',
      image_url: '/732152282_1450155303805490_9111053529225243974_n.jpg',
      category: 'Youth'
    },
    {
      id: '9',
      title: 'School Ministry',
      description: 'Scripture Union outreach in schools',
      image_url: '/733483155_1451329863688034_982667408915272225_n.jpg',
      category: 'School Ministry'
    },
    {
      id: '10',
      title: 'Bible Study',
      description: 'Group Bible study session',
      image_url: '/733810509_1453068240180863_105677559353614685_n.jpg',
      category: 'Bible Study'
    },
    {
      id: '11',
      title: 'Leadership Training',
      description: 'Training young leaders for ministry',
      image_url: '/734101400_1451329913688029_7987794730398927868_n.jpg',
      category: 'Training'
    },
    {
      id: '12',
      title: 'Worship Service',
      description: 'Youth worship and praise session',
      image_url: '/734528777_1451329827021371_7465215159529363103_n.jpg',
      category: 'Worship'
    },
    {
      id: '13',
      title: 'Camp Activities',
      description: 'Activities during Scripture Union camp',
      image_url: '/736273134_1453068490180838_3389442464885663339_n.jpg',
      category: 'Camps'
    },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      title: 'School Ministry Program',
      description: 'Comprehensive Bible engagement programs in schools across Zambia',
      image_url: '/515493919_1153385816815775_5257536905134674602_n.jpg',
      year: '2024'
    },
    {
      id: '2',
      title: 'Youth Camp Initiative',
      description: 'Annual youth camps that combine fun activities with biblical teaching',
      image_url: '/515443642_1153385956815761_1429405437632139446_n.jpg',
      year: '2024'
    },
    {
      id: '3',
      title: 'Community Outreach',
      description: 'Serving local communities through various programs',
      image_url: '/462327626_3817841565131512_3105741374037572772_n.jpg',
      year: '2024'
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Gallery & Portfolio</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Explore photos from our events, programs, and the impact we're making in communities
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-12">
          <div className="bg-gray-200 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'gallery'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Photo Gallery
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'portfolio'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Portfolio
            </button>
          </div>
        </div>

        {activeTab === 'gallery' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    {item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                        <span className="text-blue-300 text-4xl">SU</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                      <span className="text-blue-300 text-4xl">SU</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                    {'year' in item && item.year && (
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.year}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image_url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="bg-white rounded-b-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
