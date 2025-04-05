/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
        <div>
          <div className="rounded-lg border bg-background p-6">
            <h2 className="text-xl font-bold">Contact Information</h2>
            <p className="mt-2 text-muted-foreground">Feel free to reach out through any of the following methods.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <Link href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary">
                    hello@example.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <Link href="tel:+1234567890" className="text-muted-foreground hover:text-primary">
                    +1 (234) 567-890
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium">Working Hours</h3>
              <p className="mt-2 text-muted-foreground">
                Monday - Friday: 9am - 5pm
                <br />
                Weekend: Available for urgent matters
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border bg-background p-6">
            <h2 className="text-xl font-bold">FAQ</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium">What is your typical project timeline?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Project timelines vary depending on complexity, but a typical website takes 4-6 weeks from start to
                  finish.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Do you offer maintenance services?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Yes, I offer ongoing maintenance and support packages to keep your website running smoothly.
                </p>
              </div>
              <div>
                <h3 className="font-medium">What is your payment structure?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-background p-6">
          <h2 className="text-xl font-bold">Send a Message</h2>
          <p className="mt-2 text-muted-foreground">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>

          {isSubmitted ? (
            <div className="mt-6 rounded-lg bg-green-50 p-4 text-green-700">
              <h3 className="font-medium">Message Sent!</h3>
              <p className="mt-1 text-sm">Thank you for reaching out. I'll respond to your message shortly.</p>
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
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

