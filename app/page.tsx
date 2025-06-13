"use client"

import { useState, useEffect } from "react"
import WelcomePage from "@/components/welcome-page"
import MainPage from "@/components/main-page"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className={`${!showWelcome ? "hidden" : "block"}`}>
        <WelcomePage />
      </div>
      <div className={`${showWelcome ? "hidden" : "block animate-fade-in"}`}>
        <MainPage />
      </div>
    </div>
  )
}
