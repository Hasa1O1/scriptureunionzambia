import { useState } from 'react';
import { Search, Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  featured_image: string;
  created_at: string;
  author_id: string;
}

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Youth Camp 2024: A Life-Changing Experience',
      content: 'Our annual youth camp was an incredible time of spiritual growth, fellowship, and fun. Over 100 young people gathered to deepen their faith and build lasting friendships.',
      excerpt: 'Over 100 young people gathered for our annual youth camp, experiencing spiritual growth and building lasting friendships.',
      featured_image: '/729451545_1447678804053140_2645793966506090363_n.jpg',
      created_at: '2024-06-15',
      author_id: '1'
    },
    {
      id: '2',
      title: 'School Ministry Expansion',
      content: 'We are excited to announce our expansion into 5 new schools, reaching more students with the message of hope and faith through Bible engagement programs.',
      excerpt: 'Expanding our school ministry to reach more students with Bible engagement programs.',
      featured_image: '/515493919_1153385816815775_5257536905134674602_n.jpg',
      created_at: '2024-05-20',
      author_id: '1'
    },
    {
      id: '3',
      title: 'Volunteer Training Program',
      content: 'Our new volunteer training program is equipping believers with the skills they need to effectively minister to young people in their communities.',
      excerpt: 'Equipping believers with skills to effectively minister to young people in their communities.',
      featured_image: '/734101400_1451329913688029_7987794730398927868_n.jpg',
      created_at: '2024-04-10',
      author_id: '1'
    },
  ];

  const filteredPosts = searchTerm ? posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  ) : posts;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-white hover:text-blue-100 mb-4 flex items-center gap-2"
            >
              ← Back to Blog
            </button>
            <h1 className="text-4xl font-bold mb-4">{selectedPost.title}</h1>
            <div className="flex items-center gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(selectedPost.created_at)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {selectedPost.featured_image && (
              <img
                src={selectedPost.featured_image}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded-xl mb-8"
              />
            )}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {selectedPost.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Blog & News</h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Stay updated with our latest news, stories, and spiritual insights
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              {searchTerm ? 'No posts found matching your search.' : 'No blog posts available yet.'}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => setSelectedPost(post)}
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center overflow-hidden">
                  {post.featured_image ? (
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold opacity-20">SU</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{formatDate(post.created_at)}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  )}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
