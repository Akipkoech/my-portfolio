"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Navigation items (without "Contact" since we have a "Contact Me" button)
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/Projects" },
  { name: "Services", path: "/services" },
];

// Animation variants for the mobile menu
const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "bg-gray-900 shadow-md backdrop-blur-md"
          : "bg-gray-900 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-gray-900/95"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex h-12 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl tracking-tight text-white">
          Alex.<span className="text-red-500">Dev</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  pathname === item.path ? "text-red-500" : "text-gray-300",
                  "hover:text-red-500 focus:text-red-500 focus:outline-none"
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          {/* Contact Me Button */}
          <Link href="/contact">
            <Button
              className={cn(
                "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg",
                "transition-all duration-300 transform hover:scale-105"
              )}
            >
              Contact Me
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-300 hover:text-red-500 focus:text-red-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="container mx-auto px-4 md:hidden py-4 bg-gray-900 border-t border-gray-700"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.path}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      pathname === item.path ? "text-red-500" : "text-gray-300",
                      "hover:text-red-500 focus:text-red-500 focus:outline-none"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              {/* Contact Me Button in Mobile Menu */}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  className={cn(
                    "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg",
                    "transition-all duration-300 transform hover:scale-105"
                  )}
                >
                  Contact Me
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}