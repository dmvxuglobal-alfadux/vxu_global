"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Trash2, Edit2, LogOut, FileText, Users, Award, Bell } from "lucide-react"
import { db } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = React.useState("blogs")
  const [data, setData] = React.useState({ blogs: [] as any[], mentors: [] as any[], ambassadors: [] as any[], announcement: null as any })
  const [loading, setLoading] = React.useState(true)

  // Auth check
  React.useEffect(() => {
    if (sessionStorage.getItem("vxu_auth") !== "true") {
      router.push("/login")
    } else {
      fetchData()
    }
  }, [router])

  const fetchData = async () => {
    setLoading(true)
    const [b, m, a, ann] = await Promise.all([db.getBlogs(), db.getMentors(), db.getAmbassadors(), db.getAnnouncement()])
    setData({ blogs: b, mentors: m, ambassadors: a, announcement: ann })
    setLoading(false)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("vxu_auth")
    router.push("/login")
  }

  // Generic forms state
  const [showForm, setShowForm] = React.useState(false)
  const [editingItem, setEditingItem] = React.useState<any>(null)

  const openAddForm = () => {
    setEditingItem(null)
    setShowForm(true)
  }

  const openEditForm = (item: any) => {
    setEditingItem(item)
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
    setEditingItem(null)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row font-[var(--font-sans)]">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
           <div className="w-8 h-8 rounded bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center justify-center">V</div>
           <span className="font-bold text-xl tracking-tight text-primary">Admin</span>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarBtn active={activeTab === "blogs"} onClick={() => {setActiveTab("blogs"); closeForm()}} icon={<FileText size={18}/>}>
            Blogs
          </SidebarBtn>
          <SidebarBtn active={activeTab === "mentors"} onClick={() => {setActiveTab("mentors"); closeForm()}} icon={<Users size={18}/>}>
            Mentors
          </SidebarBtn>
          <SidebarBtn active={activeTab === "ambassadors"} onClick={() => {setActiveTab("ambassadors"); closeForm()}} icon={<Award size={18}/>}>
            Ambassadors
          </SidebarBtn>
          <SidebarBtn active={activeTab === "announcement"} onClick={() => {setActiveTab("announcement"); closeForm()}} icon={<Bell size={18}/>}>
            Announcement
          </SidebarBtn>
        </nav>

        <div className="pt-6 border-t border-slate-100">
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50" onClick={handleLogout}>
             <LogOut size={18} className="mr-2" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto h-screen">
        <div className="max-w-5xl mx-auto space-y-8">
          {loading ? (
             <div className="flex justify-center items-center h-64"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent flex items-center justify-center rounded-full animate-spin"></div></div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <h1 className="text-3xl font-bold text-primary capitalize flex items-center gap-3">
                  {activeTab === "blogs" && <FileText className="text-blue-600"/>}
                  {activeTab === "mentors" && <Users className="text-blue-600"/>}
                  {activeTab === "ambassadors" && <Award className="text-blue-600"/>}
                  {activeTab === "announcement" && <Bell className="text-blue-600"/>}
                  Manage {activeTab}
                </h1>
                
                {!showForm && activeTab !== "announcement" && (
                  <Button onClick={openAddForm} variant="gradient" className="gap-2">
                    <Plus size={18} /> Add New {activeTab.slice(0, -1)}
                  </Button>
                )}
              </div>

              {/* Form Area */}
              <AnimatePresence>
                {showForm && (
                  <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:'auto'}} exit={{opacity:0, height:0}} className="overflow-hidden">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
                       <h2 className="text-xl font-bold mb-6">{editingItem ? 'Edit' : 'Create New'} {activeTab.slice(0, -1)}</h2>
                       
                       {activeTab === "blogs" && <BlogForm initialData={editingItem} onSave={async (obj: any) => { 
                         if(editingItem) await db.updateBlog(editingItem.id, obj);
                         else await db.addBlog(obj); 
                         closeForm(); fetchData(); 
                       }} onCancel={closeForm} />}
                       
                       {activeTab === "mentors" && <MentorForm initialData={editingItem} onSave={async (obj: any) => { 
                         if(editingItem) await db.updateMentor(editingItem.id, obj);
                         else await db.addMentor(obj); 
                         closeForm(); fetchData(); 
                       }} onCancel={closeForm} />}
                       
                       {activeTab === "ambassadors" && <AmbassadorForm initialData={editingItem} onSave={async (obj: any) => { 
                         if(editingItem) await db.updateAmbassador(editingItem.id, obj);
                         else await db.addAmbassador(obj); 
                         closeForm(); fetchData(); 
                       }} onCancel={closeForm} />}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Data Table / List */}
              {activeTab === "announcement" ? (
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <AnnouncementForm initialData={data.announcement} onSave={async (obj: any) => {
                       await db.updateAnnouncement(obj);
                       fetchData();
                       alert("Announcement Bar updated successfully!");
                    }} />
                 </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  {activeTab === "blogs" && (
                   <div className="divide-y divide-slate-100">
                     {data.blogs.map(item => (
                       <ListRow key={item.id} title={item.title} subtitle={item.category} img={item.image} 
                         onEdit={() => openEditForm(item)}
                         onDelete={async () => { await db.deleteBlog(item.id); fetchData()}} />
                     ))}
                   </div>
                )}
                {activeTab === "mentors" && (
                   <div className="divide-y divide-slate-100">
                     {data.mentors.map(item => (
                       <ListRow key={item.id} title={item.name} subtitle={item.expertise} img={item.photo} 
                         onEdit={() => openEditForm(item)}
                         onDelete={async () => { await db.deleteMentor(item.id); fetchData()}} />
                     ))}
                   </div>
                )}
                {activeTab === "ambassadors" && (
                   <div className="divide-y divide-slate-100">
                     {data.ambassadors.map(item => (
                       <ListRow key={item.id} title={item.name} subtitle={item.college} img={item.photo} 
                         onEdit={() => openEditForm(item)}
                         onDelete={async () => { await db.deleteAmbassador(item.id); fetchData()}} />
                     ))}
                   </div>
                )}
                
                {data[activeTab as keyof typeof data].length === 0 && (
                  <div className="p-12 text-center text-primary/70">No data found. Add your first entry!</div>
                )}
              </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  )
}

function SidebarBtn({ active, icon, children, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
        active ? "text-white shadow-md bg-gradient-to-r from-primary to-secondary" : "text-primary/80 hover:bg-white hover:text-primary"
      }`}
    >
      <div className={active ? "text-white" : "text-primary/60"}>{icon}</div>
      {children}
    </button>
  )
}

function ListRow({ title, subtitle, img, onEdit, onDelete }: any) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-white transition-colors">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden shadow-sm">
           <img src={img || "https://i.pravatar.cc/100"} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
           <p className="font-bold text-primary line-clamp-1">{title}</p>
           <p className="text-sm text-primary/70">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
         <Button variant="ghost" size="icon" className="text-primary/60 hover:text-blue-600" onClick={onEdit}><Edit2 size={16}/></Button>
         <Button variant="ghost" size="icon" className="text-primary/60 hover:text-red-600 hover:bg-red-50" onClick={onDelete}><Trash2 size={16}/></Button>
      </div>
    </div>
  )
}

// IMAGE UPLOAD COMPONENT
function ImageUpload({ defaultImage, onImageSelected }: { defaultImage?: string, onImageSelected: (b64: string) => void }) {
  const [preview, setPreview] = React.useState(defaultImage || "")
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result as string
        setPreview(base64String)
        onImageSelected(base64String)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-primary">Upload Image</label>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden flex-shrink-0">
          {preview ? <img src={preview} alt="preview" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-primary/60 text-xs text-center leading-tight">No Img</div>}
        </div>
        <Input type="file" accept="image/*" onChange={handleFileChange} className="cursor-pointer file:cursor-pointer pb-2" />
      </div>
    </div>
  )
}

// FORMS
function BlogForm({ initialData, onSave, onCancel }: any) {
  const [imageBase64, setImageBase64] = React.useState(initialData?.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&fit=crop")

  return (
    <form className="space-y-4" onSubmit={(e:any) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      onSave({
        title: fd.get("title"),
        slug: String(fd.get("title")).toLowerCase().replace(/\s+/g, '-'),
        content: fd.get("content"),
        category: fd.get("category"),
        image: imageBase64,
        date: initialData?.date || new Date().toISOString(),
        tags: [fd.get("category")]
      })
    }}>
       <Input name="title" defaultValue={initialData?.title} placeholder="Blog Title" required />
       <Input name="category" defaultValue={initialData?.category} placeholder="Category (e.g. Study Abroad, AI Careers)" required />
       
       <ImageUpload defaultImage={imageBase64} onImageSelected={setImageBase64} />
       
       <Textarea name="content" defaultValue={initialData?.content} placeholder="Full Blog Content" rows={6} required className="resize-y" />
        <div className="flex gap-4 justify-end pt-4">
           <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
           <Button type="submit" variant="gradient">{initialData ? 'Update Blog' : 'Save Blog Draft'}</Button>
        </div>
    </form>
  )
}

function MentorForm({ initialData, onSave, onCancel }: any) {
  const [imageBase64, setImageBase64] = React.useState(initialData?.photo || "https://i.pravatar.cc/150")

  return (
    <form className="space-y-4" onSubmit={(e:any) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      onSave({
        name: fd.get("name"),
        expertise: fd.get("expertise"),
        experience: fd.get("experience"),
        company: fd.get("company"),
        photo: imageBase64,
        linkedinUrl: fd.get("linkedinUrl")
      })
    }}>
       <Input name="name" defaultValue={initialData?.name} placeholder="Mentor Name" required />
       <Input name="expertise" defaultValue={initialData?.expertise} placeholder="Expertise (e.g. AI & Machine Learning)" required />
       <div className="grid grid-cols-2 gap-4">
         <Input name="experience" defaultValue={initialData?.experience} placeholder="Years of Experience (e.g. 10+ Years)" required />
         <Input name="company" defaultValue={initialData?.company} placeholder="Current Company (e.g. Google)" required />
       </div>
       <Input name="linkedinUrl" defaultValue={initialData?.linkedinUrl} placeholder="LinkedIn Profile URL (e.g. https://linkedin.com/in/username)" />
       
       <ImageUpload defaultImage={imageBase64} onImageSelected={setImageBase64} />
       
        <div className="flex gap-4 justify-end pt-4">
           <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
           <Button type="submit" variant="gradient">{initialData ? 'Update Mentor' : 'Add Mentor'}</Button>
        </div>
    </form>
  )
}

function AmbassadorForm({ initialData, onSave, onCancel }: any) {
  const [imageBase64, setImageBase64] = React.useState(initialData?.photo || "https://i.pravatar.cc/300")

  return (
    <form className="space-y-4" onSubmit={(e:any) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const payload = {
        name: fd.get("name"),
        college: fd.get("college"),
        country: fd.get("country"),
        photo: imageBase64
      };
      onSave(payload);
    }}>
       <Input name="name" defaultValue={initialData?.name} placeholder="Ambassador Name" required />
       <Input name="college" defaultValue={initialData?.college} placeholder="College / University" required />
       <Input name="country" defaultValue={initialData?.country} placeholder="Country" required />
       
       <ImageUpload defaultImage={imageBase64} onImageSelected={setImageBase64} />
       
        <div className="flex gap-4 justify-end pt-4">
           <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
           <Button type="submit" variant="gradient">{initialData ? 'Update Ambassador' : 'Add Ambassador'}</Button>
        </div>
    </form>
  )
}

function AnnouncementForm({ initialData, onSave }: any) {
  return (
    <form className="space-y-6" onSubmit={(e:any) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      onSave({
        text: fd.get("text"),
        link: fd.get("link"),
        isActive: fd.get("isActive") === "on"
      })
    }}>
       <div>
         <label className="text-sm font-semibold text-primary mb-2 block">Announcement Text</label>
         <Input name="text" defaultValue={initialData?.text} placeholder="e.g. 🌟 Applications now open! Register early for 40% off." required />
       </div>
       
       <div>
         <label className="text-sm font-semibold text-primary mb-2 block">Click Link URL (Optional)</label>
         <Input name="link" defaultValue={initialData?.link} placeholder="e.g. /job-ready-programs" />
       </div>
       
       <div className="flex items-center gap-3">
         <input type="checkbox" id="isActive" name="isActive" defaultChecked={initialData?.isActive} className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
         <label htmlFor="isActive" className="text-sm font-medium text-primary">Enable Announcement Bar sitewide</label>
       </div>
       
       <div className="pt-4 border-t border-slate-100">
          <Button type="submit" variant="gradient" className="w-full md:w-auto">Publish Announcement</Button>
       </div>
    </form>
  )
}
