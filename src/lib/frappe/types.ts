export interface Project {
  title: string;
  slug: string;
  short_description: string;
  description: string;
  year: string;
  status: string;
  technologies: string;
  github_url?: string;
  live_url?: string;
  featured: number;
  display_order: number;
  preview_image?: string;
}

export interface Experience {
  company: string;
  role: string;
  location?: string;
  start_date?: string;
  end_date?: string;
  description: string;
  achievements?: string;
  technologies?: string;
  display_order: number;
}

export interface Writing {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published_date?: string;
  tags?: string;
  published: number;
  display_order: number;
}

export interface Skill {
  name: string;
  category: string;
  display_order: number;
}
