import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Calendar, User, Play, Heart, Sparkles, Clock, ArrowRight, Youtube } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Understanding the Seven Chakras: A Complete Guide",
      excerpt:
        "Discover the ancient wisdom of the chakra system and learn how to balance your energy centers for optimal health and spiritual growth.",
      author: "Grand Master Tarun Kumar Jani",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Spiritual Knowledge",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Chakras", "Energy Healing", "Meditation"],
    },
    {
      title: "The Power of Distance Reiki: Healing Beyond Physical Boundaries",
      excerpt:
        "Learn how Reiki energy transcends time and space, allowing healers to provide effective treatment regardless of physical distance.",
      author: "Grand Master Tarun Kumar Jani",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Reiki Techniques",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Distance Healing", "Reiki", "Energy Work"],
    },
    {
      title: "369 Manifestation Method: Unlocking Universal Abundance",
      excerpt:
        "Explore the sacred numerology behind the 369 method and discover how to manifest your desires using Tesla's divine numbers.",
      author: "Grand Master Tarun Kumar Jani",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Manifestation",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Manifestation", "Sacred Numbers", "Law of Attraction"],
    },
    {
      title: "Past Life Regression: Healing Karmic Patterns",
      excerpt:
        "Understand how past life experiences influence your current life and learn techniques to heal ancient wounds and karmic debts.",
      author: "Grand Master Tarun Kumar Jani",
      date: "November 28, 2024",
      readTime: "12 min read",
      category: "Spiritual Healing",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Past Life", "Karma", "Spiritual Healing"],
    },
    {
      title: "Daily Meditation Practices for Spiritual Growth",
      excerpt:
        "Simple yet powerful meditation techniques that can transform your daily life and accelerate your spiritual evolution.",
      author: "Grand Master Tarun Kumar Jani",
      date: "November 20, 2024",
      readTime: "7 min read",
      category: "Meditation",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Meditation", "Daily Practice", "Mindfulness"],
    },
    {
      title: "The Science Behind Reiki: Energy Healing Explained",
      excerpt:
        "Explore the scientific principles that support Reiki healing and understand how universal life energy affects our physical and emotional well-being.",
      author: "Grand Master Tarun Kumar Jani",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "Reiki Science",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Reiki Science", "Energy Medicine", "Research"],
    },
  ]

  const featuredVideos = [
    {
      title: "Introduction to Reiki Healing",
      description: "Learn the basics of Reiki healing and how it can transform your life",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "15:30",
    },
    {
      title: "Chakra Balancing Meditation",
      description: "Guided meditation to balance and align your seven chakras",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "22:45",
    },
    {
      title: "369 Manifestation Technique",
      description: "Step-by-step guide to manifesting with sacred numbers",
      thumbnail: "/placeholder.svg?height=200&width=350",
      duration: "18:20",
    },
  ]

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
              Spiritual Knowledge
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 float-animation">
              Blog & Knowledge Center
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Discover ancient wisdom, modern healing techniques, and spiritual insights to guide your journey toward
              enlightenment and wellness.
            </p>
          </div>
        </section>

        {/* Featured YouTube Videos */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Featured Video Teachings</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn directly from Grand Master Tarun Kumar Jani through our comprehensive video library covering all
                aspects of spiritual healing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredVideos.map((video, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-serif text-lg">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="https://www.youtube.com/@TarunkumarJaniReikiGrandMaster" target="_blank">
                  <Youtube className="w-5 h-5 mr-2" />
                  Visit Our YouTube Channel
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Latest Articles</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of spiritual wisdom, healing techniques, and transformational insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-primary-foreground">{post.category}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="font-serif text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read More
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center glow-effect">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif text-2xl">Stay Connected with Spiritual Wisdom</CardTitle>
                <CardDescription className="text-base">
                  Subscribe to receive the latest articles, healing insights, and spiritual guidance directly in your
                  inbox.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button>
                    <Heart className="w-4 h-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 spiritual-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Deepen Your Spiritual Journey</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Ready to transform knowledge into experience? Join our courses and healing sessions to embody the wisdom
              you've learned.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link href="/courses">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Courses
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/services">
                  <Heart className="w-5 h-5 mr-2" />
                  Book a Session
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
