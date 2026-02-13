
import { Tutor, Testimonial, Service, Clinic, ClinicSession } from './types';

export const TUTORS: Tutor[] = [
  {
    id: '1',
    name: 'James Henderson',
    university: 'University of Oxford',
    degree: 'BA History (First Class)',
    subjects: ['History', 'English Literature', '11+ Entrance'],
    yearGroups: 'Year 7 – Year 13',
    summary: 'A specialist in humanities and entrance exam preparation, focusing on analytical rigour and structured writing.',
    fullBio: 'James graduated from Oxford with a First Class degree in History. He has spent the last three years working as a senior Teaching Assistant in a leading London independent school, supporting students with both academic confidence and rigorous exam preparation.',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&fit=crop',
    experience: [
      '3+ years experience as a Teaching Assistant in UK Independent Schools',
      'Successful placement of students into Eton, Harrow, and St Paul’s',
      'Expertise in GCSE and A-Level History (AQA/Edexcel)',
      'Mentorship for Oxbridge History applicants'
    ],
    style: 'James adopts a Socratic method, encouraging students to think critically and articulate their arguments with precision. His approach is calm, highly structured, and tailored to the specific assessment objectives of UK exam boards.',
    recommendedFor: [
      'Students targeting top-tier UK independent schools',
      'GCSE and A-Level students needing structural writing support',
      'Confidence building in public speaking and debate'
    ],
    availability: 'Mon - Thu: 16:00 - 20:00 (GST)',
    dbsStatus: 'Enhanced DBS Check (Current)',
    subjectsDetailed: [
      { level: 'Secondary (KS3)', list: ['English', 'History', 'Geography'] },
      { level: 'GCSE', list: ['English Literature', 'History', 'Religious Studies'] },
      { level: 'A-Level', list: ['History', 'English Literature', 'Politics'] }
    ]
  },
  {
    id: '2',
    name: 'Eleanor Vance',
    university: 'University of Cambridge',
    degree: 'BSc Natural Sciences',
    subjects: ['Biology', 'Chemistry', 'Physics', 'Mathematics'],
    yearGroups: 'Year 9 – Year 13',
    summary: 'Expert STEM tutor with a focus on simplifying complex scientific concepts for GCSE and A-Level success.',
    fullBio: 'Eleanor is a Cambridge graduate with a deep passion for the sciences. Currently working as a Lead Science TA, she excels at bridging the gap between classroom theory and practical exam application.',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&fit=crop',
    experience: [
      'Specialist support for Triple Science GCSE',
      'A-Level Biology and Chemistry specialist',
      'Experience supporting students with high academic anxiety',
      '13+ Science scholarship preparation'
    ],
    style: 'Eleanor provides a calm and reassuring environment where students feel comfortable tackling challenging topics. She uses visual learning aids and structured retrieval practice to ensure long-term retention of scientific principles.',
    recommendedFor: [
      'Triple Science students seeking top grades',
      'A-Level Biology and Chemistry applicants',
      'Students needing a structured, calm approach to STEM subjects'
    ],
    availability: 'Sun - Wed: 15:00 - 19:00 (GST)',
    dbsStatus: 'Enhanced DBS Check (Current)',
    subjectsDetailed: [
      { level: 'Secondary (KS3)', list: ['General Science', 'Mathematics'] },
      { level: 'GCSE', list: ['Biology', 'Chemistry', 'Physics', 'Mathematics'] },
      { level: 'A-Level', list: ['Biology', 'Chemistry'] }
    ]
  },
  {
    id: '3',
    name: 'William Thorne',
    university: 'Imperial College London',
    degree: 'MEng Mechanical Engineering',
    subjects: ['Mathematics', 'Further Maths', 'Physics'],
    yearGroups: 'Year 9 – Year 13',
    summary: 'High-level mathematics and physics specialist focusing on advanced problem-solving techniques.',
    fullBio: 'William combines his engineering background with extensive classroom experience to provide rigorous, application-led tutoring for mathematics and physics students.',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&fit=crop',
    experience: [
      'Advanced Mathematics (Further Maths) specialist',
      'Physics A-Level specialist (OCR/AQA)',
      'Experience in supporting SEN students with dyscalculia',
      'Undergraduate admissions preparation'
    ],
    style: 'William focuses on the underlying logic of mathematics, ensuring students understand the "why" before the "how". His sessions are paced carefully to allow for deep comprehension of advanced concepts.',
    recommendedFor: [
      'Further Mathematics students',
      'Aspiring Engineering and Physics undergraduates',
      'Students looking to strengthen their mathematical foundations'
    ],
    availability: 'Mon - Fri: 17:00 - 21:00 (GST)',
    dbsStatus: 'Enhanced DBS Check (Current)',
    subjectsDetailed: [
      { level: 'Secondary (KS3)', list: ['Mathematics'] },
      { level: 'GCSE', list: ['Mathematics', 'Physics', 'Statistics'] },
      { level: 'A-Level', list: ['Mathematics', 'Further Maths', 'Physics'] }
    ]
  },
  {
    id: '4',
    name: 'Sophie Aris',
    university: 'University College London (UCL)',
    degree: 'BA English Language & Literature',
    subjects: ['English', 'Verbal Reasoning', '7+ / 11+'],
    yearGroups: 'Year 3 – Year 9',
    summary: 'Primary and lower secondary specialist focusing on literacy, comprehension, and creative writing.',
    fullBio: 'Sophie is a dedicated primary educator and UCL graduate. Her background as a classroom Teaching Assistant allows her to align her tutoring perfectly with the UK National Curriculum requirements for KS1 and KS2.',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=500&fit=crop',
    experience: [
      'KS1 and KS2 Literacy specialist',
      '11+ English and Verbal Reasoning preparation',
      'Support for English as an Additional Language (EAL)',
      'Creative writing workshops for young learners'
    ],
    style: 'Sophie uses an encouraging and structured approach to build confidence in young writers. She focuses on expanding vocabulary and improving grammatical precision through engaging, age-appropriate material.',
    recommendedFor: [
      '11+ entrance exam preparation',
      'Primary students needing literacy support',
      'Creative writing and comprehension development'
    ],
    availability: 'Tue - Sat: 10:00 - 15:00 (GST)',
    dbsStatus: 'Enhanced DBS Check (Current)',
    subjectsDetailed: [
      { level: 'Primary (KS1/KS2)', list: ['English', 'Mathematics', 'Reasoning'] },
      { level: 'Secondary (KS3)', list: ['English Literature', 'English Language'] },
      { level: 'Exam Prep', list: ['7+', '11+', '13+ Entrance English'] }
    ]
  }
];

