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


// Always use online flag images from flagcdn.com
function getFlagUrl(code: string) {
  return `https://flagcdn.com/w80/${code.toLowerCase()}.png`
}

export const FlagCarousel: React.FC = () => {
  const [angle, setAngle] = useState(0)
  const flagCount = FLAGS.length
  const visibleCount = 5 // show fewer flags for better focus
  const radius = 120 // increased radius for better depth

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev - (360 / flagCount))
    }, 2200) // slower rotation for better visibility
    return () => clearInterval(interval)
  }, [flagCount])

  // 3D carousel effect: main flag in front, others behind
  return (
    <div className="relative w-80 h-32 mx-auto mb-4" style={{ perspective: 1000 }}>
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          transform: `translate(-50%, -50%) rotateY(${angle}deg)`,
          transformStyle: 'preserve-3d',
          width: '100%',
          height: '100%',
        }}
      >
        {FLAGS.map((flag, i) => {
          const theta = (360 / flagCount) * i
          const rel = (i - Math.round((-angle / (360 / flagCount))) + flagCount) % flagCount
          
          // Only show visibleCount flags around the main one
          if (rel > Math.floor(visibleCount / 2) && rel < flagCount - Math.floor(visibleCount / 2)) return null
          
          const isFront = rel === 0
          const isNearFront = rel === 1 || rel === flagCount - 1
          
          // Calculate size and opacity based on position
          let scale = 0.7
          let opacity = 0.4
          let zIndex = 0
          let blur = 2
          
          if (isFront) {
            scale = 1.4 // main flag much larger
            opacity = 1
            zIndex = 10
            blur = 0
          } else if (isNearFront) {
            scale = 0.9 // side flags medium
            opacity = 0.7
            zIndex = 5
            blur = 1
          }
          
          return (
            <div
              key={flag.code}
              className="absolute left-1/2 top-1/2 w-16 h-16 rounded-full overflow-hidden border-2 border-primary bg-white flex items-center justify-center shadow-lg"
              style={{
                transform: `rotateY(${theta}deg) translateZ(${radius}px) translate(-50%, -50%) scale(${scale})`,
                opacity,
                zIndex,
                filter: blur > 0 ? `blur(${blur}px)` : 'none',
                boxShadow: isFront 
                  ? '0 0 25px 5px rgba(234, 179, 8, 0.6), 0 8px 32px rgba(0,0,0,0.3)' 
                  : '0 4px 12px rgba(0,0,0,0.2)',
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                border: isFront ? '3px solid #eab308' : '2px solid #94a3b8',
              }}
            >
              <img
                src={getFlagUrl(flag.code)}
                alt={flag.name + ' flag'}
                className="w-full h-full object-cover"
                draggable={false}
                style={{
                  filter: isFront ? 'saturate(1.2) brightness(1.1)' : 'saturate(0.8)',
                }}
              />
              {isFront && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-primary whitespace-nowrap">
                  {flag.name}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}