import Image from "next/image"
import { Github, Mail, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Me from "@/assets/images/me.jpg";
import LetterHunter from "@/assets/images/letterHunter.png";
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Navigation */}
      <nav className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">Portfolio</span>
          <div className="space-x-4">
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-primary transition-colors">
              Education
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-[192px] h-[192px]">
          <Image 
            src={Me} 
            alt="Profile"
            fill 
            className="rounded-full object-cover object-center"
            priority
          />
        </div>

          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl font-bold">Hello there!</h1>
            <p className="text-xl text-muted-foreground">
              I am Eavheang Oeng, a junior year software engineering student at Kirirom Institute of Technology (KIT)
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button asChild>
                <a href="/cv/Eavheang_Oeng_CV.pdf" download>
                  My Resume
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/oeng-eavheang-825634287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              id: 1,
              title: "LetterHunter",
              description: "An educational game helping kids learn the Khmer alphabet.",
              image: LetterHunter,
            },
            {
              id: 2,
              title: "GreenExchange",
              description: "A platform that turns food waste into compost for a greener future.",
              image: "/assets/images/greenexchange.jpg",
            },
            {
              id: 3,
              title: "Automated Rover Robot",
              description: "A robot that can be controlled remotely and autonomously.",
              image: "/assets/images/busbooking.jpg",
            },
            {
              id: 4,
              title: "Bus Booking System",
              description: "An online platform for booking bus tickets easily and quickly.",
              image: "/assets/images/busbooking.jpg",
            },
            {
              id: 5,
              title: "Odoo System",
              description: "An ERP system that helps businesses manage their operations.",
              image: "/assets/images/busbooking.jpg",
            },
          ].map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* Education Section */}
      <section id="education" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Kirirom Institute of Technology</h3>
              <p className="text-muted-foreground">Software Engineering (2023-2027)</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">New Generation School</h3>
              <p className="text-muted-foreground">High School (2018-2023)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Python", level: "Intermediate" },
                { name: "Next.js", level: "Intermediate" },
                { name: "Node.js", level: "Intermediate" },
                { name: "Flutter", level: "Intermediate" },
                { name: "MongoDB", level: "Intermediate" },
                { name: "TypeScript", level: "Beginner" },
                { name: "Git", level: "Intermediate" },
                { name: "Docker", level: "Beginner" },
                { name: "Arduino IOT", level: "Intermediate" },
                { name: "C++", level: "Beginner" },
                { name: "Figma", level: "Intermediate" },
                { name: "Java", level: "Beginner" },
              ].map((skill) => (
                <div key={skill.name} className="text-center p-4 space-y-2">
                  <div className="text-xl font-semibold">{skill.name}</div>
                  <Badge variant="secondary">{skill.level}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <a href="https://github.com/Eavheang" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/oeng-eavheang-825634287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full">
                  <Linkedin className="mr-2 h-4 w-4" />
                  linkedin
                </Button>
              </a>
              <a href="mailto:oengeavheang@gmail.com">
                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Gmail
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>© 2025 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

