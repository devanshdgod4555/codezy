"use client"

import { ThemeProvider } from "@/components/theme-provider"
import JarvisBackground from "@/components/jarvis-background"
import JarvisInterface from "@/components/jarvis-interface"
import JarvisAssistant from "@/components/jarvis-assistant"
import MicroAnimations from "@/components/micro-animations"
import { motion, AnimatePresence } from "framer-motion"
import CustomCursor from "@/components/custom-cursor"
import { usePathname } from "next/navigation"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <JarvisInterface />
          <JarvisBackground />
          <JarvisAssistant />
          <MicroAnimations />
          <CustomCursor />
          {children}
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  )
} 