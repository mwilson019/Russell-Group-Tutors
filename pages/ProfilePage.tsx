
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TUTORS } from '../constants';

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tutor = TUTORS.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tutor) {
    return (
      <div className="py-32 text-center bg-canvas h-screen">
        <h2 className="text-2xl font-serif text-oxford">Tutor profile not found.</h2>
        <Link to="/tutors" className="mt-6 inline-block text-[11px] uppercase tracking-widest text-oxford border-b border-oxford pb-1 font-bold">Return to directory</Link>
      </div>
    );
  }

  // Create encoded parameters for the request link
  const requestUrl = `/request-match?tutor=${encodeURIComponent(tutor.name)}&uni=${encodeURIComponent(tutor.university)}`;

  return (
    <div className="bg-canvas min-h-screen">
      {/* Tutor Header */}
      <header className="bg-white border-b border-premium py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
          {tutor.photoUrl && (
            <div className="w-full lg:w-80 aspect-[4/5] flex-shrink-0 bg-stone-subtle overflow-hidden border border-premium shadow-sm">
              <img 
                src={tutor.photoUrl} 
                alt={tutor.name} 
                className="w-full h-full object-cover grayscale opacity-95"
              />
            </div>
          )}
          <div className="flex-grow flex flex-col lg:flex-row justify-between items-start gap-12 w-full">
            <div className="max-w-3xl">
              <Link to="/tutors" className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-8 block hover:text-oxford transition-colors font-bold tracking-widest">← Back to Directory</Link>
              <h1 className="text-4xl md:text-7xl text-oxford mb-6 leading-[1.1] font-serif">{tutor.name}</h1>
              <p className="text-2xl md:text-3xl font-serif text-gray-400 italic mb-10">{tutor.university} — {tutor.degree}</p>
              <div className="flex flex-wrap gap-4">
                 {tutor.subjects.slice(0, 4).map((s, i) => (
                   <span key={i} className="px-5 py-2 bg-stone-subtle border border-premium text-[10px] uppercase tracking-[0.2em] text-oxford font-bold">{s}</span>
                 ))}
              </div>
            </div>
            <div className="w-full lg:w-auto pt-6 lg:pt-14">
               <Link to={requestUrl} className="w-full lg:w-auto inline-block px-12 py-5 bg-oxford text-white text-[11px] uppercase tracking-[0.25em] font-bold text-center hover:bg-oxford/90 transition-all">
                  Request This Tutor
               </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-3 gap-24">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-24">
          <section>
            <span className="section-label mb-8 block">Professional Summary</span>
            <p className="text-xl text-gray-700 leading-relaxed font-light">{tutor.fullBio}</p>
          </section>

          <section>
            <span className="section-label mb-8 block">Classroom Experience</span>
            <ul className="space-y-6">
              {tutor.experience.map((exp, i) => (
                <li key={i} className="flex items-start gap-5 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-oxford rounded-full mt-2 shrink-0 opacity-20"></span>
                  <span className="text-[17px] font-light leading-relaxed">{exp}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <span className="section-label mb-8 block">Curriculum Specialisms</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {tutor.subjectsDetailed.map((group, i) => (
                <div key={i} className="p-8 border border-premium bg-white shadow-sm">
                  <h4 className="text-[11px] font-bold text-oxford uppercase tracking-[0.25em] mb-6 pb-3 border-b border-premium">{group.level}</h4>
                  <ul className="space-y-3">
                    {group.list.map((item, j) => (
                      <li key={j} className="text-[14px] text-gray-500 font-light">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <span className="section-label mb-8 block">Consultant’s Note on Style</span>
            <p className="text-[18px] text-gray-600 leading-relaxed font-light bg-stone-subtle p-12 border border-premium italic opacity-90">
              "{tutor.style}"
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          <div className="bg-white border border-premium p-10 shadow-sm">
            <span className="section-label mb-8 block">Ideal Student Match</span>
            <ul className="space-y-5 mb-10">
               {tutor.recommendedFor.map((item, i) => (
                 <li key={i} className="text-[13px] text-oxford flex gap-4 font-medium">
                   <span className="text-gray-300 font-light">/</span> {item}
                 </li>
               ))}
            </ul>

            <span className="section-label mb-4 block">Availability</span>
            <p className="text-sm text-gray-500 font-light mb-10">{tutor.availability}</p>

            <span className="section-label mb-4 block">Safeguarding</span>
            <p className="text-[10px] text-oxford font-bold tracking-[0.2em] bg-stone-subtle px-4 py-2 border border-premium inline-block uppercase">{tutor.dbsStatus}</p>
          </div>

          <div className="p-10 border border-oxford bg-oxford text-white text-center">
             <h4 className="text-2xl mb-6 font-serif">Secure a Trial</h4>
             <p className="text-[13px] text-gray-300 mb-10 font-light leading-relaxed">Experience our structured, calm approach firsthand with a matched trial session.</p>
             <Link to={requestUrl} className="block w-full py-5 bg-white text-oxford text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-gray-100 transition-all">Request a Match</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
