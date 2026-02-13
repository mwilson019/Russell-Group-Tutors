
import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CLINICS, CLINIC_SESSIONS, TUTORS } from '../constants';
import { ClinicSession, Tutor } from '../types';

const ClinicDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedSession, setSelectedSession] = useState<ClinicSession | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const clinic = useMemo(() => CLINICS.find(c => c.id === id), [id]);
  const sessions = useMemo(() => CLINIC_SESSIONS.filter(s => s.clinicId === id), [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!clinic) {
    return (
      <div className="py-32 text-center bg-canvas h-screen">
        <h2 className="text-2xl font-serif text-oxford">Clinic not found.</h2>
        <Link to="/clinics" className="mt-6 inline-block text-[11px] uppercase tracking-widest text-oxford border-b border-oxford pb-1 font-bold">Return to clinics</Link>
      </div>
    );
  }

  const handleBookSession = (session: ClinicSession) => {
    if (session.bookedCount >= session.capacity) return;
    setSelectedSession(session);
    setShowBookingForm(true);
  };

  const closeForm = () => {
    setShowBookingForm(false);
    setSelectedSession(null);
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would call a backend to create a Stripe session.
    // For this prototype, we simulate the redirect.
    console.log("Proceeding to Stripe Checkout for Price ID:", selectedSession?.stripePriceId);
    
    // Simulate payment process delay
    const button = e.currentTarget.querySelector('button');
    if (button) button.innerText = "Redirecting to Stripe...";
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Final alert for prototype transparency
    alert("This prototype would now redirect to a secure Stripe Payment page for £" + selectedSession?.price + ".\n\nYou will be returned to this clinic page after payment.");
    
    // Simulate return to clinic page
    closeForm();
  };

  return (
    <div className="bg-canvas min-h-screen">
      {/* Hero Section */}
      <header className="bg-white border-b border-premium py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <Link to="/clinics" className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-8 block hover:text-oxford transition-colors font-bold tracking-widest">← Back to Clinics</Link>
          <span className="section-label mb-8 block">Seasonal Intensive</span>
          <h1 className="text-4xl md:text-6xl text-oxford mb-8 leading-tight font-serif max-w-4xl">{clinic.title}</h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mb-12">
            {clinic.shortDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <span className="text-[11px] uppercase tracking-[0.25em] text-oxford font-bold bg-stone-subtle px-6 py-3 border border-premium">
              {clinic.targetYearGroup}
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-medium">
              Limited to 4 students per group
            </span>
          </div>
          <div className="mt-14">
             <a href="#sessions" className="px-12 py-5 bg-oxford text-white text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-oxford/90 transition-all">
                View Available Sessions
             </a>
          </div>
        </div>
      </header>

      {/* Information Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div>
              <span className="section-label mb-8 block">Overview</span>
              <p className="text-[18px] text-gray-700 leading-relaxed font-light">{clinic.overview}</p>
            </div>
            <div>
              <span className="section-label mb-8 block">Who It Is For</span>
              <p className="text-[18px] text-gray-700 leading-relaxed font-light">{clinic.whoItIsFor}</p>
            </div>
            <div>
              <span className="section-label mb-8 block">Focus Areas</span>
              <ul className="space-y-4">
                {clinic.focusAreas.map((area, i) => (
                  <li key={i} className="flex items-center gap-4 text-[16px] text-oxford font-medium">
                    <span className="w-1.5 h-1.5 bg-oxford rounded-full opacity-30"></span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-16 bg-white p-12 border border-premium shadow-sm">
            <div>
              <span className="section-label mb-8 block">Format & Duration</span>
              <p className="text-[18px] text-oxford font-serif">{clinic.durationFormat}</p>
            </div>
            <div>
              <span className="section-label mb-8 block">What Will Be Covered</span>
              <p className="text-[16px] text-gray-500 leading-relaxed font-light">{clinic.whatWillBeCovered}</p>
            </div>
            <div>
              <span className="section-label mb-8 block">Intended Outcomes</span>
              <p className="text-[16px] text-gray-500 leading-relaxed font-light">{clinic.outcomes}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Sessions Section */}
      <section id="sessions" className="py-32 px-6 md:px-12 bg-stone-subtle border-y border-premium">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="section-label mb-8 block">Booking</span>
            <h2 className="text-3xl md:text-5xl text-oxford font-serif">Available Sessions</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {sessions.map((session) => {
              const tutor = TUTORS.find(t => t.id === session.tutorId);
              const isFull = session.bookedCount >= session.capacity;
              const remaining = session.capacity - session.bookedCount;
              
              return (
                <div key={session.id} className="bg-white border border-premium p-10 flex flex-col md:flex-row gap-10 items-start hover:border-oxford transition-all shadow-sm">
                  {tutor?.photoUrl && (
                    <div className="w-32 h-40 flex-shrink-0 bg-stone-subtle overflow-hidden border border-premium">
                      <img 
                        src={tutor.photoUrl} 
                        alt={tutor.name} 
                        className="w-full h-full object-cover grayscale opacity-90"
                      />
                    </div>
                  )}
                  <div className="flex-grow flex flex-col h-full">
                    <div className="mb-6 flex justify-between items-start">
                      <div>
                        <h4 className="text-xl text-oxford font-serif mb-1">{tutor?.name}</h4>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">{tutor?.university}</p>
                      </div>
                      <span className={`text-[9px] uppercase tracking-[0.2em] px-3 py-1 font-bold border ${
                        isFull ? 'bg-red-50 text-red-700 border-red-100' : 
                        remaining === 1 ? 'bg-orange-50 text-orange-700 border-orange-100' : 
                        'bg-green-50 text-green-700 border-green-100'
                      }`}>
                        {isFull ? 'Fully Booked' : remaining === 1 ? '1 Space Remaining' : 'Available'}
                      </span>
                    </div>

                    <div className="space-y-4 mb-10 flex-grow">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Dates</p>
                        <p className="text-[14px] text-oxford font-medium">{session.dates}</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Schedule</p>
                        <p className="text-[14px] text-oxford font-medium">{session.time}</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold mb-1">Clinic Fee</p>
                        <p className="text-[14px] text-oxford font-medium">£{session.price} per student</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleBookSession(session)}
                      disabled={isFull}
                      className={`w-full py-4 text-[10px] uppercase tracking-[0.25em] font-bold transition-all border ${
                        isFull ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 
                        'border-oxford text-oxford hover:bg-oxford hover:text-white'
                      }`}
                    >
                      {isFull ? 'Fully Booked' : 'Book This Session'}
                    </button>
                    {!isFull && (
                      <p className="text-[9px] text-center mt-3 text-gray-400 uppercase tracking-widest">
                        {remaining} of {session.capacity} spaces remaining
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form Overlay */}
      {showBookingForm && selectedSession && (
        <div className="fixed inset-0 z-[100] bg-oxford/40 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-white max-w-2xl w-full border border-premium shadow-2xl animate-in fade-in zoom-in duration-300 overflow-y-auto max-h-[90vh]">
            <div className="p-10 md:p-14">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <span className="section-label mb-2 block">Secure Place</span>
                  <h3 className="text-2xl text-oxford font-serif">Registration: {clinic.title}</h3>
                  <p className="text-[12px] text-gray-400 mt-2 font-light tracking-wide uppercase">
                    Session: {selectedSession.dates} with {TUTORS.find(t => t.id === selectedSession.tutorId)?.name}
                  </p>
                </div>
                <button onClick={closeForm} className="text-gray-300 hover:text-oxford transition-colors text-2xl">×</button>
              </div>

              <form onSubmit={handleSubmitBooking} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Parent Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-oxford outline-none transition-colors text-sm" placeholder="Full Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Email Address</label>
                    <input required type="email" className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-oxford outline-none transition-colors text-sm" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">WhatsApp Number</label>
                    <input required type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-oxford outline-none transition-colors text-sm" placeholder="+44 / +971..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Student Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-oxford outline-none transition-colors text-sm" placeholder="Full Name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Year Group</label>
                    <input required type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-oxford outline-none transition-colors text-sm" placeholder="e.g. Year 12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">School (Optional)</label>
                    <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-oxford outline-none transition-colors text-sm" placeholder="Current School" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.25em] text-oxford font-bold opacity-60">Academic Notes / Specific Goals</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-oxford outline-none transition-colors text-sm" placeholder="Briefly describe what you hope to achieve..."></textarea>
                </div>

                {/* Pricing & Stripe Display */}
                <div className="pt-6 border-t border-gray-100 space-y-4">
                  <div className="flex justify-between items-center">
                     <div>
                       <p className="text-[12px] text-oxford font-bold uppercase tracking-widest">Price per student</p>
                       <p className="text-[10px] text-gray-400 font-light mt-1">Limited to 4 students per session</p>
                     </div>
                     <p className="text-3xl text-oxford font-serif">£{selectedSession.price}</p>
                  </div>
                  <p className="text-[11px] text-gray-500 font-light italic leading-relaxed">
                    Full payment is required to confirm your child's place in this cohort. Places are allocated on a first-come basis.
                  </p>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full py-5 bg-oxford text-white text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-oxford/90 transition-all">
                    Proceed to Secure Payment
                  </button>
                  <div className="mt-8 flex flex-col items-center justify-center gap-2">
                     <p className="text-[9px] text-gray-400 text-center font-bold tracking-[0.2em] uppercase">
                        Secure SSL Encryption • Stripe Verified
                     </p>
                     <p className="text-[10px] text-gray-400 text-center font-light italic leading-relaxed">
                        Confirmation will be sent by email immediately after payment.
                     </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClinicDetailPage;
