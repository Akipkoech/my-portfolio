/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github, Folder, MessageSquare } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce platform built with Next.js and Tailwind CSS. Features include product filtering, cart functionality, and secure checkout.",
    image: "/placeholder.svg?height=400&width=600&text=E-commerce+Project",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern portfolio website for a photographer showcasing their work with a beautiful gallery and contact form.",
    image: "/placeholder.svg?height=400&width=600&text=Portfolio+Project",
    tags: ["React", "GSAP", "Styled Components"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A productivity app that helps users manage their tasks with features like drag-and-drop, categories, and deadline reminders.",
    image: "/placeholder.svg?height=400&width=600&text=Task+App",
    tags: ["React", "Redux", "Firebase", "Material UI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather application that provides current weather data and forecasts for any location using a third-party API.",
    image: "/placeholder.svg?height=400&width=600&text=Weather+App",
    tags: ["JavaScript", "API Integration", "CSS3"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Recipe Finder",
    description:
      "An application that allows users to search for recipes based on ingredients they have or dietary restrictions.",
    image: "/placeholder.svg?height=400&width=600&text=Recipe+App",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "A dashboard that aggregates data from various social media platforms to provide insights and analytics.",
    image: "/placeholder.svg?height=400&width=600&text=Social+Dashboard",
    tags: ["Vue.js", "Chart.js", "API Integration"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8 space-y-12">
        {/* My Projects Heading */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Folder className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              My <span className="text-red-500">Projects</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              A collection of my recent work, personal projects, and experiments.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  width={600}
                  height={400}
                  alt={project.title}
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 text-center">{project.title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed text-center">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-gray-700 border-gray-300 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 justify-center">
                  <Link href={project.demoUrl}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  </Link>
                  <Link href={project.githubUrl}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <MessageSquare className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Want to Work Together?
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-2xl">
              I'm always open to discussing new projects and opportunities.
            </p>
            <Link href="/contact">
              <Button
                className="px-6 py-3 text-base font-medium bg-red-500 text-white hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}