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
  const visibleCount = 7 // how many flags to show in the arc
  const radius = 90 // px, radius of the 3D arc

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev - (360 / flagCount))
    }, 1800)
    return () => clearInterval(interval)
  }, [flagCount])

  // 3D carousel effect: arrange flags in a circle and rotate
  return (
    <div className="relative w-64 h-28 mx-auto mb-4" style={{ perspective: 600 }}>
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
          // Only render visibleCount flags for performance
          const rel = (i - Math.round((-angle / (360 / flagCount))) + flagCount) % flagCount
          if (rel > Math.floor(visibleCount / 2) && rel < flagCount - Math.floor(visibleCount / 2)) return null
          const theta = (360 / flagCount) * i
          return (
            <div
              key={flag.code}
              className="absolute left-1/2 top-1/2 w-14 h-14 rounded-full overflow-hidden border-2 border-primary bg-white flex items-center justify-center shadow-md"
              style={{
                transform:
                  `rotateY(${theta}deg) translateZ(${radius}px) translate(-50%, -50%) scale(${rel === 0 ? 1.15 : 1})`,
                zIndex: rel === 0 ? 2 : 1,
                boxShadow: rel === 0 ? '0 0 16px 2px #eab30855' : undefined,
                transition: 'transform 0.7s cubic-bezier(.4,2,.6,1), box-shadow 0.7s',
              }}
            >
              <img
                src={getFlagUrl(flag.code)}
                alt={flag.name + ' flag'}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}