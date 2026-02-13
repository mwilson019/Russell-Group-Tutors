
export interface Tutor {
  id: string;
  name: string;
  university: string;
  degree: string;
  subjects: string[];
  yearGroups: string;
  summary: string;
  fullBio: string;
  experience: string[];
  style: string;
  recommendedFor: string[];
  availability: string; // Dubai Time
  dbsStatus: string;
  photoUrl?: string;
  subjectsDetailed: {
    level: string;
    list: string[];
  }[];
}

export interface Clinic {
  id: string;
  title: string;
  shortDescription: string;
  targetYearGroup: string;
  overview: string;
  whoItIsFor: string;
  whatWillBeCovered: string;
  outcomes: string;
  focusAreas: string[];
  durationFormat: string;
}

export interface ClinicSession {
  id: string;
  clinicId: string;
  tutorId: string;
  dates: string;
  time: string;
  capacity: number;
  bookedCount: number;
  price: number;
  stripePriceId?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  content: string;
}

export interface Service {
  title: string;
  description: string;
}
