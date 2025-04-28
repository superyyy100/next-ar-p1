"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Toggle } from "@/components/ui/toggle"

const ModeToggle = () => {
    const { theme, setTheme } = useTheme()
  return (
    <Toggle arid-label="Toggle theme" className="hidden md:inline-flex" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
    </Toggle>
  )
}

export default ModeToggle
