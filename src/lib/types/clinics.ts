export type ClinicType = 'dressage' | 'jumping' | 'eventing' | 'cross-country';
export type ClinicStatus = 'upcoming' | 'past' | 'cancelled';

export interface Clinic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  instructor: string;
  type: ClinicType;
  status: ClinicStatus;
  image: string;
}

export interface SeoData {
  title: string;
  description: string;
  type: string;
  image: string;
}

export interface ClinicsData {
  clinics: Clinic[];
  pageTitle: string;
  pageTagline: string;
  seo: SeoData;
} 