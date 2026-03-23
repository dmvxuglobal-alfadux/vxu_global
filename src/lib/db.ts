import { supabase } from './supabase'

export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  image: string
  category: string
  date: string
  tags: string[]
}

export interface Mentor {
  id: string
  name: string
  expertise: string
  experience: string
  company: string
  photo: string
}

export interface Ambassador {
  id: string
  name: string
  college: string
  country: string
  photo: string
}

export interface Announcement {
  text: string
  link: string
  isActive: boolean
}

// ---- FALLBACK LOCAL STORAGE IMPLEMENTATION ----
const MOCK_DELAY = 400
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const getStorage = (key: string, defaultVal: any) => {
  if (typeof window === 'undefined') return defaultVal
  const str = localStorage.getItem(key)
  return str ? JSON.parse(str) : defaultVal
}

const setStorage = (key: string, val: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(val))
  }
}

// Initial Mock Data (unchanged)
const initialBlogs = [
  { id: '1', title: 'Why Germany is Top Destination', slug: 'why-germany', content: 'Germany offers tuition-free education...', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b', category: 'Study Abroad', date: '2023-10-01', tags: ['Germany'] },
  { id: '2', title: 'AI Engineering Salaries in 2024', slug: 'ai-salaries', content: 'AI engineers are earning upwards of...', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b', category: 'Upskilling', date: '2023-10-15', tags: ['AI'] }
]
const initialMentors = [
  { id: '1', name: 'Dr. Sarah Jenkins', expertise: 'Machine Learning', experience: '15+ Years', company: 'Google', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2' },
  { id: '2', name: 'Mark Roberts', expertise: 'Cloud Architecture', experience: '12+ Years', company: 'AWS', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a' }
]
const initialAmbassadors = [
  { id: '1', name: 'Aiden Smith', college: 'Stanford University', country: 'USA', photo: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79' },
  { id: '2', name: 'Priya Sharma', college: 'Technical University of Munich', country: 'Germany', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956' }
]

const initialAnnouncement: Announcement = {
  text: "🌟 Applications now open for Fall 2026 Batch! Get up to 40% scholarships on early enrollment.",
  link: "/job-ready-programs",
  isActive: true
}

// ---- MAIN DATABASE ABSTRACTION ROUTER ----
// Detects if Supabase has been hooked up by checking if the client exists
const isSupabaseLive = !!supabase

export const db = {
  // Blogs
  getBlogs: async (): Promise<BlogPost[]> => {
    if (isSupabaseLive) {
      const { data, error } = await supabase!.from('blogs').select('*').order('date', { ascending: false })
      if (error) console.error(error)
      return data || []
    }
    await wait(MOCK_DELAY)
    return getStorage("vxu_blogs", initialBlogs)
  },
  
  getBlog: async (slug: string): Promise<BlogPost | undefined> => {
    if (isSupabaseLive) {
      const { data } = await supabase!.from('blogs').select('*').eq('slug', slug).single()
      return data
    }
    await wait(MOCK_DELAY)
    const blogs = getStorage("vxu_blogs", initialBlogs)
    return blogs.find((b: BlogPost) => b.slug === slug)
  },

  addBlog: async (blog: Omit<BlogPost, 'id'>): Promise<void> => {
    if (isSupabaseLive) {
      await supabase!.from('blogs').insert([blog])
      return
    }
    await wait(MOCK_DELAY)
    const newBlog = { ...blog, id: Date.now().toString() }
    const blogs = getStorage("vxu_blogs", initialBlogs)
    setStorage("vxu_blogs", [newBlog, ...blogs])
  },

  deleteBlog: async (id: string): Promise<void> => {
    if (isSupabaseLive) {
      await supabase!.from('blogs').delete().eq('id', id)
      return
    }
    await wait(MOCK_DELAY)
    const blogs = getStorage("vxu_blogs", initialBlogs).filter((b: BlogPost) => b.id !== id)
    setStorage("vxu_blogs", blogs)
  },

  updateBlog: async (id: string, blog: Partial<BlogPost>): Promise<void> => {
    if (isSupabaseLive) {
      await supabase!.from('blogs').update(blog).eq('id', id)
      return
    }
    await wait(MOCK_DELAY)
    const blogs = getStorage("vxu_blogs", initialBlogs)
    const index = blogs.findIndex((b: BlogPost) => b.id === id)
    if (index !== -1) {
      blogs[index] = { ...blogs[index], ...blog }
      setStorage("vxu_blogs", blogs)
    }
  },

  // Mentors
  getMentors: async (): Promise<Mentor[]> => {
    if (isSupabaseLive) {
      const { data } = await supabase!.from('mentors').select('*')
      return data || []
    }
    await wait(MOCK_DELAY)
    return getStorage("vxu_mentors", initialMentors)
  },

  addMentor: async (mentor: Omit<Mentor, 'id'>): Promise<void> => {
    if (isSupabaseLive) {
      await supabase!.from('mentors').insert([mentor])
      return
    }
    await wait(MOCK_DELAY)
    const newMentor = { ...mentor, id: Date.now().toString() }
    const mentors = getStorage("vxu_mentors", initialMentors)
    setStorage("vxu_mentors", [newMentor, ...mentors])
  },

  deleteMentor: async (id: string): Promise<void> => {
    if (isSupabaseLive) {
      await supabase!.from('mentors').delete().eq('id', id)
      return
    }
    await wait(MOCK_DELAY)
    const mentors = getStorage("vxu_mentors", initialMentors).filter((m: Mentor) => m.id !== id)
    setStorage("vxu_mentors", mentors)
  },

  updateMentor: async (id: string, mentor: Partial<Mentor>): Promise<void> => {
    if (isSupabaseLive) {
      await supabase!.from('mentors').update(mentor).eq('id', id)
      return
    }
    await wait(MOCK_DELAY)
    const mentors = getStorage("vxu_mentors", initialMentors)
    const index = mentors.findIndex((m: Mentor) => m.id === id)
    if (index !== -1) {
      mentors[index] = { ...mentors[index], ...mentor }
      setStorage("vxu_mentors", mentors)
    }
  },

  // Ambassadors
  getAmbassadors: async (): Promise<Ambassador[]> => {
    if (isSupabaseLive) {
      const { data } = await supabase!.from('ambassadors').select('*')
      return data || []
    }
    await wait(MOCK_DELAY)
    return getStorage("vxu_ambassadors", initialAmbassadors)
  },

  addAmbassador: async (ambassador: Omit<Ambassador, 'id'>): Promise<void> => {
    if (isSupabaseLive) {
      await supabase!.from('ambassadors').insert([ambassador])
      return
    }
    await wait(MOCK_DELAY)
    const newAmbassador = { ...ambassador, id: Date.now().toString() }
    const ambassadors = getStorage("vxu_ambassadors", initialAmbassadors)
    setStorage("vxu_ambassadors", [newAmbassador, ...ambassadors])
  },

  deleteAmbassador: async (id: string): Promise<void> => {
    if (isSupabaseLive) {
      await supabase!.from('ambassadors').delete().eq('id', id)
      return
    }
    await wait(MOCK_DELAY)
    const ambassadors = getStorage("vxu_ambassadors", initialAmbassadors).filter((a: Ambassador) => a.id !== id)
    setStorage("vxu_ambassadors", ambassadors)
  },

  updateAmbassador: async (id: string, ambassador: Partial<Ambassador>): Promise<void> => {
    if (isSupabaseLive) {
      await supabase!.from('ambassadors').update(ambassador).eq('id', id)
      return
    }
    await wait(MOCK_DELAY)
    const ambassadors = getStorage("vxu_ambassadors", initialAmbassadors)
    const index = ambassadors.findIndex((a: Ambassador) => a.id === id)
    if (index !== -1) {
      ambassadors[index] = { ...ambassadors[index], ...ambassador }
      setStorage("vxu_ambassadors", ambassadors)
    }
  },

  // Announcement
  getAnnouncement: async (): Promise<Announcement> => {
    if (isSupabaseLive) {
      const { data } = await supabase!.from('settings').select('*').eq('id', 'announcement').single()
      return data || initialAnnouncement
    }
    await wait(MOCK_DELAY)
    return getStorage("vxu_announcement", initialAnnouncement)
  },

  updateAnnouncement: async (announcement: Partial<Announcement>): Promise<void> => {
    if (isSupabaseLive) {
      await supabase!.from('settings').upsert({ id: 'announcement', ...announcement })
      return
    }
    await wait(MOCK_DELAY)
    const current = getStorage("vxu_announcement", initialAnnouncement)
    setStorage("vxu_announcement", { ...current, ...announcement })
  }
}
