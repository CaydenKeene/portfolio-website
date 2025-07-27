import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { ProfileImage } from "@/components/ProfileImage"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Name and Description */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Cayden Keene
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Computer Science Student at University of Florida passionate about building 
                innovative solutions and exploring the latest technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/experience">View My Work</Link>
                </Button>
              </div>
            </div>
            
            {/* Profile Picture */}
            <div className="flex-shrink-0 order-1 md:order-2">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
                    {/* Profile image with fallback */}
                    <ProfileImage 
                      src="/assets/profile/profile-photo.jpg" 
                      alt="Cayden Keene"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/contact">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>Academic Background</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold">University of Florida</h3>
                  <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>
                  <p className="text-sm text-muted-foreground">Expected Graduation: 2026</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
                <CardDescription>Technologies I work with</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">Git</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Portfolio Website
                  <ExternalLink className="h-4 w-4" />
                </CardTitle>
                <CardDescription>Modern portfolio built with Next.js and Shadcn UI</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A responsive portfolio website featuring dark/light mode toggle, 
                  modern UI components, and optimized performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Coming Soon
                  <ExternalLink className="h-4 w-4" />
                </CardTitle>
                <CardDescription>Exciting projects in development</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  More projects coming soon! Check back later to see what I've been working on.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
