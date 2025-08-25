"use client"
import React, { useEffect, useState, useRef, useCallback } from "react"

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const flagCount = FLAGS.length
  const visibleCount = 7
  const radius = 140

  const nextFlag = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % flagCount)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning, flagCount])

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        nextFlag()
      }
    }, 3000) // 3 seconds per flag for better viewing
  }, [isPaused, nextFlag])

  useEffect(() => {
    startAutoScroll()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [startAutoScroll])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const getTransformStyle = (index: number) => {
    const relativeIndex = (index - currentIndex + flagCount) % flagCount
    const angle = (360 / flagCount) * relativeIndex
    
    // Show only visible flags around current
    if (relativeIndex > Math.floor(visibleCount / 2) && 
        relativeIndex < flagCount - Math.floor(visibleCount / 2)) {
      return { display: 'none' }
    }

    const isCurrent = relativeIndex === 0
    const isAdjacent = relativeIndex === 1 || relativeIndex === flagCount - 1
    const isSecondary = relativeIndex === 2 || relativeIndex === flagCount - 2

    let scale = 0.6
    let opacity = 0.3
    let zIndex = 1
    let blur = 3
    let brightness = 0.7

    if (isCurrent) {
      scale = 1.6
      opacity = 1
      zIndex = 20
      blur = 0
      brightness = 1.2
    } else if (isAdjacent) {
      scale = 1.1
      opacity = 0.8
      zIndex = 10
      blur = 0.5
      brightness = 0.9
    } else if (isSecondary) {
      scale = 0.8
      opacity = 0.6
      zIndex = 5
      blur = 1
      brightness = 0.8
    }

    return {
      transform: `
        rotateY(${angle}deg) 
        translateZ(${radius}px) 
        translate(-50%, -50%) 
        scale(${scale})
        ${isCurrent ? 'translateY(-5px)' : ''}
      `,
      opacity,
      zIndex,
      filter: `blur(${blur}px) brightness(${brightness})`,
      transition: isTransitioning 
        ? 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
        : 'all 0.6s ease-out',
    }
  }

  return (
    <div 
      className="relative w-96 h-40 mx-auto mb-6 cursor-pointer"
      style={{ perspective: 1200 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient lighting effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-2xl"></div>
      
      {/* Main carousel container */}
      <div
        className="absolute left-1/2 top-1/2 w-full h-full"
        style={{
          transform: 'translate(-50%, -50%)',
          transformStyle: 'preserve-3d',
        }}
      >
        {FLAGS.map((flag, index) => {
          const relativeIndex = (index - currentIndex + flagCount) % flagCount
          const isCurrent = relativeIndex === 0
          const transformStyle = getTransformStyle(index)
          
          if (transformStyle.display === 'none') return null

          return (
            <div
              key={flag.code}
              className="absolute left-1/2 top-1/2 rounded-full overflow-hidden bg-white shadow-2xl"
              style={{
                width: '72px',
                height: '72px',
                border: isCurrent 
                  ? '4px solid #f59e0b' 
                  : '2px solid rgba(148, 163, 184, 0.5)',
                boxShadow: isCurrent 
                  ? '0 0 30px 8px rgba(245, 158, 11, 0.4), 0 20px 40px rgba(0,0,0,0.3)' 
                  : '0 8px 20px rgba(0,0,0,0.2)',
                ...transformStyle,
              }}
            >
              <img
                src={getFlagUrl(flag.code)}
                alt={`${flag.name} flag`}
                className="w-full h-full object-cover"
                draggable={false}
                style={{
                  filter: isCurrent ? 'saturate(1.3) contrast(1.1)' : 'saturate(0.9)',
                }}
              />
              
              {/* Glowing ring for current flag */}
              {isCurrent && (
                <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(245, 158, 11, 0.3), transparent)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* Current country name display */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
          <p className="text-sm font-semibold text-primary whitespace-nowrap">
            {FLAGS[currentIndex].name}
          </p>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {FLAGS.slice(0, 6).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex % 6
                ? 'bg-primary scale-125'
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
            onClick={() => {
              setCurrentIndex(index)
              startAutoScroll()
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  )
}