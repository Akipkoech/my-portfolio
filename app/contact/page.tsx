/* eslint-disable react/no-unescaped-entities */
"use client";

import type React from "react";
import { useState, useEffect } from "react"; // Added useEffect
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare, HelpCircle, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize EmailJS with the User ID
  useEffect(() => {
    emailjs.init("f_QJFAwKIWzqUrA4v"); // Your EmailJS User ID
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Form validation
    if (!formData.name.trim()) {
      setError("Name is required.");
      setIsSubmitting(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }
    if (!formData.subject.trim()) {
      setError("Subject is required.");
      setIsSubmitting(false);
      return;
    }
    if (formData.message.length < 10) {
      setError("Message must be at least 10 characters long.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        "service_zfpoh5g", // Service ID
        "template_22vmwxf", // Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      console.log("EmailJS response:", response); // Log the response for debugging

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err: unknown) {
      setIsSubmitting(false);
      // Improved error handling
      const errorMessage =
        (typeof err === "object" && err !== null && "text" in err && typeof err.text === "string"
          ? err.text
          : typeof err === "object" && err !== null && "message" in err && typeof err.message === "string"
          ? err.message
          : "An unknown error occurred.");
      setError(`Failed to send your message: ${errorMessage}`);
      console.error("Detailed EmailJS error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Get in Touch Heading */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <MessageSquare className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Get in <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Contact Information and Form Grid */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <Mail className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Feel free to reach out through any of the following methods.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <Link
                        href="mailto:ronohalex651@gmail.com"
                        className="text-gray-600 hover:text-red-500 transition-colors duration-300"
                      >
                        ronohalex651@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 text-green-500 group-hover:text-green-600 transition-colors duration-300" />
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <Link
                        href="tel:+254745340588"
                        className="text-gray-600 hover:text-red-500 transition-colors duration-300"
                      >
                        +(254)745-340-588
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
                    <div>
                      <h3 className="font-medium text-gray-900">Location</h3>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Working Hours</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    Monday - Friday: 9am - 5pm
                    <br />
                    Weekend: Available for urgent matters
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group">
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-2 text-center">
                  <HelpCircle className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      question: "What is your typical project timeline?",
                      answer:
                        "Project timelines vary depending on complexity, but a typical website takes 4-6 weeks from start to finish.",
                    },
                    {
                      question: "Do you offer maintenance services?",
                      answer:
                        "Yes, I offer ongoing maintenance and support packages to keep your website running smoothly.",
                    },
                    {
                      question: "What is your payment structure?",
                      answer:
                        "I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion.",
                    },
                  ].map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-medium text-gray-900">{faq.question}</h3>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Send a Message Form */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:bg-red-50/30 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <MessageSquare className="h-8 w-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Send a Message
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
              {isSubmitted ? (
                <div className="mt-6 rounded-lg bg-green-50 p-4 text-green-700">
                  <h3 className="font-medium">Message Sent!</h3>
                  <p className="mt-1 text-sm">Thank you for reaching out. I'll respond to your message shortly.</p>
                </div>
              ) : error ? (
                <div className="mt-6 rounded-lg bg-red-50 p-4 text-red-700">
                  <h3 className="font-medium">Error</h3>
                  <p className="mt-1 text-sm">{error}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-red-500 text-white hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Icon */}
      <Link
        href="https://wa.link/ib99ru"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>
    </div>
  );
}