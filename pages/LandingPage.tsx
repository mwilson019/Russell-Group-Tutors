
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';

const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    age: '',
    subjects: '',
    schedule: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. Our consultancy team will contact you shortly.");
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-[#F8F7F5] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
           <div className="w-full h-full bg-[radial-gradient(#101D33_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl text-oxford mb-8 leading-[1.1] font-medium">
              Premium UK Graduate Online Tutors for British Families
            </h1>
            <p className="text-lg md:text-2xl text-gray-500 mb-12 leading-relaxed font-light max-w-2xl">
              Oxbridge and Russell Group graduates with professional classroom teaching experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#enquire" className="px-10 py-5 cta-primary text-white text-[11px] uppercase tracking-[0.2em] font-bold text-center">
                Request a Tutor Match
              </a>
              <Link to="/tutors" className="px-10 py-5 border border-oxford text-oxford text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-oxford hover:text-white transition-all text-center">
                View Tutor Profiles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust & Credibility Bar */}
      <section className="py-14 bg-white border-y border-premium overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center gap-16 min-w-max">
          {[
            "Oxbridge & Russell Group Graduates",
            "UK Curriculum Aligned",
            "Experienced Teaching Assistants",
            "Carefully Matched Tutors",
            "Progress Tracking & Feedback"
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-start">
               <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-oxford mb-2 opacity-50">0{i+1}</span>
               <span className="text-[13px] font-medium text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About the Service - STONE BACKGROUND */}
      <section className="py-32 px-6 md:px-12 bg-stone-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label mb-8 block">Our Pedagogy</span>
          <h2 className="text-3xl md:text-5xl text-oxford mb-12 leading-snug">Bespoke Academic Support Rooted in Classroom Excellence</h2>
          <p className="text-[19px] text-gray-600 leading-relaxed font-light italic opacity-90">
            "Russell Group Tutors draws upon a deep heritage in UK education excellence. We select tutors who are not just subject experts, but high-calibre graduates currently working within the UK’s leading schools."
          </p>
          <p className="text-[17px] text-gray-500 leading-relaxed font-light mt-8">
            This classroom presence ensures our tutors bring a structured, calm, and academically rigorous approach to every session, providing a premium alternative for families who value consistency and curriculum mastery.
          </p>
        </div>
      </section>

      {/* 4. What We Offer */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl text-oxford mb-6">A Curated Range of Support</h2>
              <p className="text-[17px] text-gray-500 font-light leading-relaxed">From foundational literacy to advanced scientific enquiry, our tutors are equipped to support every stage of the UK academic journey.</p>
            </div>
            <Link to="/tutors" className="text-[11px] uppercase tracking-[0.2em] text-oxford border-b border-oxford pb-2 font-bold hover:opacity-70 transition-opacity">Browse all profiles</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, i) => (
              <div key={i} className="p-12 border border-premium transition-all bg-canvas hover:border-oxford group">
                <h3 className="text-2xl text-oxford mb-6 group-hover:text-black transition-colors">{service.title}</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Who It’s For */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2">
             <div className="relative">
               <div className="absolute inset-0 bg-oxford/5 -m-4"></div>
               <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2000&auto=format&fit=crop" alt="Learning environment" className="relative w-full h-[600px] object-cover grayscale opacity-90 border border-premium shadow-sm" />
             </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="section-label mb-8 block">Global Reach</span>
            <h2 className="text-3xl md:text-5xl text-oxford mb-10 leading-tight">Supporting the Global British Student</h2>
            <div className="space-y-8">
              <p className="text-[18px] text-gray-600 leading-relaxed font-light">
                Our service is designed for <strong>British expat families</strong> who demand the same standard of academic rigour abroad as they would expect in the UK.
              </p>
              <p className="text-[18px] text-gray-600 leading-relaxed font-light">
                Whether based in <strong>Dubai</strong> seeking curriculum continuity, or internationally preparing for transitions into top UK boarding schools, we provide the calm, professional structure required for academic success.
              </p>
              <ul className="space-y-5 pt-4">
                {[
                  "Confidence-building for quiet learners",
                  "Rigorous preparation for GCSE & A-Level exams",
                  "Concierge-style support for busy parents"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-medium text-oxford">
                    <div className="w-1.5 h-1.5 bg-oxford rounded-full opacity-30"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How It Works - STONE BACKGROUND */}
      <section className="py-32 px-6 md:px-12 bg-stone-subtle">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <span className="section-label mb-8 block">Methodology</span>
            <h2 className="text-3xl md:text-5xl text-oxford mb-6">Our Premium Concierge Process</h2>
            <p className="text-[17px] text-gray-500 font-light">A consultative journey designed to ensure the perfect match.</p>
          </div>
          <div className="grid grid-cols-1 gap-14">
            {[
              { step: '01', title: 'Enquiry Form', desc: 'Share your child’s specific academic needs and goals via our secure portal.' },
              { step: '02', title: 'Parent Consultation Call', desc: 'A senior consultant discusses your requirements to understand the student’s personality and learning style.' },
              { step: '03', title: 'Tutor Matching', desc: 'We present a curated selection of tutors whose expertise and experience align with your goals.' },
              { step: '04', title: 'Trial Session', desc: 'An initial session to establish rapport and ensure the dynamic is conducive to learning.' },
              { step: '05', title: 'Structured Learning Plan', desc: 'A bespoke roadmap is created, detailing milestones and key areas of focus.' },
              { step: '06', title: 'Ongoing Tuition', desc: 'Regular sessions with monthly progress updates and performance tracking.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-12 items-start group">
                <span className="text-5xl font-serif text-oxford opacity-10 font-light group-hover:opacity-30 transition-opacity">{item.step}</span>
                <div className="pt-3 border-b border-premium pb-10 w-full group-hover:border-oxford transition-colors">
                  <h4 className="text-2xl text-oxford mb-3">{item.title}</h4>
                  <p className="text-[16px] text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Russell Group Tutors */}
      <section className="py-32 px-6 md:px-12 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="section-label mb-8 block">Excellence</span>
            <h2 className="text-3xl md:text-5xl text-oxford">The Russell Group Distinction</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { title: 'High-calibre graduate tutors', desc: 'Exclusively Oxbridge and Russell Group graduates with a passion for pedagogy.' },
              { title: 'UK curriculum-aligned teaching', desc: 'Direct experience with AQA, Edexcel, OCR and the National Curriculum.' },
              { title: 'Calm, structured lessons', desc: 'A professional approach designed to reduce academic anxiety and build focus.' },
              { title: 'Tailored learning plans', desc: 'Bespoke roadmaps provided after the very first assessment session.' },
              { title: 'Monthly progress updates', desc: 'Transparent, formal feedback for parents to track tangible academic growth.' },
              { title: 'Tutor replacement guarantee', desc: 'Complete peace of mind to ensure the rapport and results are exactly right.' }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-xl text-oxford font-medium">{item.title}</h4>
                <p className="text-[15px] text-gray-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Safeguarding & Professional Standards */}
      <section className="py-24 px-6 md:px-12 bg-white border-y border-premium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl text-oxford mb-8">Commitment to Safeguarding</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed font-light">
            As a professional education consultancy, we adhere to the strictest safeguarding guidelines. All our tutors undergo comprehensive vetting, including Enhanced DBS checks. We maintain high professional conduct expectations and clear online tuition boundaries to ensure a secure, respectful learning environment for every student.
          </p>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-stone-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="italic text-gray-600 relative">
                <p className="text-[16px] leading-relaxed mb-10 font-light">"{t.content}"</p>
                <div className="not-italic pt-6 border-t border-premium">
                  <p className="text-[11px] font-bold text-oxford uppercase tracking-[0.2em] mb-1">{t.author}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final Call to Action / Form */}
      <section id="enquire" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="section-label mb-8 block">Enquiry</span>
            <h2 className="text-3xl md:text-6xl text-oxford mb-10 leading-[1.15]">Begin Your Child’s Journey with Russell Group Tutors</h2>
            <p className="text-[18px] text-gray-500 leading-relaxed mb-12 font-light">
              Submit your enquiry below, and a senior consultant will contact you within 24 hours to discuss how we can support your child’s academic goals.
            </p>
            <div className="space-y-6 text-[14px] text-gray-600 font-light">
               <div className="flex gap-4">
                 <span className="text-oxford font-bold">/</span>
                 <p><strong>Bespoke Matching:</strong> Human expertise over automated algorithms.</p>
               </div>
               <div className="flex gap-4">
                 <span className="text-oxford font-bold">/</span>
                 <p><strong>Professional Privacy:</strong> Discretion is central to our consultancy.</p>
               </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-stone-subtle p-10 md:p-14 border border-premium space-y-10">
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
                <input required type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-oxford outline-none transition-colors text-sm" placeholder="+971..." onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Child’s Age / Year Group</label>
                <input required type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-oxford outline-none transition-colors text-sm" placeholder="e.g. Year 9" onChange={e => setFormData({...formData, age: e.target.value})} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Subjects Required</label>
              <input required type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-oxford outline-none transition-colors text-sm" placeholder="e.g. Science, Mathematics" onChange={e => setFormData({...formData, subjects: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Message / Academic Goals</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-oxford outline-none transition-colors text-sm" placeholder="Tell us about your requirements..." onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
            </div>
            <button type="submit" className="w-full py-5 cta-primary text-white text-[11px] uppercase tracking-[0.25em] font-bold">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
