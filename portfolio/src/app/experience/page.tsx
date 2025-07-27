import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, ExternalLink, Github } from "lucide-react"

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Experience & Projects</h1>
            <p className="text-xl text-muted-foreground">
              My journey through education, projects, and professional development
            </p>
          </div>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <CalendarDays className="mr-2 h-6 w-6" />
              Education
            </h2>
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle>University of Florida</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="mr-1 h-4 w-4" />
                      Gainesville, FL
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">2022 - 2026</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Bachelor of Science in Computer Science</p>
                  <p className="text-muted-foreground">
                    Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming,
                    Database Management, Software Engineering, Computer Networks
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Projects Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="space-y-6">
              
              {/* Portfolio Project */}
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="flex items-center">
                        Portfolio Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </CardTitle>
                      <CardDescription>Modern portfolio with dark/light theme</CardDescription>
                    </div>
                    <Badge variant="secondary">2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A responsive portfolio website built with Next.js 15, featuring modern UI components 
                    from Shadcn UI, dark/light mode switching, and optimized performance. Showcases 
                    clean design principles and modern web development practices.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Next.js 15</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                    <Badge variant="outline">Shadcn UI</Badge>
                    <Badge variant="outline">React 18</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Placeholder Project */}
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle>Task Management App</CardTitle>
                      <CardDescription>Full-stack productivity application</CardDescription>
                    </div>
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A comprehensive task management application featuring user authentication, 
                    real-time collaboration, and data visualization. Built with modern web 
                    technologies and best practices.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                    <Badge variant="outline">Express</Badge>
                    <Badge variant="outline">Socket.io</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" disabled>
                      <Github className="mr-2 h-4 w-4" />
                      In Development
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Another Placeholder */}
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle>Data Visualization Dashboard</CardTitle>
                      <CardDescription>Interactive analytics platform</CardDescription>
                    </div>
                    <Badge variant="secondary">Planning</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    An interactive dashboard for data visualization and analytics, featuring 
                    real-time charts, customizable widgets, and export functionality. 
                    Designed for business intelligence and data-driven decision making.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Flask</Badge>
                    <Badge variant="outline">D3.js</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">APIs</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" disabled>
                      <Github className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">HTML/CSS</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tools & Other</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">GitHub</Badge>
                    <Badge variant="secondary">VS Code</Badge>
                    <Badge variant="secondary">Linux</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}