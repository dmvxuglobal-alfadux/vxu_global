"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Lock } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    
    // Mock Authentication
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // Super simple mock credentials
    if (email === "admin@vxuglobal.com" && password === "admin123") {
      sessionStorage.setItem("vxu_auth", "true")
      router.push("/admin")
    } else {
      setError("Invalid credentials. Try admin@vxuglobal.com / admin123")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-2xl border-0 overflow-hidden">
        <div className="h-2 w-full bg-gradient"></div>
        <CardHeader className="space-y-1 items-center pb-6">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
             <Lock className="w-8 h-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-center">Admin Console</CardTitle>
          <CardDescription className="text-center">
            Sign in to manage VXU Global content
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md text-center font-medium">{error}</div>}
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
              </label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="admin@vxuglobal.com" 
                required 
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Password
              </label>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="h-12"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" variant="gradient" className="w-full h-12 text-base font-semibold" disabled={loading}>
              {loading ? "Authenticating..." : "Sign In"}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      {/* Return Home Link */}
      <div className="absolute top-8 left-8">
        <Button variant="outline" onClick={() => router.push("/")}>
          &larr; Back to Website
        </Button>
      </div>
    </div>
  )
}
