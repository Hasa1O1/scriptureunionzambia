import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Partnership from './pages/Partnership';
import Community from './pages/Community';
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/admin/Login';
import { useLayoutEffect, useState } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home onNavigate={handleNavigate} />} />
              <Route path="/home" element={<Home onNavigate={handleNavigate} />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/community" element={<Community />} />
              <Route path="/admin" element={<Login />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer onNavigate={handleNavigate} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;