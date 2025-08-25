"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Youtube } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Courses", href: "/courses" },
  { name: "Blog", href: "/blog" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full spiritual-gradient flex items-center justify-center glow-effect transition-all duration-300 group-hover:scale-110 overflow-hidden">
              <img
                src="/channels4_profile.jpg"
                alt="Shivshankar Reiki Logo"
                className="w-8 h-8 object-contain rounded-full"
                style={{ minWidth: 24, minHeight: 24 }}
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif font-bold text-lg text-primary transition-colors duration-300">
                Shivshankar Reiki
              </h1>
              <p className="text-xs text-muted-foreground transition-colors duration-300">Seva Abhiyan</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 relative group ${
                  pathname === item.href ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info & Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
              >
                <Link href="tel:8980416700">
                  <Phone className="w-4 h-4 mr-2" />
                  8980416700
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="transition-all duration-300 hover:scale-105 hover:shadow-md bg-transparent"
              >
                <Link href="https://www.youtube.com/@TarunkumarJaniReikiGrandMaster" target="_blank">
                  <Youtube className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden transition-all duration-300 hover:scale-110"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2 border border-border/50">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 hover:text-primary hover:bg-primary/5 rounded-md ${
                    pathname === item.href ? "text-primary bg-primary/10" : "text-foreground"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-2 px-3 py-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="tel:8980416700">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="https://www.youtube.com/@TarunkumarJaniReikiGrandMaster" target="_blank">
                    <Youtube className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
