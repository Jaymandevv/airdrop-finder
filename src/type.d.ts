export interface ISocialLinks {
  discord: string;
  twitter: string;
  website: string;
}

export interface IProject {
  _id: string;
  image: string;
  created_at: string;
  category: string;
  end_date: string;
  project_name: string;
  description: string;
  steps: string[];
  project_symbol: string;
  project_logo: string;
  project_socials: ISocialLinks;
  status: string;
}
