/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Briefcase,
  GraduationCap,
  Map,
  Rocket,
  User,
  Wrench,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8 space-y-8">
        {/* About Me Section */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <User className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              About <span className="text-red-500">Me</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              I'm a passionate web developer with over 5 years of experience creating beautiful, functional, and
              user-friendly websites and applications.
            </p>
          </div>
        </div>

        {/* My Journey */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Map className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              My Journey
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
              I started my journey as a self-taught developer, experimenting with HTML and CSS. As my passion grew, I
              pursued formal education in Computer Science and have since worked with various technologies and frameworks
              to create impactful digital experiences.
            </p>
          </div>
        </div>

        {/* My Approach */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Rocket className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              My Approach
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
              I believe in creating websites that not only look great but also provide an exceptional user experience. My
              approach combines technical expertise with creative problem-solving to deliver solutions that meet both user
              needs and business goals.
            </p>
          </div>
        </div>

        {/* My Skills */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Wrench className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              My Skills
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 max-w-2xl w-full">
              {[
                "JavaScript / TypeScript",
                "React / Next.js",
                "HTML / CSS",
                "Tailwind CSS",
                "Node.js",
                "UI/UX Design",
                "Responsive Design",
                "Git / GitHub",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-center gap-3 group/skill transition-all duration-300 hover:bg-red-500/10 hover:pl-2 rounded-md py-1"
                >
                  <div className="h-2 w-2 rounded-full bg-red-500 group-hover/skill:bg-red-600 transition-colors duration-300"></div>
                  <span className="text-gray-700 group-hover/skill:text-red-600 transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Briefcase className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Work Experience
            </h2>
            <div className="space-y-4 max-w-2xl w-full">
              <div>
                <div className="font-medium text-gray-800">Senior Developer at Company Name</div>
                <div className="text-sm text-gray-600">2020 - Present</div>
                <div className="mt-1 text-sm text-gray-600 leading-relaxed">
                  Leading development of web applications and mentoring junior developers.
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-800">Web Developer at Another Company</div>
                <div className="text-sm text-gray-600">2018 - 2020</div>
                <div className="mt-1 text-sm text-gray-600 leading-relaxed">
                  Developed responsive websites and implemented new features.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <GraduationCap className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Education
            </h2>
            <div className="max-w-2xl w-full">
              <div className="font-medium text-gray-800">BSc in Computer Science</div>
              <div className="text-sm text-gray-600">University Name, 2014 - 2018</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Award className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Certifications
            </h2>
            <div className="space-y-2 max-w-2xl w-full">
              <div className="text-gray-700">Advanced Web Development</div>
              <div className="text-gray-700">UI/UX Design Fundamentals</div>
              <div className="text-gray-700">React Developer Certification</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto flex flex-col items-center space-y-4 text-center">
          <Wrench className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Get in Touch
          </h2>
          <Link href="/contact">
            <Button
              className="px-6 py-3 text-base font-medium bg-red-500 text-white hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}