/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";
import type { Metadata } from "next";

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Alex Koech - Portfolio",
  description: "Portfolio of Alex Koech, a passionate developer creating beautiful and functional web experiences.",
};

// Define types for the project and service data
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
};

type Service = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "A cool project built with React and Node.js.",
    image: "/placeholder.svg?height=400&width=600&text=Project+1",
    slug: "project-1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "An e-commerce platform using Next.js and Stripe.",
    image: "/placeholder.svg?height=400&width=600&text=Project+2",
    slug: "project-2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A dashboard app with real-time data using WebSocket.",
    image: "/placeholder.svg?height=400&width=600&text=Project+3",
    slug: "project-3",
  },
];

// Sample services data
const services: Service[] = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with your users in mind.",
    icon: Layers,
  },
  {
    title: "Performance Optimization",
    description: "Speed up your website and improve user experience.",
    icon: Zap,
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-gradient-to-b from-gray-900 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center justify-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm <span className="text-red-500">Alex Koech</span>
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  A passionate developer creating beautiful and functional web experiences.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/projects">
                  <Button>
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/images/me.jpg"
                  width={300}
                  height={300}
                  alt="Alex Koech"
                  className="rounded-full object-cover shadow-lg border-4 border-transparent [box-shadow:0_0_0_4px_rgba(239,68,68,1),0_0_0_8px_rgba(17,24,39,0.5)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Projects</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">Check out some of my recent work</p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <Image
                    src={project.image}
                    width={600}
                    height={400}
                    alt={project.title}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <Link href={`/projects/${project.slug}`}>
                    <Button variant="link" className="mt-4 p-0 text-red-500 hover:text-red-600">
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/projects">
              <Button variant="outline">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">My Services</h2>
              <p className="max-w-[700px] text-gray-600 md:text-xl">
                Here's how I can help bring your vision to life
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="rounded-full bg-red-500/10 p-4">
                  <service.icon className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-center text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/services">
              <Button variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start a Project?</h2>
              <p className="max-w-[700px] md:text-xl">
                Let's work together to create something amazing.
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}