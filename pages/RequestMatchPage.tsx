
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const RequestMatchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tutorName = searchParams.get('tutor');
  const tutorUni = searchParams.get('uni');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    age: '',
    subjects: '',
    schedule: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. A senior consultant will contact you within 24 hours.");
  };

  return (
    <div className="bg-canvas min-h-screen">
      {/* Header Section */}
      <header className="py-24 px-6 md:px-12 bg-white border-b border-premium text-center">
        <div className="max-w-4xl mx-auto">
          {tutorName && (
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4 block">
              ENQUIRY FOR {tutorName} – {tutorUni}
            </span>
          )}
          <span className="section-label mb-8 block">Consultancy Enquiry</span>
          <h1 className="text-4xl md:text-6xl text-oxford mb-8 leading-tight font-serif">Begin Your Child's Journey</h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Our match-making process is entirely human-led, ensuring a synergy of expertise, personality, and academic goals.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Information Column */}
        <div className="space-y-16">
          <section>
            <span className="section-label mb-8 block">The Process</span>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <span className="text-3xl font-serif text-oxford opacity-20 group-hover:opacity-100 transition-opacity">01</span>
                <div>
                   <h4 className="text-xl text-oxford mb-3 font-serif">Bespoke Matching</h4>
                   <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                     Unlike automated platforms, a senior consultant personally reviews your requirements to select the tutor best suited to your child's learning style.
                   </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="text-3xl font-serif text-oxford opacity-20 group-hover:opacity-100 transition-opacity">02</span>
                <div>
                   <h4 className="text-xl text-oxford mb-3 font-serif">Professional Discretion</h4>
                   <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                     We maintain the highest standards of privacy for all our families, handling every enquiry with professional confidentiality.
                   </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <span className="text-3xl font-serif text-oxford opacity-20 group-hover:opacity-100 transition-opacity">03</span>
                <div>
                   <h4 className="text-xl text-oxford mb-3 font-serif">Personalised Roadmap</h4>
                   <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                     Following the initial consultation, we provide a structured learning plan with clear milestones and progress tracking.
                   </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-stone-subtle p-12 border border-premium">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-oxford font-bold mb-6">Our Commitment</h4>
            <p className="text-[14px] text-gray-600 font-light leading-relaxed italic opacity-80">
              "We understand the pressures facing students today. Our mission is to provide a calm, intellectually stimulating environment where academic excellence is achieved through genuine comprehension, not just memorisation."
            </p>
          </section>
        </div>

        {/* Form Column */}
        <div className="bg-white p-10 md:p-14 border border-premium shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-10">
            {tutorName && (
              <div className="space-y-2 pb-6 border-b border-gray-100">
                <label className="text-[10px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Requested Tutor</label>
                <input 
                  type="text" 
                  value={tutorName} 
                  readOnly 
                  className="w-full bg-stone-subtle/50 border-b border-premium py-3 text-oxford outline-none text-sm font-medium cursor-not-allowed px-3" 
                />
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Parent Name</label>
                <input required type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-oxford outline-none transition-colors text-sm" placeholder="Full Name" onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Email Address</label>
                <input required type="email" className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-oxford outline-none transition-colors text-sm" placeholder="email@example.com" onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">WhatsApp Number</label>
                <input required type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-oxford outline-none transition-colors text-sm" placeholder="+44 / +971..." onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Child’s Age / Year Group</label>
                <input required type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-oxford outline-none transition-colors text-sm" placeholder="e.g. Year 10" onChange={e => setFormData({...formData, age: e.target.value})} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Subjects Required</label>
              <input required type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-oxford outline-none transition-colors text-sm" placeholder="e.g. Maths, Biology" onChange={e => setFormData({...formData, subjects: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Message / Academic Goals</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-oxford outline-none transition-colors text-sm" placeholder="Briefly describe your requirements..." onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            </div>
            <div className="pt-6">
              <button type="submit" className="w-full py-5 bg-oxford text-white text-[11px] uppercase tracking-[0.25em] font-bold">
                Submit Enquiry
              </button>
              <p className="text-[11px] text-gray-400 text-center mt-6 font-light">
                Response within 24 hours • Discreet and Professional
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestMatchPage;
