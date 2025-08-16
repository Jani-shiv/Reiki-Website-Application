import Link from "next/link"
import { Phone, Youtube, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg font-serif">S</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Shivshankar Reiki</h3>
                <p className="text-sm opacity-90">Seva Abhiyan</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Global Reiki healing organization spreading spiritual knowledge and healing across 15+ countries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {["About Us", "Services", "Courses", "Testimonials"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Services</h4>
            <div className="space-y-2">
              {["Reiki Healing", "Meditation", "Dowsing", "369 Manifestation", "Past Life Regression"].map(
                (service) => (
                  <p key={service} className="text-sm opacity-90">
                    {service}
                  </p>
                ),
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">8980416700</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Global Presence</span>
              </div>
              <Button variant="secondary" size="sm" asChild>
                <Link href="https://www.youtube.com/@TarunkumarJaniReikiGrandMaster" target="_blank">
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube Channel
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent" />
            <span>for spiritual healing • © 2024 Shivshankar Reiki Seva Abhiyan</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
