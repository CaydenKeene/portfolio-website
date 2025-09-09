import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Calendar, Code } from "lucide-react"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-6">
              <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my passion for building innovative solutions and exploring cutting-edge technologies. 
              Each project represents a journey of learning, creativity, and problem-solving.
            </p>
          </div>

          {/* Featured Project */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-3xl font-bold">Featured Project</h2>
            </div>
            
            <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl flex items-center">
                      Portfolio Website
                      <Badge variant="secondary" className="ml-3">Featured</Badge>
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Modern, responsive portfolio showcasing clean design and optimal performance
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  A cutting-edge portfolio website built with Next.js 15 and modern web technologies. 
                  Features include seamless dark/light mode switching, responsive design across all devices, 
                  optimized performance with excellent Core Web Vitals, and a component-based architecture 
                  using Shadcn UI for consistent, accessible user experiences.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700">Next.js 15</Badge>
                    <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700">TypeScript</Badge>
                    <Badge variant="outline" className="bg-cyan-100 dark:bg-cyan-900/20 border-cyan-300 dark:border-cyan-700">Tailwind CSS</Badge>
                    <Badge variant="outline" className="bg-purple-100 dark:bg-purple-900/20 border-purple-300 dark:border-purple-700">Shadcn UI</Badge>
                    <Badge variant="outline" className="bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-700">React 18</Badge>
                    <Badge variant="outline" className="bg-orange-100 dark:bg-orange-900/20 border-orange-300 dark:border-orange-700">Vercel</Badge>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Other Projects */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Task Management App */}
              <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Task Management Platform
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Full-stack productivity application with real-time collaboration
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200">
                      In Progress
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Comprehensive task management solution featuring user authentication, 
                    real-time collaboration through WebSockets, data visualization dashboards, 
                    and team productivity analytics.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">Node.js</Badge>
                    <Badge variant="outline" className="text-xs">PostgreSQL</Badge>
                    <Badge variant="outline" className="text-xs">Socket.io</Badge>
                    <Badge variant="outline" className="text-xs">Express</Badge>
                  </div>
                  <Button size="sm" variant="outline" disabled className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>

              {/* Data Visualization */}
              <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Analytics Dashboard
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Interactive data visualization platform for business intelligence
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-200">
                      Planning
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Advanced analytics platform featuring real-time charts, customizable widgets, 
                    data export functionality, and machine learning insights for data-driven 
                    decision making.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">Flask</Badge>
                    <Badge variant="outline" className="text-xs">D3.js</Badge>
                    <Badge variant="outline" className="text-xs">ML</Badge>
                    <Badge variant="outline" className="text-xs">REST APIs</Badge>
                  </div>
                  <Button size="sm" variant="outline" disabled className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    In Development
                  </Button>
                </CardContent>
              </Card>

              {/* Mobile App */}
              <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Fitness Tracking App
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Cross-platform mobile application for health and fitness
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200">
                      Concept
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Mobile application for tracking workouts, nutrition, and health metrics. 
                    Features social sharing, progress visualization, and personalized 
                    workout recommendations.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">React Native</Badge>
                    <Badge variant="outline" className="text-xs">TypeScript</Badge>
                    <Badge variant="outline" className="text-xs">Firebase</Badge>
                    <Badge variant="outline" className="text-xs">Redux</Badge>
                    <Badge variant="outline" className="text-xs">Charts</Badge>
                  </div>
                  <Button size="sm" variant="outline" disabled className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    Future Project
                  </Button>
                </CardContent>
              </Card>

              {/* Algorithm Visualizer */}
              <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Algorithm Visualizer
                      </CardTitle>
                      <CardDescription className="mt-2">
                        Interactive educational tool for learning computer science algorithms
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200">
                      Prototype
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Educational platform for visualizing sorting algorithms, graph traversals, 
                    and data structures. Includes step-by-step animations, complexity analysis, 
                    and interactive code examples.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">JavaScript</Badge>
                    <Badge variant="outline" className="text-xs">Canvas API</Badge>
                    <Badge variant="outline" className="text-xs">Algorithms</Badge>
                    <Badge variant="outline" className="text-xs">Education</Badge>
                    <Badge variant="outline" className="text-xs">Animation</Badge>
                  </div>
                  <Button size="sm" variant="outline" disabled className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    Early Stage
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Technical Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">HTML/CSS</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Responsive Design</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">GitHub</Badge>
                    <Badge variant="secondary">VS Code</Badge>
                    <Badge variant="secondary">Linux</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                    <Badge variant="secondary">AWS</Badge>
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