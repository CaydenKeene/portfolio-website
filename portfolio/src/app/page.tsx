"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"
import { GraduationCap, MapPin, Calendar, Building2, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProfileImage } from "@/components/ProfileImage"
import Autoplay from "embla-carousel-autoplay"
import { useState, useEffect } from "react"

export default function Home() {
  const [boaCurrentSlide, setBoaCurrentSlide] = useState(0)
  const [boaApi, setBoaApi] = useState<CarouselApi>()
  
  const [qtCurrentSlide, setQtCurrentSlide] = useState(0)
  const [qtApi, setQtApi] = useState<CarouselApi>()
  
  const [ftcCurrentSlide, setFtcCurrentSlide] = useState(0)
  const [ftcApi, setFtcApi] = useState<CarouselApi>()
  
  const [lanaiCurrentSlide, setLanaiCurrentSlide] = useState(0)
  const [lanaiApi, setLanaiApi] = useState<CarouselApi>()
  
  const [blueSarqCurrentSlide, setBlueSarqCurrentSlide] = useState(0)
  const [blueSarqApi, setBlueSarqApi] = useState<CarouselApi>()

  // Listen for slide changes on BOA carousel
  useEffect(() => {
    if (!boaApi) return

    const onSelect = () => {
      setBoaCurrentSlide(boaApi.selectedScrollSnap())
    }

    boaApi.on('select', onSelect)
    onSelect() // Set initial value

    return () => {
      boaApi.off('select', onSelect)
    }
  }, [boaApi])

  // Listen for slide changes on Qt;Athon carousel
  useEffect(() => {
    if (!qtApi) return

    const onSelect = () => {
      setQtCurrentSlide(qtApi.selectedScrollSnap())
    }

    qtApi.on('select', onSelect)
    onSelect()

    return () => {
      qtApi.off('select', onSelect)
    }
  }, [qtApi])

  // Listen for slide changes on FIRST Tech Challenge carousel
  useEffect(() => {
    if (!ftcApi) return

    const onSelect = () => {
      setFtcCurrentSlide(ftcApi.selectedScrollSnap())
    }

    ftcApi.on('select', onSelect)
    onSelect()

    return () => {
      ftcApi.off('select', onSelect)
    }
  }, [ftcApi])

  // Listen for slide changes on Lanai Bright carousel
  useEffect(() => {
    if (!lanaiApi) return

    const onSelect = () => {
      setLanaiCurrentSlide(lanaiApi.selectedScrollSnap())
    }

    lanaiApi.on('select', onSelect)
    onSelect()

    return () => {
      lanaiApi.off('select', onSelect)
    }
  }, [lanaiApi])

  // Listen for slide changes on Blue Sarq carousel
  useEffect(() => {
    if (!blueSarqApi) return

    const onSelect = () => {
      setBlueSarqCurrentSlide(blueSarqApi.selectedScrollSnap())
    }

    blueSarqApi.on('select', onSelect)
    onSelect()

    return () => {
      blueSarqApi.off('select', onSelect)
    }
  }, [blueSarqApi])
  
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
                Computer Science student at the University of Florida with hands-on experience 
                in software development through internships at Bank of America and BlueSparq.
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
                <p className="text-muted-foreground text-base mt-1">GPA: 3.7/4.0</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Relevant Coursework</h4>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Data Structures & Algorithms, Object-Oriented Programming, Programming Fundamentals, 
                  Discrete Structures, Computer Organization, Calculus I & II, Physics I & II
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">Software Development</Badge>
                  <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-700">Web Development</Badge>
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-950/50 border-green-300 dark:border-green-700">Programming</Badge>
                  <Badge variant="outline" className="bg-orange-50 dark:bg-orange-950/50 border-orange-300 dark:border-orange-700">Problem Solving</Badge>
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
                Experience
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
                          <span className="font-semibold text-blue-600">Bank of America</span> • Chicago, IL
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 text-sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Jun. 2025 - Aug. 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Content Column */}
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      Worked in the Risk department on applications dealing with data for calculating and issuing 
                      margin calls for large clients, contributing to critical financial systems and gaining 
                      hands-on experience with enterprise-level software development.
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Key Achievements</h4>
                      <ul className="text-muted-foreground space-y-2 text-base">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Developed the UI for a new line of business ($50M project) within an application that displayed the status of data needed to calculate margin calls, using Bank of America's internal Python UI library</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Migrated the data feed of an application (React, MUI, Openfin) from REST to pub/sub (AMPS) to display live updating data in various UI components (tables/charts), serving to track and display client stock trade data</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Solo developed a template application to demonstrate best practices for a React application that interacts with the AMPS pub/sub service, integrated live updating data in UI elements, project was shared with 20+ developers</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Gave an hour long final presentation to a group of 30+ developers and executives, detailing completed work and insights gained from cross team collaboration, product management/ownership and requirement gathering</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">React</Badge>
                        <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">MUI</Badge>
                        <Badge variant="outline" className="bg-green-50 dark:bg-green-950/50 border-green-300 dark:border-green-700">Python UI Library</Badge>
                        <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-700">AMPS Pub/Sub</Badge>
                        <Badge variant="outline" className="bg-orange-50 dark:bg-orange-950/50 border-orange-300 dark:border-orange-700">Openfin</Badge>
                        <Badge variant="outline" className="bg-cyan-50 dark:bg-cyan-950/50 border-cyan-300 dark:border-cyan-700">REST APIs</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Carousel Column */}
                  <div className="flex items-center justify-center relative">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
                      className="w-full max-w-md"
                      setApi={setBoaApi}
                    >
                      <CarouselContent>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-blue-200 dark:border-blue-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 relative">
                                  <Image 
                                    src="/assets/experience/bank-of-america/IMG_7506.JPG" 
                                    alt="Bank of America Team Presentation"
                                    fill
                                    className="object-cover"
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {boaCurrentSlide + 1}/2
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-blue-200 dark:border-blue-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 relative">
                                  <Image 
                                    src="/assets/experience/bank-of-america/IMG_7378.png" 
                                    alt="Bank of America Internship Experience"
                                    fill
                                    className="object-cover"
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {boaCurrentSlide + 1}/2
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="hidden sm:flex -left-4" />
                      <CarouselNext className="hidden sm:flex -right-4" />
                    </Carousel>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Qt;Athon 2024 Global Competition */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-amber-50/30 dark:from-gray-900 dark:to-amber-950/20 hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Qt;Athon 2024 Global Competition - First Place Winner</CardTitle>
                        <CardDescription className="text-base mt-1">
                          <span className="font-semibold text-amber-600">Global Competition Achievement</span>
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 text-sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Dec. 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Content Column */}
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      Achieved first place in the Qt;Athon 2024 Global Competition, competing against teams from 
                      23 countries worldwide. Awarded the opportunity to present the project at the Qt World 
                      Summit in Munich, Germany in May 2025.
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Key Achievements</h4>
                      <ul className="text-muted-foreground space-y-2 text-base">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Top winner from 100 competing teams across 23 countries; awarded presentation of project at the Qt World Summit in Munich, Germany in May 2025</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Developed Human-Machine Interface for a simulated bottling factory using Qt Quick (C++/QML)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Designed and implemented responsive data visualization components to display real-time sensor information</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Built an error notification system to alert operators when sensor values fall outside acceptable ranges</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-700">Qt Quick</Badge>
                        <Badge variant="outline" className="bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-700">C++</Badge>
                        <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">QML</Badge>
                        <Badge variant="outline" className="bg-green-50 dark:bg-green-950/50 border-green-300 dark:border-green-700">Data Visualization</Badge>
                        <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-700">HMI Design</Badge>
                        <Badge variant="outline" className="bg-cyan-50 dark:bg-cyan-950/50 border-cyan-300 dark:border-cyan-700">Real-time Systems</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Carousel Column */}
                  <div className="flex items-center justify-center relative">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
                      className="w-full max-w-md"
                      setApi={setQtApi}
                    >
                      <CarouselContent>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-amber-200 dark:border-amber-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/50 dark:to-amber-900/30 relative">
                                  <Image 
                                    src="/assets/experience/qtathon/IMG_6806.png" 
                                    alt="Qt;Athon Award Ceremony"
                                    fill
                                    className="object-cover"
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {qtCurrentSlide + 1}/2
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-amber-200 dark:border-amber-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/50 dark:to-amber-900/30 relative">
                                  <Image 
                                    src="/assets/experience/qtathon/IMG_6799.png" 
                                    alt="Qt;Athon Competition Interface"
                                    fill
                                    className="object-cover"
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {qtCurrentSlide + 1}/2
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="hidden sm:flex -left-4" />
                      <CarouselNext className="hidden sm:flex -right-4" />
                    </Carousel>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FIRST Tech Challenge */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-red-50/30 dark:from-gray-900 dark:to-red-950/20 hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">FIRST Tech Challenge - Team Captain and Lead Mechanical Designer</CardTitle>
                        <CardDescription className="text-base mt-1">
                          <span className="font-semibold text-red-600">Fort Myers, Florida</span>
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 px-4 py-2 text-sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Sep 2018 - June 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Content Column */}
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      Led a competitive robotics team as Team Captain and Lead Mechanical Designer through multiple 
                      competition seasons, culminating in a World Championship victory. Managed cross-functional 
                      teams and developed expertise in advanced manufacturing processes.
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Key Achievements</h4>
                      <ul className="text-muted-foreground space-y-2 text-base">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>In 2022, as Team Captain, led the team through an intense 8 month competition season to secure a World Championship win and Innovation Award in Houston, TX. Approximately 7,300 teams compete each year worldwide.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Fostered a collaborative team culture by mentoring new members, coordinating cross-functional groups between mechanical and programming teams, and maintaining team cohesion during high-pressure competition phases and technical challenges.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Mastered complex CAD/CAM software (Fusion 360) and manufacturing processes (3D printing, CNC, Laser cutting), showing strong dedication to continuous learning and advanced construction methodologies.</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-red-50 dark:bg-red-950/50 border-red-300 dark:border-red-700">Fusion 360</Badge>
                        <Badge variant="outline" className="bg-red-50 dark:bg-red-950/50 border-red-300 dark:border-red-700">CAD/CAM</Badge>
                        <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">3D Printing</Badge>
                        <Badge variant="outline" className="bg-green-50 dark:bg-green-950/50 border-green-300 dark:border-green-700">CNC Machining</Badge>
                        <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-700">Laser Cutting</Badge>
                        <Badge variant="outline" className="bg-cyan-50 dark:bg-cyan-950/50 border-cyan-300 dark:border-cyan-700">Team Leadership</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Carousel Column */}
                  <div className="flex items-center justify-center relative">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
                      className="w-full max-w-md"
                      setApi={setFtcApi}
                    >
                      <CarouselContent>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-red-200 dark:border-red-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/30 relative">
                                  <Image 
                                    src="/assets/experience/first-tech-challenge/IMG_3592.JPG" 
                                    alt="FIRST Tech Challenge Championship"
                                    fill
                                    className="object-cover"
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {ftcCurrentSlide + 1}/5
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-red-200 dark:border-red-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/30 relative">
                                  <Image 
                                    src="/assets/experience/first-tech-challenge/IMG_3593.JPG" 
                                    alt="FIRST Tech Challenge Robot Design"
                                    fill
                                    className="object-cover"
                                  />
                                {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {ftcCurrentSlide + 1}/5
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-red-200 dark:border-red-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/30 relative">
                                  <Image 
                                    src="/assets/experience/first-tech-challenge/IMG_5118.JPG" 
                                    alt="FIRST Tech Challenge Team Leadership"
                                    fill
                                    className="object-cover"
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {ftcCurrentSlide + 1}/5
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-red-200 dark:border-red-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/30 relative">
                                  <Image 
                                    src="/assets/experience/first-tech-challenge/43CFFE6A-5CA9-4DD5-A715-2F8D4FB442E8.JPG" 
                                    alt="FIRST Tech Challenge Competition"
                                    fill
                                    className="object-cover"
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {ftcCurrentSlide + 1}/5
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-red-200 dark:border-red-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/30 relative">
                                  <Image 
                                    src="/assets/experience/first-tech-challenge/image.PNG" 
                                    alt="FIRST Tech Challenge Awards"
                                    fill
                                    className="object-cover"
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {ftcCurrentSlide + 1}/5
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="hidden sm:flex -left-4" />
                      <CarouselNext className="hidden sm:flex -right-4" />
                    </Carousel>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lanai Bright */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-emerald-50/30 dark:from-gray-900 dark:to-emerald-950/20 hover:shadow-2xl transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">Product Designer</CardTitle>
                        <CardDescription className="text-base mt-1">
                          <span className="font-semibold text-emerald-600">Lanai Bright</span> • Fort Myers, Florida
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 px-4 py-2 text-sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Jan. 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Content Column */}
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      Designed and prototyped innovative lighting solutions for outdoor fixtures, working through 
                      the complete product development cycle from CAD design to manufacturing and installation 
                      for residential applications.
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Key Achievements</h4>
                      <ul className="text-muted-foreground space-y-2 text-base">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Designed and prototyped light diffuser lens for outdoor lighting fixtures using CAD and 3D printing techniques. Final design was provided to a manufacturer in China where they produced an extrusion-based mold from the final 2D profile.</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Two thousand units were manufactured for the Lanai Bright Company and successfully installed in SW Florida homes.</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700">CAD Design</Badge>
                        <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700">3D Printing</Badge>
                        <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">Product Design</Badge>
                        <Badge variant="outline" className="bg-green-50 dark:bg-green-950/50 border-green-300 dark:border-green-700">Prototyping</Badge>
                        <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-700">Manufacturing</Badge>
                        <Badge variant="outline" className="bg-orange-50 dark:bg-orange-950/50 border-orange-300 dark:border-orange-700">Design for Manufacturing</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Carousel Column */}
                  <div className="flex items-center justify-center relative">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
                      className="w-full max-w-md"
                      setApi={setLanaiApi}
                    >
                      <CarouselContent>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-emerald-200 dark:border-emerald-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/30 relative">
                                  <Image 
                                    src="/assets/experience/lanai-bright/IMG_7549.PNG" 
                                    alt="Lanai Bright Prototypes"
                                    fill
                                    className="object-cover"
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {lanaiCurrentSlide + 1}/3
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-emerald-200 dark:border-emerald-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/30 relative">
                                  <Image 
                                    src="/assets/experience/lanai-bright/IMG_7550.jpg" 
                                    alt="Lanai Bright Final Installation"
                                    fill
                                    className="object-cover"
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {lanaiCurrentSlide + 1}/3
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-emerald-200 dark:border-emerald-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/30 relative">
                                  <Image 
                                    src="/assets/experience/lanai-bright/IMG_4462.png" 
                                    alt="Lanai Bright Product Design"
                                    fill
                                    className="object-cover"
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {lanaiCurrentSlide + 1}/3
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="hidden sm:flex -left-4" />
                      <CarouselNext className="hidden sm:flex -right-4" />
                    </Carousel>
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
                        <CardTitle className="text-2xl">Engineering Intern</CardTitle>
                        <CardDescription className="text-base mt-1">
                          <span className="font-semibold text-purple-600">Blue Sarq, Inc</span> • Cape Coral, FL
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-4 py-2 text-sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    May 2021 - May 2022
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Content Column */}
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      Gained hands-on experience in engineering and manufacturing processes at a hardware and 
                      software development company, working on innovative automation projects and learning 
                      about the fabrication of electronic products for various clients.
                    </p>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Key Achievements</h4>
                      <ul className="text-muted-foreground space-y-2 text-base">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Designed/built an automated soldering robot to solder through hole components on printed circuit boards, robot was constructed from a cartesian 3D printer retrofitted with a soldering iron and solder dispenser, programmed with gcode</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Worked on fabrication of various products such as power supplies for clients of Blue Sarq, learned about the manufacturing process that goes on behind a small hardware and software development company</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-700">3D Printing</Badge>
                        <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950/50 border-purple-300 dark:border-purple-700">Automation</Badge>
                        <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-700">GCode Programming</Badge>
                        <Badge variant="outline" className="bg-green-50 dark:bg-green-950/50 border-green-300 dark:border-green-700">Hardware Design</Badge>
                        <Badge variant="outline" className="bg-cyan-50 dark:bg-cyan-950/50 border-cyan-300 dark:border-cyan-700">Manufacturing</Badge>
                        <Badge variant="outline" className="bg-orange-50 dark:bg-orange-950/50 border-orange-300 dark:border-orange-700">Circuit Boards</Badge>
                      </div>
                    </div>
                  </div>
                  
                  {/* Carousel Column */}
                  <div className="flex items-center justify-center relative">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
                      className="w-full max-w-md"
                      setApi={setBlueSarqApi}
                    >
                      <CarouselContent>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-purple-200 dark:border-purple-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/30 relative">
                                  <Image 
                                    src="/assets/experience/blue-sarq/64903626667__A6BE0C9A-E51F-419F-A771-44DDB5C5B18C.png" 
                                    alt="Blue Sarq Soldering Robot Automation"
                                    fill
                                    className="object-cover"
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {blueSarqCurrentSlide + 1}/2
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="p-1">
                            <Card className="border border-purple-200 dark:border-purple-800 overflow-hidden">
                              <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/30 relative">
                                  <Image 
                                    src="/assets/experience/blue-sarq/IMG_7548.jpg" 
                                    alt="Blue Sarq Workshop and Manufacturing"
                                    fill
                                    className="object-cover"
                                    style={{ 
                                      objectPosition: '75% center',
                                      transform: 'scale(1)'
                                    }}
                                  />
                                  {/* Fixed slide indicator */}
                                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                                    {blueSarqCurrentSlide + 1}/2
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="hidden sm:flex -left-4" />
                      <CarouselNext className="hidden sm:flex -right-4" />
                    </Carousel>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects CTA Section */}
      <section className="container mx-auto px-4 pt-8 pb-24">
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
