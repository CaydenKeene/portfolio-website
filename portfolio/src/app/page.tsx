import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar, Building2, Briefcase } from "lucide-react"
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
                  <Link href="/projects">View My Work</Link>
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
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-900/10 rounded-full mb-6 shadow-sm">
              <GraduationCap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey and foundational knowledge in computer science
            </p>
          </div>
          
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                      <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">University of Florida</CardTitle>
                      <CardDescription className="flex items-center mt-1 text-base">
                        <MapPin className="mr-1 h-4 w-4" />
                        Gainesville, FL
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 text-sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  2022 - 2026
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-xl mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground text-lg">Expected Graduation: May 2026</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Relevant Coursework</h4>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, 
                  Software Engineering, Computer Networks, Operating Systems, Machine Learning, 
                  Web Development, Discrete Mathematics
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">Computer Science</Badge>
                  <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">Software Engineering</Badge>
                  <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-700">Data Structures</Badge>
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-950/50 border-green-300 dark:border-green-700">Algorithms</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-900/10 rounded-full mb-6 shadow-sm">
              <Briefcase className="h-7 w-7 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional internships and real-world software development experience
            </p>
          </div>
          
          <div className="space-y-10">
            {/* Bank of America Internship */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Software Engineer Intern</CardTitle>
                        <CardDescription className="text-base mt-1">
                          <span className="font-semibold text-blue-600">Bank of America</span> • Charlotte, NC
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 text-sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Summer 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  Contributed to enterprise-level software development projects at one of the world's largest 
                  financial institutions, gaining hands-on experience with large-scale systems and modern 
                  development practices in a fast-paced corporate environment.
                </p>
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Key Achievements</h4>
                  <ul className="text-muted-foreground space-y-2 text-base">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Developed and maintained web applications using modern JavaScript frameworks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Collaborated with cross-functional teams including senior developers and product managers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Participated in Agile development processes and code reviews</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Gained experience with enterprise-grade security practices and regulatory compliance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">JavaScript</Badge>
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">React</Badge>
                    <Badge variant="outline" className="bg-green-50 dark:bg-green-950/50 border-green-300 dark:border-green-700">Node.js</Badge>
                    <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-700">Enterprise APIs</Badge>
                    <Badge variant="outline" className="bg-orange-50 dark:bg-orange-950/50 border-orange-300 dark:border-orange-700">Agile/Scrum</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* BlueSparq Internship */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-950/20 hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Software Development Intern</CardTitle>
                        <CardDescription className="text-base mt-1">
                          <span className="font-semibold text-purple-600">BlueSparq</span> • Remote
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-4 py-2 text-sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Summer 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-base">
                  Worked in a dynamic startup environment developing innovative software solutions, 
                  gaining experience with the full software development lifecycle from conception to deployment 
                  while contributing to cutting-edge technology projects.
                </p>
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Key Achievements</h4>
                  <ul className="text-muted-foreground space-y-2 text-base">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Built full-stack web applications using modern frameworks and cloud technologies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Designed and implemented user interfaces with focus on user experience</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Collaborated directly with founders and senior engineers in a startup environment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Participated in product development decisions and technical architecture discussions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-700">React</Badge>
                    <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-700">TypeScript</Badge>
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">Next.js</Badge>
                    <Badge variant="outline" className="bg-green-50 dark:bg-green-950/50 border-green-300 dark:border-green-700">Node.js</Badge>
                    <Badge variant="outline" className="bg-cyan-50 dark:bg-cyan-950/50 border-cyan-300 dark:border-cyan-700">Tailwind CSS</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-12 py-4 text-lg">
            <Link href="/projects">
              Explore My Projects
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
