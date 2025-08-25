"use client"
import React, { useEffect, useState } from "react"

// List of 18 country codes (ISO 3166-1 alpha-2), always include India (IN)
const FLAGS = [
  { code: "IN", name: "India" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "BR", name: "Brazil" },
  { code: "ZA", name: "South Africa" },
  { code: "RU", name: "Russia" },
  { code: "JP", name: "Japan" },
  { code: "SG", name: "Singapore" },
  { code: "AE", name: "UAE" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "TH", name: "Thailand" },
  { code: "NZ", name: "New Zealand" },
]

// Try to use local flag images from /public/flags/IN.png, fallback to flagcdn.com
function getFlagUrl(code: string) {
  return `/flags/${code}.png`
}

export const FlagCarousel: React.FC = () => {
  const [start, setStart] = useState(0)
  const visibleCount = 7
  useEffect(() => {
    const interval = setInterval(() => {
      setStart((prev) => (prev + 1) % FLAGS.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])
  // Show a slice of flags, wrap around
  const flagsToShow = Array.from({ length: visibleCount }, (_, i) => FLAGS[(start + i) % FLAGS.length])
  return (
    <div className="flex justify-center items-center gap-2 mb-4">
      {flagsToShow.map((flag) => (
        <div key={flag.code} className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary bg-white flex items-center justify-center shadow-md">
          <img
            src={getFlagUrl(flag.code)}
            alt={flag.name + ' flag'}
            className="w-full h-full object-cover"
            onError={(e) => {
              // fallback to flagcdn if local not found
              (e.currentTarget as HTMLImageElement).src = `https://flagcdn.com/w80/${flag.code.toLowerCase()}.png`
            }}
          />
        </div>
      ))}
    </div>
  )
}