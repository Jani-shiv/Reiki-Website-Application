import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, Globe, Users, Sparkles, Play, ArrowRight, Star, Zap, Brain, Eye, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        <section className="relative min-h-screen flex items-center justify-center spiritual-gradient overflow-hidden">
          {/* Animated background elements */}
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
            <div
              className="absolute bottom-20 right-10 w-2 h-2 bg-white rounded-full sparkle-effect opacity-70"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30 float-animation">
              Global Reiki Healing Organization
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 float-animation">
              Shivshankar Reiki
              <span className="block text-accent">Seva Abhiyan</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Spreading spiritual knowledge and healing energy across 15+ countries worldwide
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground glow-effect">
                <Heart className="w-5 h-5 mr-2" />
                Start Your Healing Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="https://www.youtube.com/@TarunkumarJaniReikiGrandMaster" target="_blank">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Our Channel
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>15+ Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Thousands Healed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>Grand Master Certified</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Welcome to Our Spiritual Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Shivshankar Reiki Seva Abhiyan is a global organization dedicated to spreading the ancient art of Reiki
                healing. Under the guidance of Reiki Grand Master Tarun Kumar Jani, we have touched lives across
                continents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif">Healing Energy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Experience the transformative power of Reiki healing energy that flows through trained practitioners
                    to promote wellness and balance.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif">Global Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our healing services and courses are available across 15+ countries, making spiritual wellness
                    accessible worldwide.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif">Spiritual Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Learn ancient techniques for meditation, manifestation, and spiritual development through our
                    comprehensive courses.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Healing Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our range of spiritual healing and wellness services designed to restore balance and promote
                inner peace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Reiki Healing",
                  description:
                    "Traditional hands-on healing technique to channel universal life energy for physical and emotional wellness.",
                },
                {
                  icon: Brain,
                  title: "Meditation",
                  description: "Guided meditation sessions to achieve inner peace, clarity, and spiritual connection.",
                },
                {
                  icon: Zap,
                  title: "Dowsing",
                  description: "Ancient divination technique to locate energy fields and spiritual guidance.",
                },
                {
                  icon: Sparkles,
                  title: "369 Manifestation",
                  description:
                    "Powerful manifestation technique based on sacred numbers to attract abundance and success.",
                },
                {
                  icon: Eye,
                  title: "Past Life Regression",
                  description:
                    "Therapeutic technique to explore past lives and heal karmic patterns affecting current life.",
                },
                {
                  icon: Clock,
                  title: "Spiritual Counseling",
                  description:
                    "Personalized guidance for spiritual growth and overcoming life challenges through divine wisdom.",
                },
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/services">
                  Explore All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Reiki Learning Path</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Begin your journey from beginner to Grand Master with our structured Reiki courses designed for all
                levels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  level: "Level 1 & 2",
                  title: "Foundation",
                  description: "Learn basic Reiki principles and self-healing techniques",
                },
                {
                  level: "Level 3",
                  title: "Advanced",
                  description: "Master advanced symbols and distance healing methods",
                },
                {
                  level: "Master",
                  title: "Teacher",
                  description: "Become certified to teach and attune others to Reiki",
                },
                {
                  level: "Grand Master",
                  title: "Expert",
                  description: "Achieve the highest level of Reiki mastery and wisdom",
                },
              ].map((course, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <Badge className="mx-auto mb-3 bg-primary/10 text-primary border-primary/20">{course.level}</Badge>
                    <CardTitle className="font-serif">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{course.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/courses">
                  View All Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 spiritual-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Learn from Grand Master Tarun Kumar Jani
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Subscribe to our YouTube channel for free Reiki lessons, meditation guides, and spiritual wisdom shared
                by our Grand Master.
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center glow-effect">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Tarun Kumar Jani Reiki Grand Master</h3>
                <p className="text-lg opacity-90 mb-6">
                  Access hundreds of free videos on Reiki healing, spiritual guidance, and meditation techniques.
                </p>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                  <Link href="https://www.youtube.com/@TarunkumarJaniReikiGrandMaster" target="_blank">
                    <Play className="w-5 h-5 mr-2" />
                    Visit YouTube Channel
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of people worldwide who have experienced the transformative power of Reiki healing. Contact
              us today to schedule your first session or learn about our courses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Heart className="w-5 h-5 mr-2" />
                  Book a Session
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:8980416700">
                  <span className="w-5 h-5 mr-2">📞</span>
                  Call 8980416700
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
