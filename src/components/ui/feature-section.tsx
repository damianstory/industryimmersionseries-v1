"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before starting animations
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval, mounted])

  // Handle manual navigation via dot clicks
  const handleDotClick = (index: number) => {
    setCurrentFeature(index)
    setProgress(0) // Reset progress to restart timer from new position
  }

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
            {title}
          </h2>
        )}

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 flex items-center justify-center">
            {mounted ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  className="flex items-center gap-6 md:gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {features[currentFeature].title || features[currentFeature].step}
                    </h3>
                    <div className="text-sm md:text-lg text-muted-foreground whitespace-pre-line mt-3">
                      {features[currentFeature].content}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="flex items-center gap-6 md:gap-8">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {features[0].title || features[0].step}
                  </h3>
                  <div className="text-sm md:text-lg text-muted-foreground whitespace-pre-line mt-3">
                    {features[0].content}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg"
            )}
          >
            {mounted ? (
              <AnimatePresence mode="wait">
                {features.map(
                  (feature, index) =>
                    index === currentFeature && (
                      <motion.div
                        key={index}
                        className="absolute inset-0 rounded-lg overflow-hidden"
                        initial={{ y: 100, opacity: 0, rotateX: -20 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        exit={{ y: -100, opacity: 0, rotateX: 20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.step}
                          className="w-full h-full object-cover transition-transform transform"
                          width={1000}
                          height={500}
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            ) : (
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src={features[0].image}
                  alt={features[0].step}
                  className="w-full h-full object-cover transition-transform transform"
                  width={1000}
                  height={500}
                />
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
            )}
          </div>
        </div>
        
        {/* Clickable Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {features.map((_, index) => (
            mounted ? (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0092ff] focus:ring-opacity-50",
                  index === currentFeature 
                    ? "bg-[#0092ff] scale-110" 
                    : "bg-gray-300 hover:bg-gray-400 hover:scale-105"
                )}
                aria-label={`Go to step ${index + 1}: ${features[index].title || features[index].step}`}
              >
                {/* Hidden text for screen readers */}
                <span className="sr-only">
                  Step {index + 1}: {features[index].title || features[index].step}
                </span>
              </button>
            ) : (
              <div
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full",
                  index === 0 ? "bg-[#0092ff] scale-110" : "bg-gray-300"
                )}
              />
            )
          ))}
        </div>
      </div>
    </div>
  )
} 