export const CLINICS: Clinic[] = [
  {
    id: 'alevel-maths',
    title: 'A-Level Mathematics Revision Intensive',
    shortDescription: 'Bridging conceptual gaps in Pure and Applied Mathematics for Year 13 candidates.',
    targetYearGroup: 'Year 12 & Year 13',
    overview: 'This intensive is designed to tackle the most demanding aspects of the A-Level Mathematics syllabus. We focus on bridging the gap between understanding a concept and applying it to complex, high-weighting exam questions.',
    whoItIsFor: 'Candidates aiming for A/A* grades who require mastery of calculus, trigonometry, and mechanical principles.',
    whatWillBeCovered: 'The clinic follows a rigorous structure: conceptual reinforcement followed by timed, past-paper application. We focus heavily on AQA and Edexcel mark scheme nuances.',
    outcomes: 'Students will leave with a sophisticated exam technique, reduced academic anxiety, and a clear roadmap for their final revision weeks.',
    focusAreas: [
      'Calculus & Differentiation mastery',
      'Trigonometric identities and proofs',
      'Statistical distribution analysis',
      'Mechanical equilibrium and dynamics'
    ],
    durationFormat: '3-Day Intensive (Live Online)'
  },
  {
    id: 'gcse-english',
    title: 'GCSE English Writing Clinic',
    shortDescription: 'Refining structural precision, vocabulary breadth, and analytical literary response.',
    targetYearGroup: 'Year 10 & Year 11',
    overview: 'Effective writing at GCSE level requires a blend of creative flair and technical precision. This clinic deconstructs the requirements for Paper 1 and Paper 2, focusing on the sophisticated use of linguistic devices.',
    whoItIsFor: 'Students targeting Grade 7-9 who need to improve their structural coherence and vocabulary sophistication.',
    whatWillBeCovered: 'A dual-focus approach covering both Creative Writing (narrative/descriptive) and Transactional Writing (letters/speeches/articles).',
    outcomes: 'Increased confidence in timed writing tasks and the ability to produce high-quality responses across multiple genres.',
    focusAreas: [
      'Linguistic device application',
      'Advanced punctuation for effect',
      'Analytical essay structure',
      'Narrative arc development'
    ],
    durationFormat: 'Weekend Intensive (Live Online)'
  },
  {
    id: 'gcse-science',
    title: 'GCSE Science Exam Readiness',
    shortDescription: 'Retrieval practice across Biology, Chemistry, and Physics (Triple & Combined).',
    targetYearGroup: 'Year 11',
    overview: 'The volume of content in GCSE Science can be overwhelming. This clinic focuses on high-impact retrieval practice and the specific phrasing required by examiners to secure marks.',
    whoItIsFor: 'Year 11 students preparing for mocks or final examinations who need a comprehensive syllabus review.',
    whatWillBeCovered: 'Key topics from Biology, Chemistry, and Physics are reviewed with a focus on core practicals and mathematical requirements.',
    outcomes: 'A comprehensive reduction in academic anxiety through mastery of mark schemes and content retrieval.',
    focusAreas: [
      'Required practical deconstruction',
      'Mathematical science application',
      'High-weighting topic retrieval',
      'Examination time management'
    ],
    durationFormat: '2-Day Intensive (Live Online)'
  }
];

