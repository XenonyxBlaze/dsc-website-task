"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'DSC VITB',
  description: 'Data Science Club VIT Bhopal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>DSC VITB</title>
      </head>
      <body>
        <ChakraProvider>
          <Navbar />
          <Hero />
          {children}
          <Footer />
        </ChakraProvider>
        </body>
    </html>
  )
}
