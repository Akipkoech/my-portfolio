/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Layers,
  Lightbulb,
  Rocket,
  Search,
  Zap,
  Wrench,
  Workflow,
  DollarSign,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10 text-red-500 group-hover:text-red-600 transition-colors duration-300" />,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    features: [
      "Responsive design for all devices",
      "Performance optimization",
      "SEO-friendly structure",
      "Modern frameworks (React, Next.js)",
      "Content management systems",
    ],
  },
  {
    icon: <Layers className="h-10 w-10 text-red-500 group-hover:text-red-600 transition-colors duration-300" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with your users in mind.",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Interaction design",
    ],
  },
  {
    icon: <Zap className="h-10 w-10 text-red-500 group-hover:text-red-600 transition-colors duration-300" />,
    title: "Performance Optimization",
    description: "Speed up your website and improve user experience.",
    features: [
      "Core Web Vitals optimization",
      "Image and asset optimization",
      "Code splitting and lazy loading",
      "Caching strategies",
      "Server-side rendering",
    ],
  },
  {
    icon: <Search className="h-10 w-10 text-red-500 group-hover:text-red-600 transition-colors duration-300" />,
    title: "SEO Services",
    description: "Improve your search engine rankings and drive more organic traffic.",
    features: [
      "Keyword research and strategy",
      "On-page optimization",
      "Technical SEO audits",
      "Content strategy",
      "Performance monitoring",
    ],
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-red-500 group-hover:text-red-600 transition-colors duration-300" />,
    title: "Consultation",
    description: "Expert advice on your web projects and digital strategy.",
    features: [
      "Technology stack recommendations",
      "Project planning and roadmapping",
      "Code reviews and audits",
      "Team training and workshops",
      "Digital transformation strategy",
    ],
  },
  {
    icon: <Rocket className="h-10 w-10 text-red-500 group-hover:text-red-600 transition-colors duration-300" />,
    title: "Maintenance & Support",
    description: "Keep your website running smoothly with regular updates and support.",
    features: [
      "Regular security updates",
      "Performance monitoring",
      "Content updates",
      "Bug fixes and troubleshooting",
      "Backup and recovery",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8 space-y-12">
        {/* My Services Heading */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Wrench className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              My <span className="text-red-500">Services</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              I offer a range of services to help you build and grow your online presence.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group flex flex-col items-center text-center"
            >
              {service.icon}
              <h2 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">{service.description}</p>
              <ul className="mt-4 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 justify-center">
                    <CheckCircle2 className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <section>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Workflow className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                My Process
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl">
                I follow a structured approach to ensure your project is delivered on time and exceeds expectations.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-4 max-w-7xl mx-auto">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "Understanding your goals, requirements, and target audience.",
              },
              {
                step: "2",
                title: "Planning",
                description: "Creating a roadmap and selecting the right technologies for your project.",
              },
              {
                step: "3",
                title: "Execution",
                description: "Developing your solution with regular updates and feedback sessions.",
              },
              {
                step: "4",
                title: "Launch & Support",
                description: "Deploying your project and providing ongoing maintenance and support.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white group-hover:bg-red-600 transition-colors duration-300">
                  {process.step}
                </div>
                <h3 className="mt-4 font-semibold text-gray-900">{process.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <DollarSign className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                Pricing
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl">
                Transparent pricing options to suit different project needs and budgets.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3 max-w-7xl mx-auto">
            {[
              {
                title: "Basic",
                price: "$1,000",
                description: "Starting price",
                features: [
                  "Simple website (up to 5 pages)",
                  "Responsive design",
                  "Basic SEO setup",
                  "Contact form",
                ],
                popular: false,
              },
              {
                title: "Standard",
                price: "$3,000",
                description: "Starting price",
                features: [
                  "Custom website (up to 10 pages)",
                  "Advanced responsive design",
                  "Comprehensive SEO setup",
                  "Content management system",
                  "Basic animations",
                ],
                popular: true,
              },
              {
                title: "Premium",
                price: "$5,000+",
                description: "Starting price",
                features: [
                  "Complex web application",
                  "Custom functionality",
                  "E-commerce capabilities",
                  "Advanced animations",
                  "Third-party integrations",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group flex flex-col items-center text-center ${
                  plan.popular ? "border-2 border-red-500" : ""
                }`}
              >
                {plan.popular && (
                  <div className="inline-block rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white mb-4">
                    Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
                <div className="mt-4 text-3xl font-bold text-gray-900">{plan.price}</div>
                <p className="mt-1 text-sm text-gray-600">{plan.description}</p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 justify-center">
                      <CheckCircle2 className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/contact">
                    <Button
                      className={`w-full px-6 py-3 text-base font-medium transition-all duration-300 ${
                        plan.popular
                          ? "bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl transform hover:scale-105"
                          : "bg-white border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <MessageSquare className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                Ready to Discuss Your Project?
              </h2>
              <p className="text-gray-700 leading-relaxed max-w-2xl">
                Contact me for a free consultation and let's bring your ideas to life.
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
        </section>
      </div>
    </div>
  );
}