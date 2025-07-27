"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin, Copy, Check } from "lucide-react"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "cayden@keenefl.com"

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="max-w-3xl mx-auto w-full">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-2">Let's Connect</h1>
            <p className="text-xl text-muted-foreground">
              The best way to reach me for any inquiries is via email
            </p>
          </div>

          <div className="grid gap-6">
            {/* Primary Contact */}
            <Card>
              <CardContent className="py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="font-mono text-sm">{email}</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyEmail}
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 mr-1 text-green-600" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Professional Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 flex-1">
                  <Button variant="outline" className="w-full justify-start h-auto py-3" asChild>
                    <a href="https://github.com/CaydenKeene" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <div className="font-medium">GitHub</div>
                        <div className="text-sm text-muted-foreground">View my code and projects</div>
                      </div>
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-auto py-3" asChild>
                    <a href="https://www.linkedin.com/in/cayden-keene-363214292/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <div className="font-medium">LinkedIn</div>
                        <div className="text-sm text-muted-foreground">Let's connect professionally</div>
                      </div>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Gainesville, FL</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}