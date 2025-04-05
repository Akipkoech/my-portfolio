import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import BackToTopButton from "../components/BackToTopButton"; // Adjust the path as needed

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {/* Portfolio Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Portfolio</h3>
            <p className="text-gray-300">Showcasing my work and professional services.</p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:text-red-500 focus:outline-none"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              {[
                { href: "https://github.com", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
                { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
                { href: "mailto:hello@example.com", icon: Mail, label: "Email" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="text-gray-300 hover:text-red-500 transition-colors duration-200 focus:text-red-500 focus:outline-none"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Alex Koech. All rights reserved.</p>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}