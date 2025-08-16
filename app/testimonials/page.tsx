"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Quote, MapPin, Heart, Users, Globe, ChevronLeft, ChevronRight, Sparkles, Phone } from "lucide-react"

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      service: "Reiki Healing Sessions",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "After struggling with chronic anxiety for years, I found peace through Reiki healing with Grand Master Tarun. The distance healing sessions were incredibly powerful, and I felt the energy shift immediately. My life has completely transformed - I sleep better, feel more confident, and have a deep sense of inner peace I never thought possible.",
      date: "December 2024",
    },
    {
      name: "James Mitchell",
      location: "London, UK",
      service: "Reiki Master Course",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "The Reiki Master course exceeded all my expectations. Grand Master Tarun's teaching style is both profound and accessible. I now run my own healing practice in London and have helped hundreds of clients. The certification is recognized internationally, which has opened doors I never imagined.",
      date: "November 2024",
    },
    {
      name: "Maria Rodriguez",
      location: "Barcelona, Spain",
      service: "Past Life Regression",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "The past life regression session was life-changing. I discovered the root cause of my relationship patterns and was able to heal generational trauma. Grand Master Tarun guided me through the process with such compassion and wisdom. I feel like I've been reborn with a clear understanding of my soul's purpose.",
      date: "October 2024",
    },
    {
      name: "Raj Patel",
      location: "Mumbai, India",
      service: "369 Manifestation Coaching",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "I was skeptical about manifestation techniques until I tried the 369 method with Grand Master Tarun. Within three months, I manifested my dream job, a loving relationship, and financial abundance. The technique is simple yet incredibly powerful when practiced with the right guidance and intention.",
      date: "September 2024",
    },
    {
      name: "Emma Thompson",
      location: "Sydney, Australia",
      service: "Chakra Balancing & Meditation",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "The chakra balancing sessions have transformed my energy levels and emotional well-being. I used to feel constantly drained and overwhelmed, but now I have sustained energy throughout the day. The meditation techniques I learned have become an essential part of my daily routine.",
      date: "August 2024",
    },
    {
      name: "Ahmed Hassan",
      location: "Dubai, UAE",
      service: "Spiritual Counseling",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "During a difficult period in my life, Grand Master Tarun's spiritual counseling provided the guidance I desperately needed. His insights helped me understand my life's challenges from a higher perspective and gave me practical tools to navigate through them with grace and wisdom.",
      date: "July 2024",
    },
    {
      name: "Lisa Chen",
      location: "Toronto, Canada",
      service: "Reiki Level 1 & 2 Course",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "As a healthcare professional, I was looking for complementary healing methods to help my patients. The Reiki Level 1 & 2 course provided me with powerful tools that I now use alongside conventional medicine. My patients have noticed significant improvements in their recovery times and overall well-being.",
      date: "June 2024",
    },
    {
      name: "Giuseppe Romano",
      location: "Rome, Italy",
      service: "Distance Reiki Healing",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "I was amazed by the effectiveness of distance Reiki healing. Despite being thousands of miles away, I could feel the healing energy during each session. My chronic back pain, which I had for over 10 years, completely disappeared after just six sessions. Truly miraculous!",
      date: "May 2024",
    },
    {
      name: "Yuki Tanaka",
      location: "Tokyo, Japan",
      service: "Reiki Grand Master Course",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "Achieving Grand Master level under the guidance of Master Tarun has been the pinnacle of my spiritual journey. The depth of knowledge and wisdom shared in this course is extraordinary. I now teach Reiki across Japan and have established three healing centers. The lineage and teachings continue to inspire my daily practice.",
      date: "April 2024",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Students Trained", icon: Users },
    { number: "15+", label: "Countries Served", icon: Globe },
    { number: "25+", label: "Years Experience", icon: Star },
    { number: "98%", label: "Success Rate", icon: Heart },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 spiritual-gradient overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full sparkle-effect opacity-60"></div>
            <div
              className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full sparkle-effect opacity-40"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-40 left-20 w-5 h-5 bg-accent rounded-full sparkle-effect opacity-50"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30 float-animation">
              Client Stories
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 float-animation">
              Testimonials & Success Stories
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Discover how Reiki healing and spiritual guidance have transformed lives across the globe. Real stories
              from real people who found healing, peace, and purpose.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonial Carousel */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Featured Success Story</h2>
              <p className="text-lg text-muted-foreground">
                Experience the transformative power of healing through the words of our global community.
              </p>
            </div>

            <div className="relative">
              <Card className="overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                    </div>

                    <div className="flex-grow text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-accent fill-current" />
                        ))}
                      </div>

                      <Quote className="w-8 h-8 text-primary/30 mb-4 mx-auto md:mx-0" />

                      <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                        "{testimonials[currentTestimonial].testimonial}"
                      </blockquote>

                      <div className="space-y-2">
                        <h4 className="font-serif font-bold text-xl text-primary">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{testimonials[currentTestimonial].location}</span>
                          </div>
                          <Badge variant="secondary">{testimonials[currentTestimonial].service}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{testimonials[currentTestimonial].date}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex justify-center space-x-4 mt-8">
                <Button variant="outline" size="sm" onClick={prevTestimonial}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <div className="flex space-x-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
                <Button variant="outline" size="sm" onClick={nextTestimonial}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">More Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Read testimonials from our global community of students and clients who have experienced profound
                transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-grow">
                        <CardTitle className="font-serif text-lg">{testimonial.name}</CardTitle>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-accent fill-current" />
                        ))}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.service}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed line-clamp-4">
                      "{testimonial.testimonial}"
                    </CardDescription>
                    <p className="text-xs text-muted-foreground mt-4">{testimonial.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Share Your Story */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center glow-effect">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif text-2xl">Share Your Healing Journey</CardTitle>
                <CardDescription className="text-base">
                  Have you experienced transformation through our services? We'd love to hear your story and inspire
                  others on their healing path.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Share Your Story
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="tel:8980416700">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 spiritual-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join thousands of people worldwide who have transformed their lives through Reiki healing and spiritual
              guidance. Your journey to wellness and enlightenment begins with a single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link href="/services">
                  <Heart className="w-5 h-5 mr-2" />
                  Book Your First Session
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/courses">
                  <Users className="w-5 h-5 mr-2" />
                  Join Our Courses
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
