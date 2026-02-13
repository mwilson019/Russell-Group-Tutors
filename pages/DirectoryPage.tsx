
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TUTORS } from '../constants';

const DirectoryPage: React.FC = () => {
  const [filters, setFilters] = useState({
    university: 'Select university group',
    subject: 'Select subject',
    level: 'Select level',
    specialism: 'Select specialism'
  });

  const filterOptions = {
    universities: ['Select university group', 'Oxbridge', 'Russell Group', 'Other Top UK Universities'],
    subjects: ['Select subject', 'Maths', 'English', 'Sciences', 'Humanities', 'Social Sciences'],
    levels: ['Select level', 'Primary', 'GCSE', 'A-Level', 'Entrance Exams'],
    specialisms: [
      'Select specialism', 
      'Entrance Exam Preparation', 
      'Oxbridge Coaching', 
      'Interview Preparation', 
      'Study Skills & Mentoring'
    ]
  };

  const filteredTutors = useMemo(() => {
    return TUTORS.filter(tutor => {
      const matchUni = filters.university === 'Select university group' || 
        (filters.university === 'Oxbridge' && (tutor.university.includes('Oxford') || tutor.university.includes('Cambridge'))) ||
        (filters.university === 'Russell Group') || 
        (filters.university === 'Other Top UK Universities' && !tutor.university.includes('Oxford') && !tutor.university.includes('Cambridge'));

      const matchSubject = filters.subject === 'Select subject' || 
        tutor.subjects.some(s => {
          if (filters.subject === 'Maths') return s.includes('Math') || s.includes('Numeracy');
          if (filters.subject === 'Sciences') return s.includes('Biology') || s.includes('Chemistry') || s.includes('Physics') || s.includes('Science');
          if (filters.subject === 'Humanities') return s.includes('History') || s.includes('Geography');
          if (filters.subject === 'Social Sciences') return s.includes('Economics') || s.includes('Politics') || s.includes('Sociology');
          return s.includes(filters.subject);
        });

      const matchLevel = filters.level === 'Select level' || 
        tutor.subjectsDetailed.some(d => {
          if (filters.level === 'Entrance Exams') return d.level.includes('Entrance') || d.level.includes('Prep');
          return d.level.includes(filters.level);
        });

      const matchSpecialism = filters.specialism === 'Select specialism' || 
        tutor.experience.some(e => e.toLowerCase().includes(filters.specialism.toLowerCase())) ||
        tutor.summary.toLowerCase().includes(filters.specialism.toLowerCase());

      return matchUni && matchSubject && matchLevel && matchSpecialism;
    });
  }, [filters]);

  return (
    <div className="bg-canvas">
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="section-label mb-8 block">Directory</span>
          <h1 className="text-4xl md:text-6xl text-oxford mb-10 leading-tight font-serif">Meet Our Tutors</h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
            Exclusively high-calibre graduates from the UK’s most prestigious universities. Each individual has been carefully vetted for academic brilliance and proven classroom experience.
          </p>
        </div>

        {/* Filter Tutors Section */}
        <section className="mb-20 bg-stone-subtle border-y border-premium py-12 px-8 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-label mb-10">Find the Right Tutor</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              
              {/* University Group Filter */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">University Group</label>
                <select 
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-oxford outline-none focus:border-oxford transition-colors appearance-none cursor-pointer font-light"
                  value={filters.university}
                  onChange={(e) => setFilters({...filters, university: e.target.value})}
                >
                  {filterOptions.universities.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              {/* Subject Filter */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Subject</label>
                <select 
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-oxford outline-none focus:border-oxford transition-colors appearance-none cursor-pointer font-light"
                  value={filters.subject}
                  onChange={(e) => setFilters({...filters, subject: e.target.value})}
                >
                  {filterOptions.subjects.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              {/* Academic Level Filter */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Academic Level</label>
                <select 
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-oxford outline-none focus:border-oxford transition-colors appearance-none cursor-pointer font-light"
                  value={filters.level}
                  onChange={(e) => setFilters({...filters, level: e.target.value})}
                >
                  {filterOptions.levels.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              {/* Specialism Filter */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Specialism</label>
                <select 
                  className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-oxford outline-none focus:border-oxford transition-colors appearance-none cursor-pointer font-light"
                  value={filters.specialism}
                  onChange={(e) => setFilters({...filters, specialism: e.target.value})}
                >
                  {filterOptions.specialisms.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

            </div>
            
            {/* Results count or Reset */}
            <div className="mt-8 flex justify-between items-center border-t border-gray-200 pt-6">
              <p className="text-[11px] text-gray-400 uppercase tracking-widest font-medium">
                Showing {filteredTutors.length} {filteredTutors.length === 1 ? 'Tutor' : 'Tutors'}
              </p>
              {(filters.subject !== 'Select subject' || filters.level !== 'Select level' || filters.university !== 'Select university group' || filters.specialism !== 'Select specialism') && (
                <button 
                  onClick={() => setFilters({
                    subject: 'Select subject', 
                    level: 'Select level', 
                    university: 'Select university group', 
                    specialism: 'Select specialism'
                  })}
                  className="text-[10px] uppercase tracking-widest text-oxford font-bold border-b border-oxford pb-0.5"
                >
                  Reset Selection
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Tutor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredTutors.map((tutor) => (
            <div key={tutor.id} className="bg-white border border-premium p-10 flex flex-col hover:border-oxford transition-all shadow-sm">
              <div className="mb-8 pb-8 border-b border-premium flex items-start gap-6">
                {tutor.photoUrl && (
                  <div className="w-16 h-16 flex-shrink-0 bg-stone-subtle overflow-hidden border border-premium">
                    <img 
                      src={tutor.photoUrl} 
                      alt={tutor.name} 
                      className="w-full h-full object-cover grayscale opacity-80"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-2xl text-oxford mb-2 font-serif">{tutor.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60 mb-1">{tutor.university}</p>
                  <p className="text-[12px] text-gray-400 font-light">{tutor.degree}</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-10 flex-grow">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">Specialisms</p>
                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map((sub, i) => (
                      <span key={i} className="text-[10px] bg-stone-subtle px-3 py-1.5 text-oxford font-medium">{sub}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-1 font-bold">Academic Focus</p>
                  <p className="text-[13px] text-oxford font-light">{tutor.yearGroups}</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-1 font-bold">Consultancy Note</p>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-light italic">"{tutor.summary}"</p>
                </div>
              </div>

              <Link 
                to={`/tutor/${tutor.id}`} 
                className="w-full py-4 border border-oxford text-oxford text-[10px] uppercase tracking-[0.25em] text-center hover:bg-oxford hover:text-white transition-all font-bold"
              >
                View Full Profile
              </Link>
            </div>
          ))}
        </div>
        
        {filteredTutors.length === 0 && (
          <div className="py-20 text-center border border-dashed border-premium">
             <p className="text-gray-400 font-light italic text-sm">No tutors match your current selection criteria.</p>
             <button 
                onClick={() => setFilters({
                  subject: 'Select subject', 
                  level: 'Select level', 
                  university: 'Select university group', 
                  specialism: 'Select specialism'
                })}
                className="mt-6 text-[11px] uppercase tracking-widest text-oxford font-bold border-b border-oxford"
              >
                Clear all filters
              </button>
          </div>
        )}

        <div className="mt-32 p-16 bg-oxford text-white text-center">
          <h2 className="text-3xl md:text-4xl mb-8 font-serif">Can’t find a specific subject?</h2>
          <p className="max-w-2xl mx-auto mb-12 text-gray-300 font-light leading-relaxed">
            Our network extends far beyond this directory. Contact our concierge team to find a bespoke match for niche subjects or specific university entrance requirements.
          </p>
          <a href="/request-match" className="inline-block px-12 py-5 bg-white text-oxford text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-gray-100 transition-all">
            Request a Custom Search
          </a>
        </div>
      </div>
    </div>
  );
};

export default DirectoryPage;
