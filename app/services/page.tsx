import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, Brain, Zap, Sparkles, Eye, Clock, Users, Star, Phone, CheckCircle, Globe } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Heart,
      title: "Reiki Healing",
      shortDesc: "Traditional hands-on healing technique",
      fullDesc:
        "Experience the profound healing power of universal life energy through traditional Reiki techniques. Our certified practitioners channel healing energy to promote physical, emotional, and spiritual wellness. This gentle yet powerful healing method helps restore balance, reduce stress, and accelerate the body's natural healing processes.",
      benefits: [
        "Reduces stress and promotes deep relaxation",
        "Accelerates physical healing and recovery",
        "Balances emotional and mental states",
        "Enhances spiritual connection and awareness",
        "Boosts immune system function",
        "Improves sleep quality and energy levels",
      ],
      duration: "60-90 minutes",
      availability: "In-person & Distance healing",
    },
    {
      icon: Brain,
      title: "Meditation Guidance",
      shortDesc: "Guided meditation for inner peace",
      fullDesc:
        "Discover the transformative power of meditation through our guided sessions designed for all levels. Learn various meditation techniques including mindfulness, chakra meditation, and spiritual visualization. Our experienced guides help you develop a sustainable practice that brings clarity, peace, and spiritual growth.",
      benefits: [
        "Develops mental clarity and focus",
        "Reduces anxiety and emotional turbulence",
        "Enhances spiritual awareness and intuition",
        "Improves emotional regulation and resilience",
        "Deepens connection with inner wisdom",
        "Cultivates lasting inner peace",
      ],
      duration: "30-60 minutes",
      availability: "Group & Individual sessions",
    },
    {
      icon: Zap,
      title: "Dowsing",
      shortDesc: "Ancient divination and energy detection",
      fullDesc:
        "Explore the ancient art of dowsing to locate energy fields, water sources, and receive spiritual guidance. This time-honored practice uses pendulums and dowsing rods to tap into subtle energies and divine wisdom. Learn to access your intuitive abilities and receive guidance on important life decisions.",
      benefits: [
        "Develops intuitive and psychic abilities",
        "Provides guidance for important decisions",
        "Locates energy blockages and imbalances",
        "Enhances connection with higher wisdom",
        "Improves problem-solving capabilities",
        "Strengthens spiritual discernment",
      ],
      duration: "45-75 minutes",
      availability: "Individual consultations",
    },
    {
      icon: Sparkles,
      title: "369 Manifestation",
      shortDesc: "Sacred number manifestation technique",
      fullDesc:
        "Harness the power of sacred numerology with the 369 manifestation technique based on Nikola Tesla's understanding of universal patterns. This powerful method combines intention setting, visualization, and the vibrational power of numbers to attract abundance, success, and desired outcomes into your life.",
      benefits: [
        "Accelerates manifestation of goals and desires",
        "Aligns with universal energy patterns",
        "Enhances focus and intention clarity",
        "Attracts abundance and opportunities",
        "Develops manifestation skills and confidence",
        "Creates positive life transformations",
      ],
      duration: "60 minutes",
      availability: "Workshops & Individual coaching",
    },
    {
      icon: Eye,
      title: "Past Life Regression",
      shortDesc: "Explore past lives for healing",
      fullDesc:
        "Journey into your soul's history through guided past life regression sessions. This therapeutic technique helps you explore previous incarnations to understand current life patterns, heal karmic wounds, and release limiting beliefs. Gain profound insights into your soul's purpose and spiritual evolution.",
      benefits: [
        "Heals unexplained fears and phobias",
        "Resolves relationship patterns and conflicts",
        "Releases karmic blocks and limitations",
        "Provides insight into life purpose and talents",
        "Heals trauma from past experiences",
        "Enhances spiritual understanding and growth",
      ],
      duration: "90-120 minutes",
      availability: "Individual sessions only",
    },
    {
      icon: Clock,
      title: "Spiritual Counseling",
      shortDesc: "Personalized spiritual guidance",
      fullDesc:
        "Receive personalized spiritual guidance and counseling to navigate life's challenges with divine wisdom. Our experienced counselors combine spiritual insights with practical advice to help you overcome obstacles, make important decisions, and align with your highest path and purpose.",
      benefits: [
        "Provides clarity on life direction and purpose",
        "Offers spiritual perspective on challenges",
        "Develops spiritual tools and practices",
        "Enhances connection with divine guidance",
        "Supports personal and spiritual growth",
        "Creates lasting positive life changes",
      ],
      duration: "60 minutes",
      availability: "Individual & Couple sessions",
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
              Healing Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 float-animation">
              Our Spiritual Healing Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Discover our comprehensive range of healing modalities designed to restore balance, promote wellness, and
              accelerate your spiritual growth.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Comprehensive Healing Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Each service is carefully designed to address different aspects of your well-being, from physical
                healing to spiritual awakening. Our experienced practitioners guide you through transformative
                experiences tailored to your unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                >
                  <CardHeader>
                    <div className="w-16 h-16 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.shortDesc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.fullDesc}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {service.duration}
                        </span>
                        <span className="flex items-center">
                          <Globe className="w-3 h-3 mr-1" />
                          {service.availability}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Information */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Service Benefits</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each healing service offers unique benefits designed to support your holistic well-being and spiritual
                evolution.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-primary">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.fullDesc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="relative">
                      <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center glow-effect">
                            <service.icon className="w-12 h-12 text-white" />
                          </div>
                          <h4 className="text-xl font-serif font-bold text-primary mb-2">{service.title}</h4>
                          <p className="text-muted-foreground text-sm">{service.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Information */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">How to Book a Session</h2>
              <p className="text-lg text-muted-foreground">
                Ready to begin your healing journey? Here's how to schedule your personalized session.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <CardTitle className="font-serif">Choose Your Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Select the healing service that resonates with your current needs and spiritual goals.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <CardTitle className="font-serif">Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Reach out via phone or contact form to discuss your needs and schedule your session.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <CardTitle className="font-serif">Begin Healing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Attend your session and begin your transformative healing journey with our expert practitioners.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Heart className="w-5 h-5 mr-2" />
                    Book Your Session
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:8980416700">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 8980416700
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 spiritual-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Experience the Power of Spiritual Healing
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join thousands of people worldwide who have transformed their lives through our healing services. Your
              journey to wellness and spiritual awakening begins with a single step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link href="/contact">
                  <Star className="w-5 h-5 mr-2" />
                  Start Your Healing Journey
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/testimonials">
                  <Users className="w-5 h-5 mr-2" />
                  Read Success Stories
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
