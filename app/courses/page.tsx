import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Heart,
  Star,
  BookOpen,
  Users,
  Clock,
  Award,
  CheckCircle,
  Sparkles,
  Crown,
  Zap,
  Phone,
  ArrowRight,
  Globe,
} from "lucide-react"

export default function CoursesPage() {
  const courses = [
    {
      level: "Level 1 & 2",
      title: "Reiki Foundation",
      subtitle: "Begin Your Healing Journey",
      icon: Heart,
      duration: "2-3 Days",
      students: "Beginner Friendly",
      price: "Contact for Pricing",
      description:
        "Start your Reiki journey with our comprehensive foundation course covering both Level 1 and Level 2 teachings. Learn the fundamental principles of Reiki, hand positions, self-healing techniques, and how to channel healing energy for others.",
      highlights: [
        "History and principles of Reiki healing",
        "Four traditional Reiki attunements",
        "Hand positions for self and others",
        "Reiki symbols and their meanings",
        "Distance healing techniques",
        "Chakra balancing and energy work",
        "Creating sacred healing space",
        "Ethics and responsibilities of a healer",
      ],
      outcomes: [
        "Ability to perform Reiki healing on self and others",
        "Understanding of energy flow and chakra system",
        "Confidence in using Reiki symbols",
        "Skills for distance healing sessions",
        "Foundation for advanced Reiki practice",
      ],
      certification: "Reiki Level 1 & 2 Certificate",
      gradient: "from-pink-500/20 to-purple-500/20",
    },
    {
      level: "Level 3",
      title: "Advanced Reiki",
      subtitle: "Deepen Your Practice",
      icon: Zap,
      duration: "3-4 Days",
      students: "Level 2 Required",
      price: "Contact for Pricing",
      description:
        "Advance your Reiki practice with Level 3 training, focusing on the Master symbol, advanced healing techniques, and spiritual development. This course prepares you for deeper healing work and personal transformation.",
      highlights: [
        "Master symbol (Dai Ko Myo) attunement",
        "Advanced healing techniques and protocols",
        "Psychic surgery and energy extraction",
        "Crystal and gemstone healing integration",
        "Meditation and spiritual development",
        "Working with spirit guides and angels",
        "Advanced distance healing methods",
        "Healing trauma and emotional blocks",
      ],
      outcomes: [
        "Mastery of advanced Reiki techniques",
        "Ability to perform complex healing sessions",
        "Enhanced intuitive and psychic abilities",
        "Deeper spiritual connection and awareness",
        "Skills for specialized healing work",
      ],
      certification: "Reiki Level 3 (Advanced) Certificate",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      level: "Master",
      title: "Reiki Master",
      subtitle: "Become a Teacher",
      icon: Award,
      duration: "5-7 Days",
      students: "Level 3 Required",
      price: "Contact for Pricing",
      description:
        "Become a certified Reiki Master with the ability to teach and attune others. This comprehensive course covers teaching methodologies, attunement processes, and the responsibilities of a Reiki Master.",
      highlights: [
        "Master attunement and empowerment",
        "Learning to perform attunements on others",
        "Teaching methodologies and course design",
        "Creating healing circles and groups",
        "Business aspects of Reiki practice",
        "Advanced spiritual development",
        "Working with different healing modalities",
        "Mentoring and supporting students",
      ],
      outcomes: [
        "Authority to teach Reiki to others",
        "Ability to perform all levels of attunements",
        "Skills to establish Reiki practice or center",
        "Deep understanding of energy healing",
        "Leadership in the healing community",
      ],
      certification: "Reiki Master Teacher Certificate",
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      level: "Grand Master",
      title: "Reiki Grand Master",
      subtitle: "Achieve Mastery",
      icon: Crown,
      duration: "7-10 Days",
      students: "Master Level Required",
      price: "Contact for Pricing",
      description:
        "Reach the pinnacle of Reiki mastery with Grand Master certification. This exclusive program is designed for dedicated practitioners ready to embody the highest levels of healing wisdom and spiritual leadership.",
      highlights: [
        "Grand Master attunement and initiation",
        "Advanced spiritual teachings and wisdom",
        "Creating new Reiki lineages and systems",
        "International teaching and certification",
        "Research and development in energy healing",
        "Spiritual counseling and guidance",
        "Working with ascended masters",
        "Global healing mission and service",
      ],
      outcomes: [
        "Highest level of Reiki certification",
        "Authority to create teaching lineages",
        "Global recognition as healing expert",
        "Ability to innovate healing techniques",
        "Leadership in spiritual community",
      ],
      certification: "Reiki Grand Master Certificate",
      gradient: "from-violet-500/20 to-purple-600/20",
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
              Reiki Training
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 float-animation">
              Reiki Courses & Certification
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Transform your life and help others heal through our comprehensive Reiki training programs, from beginner
              to Grand Master level.
            </p>
          </div>
        </section>

        {/* Learning Path Overview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Your Reiki Learning Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our structured learning path takes you from complete beginner to Grand Master level, with each course
                building upon the previous knowledge and skills. Join thousands of certified practitioners worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-primary/10 text-primary border-primary/20">{course.level}</Badge>
                      <div className="w-12 h-12 rounded-full spiritual-gradient flex items-center justify-center glow-effect">
                        <course.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="font-serif text-xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-accent font-medium">{course.subtitle}</CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="flex items-center text-muted-foreground">
                            <Clock className="w-3 h-3 mr-1" />
                            {course.duration}
                          </span>
                          <span className="flex items-center text-muted-foreground">
                            <Users className="w-3 h-3 mr-1" />
                            {course.students}
                          </span>
                        </div>
                        <div className="text-center">
                          <span className="text-sm font-semibold text-primary">{course.price}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-transparent" variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Course Information */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Course Details</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the comprehensive curriculum and learning outcomes for each level of Reiki training.
              </p>
            </div>

            <div className="space-y-20">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-xl spiritual-gradient flex items-center justify-center glow-effect">
                          <course.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">{course.level}</Badge>
                          <h3 className="text-2xl font-serif font-bold text-primary">{course.title}</h3>
                          <p className="text-accent font-medium">{course.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{course.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="bg-card rounded-lg p-4">
                          <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                          <p className="text-sm font-medium">{course.duration}</p>
                          <p className="text-xs text-muted-foreground">Duration</p>
                        </div>
                        <div className="bg-card rounded-lg p-4">
                          <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                          <p className="text-sm font-medium">{course.students}</p>
                          <p className="text-xs text-muted-foreground">Prerequisites</p>
                        </div>
                        <div className="bg-card rounded-lg p-4">
                          <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                          <p className="text-sm font-medium">Certificate</p>
                          <p className="text-xs text-muted-foreground">Included</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-serif font-semibold text-lg text-primary mb-3">Course Highlights</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {course.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-serif font-semibold text-lg text-primary mb-3">Learning Outcomes</h4>
                        <div className="space-y-2">
                          {course.outcomes.map((outcome, outcomeIndex) => (
                            <div key={outcomeIndex} className="flex items-start space-x-2">
                              <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button size="lg" asChild>
                          <Link href="/contact">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Enroll in {course.title}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="relative">
                      <div
                        className={`w-full h-96 bg-gradient-to-br ${course.gradient} rounded-2xl flex items-center justify-center`}
                      >
                        <div className="text-center">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center glow-effect">
                            <course.icon className="w-12 h-12 text-white" />
                          </div>
                          <h4 className="text-xl font-serif font-bold text-primary mb-2">{course.title}</h4>
                          <p className="text-muted-foreground">{course.certification}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Information */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Ready to Begin?</h2>
              <p className="text-lg text-muted-foreground">
                Join our global community of Reiki practitioners and start your journey toward becoming a certified
                healer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Global Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our courses are available in 15+ countries with both in-person and online options to accommodate
                    your schedule and location.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Internationally Recognized
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Receive certificates recognized worldwide, allowing you to practice and teach Reiki professionally
                    anywhere.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Heart className="w-5 h-5 mr-2" />
                    Enroll Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:8980416700">
                    <Phone className="w-5 h-5 mr-2" />
                    Call for Information
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 spiritual-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Transform Lives Through Healing</h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Become part of a global movement of healers dedicated to bringing peace, wellness, and spiritual growth to
              the world. Your journey as a Reiki practitioner starts here.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/contact">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your Reiki Journey Today
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
