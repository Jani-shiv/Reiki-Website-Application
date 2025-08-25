import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, Globe, Users, Star, Award, BookOpen, Sparkles, Play } from "lucide-react"
import { FlagCarousel } from "./FlagCarousel"

export default function AboutPage() {
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
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 float-animation">
              About Shivshankar Reiki Seva Abhiyan
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              A global movement dedicated to spreading the ancient wisdom of Reiki healing and spiritual transformation
              across continents.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Our Sacred Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Shivshankar Reiki Seva Abhiyan was founded with a divine purpose: to make the healing power of Reiki
                  accessible to every soul seeking wellness, peace, and spiritual growth. Our organization serves as a
                  bridge between ancient wisdom and modern healing needs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We believe that every person deserves to experience the transformative energy of Reiki, regardless of
                  their location, background, or circumstances. Through our global network of certified practitioners
                  and comprehensive training programs, we continue to spread light and healing across the world.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="text-sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Compassionate Healing
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Globe className="w-4 h-4 mr-2" />
                    Global Outreach
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Spiritual Growth
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <FlagCarousel />
                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">18+ Countries</h3>
                    <p className="text-muted-foreground">Spreading healing worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grand Master Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Meet Our Reiki Grand Master
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn about the spiritual journey and wisdom of Grand Master Tarun Kumar Jani, who guides our global
                healing mission.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3">Tarun Kumar Jani</h3>
                    <p className="text-accent font-semibold mb-4">Reiki Grand Master & Spiritual Guide</p>
                    <p className="text-muted-foreground leading-relaxed">
                      With decades of dedicated practice and teaching, Grand Master Tarun Kumar Jani has become a beacon
                      of light for thousands of students and practitioners worldwide. His journey began with a personal
                      quest for healing and evolved into a divine calling to serve humanity.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-2">
                          <Award className="w-5 h-5 text-primary" />
                          <CardTitle className="text-lg">Certifications</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Grand Master level certification in multiple Reiki traditions and healing modalities.
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-2">
                          <Users className="w-5 h-5 text-primary" />
                          <CardTitle className="text-lg">Students Trained</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Over 10,000 students trained across different levels of Reiki mastery worldwide.
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-5 h-5 text-primary" />
                          <CardTitle className="text-lg">Teaching Experience</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>25+ years of dedicated teaching and healing practice.</CardDescription>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 text-primary" />
                          <CardTitle className="text-lg">Specializations</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Reiki, Meditation, Past Life Regression, Dowsing, and Manifestation techniques.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="pt-4">
                    <Button asChild size="lg">
                      <Link href="https://www.youtube.com/@TarunkumarJaniReikiGrandMaster" target="_blank">
                        <Play className="w-5 h-5 mr-2" />
                        Watch Grand Master's Teachings
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center glow-effect">
                        <Star className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary">Grand Master</h3>
                      <p className="text-muted-foreground">Tarun Kumar Jani</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Spiritual Journey</h2>
              <p className="text-lg text-muted-foreground">
                From humble beginnings to global impact - the evolution of our healing mission.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  year: "Early Years",
                  title: "Foundation of Purpose",
                  description:
                    "Grand Master Tarun Kumar Jani began his spiritual journey, discovering the profound healing power of Reiki through personal transformation.",
                },
                {
                  year: "Growth Phase",
                  title: "Building the Community",
                  description:
                    "Established the first Reiki healing center and began training dedicated practitioners, creating a foundation for global expansion.",
                },
                {
                  year: "Global Expansion",
                  title: "International Outreach",
                  description:
                    "Extended healing services across multiple countries, establishing Shivshankar Reiki Seva Abhiyan as a recognized global organization.",
                },
                {
                  year: "Present Day",
                  title: "Digital Age Healing",
                  description:
                    "Embracing technology to reach more souls through online courses, virtual healing sessions, and digital spiritual guidance.",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full spiritual-gradient flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                      <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">{milestone.year}</Badge>
                      <h3 className="text-xl font-serif font-bold text-primary mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 spiritual-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Join Our Global Healing Family</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Become part of a worldwide community dedicated to healing, growth, and spiritual transformation.
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
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Courses
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
