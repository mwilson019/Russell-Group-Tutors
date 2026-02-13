
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Specialisms', path: '/specialisms' },
    { name: 'Academic Clinics', path: '/clinics' },
    { name: 'Tutor Directory', path: '/tutors' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-canvas">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-sm border-b border-premium py-5 px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif font-semibold tracking-tight text-oxford">Russell Group</span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold -mt-1">Tutors</span>
        </Link>
        <div className="hidden lg:flex items-center gap-10 text-[12px] font-medium tracking-wide text-gray-500 uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`hover:text-oxford transition-colors tracking-widest ${pathname === link.path ? 'text-oxford' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/request-match" className="ml-4 px-6 py-3 bg-oxford text-white text-[11px] uppercase tracking-widest transition-colors font-semibold">
            Request a Match
          </Link>
        </div>
        <div className="lg:hidden">
           <Link to="/tutors" className="text-[11px] uppercase tracking-widest text-oxford font-bold">Directory</Link>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-premium py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-8">
              <span className="text-2xl font-serif font-semibold tracking-tight text-oxford">Russell Group</span>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">Tutors</span>
            </div>
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-sm mb-6 font-light">
              Providing bespoke, curriculum-aligned academic support for families seeking excellence across Dubai, London, and international territories.
            </p>
          </div>
          <div>
            <h4 className="section-label mb-8">Contact</h4>
            <ul className="text-[14px] text-gray-600 space-y-5 font-light">
              <li className="hover:text-oxford transition-colors">enquiries@russellgrouptutors.com</li>
              <li>WhatsApp: +44 (0) 20 7123 4567</li>
              <li>WhatsApp: +971 50 123 4567</li>
            </ul>
          </div>
          <div>
            <h4 className="section-label mb-8">Quick Links</h4>
            <ul className="text-[14px] text-gray-600 space-y-5 font-light uppercase tracking-widest text-[11px]">
              <li><Link to="/specialisms">Our Specialisms</Link></li>
              <li><Link to="/clinics">Academic Clinics</Link></li>
              <li><Link to="/tutors">Directory</Link></li>
              <li><Link to="/request-match">Request a Match</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-premium flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-400 tracking-wider">© {new Date().getFullYear()} Russell Group Tutors</p>
          <p className="text-[11px] text-gray-400 italic max-w-md text-center md:text-right font-light leading-relaxed">
            Individual results may vary. We are committed to the highest calibre of educational support through carefully vetted Russell Group graduates.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