export const CLINIC_SESSIONS: ClinicSession[] = [
  {
    id: 's1',
    clinicId: 'alevel-maths',
    tutorId: '3', // William Thorne
    dates: '12th - 14th April 2025',
    time: '10:00 - 13:00 (GST) / 07:00 - 10:00 (GMT)',
    capacity: 4,
    bookedCount: 2,
    price: 450,
    stripePriceId: 'price_1Q_math_1'
  },
  {
    id: 's2',
    clinicId: 'alevel-maths',
    tutorId: '2', // Eleanor Vance
    dates: '12th - 14th April 2025',
    time: '14:00 - 17:00 (GST) / 11:00 - 14:00 (GMT)',
    capacity: 4,
    bookedCount: 3,
    price: 450,
    stripePriceId: 'price_1Q_math_2'
  },
  {
    id: 's3',
    clinicId: 'gcse-english',
    tutorId: '1', // James Henderson
    dates: '19th - 20th April 2025',
    time: '09:00 - 12:00 (GST) / 06:00 - 09:00 (GMT)',
    capacity: 4,
    bookedCount: 4, // Fully Booked
    price: 375,
    stripePriceId: 'price_1Q_english_1'
  },
  {
    id: 's4',
    clinicId: 'gcse-science',
    tutorId: '2', // Eleanor Vance
    dates: '26th - 27th April 2025',
    time: '10:00 - 13:00 (GST) / 07:00 - 10:00 (GMT)',
    capacity: 4,
    bookedCount: 0,
    price: 375,
    stripePriceId: 'price_1Q_science_1'
  }
];

export const SERVICES: Service[] = [
  { title: 'Primary Tuition (KS1 / KS2)', description: 'Nurturing foundational skills in Literacy and Numeracy aligned with the UK National Curriculum.' },
  { title: 'Secondary Tuition (KS3 / GCSE)', description: 'Subject-specific support designed to build academic confidence and mastery of key concepts.' },
  { title: 'Science Tuition', description: 'Specialist instruction in Biology, Chemistry, and Physics from Triple Science to A-Level.' },
  { title: 'English Tuition', description: 'Refining writing precision, comprehension skills, and analytical literary techniques.' },
  { title: 'Entrance Exam Preparation', description: 'Strategic preparation for 7+, 11+, and 13+ entrance exams for elite UK independent schools.' },
  { title: 'Study Skills & Mentoring', description: 'Bespoke academic mentoring focusing on organization, revision strategies, and time management.' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'The Harrington Family',
    location: 'Dubai Marina',
    content: 'Russell Group Tutors matched our son with a tutor who truly understood the UK curriculum. The progress in his writing has been remarkable, and the sessions are always calm and professional.'
  },
  {
    id: 't2',
    author: 'Dr. & Mrs. Al-Sayed',
    location: 'Jumeirah Golf Estates',
    content: 'Finding a tutor who is also an experienced Teaching Assistant made all the difference. They understand the classroom context and have helped our daughter excel in her GCSE sciences.'
  },
  {
    id: 't3',
    author: 'Sarah M.',
    location: 'Knightsbridge, London',
    content: 'The concierge service provided by Russell Group Tutors is exceptional. They found a high-calibre Oxford graduate who has provided the structured support our son needed for his 13+ entrance exams.'
  }
];
