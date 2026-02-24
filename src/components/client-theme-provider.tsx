"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [, setIsClient] = useState(false)
  const [, setTheme] = useState("light")

  useEffect(() => {
    setIsClient(true)

    // Check system preference
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const savedTheme = localStorage.getItem("theme") || (systemPrefersDark ? "dark" : "light")
    setTheme(savedTheme)

    // Apply theme
    document.documentElement.classList.add(savedTheme)
    document.documentElement.style.colorScheme = savedTheme
  }, [])

  return <>{children}</>
}

