export interface Tribunal {
  id: string;
  name: string;
  telephone: string;
  email: string;
  address: string;
  reception_days: string;
}

export interface Court {
  id: string;
  name: string;
  telephone: string;
  email: string;
  address: string;
  reception_days?: string;
  website: string;
  tribunals: Tribunal[];
}

export interface Document {
  title: string;
  country: string;
  organisme: string;
  about: string;
  file_size: number | null;
  page_url: string;
  r2_path: string;
  upload_date: string;
  added_date: string;
  additional_metadata?: {
    Country?: string;
    Organization?: string;
  };
}