
import React from 'react';
import { Link } from 'react-router-dom';
import { CLINICS } from '../constants';

const ClinicsPage: React.FC = () => {
  return (
    <div className="bg-canvas">
      {/* Header */}
      <section className="py-24 px-6 md:px-12 bg-stone-subtle border-b border-premium">
        <div className="max-w-7xl mx-auto">
          <span className="section-label mb-8 block">Small Group Enquiry</span>
          <h1 className="text-4xl md:text-6xl text-oxford mb-8 leading-tight font-serif">Academic Clinics & Intensives</h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl">
            Curated, outcome-focused support designed for reinforcement and exam readiness. A professional alternative to private tuition, maintaining the highest academic standards.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-oxford mb-10 font-serif">The Distinction of Curation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-oxford font-bold">Small Cohorts</h4>
              <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                We restrict these sessions to a maximum of 4 students per tutor. This ensures the intimacy required for individual questions while benefiting from shared academic enquiry.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-oxford font-bold">Curated Outcomes</h4>
              <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                Each clinic is time-bound and designed around specific academic milestones—intended as a supplement to, rather than a replacement for, one-to-one tuition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Listings */}
      <section className="py-32 px-6 md:px-12 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-label mb-20 text-center">Seasonal Intensives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CLINICS.map((clinic) => (
              <Link to={`/clinic/${clinic.id}`} key={clinic.id} className="p-12 border border-premium bg-white hover:border-oxford transition-all group shadow-sm flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold mb-4 block group-hover:text-oxford transition-colors">{clinic.durationFormat}</span>
                <h3 className="text-2xl text-oxford mb-8 font-serif leading-snug">{clinic.title}</h3>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed mb-10 flex-grow">{clinic.shortDescription}</p>
                <div className="mt-auto">
                   <span className="text-[10px] uppercase tracking-[0.25em] text-oxford font-bold border-b border-oxford pb-1">View Available Sessions</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-20 text-center">
             <p className="text-[15px] text-gray-400 italic font-light">Clinic availability is updated seasonally. Please contact the consultancy for bespoke group requirements.</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 md:px-12 bg-white border-t border-premium">
        <div className="max-w-3xl mx-auto text-center">
           <span className="section-label mb-8 block">Join a Cohort</span>
           <h2 className="text-3xl text-oxford mb-8 font-serif">Enquire about our next series</h2>
           <p className="text-gray-500 font-light mb-12 leading-relaxed">
             Our clinics fill quickly due to small cohort sizes. Register your interest to receive priority notification of our upcoming seasonal intensives.
           </p>
           <Link to="/request-match" className="px-12 py-5 bg-oxford text-white text-[11px] uppercase tracking-[0.25em] font-bold">
              Register Interest
           </Link>
        </div>
      </section>
    </div>
  );
};

export default ClinicsPage;
