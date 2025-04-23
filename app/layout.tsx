import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "@/components/client-layout"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Dev Portfolio",
  description: "A modern portfolio website showcasing my work and skills",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Dev Portfolio",
    description: "A modern portfolio website showcasing my work and skills",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dev Portfolio Preview",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          as="style"
        />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}


import './globals.css'