
import React from 'react';
import { Link } from 'react-router-dom';

const SpecialismsPage: React.FC = () => {
  const sections = [
    {
      id: 'primary',
      label: 'Academic Foundation',
      title: 'Primary Tuition (KS1 / KS2)',
      for: 'Students aged 5-11 requiring foundational support or 7+ / 11+ preparation.',
      challenges: 'Establishing core numeracy and literacy confidence while managing the transition from early learning to more structured academic enquiry.',
      approach: 'Our tutors focus on nurturing intellectual curiosity while ensuring the fundamentals of the National Curriculum are mastered through calm, patient instruction.',
      timing: 'Typically sought when a student feels overwhelmed by classroom pace or as part of long-term preparation for entrance examinations.'
    },
    {
      id: 'secondary',
      label: 'Curriculum Mastery',
      title: 'Secondary Tuition (KS3 / GCSE)',
      for: 'Students in Year 7 to Year 11 focusing on subject-specific depth and exam technique.',
      challenges: 'Navigating the increasing volume of the GCSE syllabus and the specific assessment objectives of UK exam boards (AQA, Edexcel, OCR).',
      approach: 'Tutors bring direct classroom experience to sessions, focusing on structural writing, scientific inquiry, and the logical application of mathematical principles.',
      timing: 'Parents often engage support at the start of Year 10 or for targeted revision intensives ahead of Year 11 mocks.'
    },
    {
      id: 'alevel',
      label: 'Specialist Enquiry',
      title: 'A-Level Tuition',
      for: 'Post-16 students targeting top-tier university placements and Russell Group admission.',
      challenges: 'Bridge the significant jump in complexity between GCSE and A-Level, requiring advanced analytical rigour and independent study habits.',
      approach: 'Sessions are university-style tutorials, led by specialist graduates who emphasize deep subject comprehension and sophisticated essay structure.',
      timing: 'Recommended from the outset of Year 12 to ensure early misconceptions do not hinder A-Level performance.'
    },
    {
      id: 'entrance',
      label: 'Strategic Placement',
      title: 'Entrance Exam Preparation',
      for: 'Applicants targeting competitive UK independent schools (7+, 11+, 13+).',
      challenges: 'High-pressure assessments that test beyond the standard curriculum, often including Verbal and Non-Verbal reasoning.',
      approach: 'A strategic, phased programme focusing on mock assessments, time management, and interview confidence.',
      timing: 'Ideally initiated 12 to 18 months prior to the assessment dates for sustainable progress.'
    },
    {
      id: 'mentoring',
      label: 'Executive Function',
      title: 'Mentoring & Academic Coaching',
      for: 'Students requiring support with organisation, revision strategy, and academic motivation.',
      challenges: 'Managing heavy workloads without established study systems, leading to academic anxiety and suboptimal results.',
      approach: 'A collaborative mentorship focusing on time management, note-taking, and active revision techniques.',
      timing: 'Beneficial for all students, particularly during key transitions or prior to major examination periods.'
    }
  ];

  return (
    <div className="bg-canvas">
      {/* Header */}
      <section className="py-24 px-6 md:px-12 bg-white border-b border-premium">
        <div className="max-w-7xl mx-auto">
          <span className="section-label mb-8 block">Services</span>
          <h1 className="text-4xl md:text-6xl text-oxford mb-8 leading-tight font-serif">Our Academic Specialisms</h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl">
            A bespoke approach to academic excellence, delivered by specialist graduates who understand the nuances of the UK curriculum at every stage.
          </p>
        </div>
      </section>

      {/* Specialism Blocks */}
      <div className="space-y-0">
        {sections.map((section, idx) => (
          <section key={section.id} className={`py-32 px-6 md:px-12 ${idx % 2 === 0 ? 'bg-canvas' : 'bg-stone-subtle'}`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <span className="section-label mb-8 block">{section.label}</span>
                <h2 className="text-3xl md:text-5xl text-oxford mb-10 leading-tight font-serif">{section.title}</h2>
                <div className="space-y-12">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Target Audience</h4>
                    <p className="text-[17px] text-gray-700 font-light leading-relaxed">{section.for}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Typical Challenges</h4>
                    <p className="text-[17px] text-gray-700 font-light leading-relaxed">{section.challenges}</p>
                  </div>
                </div>
              </div>
              <div className="lg:pt-14 space-y-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Our Distinguishable Approach</h4>
                  <p className="text-[17px] text-gray-700 font-light leading-relaxed">{section.approach}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-4">Strategic Timing</h4>
                  <p className="text-[17px] text-gray-700 font-light leading-relaxed italic opacity-80">{section.timing}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-oxford text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-10">Bespoke support for your child's journey</h2>
          <p className="text-lg text-gray-300 font-light mb-12 leading-relaxed">
            Contact our senior consultancy team for a private discussion regarding your child's academic goals and requirements.
          </p>
          <Link to="/request-match" className="inline-block px-12 py-5 bg-white text-oxford text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-gray-100 transition-all">
            Request a Match
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SpecialismsPage;
