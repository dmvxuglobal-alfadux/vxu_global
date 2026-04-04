import { db } from './firebase';
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  orderBy, 
  where,
  limit
} from "firebase/firestore";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  category: string;
  date: string;
  tags: string[];
}

export interface Mentor {
  id: string;
  name: string;
  expertise: string;
  experience: string;
  company: string;
  photo: string;
  linkedinUrl?: string;
}

export interface Ambassador {
  id: string;
  name: string;
  college: string;
  country: string;
  photo: string;
}

export interface PopupSettings {
  id?: string;
  promoImage: string;
  promoTitle: string;
  promoSubtitle: string;
  showAfterSeconds: number;
}

export interface Announcement {
  id?: string;
  text: string;
  link: string;
  isActive: boolean;
}

// ---- SHARED PROXY CALLER ----
const proxyDb = async (action: string, collection: string, data?: any, id?: string) => {
  const res = await fetch("/api/admin-db", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action, collection, id, data })
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || "Database Operation Failed");
  return json;
};

// Initial Mock Data (used for seeding if empty)
const initialBlogs = [
  { title: 'Why Germany is Top Destination', slug: 'why-germany', content: 'Germany offers tuition-free education...', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b', category: 'Study Abroad', date: new Date().toISOString(), tags: ['Germany'] },
  { title: 'AI Engineering Salaries in 2024', slug: 'ai-salaries', content: 'AI engineers are earning upwards of...', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b', category: 'Upskilling', date: new Date().toISOString(), tags: ['AI'] }
];

const initialMentors = [
  { name: 'Dr. Sarah Jenkins', expertise: 'Machine Learning', experience: '15+ Years', company: 'Google', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2', linkedinUrl: '#' },
  { name: 'Mark Roberts', expertise: 'Cloud Architecture', experience: '12+ Years', company: 'AWS', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a', linkedinUrl: '#' }
];

const initialAmbassadors = [
  { name: 'Aiden Smith', college: 'Stanford University', country: 'USA', photo: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79' },
  { name: 'Priya Sharma', college: 'Technical University of Munich', country: 'Germany', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956' }
];

const initialAnnouncement: Announcement = {
  text: "🌟 Applications now open for Fall 2026 Batch! Get up to 40% scholarships on early enrollment.",
  link: "/job-ready-programs",
  isActive: true
};

export const vxuDb = {
  // Blogs
  getBlogs: async (): Promise<BlogPost[]> => {
    try {
      const res = await proxyDb("list", "blogs");
      const blogs = res.data || [];
      if (blogs.length === 0) {
        for (const b of initialBlogs) await proxyDb("add", "blogs", b);
        return vxuDb.getBlogs();
      }
      return blogs;
    } catch (e) { return []; }
  },
  
  getBlog: async (slug: string): Promise<BlogPost | undefined> => {
    try {
      const blogs = await vxuDb.getBlogs();
      return blogs.find(b => b.slug === slug);
    } catch (e) { return undefined; }
  },

  addBlog: async (blog: Omit<BlogPost, 'id'>): Promise<void> => {
    await proxyDb("add", "blogs", blog);
  },

  deleteBlog: async (id: string): Promise<void> => {
    await proxyDb("delete", "blogs", undefined, id);
  },

  updateBlog: async (id: string, blog: Partial<BlogPost>): Promise<void> => {
    await proxyDb("update", "blogs", blog, id);
  },

  // Mentors
  getMentors: async (): Promise<Mentor[]> => {
    try {
      const res = await proxyDb("list", "mentors");
      const mentors = res.data || [];
      if (mentors.length === 0) {
        for (const m of initialMentors) await proxyDb("add", "mentors", m);
        return vxuDb.getMentors();
      }
      return mentors;
    } catch (e) { return []; }
  },

  addMentor: async (mentor: Omit<Mentor, 'id'>): Promise<void> => {
    await proxyDb("add", "mentors", mentor);
  },

  deleteMentor: async (id: string): Promise<void> => {
    await proxyDb("delete", "mentors", undefined, id);
  },

  updateMentor: async (id: string, mentor: Partial<Mentor>): Promise<void> => {
    await proxyDb("update", "mentors", mentor, id);
  },

  // Ambassadors
  getAmbassadors: async (): Promise<Ambassador[]> => {
    try {
      const res = await proxyDb("list", "ambassadors");
      const ambassadors = res.data || [];
      if (ambassadors.length === 0) {
        for (const a of initialAmbassadors) await proxyDb("add", "ambassadors", a);
        return vxuDb.getAmbassadors();
      }
      return ambassadors;
    } catch (e) { return []; }
  },

  addAmbassador: async (ambassador: Omit<Ambassador, 'id'>): Promise<void> => {
    await proxyDb("add", "ambassadors", ambassador);
  },

  deleteAmbassador: async (id: string): Promise<void> => {
    await proxyDb("delete", "ambassadors", undefined, id);
  },

  updateAmbassador: async (id: string, ambassador: Partial<Ambassador>): Promise<void> => {
    await proxyDb("update", "ambassadors", ambassador, id);
  },

  // Popup Settings
  getPopupSettings: async (): Promise<PopupSettings> => {
    try {
      const res = await proxyDb("get", "settings", undefined, "popup");
      return res.data || {
        promoImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&fit=crop",
        promoTitle: "Exclusive Offer!",
        promoSubtitle: "Get a free 1-on-1 career roadmap session.",
        showAfterSeconds: 15
      };
    } catch (e) {
      return {
        promoImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&fit=crop",
        promoTitle: "Exclusive Offer!",
        promoSubtitle: "Get a free 1-on-1 career roadmap session.",
        showAfterSeconds: 15
      };
    }
  },

  updatePopupSettings: async (settings: Partial<PopupSettings>): Promise<void> => {
    await proxyDb("upsert", "settings", settings, "popup");
  },

  // Announcement
  getAnnouncement: async (): Promise<Announcement> => {
    try {
      const res = await proxyDb("get", "settings", undefined, "announcement");
      return res.data || initialAnnouncement;
    } catch (e) { 
      try {
        await proxyDb("upsert", "settings", initialAnnouncement, "announcement");
        return initialAnnouncement;
      } catch { return initialAnnouncement; }
    }
  },

  updateAnnouncement: async (announcement: Partial<Announcement>): Promise<void> => {
    await proxyDb("upsert", "settings", announcement, "announcement");
  }
};

export { vxuDb as db }
