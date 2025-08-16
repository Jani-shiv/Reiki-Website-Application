"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, Heart, Sparkles, Camera } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Healing Sessions", "Courses", "Events", "Ceremonies", "Global Outreach"]

  const galleryItems = [
    {
      id: 1,
      title: "Reiki Healing Session in New York",
      category: "Healing Sessions",
      location: "New York, USA",
      date: "December 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Grand Master Tarun conducting a powerful healing session with a client in New York.",
    },
    {
      id: 2,
      title: "Reiki Master Course Graduation",
      category: "Courses",
      location: "London, UK",
      date: "November 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Celebrating new Reiki Masters after completing their certification course.",
    },
    {
      id: 3,
      title: "Global Healing Circle",
      category: "Events",
      location: "Mumbai, India",
      date: "October 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Monthly global healing circle with participants from around the world.",
    },
    {
      id: 4,
      title: "Chakra Balancing Workshop",
      category: "Courses",
      location: "Sydney, Australia",
      date: "September 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Interactive workshop teaching chakra balancing techniques to students.",
    },
    {
      id: 5,
      title: "Sacred Ceremony in Himalayas",
      category: "Ceremonies",
      location: "Himalayas, India",
      date: "August 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Annual sacred ceremony conducted in the spiritual energy of the Himalayas.",
    },
    {
      id: 6,
      title: "Distance Healing Demonstration",
      category: "Healing Sessions",
      location: "Toronto, Canada",
      date: "July 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Demonstrating the power of distance Reiki healing to a group of practitioners.",
    },
    {
      id: 7,
      title: "Youth Reiki Program",
      category: "Global Outreach",
      location: "Barcelona, Spain",
      date: "June 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Teaching Reiki healing techniques to young people in Barcelona.",
    },
    {
      id: 8,
      title: "Grand Master Attunement Ceremony",
      category: "Ceremonies",
      location: "Tokyo, Japan",
      date: "May 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Sacred Grand Master attunement ceremony for advanced practitioners.",
    },
    {
      id: 9,
      title: "Healing Center Opening",
      category: "Events",
      location: "Dubai, UAE",
      date: "April 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Grand opening of our new healing center in Dubai with local community.",
    },
    {
      id: 10,
      title: "Past Life Regression Session",
      category: "Healing Sessions",
      location: "Rome, Italy",
      date: "March 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Individual past life regression session helping client heal karmic patterns.",
    },
    {
      id: 11,
      title: "International Reiki Conference",
      category: "Events",
      location: "Paris, France",
      date: "February 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Annual international conference bringing together Reiki practitioners worldwide.",
    },
    {
      id: 12,
      title: "Community Healing Day",
      category: "Global Outreach",
      location: "São Paulo, Brazil",
      date: "January 2024",
      image: "/placeholder.svg?height=400&width=600",
      description: "Free community healing day providing Reiki sessions to those in need.",
    },
  ]

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredItems.length) % filteredItems.length)
    }
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
              Visual Journey
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 float-animation">
              Gallery & Events
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Explore moments of transformation, healing, and spiritual growth captured from our global community
              events, courses, and healing sessions.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Camera className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-primary-foreground">{item.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-serif font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={filteredItems[selectedImage].image || "/placeholder.svg"}
                alt={filteredItems[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="text-white">
                  <Badge className="mb-2 bg-primary/90 text-primary-foreground">
                    {filteredItems[selectedImage].category}
                  </Badge>
                  <h3 className="text-xl font-serif font-bold mb-2">{filteredItems[selectedImage].title}</h3>
                  <p className="text-sm opacity-90 mb-3">{filteredItems[selectedImage].description}</p>
                  <div className="flex items-center space-x-4 text-xs opacity-80">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{filteredItems[selectedImage].location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{filteredItems[selectedImage].date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Global Impact</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These moments represent thousands of lives touched by healing energy across the globe.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center glow-effect">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Events Conducted</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center glow-effect">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center glow-effect">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center glow-effect">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years of Service</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 spiritual-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Be Part of Our Next Chapter</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join our global community and create your own transformation story. Every healing session, every course,
              every moment of growth becomes part of our collective journey toward wellness and enlightenment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link href="/contact">
                  <Heart className="w-5 h-5 mr-2" />
                  Start Your Journey
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
                  Join Our Community
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
