"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className="text-primary">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

const RotatingText = ({ texts }: { texts: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 4000) // Change text every 4 seconds

    return () => clearInterval(interval)
  }, [texts])

  return (
    <div className="h-[3em] relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <TypewriterText text={texts[currentIndex]} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function Hero() {
  const rotatingTexts = [
    "Next.JS Developer 🚀",
    "MERN Stack Enthusiast 💻",
    "Crafting Scalable Web Apps 🌍",
    "Building Seamless User Experiences 🎨",
    "JavaScript & TypeScript Lover 🧑‍💻",
    "Transforming Ideas into Reality 💡",
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-2xl sm:text-3xl text-muted-foreground">Hello, I&apos;m</span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mt-2">Ali</h1>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight "
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <RotatingText texts={rotatingTexts} />
          </motion.h2>

          <motion.p
        className=" text-xl text-muted-foreground max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        🚀 Turning complex problems into elegant web solutions with React, Next.js, and Tailwind CSS
      </motion.p>

          <motion.div
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}

