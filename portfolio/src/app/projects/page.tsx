import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Code, Smartphone, Car, Printer, Zap } from "lucide-react"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-8 shadow-lg">
              <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A curated collection of my most significant projects, spanning mobile development, 
              web applications, hardware engineering, and competitive achievements.
            </p>
          </div>

          {/* Projects Grid */}
          <section>
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Airspace Quiz */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900/30 dark:to-blue-900/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="h-16 w-16 text-sky-600 dark:text-sky-400 mx-auto mb-4" />
                      <p className="text-sky-700 dark:text-sky-300 font-medium">Project Image</p>
                      <p className="text-sm text-sky-600 dark:text-sky-400">Upload your app screenshot here</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-sky-100 dark:bg-sky-900/30 rounded-lg mr-3">
                        <Smartphone className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          Airspace Quiz
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          Jan. 2025 - Present
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-0">
                      Published
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Contracted by the CEO of Blue Sarq to develop a comprehensive mobile platform 
                    that helps aspiring pilots master airspace regulations. Successfully deployed 
                    to the Apple App Store with full-stack architecture.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {['React Native', 'Expo', 'TypeScript', 'PostgreSQL', 'Supabase'].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      App Store
                    </Button>
                    <Button className="flex-1" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* FTC Queuing */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-indigo-900/30 dark:to-purple-900/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                      <p className="text-indigo-700 dark:text-indigo-300 font-medium">Project Image</p>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">Upload your platform screenshot here</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-3">
                        <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          FTC Queuing Platform
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          Dec. 2024 - Present
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-0">
                      Live
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Revolutionary platform for FIRST Tech Challenge robotics competitions. 
                    Teams scan QR codes to receive SMS notifications when it's time to queue 
                    for matches. Deployed at major championships with 250+ active users.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'TypeScript', 'Tailwind', 'REST API', 'Vercel', 'Twilio'].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Platform
                    </Button>
                    <Button className="flex-1" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Solar Car Competition */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-yellow-900/30 dark:to-orange-900/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Car className="h-16 w-16 text-yellow-600 dark:text-yellow-400 mx-auto mb-4" />
                      <p className="text-yellow-700 dark:text-yellow-300 font-medium">Project Image</p>
                      <p className="text-sm text-yellow-600 dark:text-yellow-400">Upload your solar car photo here</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg mr-3">
                        <Car className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          Solar Car Competition
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          Mar. 2023 - Apr. 2023
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-0">
                      2nd Place
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Led a four-person engineering team in designing and building a solar-powered 
                    vehicle for the FL Gulf Coast University competition. Our 900-watt solar array 
                    design secured 2nd place out of 15 competing teams.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {['Solar Engineering', 'Team Leadership', 'Hardware Design', 'DC Motors', 'Competition'].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Project Documentation
                  </Button>
                </CardContent>
              </Card>

              {/* 3D Printer Construction */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-200 dark:from-emerald-900/30 dark:to-teal-900/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Printer className="h-16 w-16 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
                      <p className="text-emerald-700 dark:text-emerald-300 font-medium">Project Image</p>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400">Upload your 3D printer photo here</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-3">
                        <Printer className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          DIY 3D Printer Build
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          Jul. 2022 - Aug. 2022
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-0">
                      Hardware
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Engineered a custom 3D printer from scratch using the Voron 0.1 platform. 
                    Self-printed majority of components and configured advanced Klipper firmware 
                    on Raspberry Pi for precision control and monitoring.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {['Voron 0.1', 'Klipper Firmware', 'Raspberry Pi', '3D Printing', 'Hardware Assembly'].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Build Documentation
                  </Button>
                </CardContent>
              </Card>

              {/* Portfolio Website */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900/30 dark:to-purple-900/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Code className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                      <p className="text-blue-700 dark:text-blue-300 font-medium">Live Website</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400">Current portfolio you're viewing</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                        <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          Portfolio Website
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          Jan. 2025 - Present
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-0">
                      Live
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A sophisticated portfolio website crafted with Next.js 15 and modern web technologies. 
                    Features seamless dark/light mode theming, responsive design across all devices, 
                    optimized performance, and component-based architecture using Shadcn UI.
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'React 18', 'Vercel'].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Site
                    </Button>
                    <Button className="flex-1" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
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