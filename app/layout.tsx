"use client"
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ParticlesBG from '@/components/ParticlesBg'
import Footer from '@/components/Footer'
import About from '@/components/About'
import Faculty from '@/components/Faculty'
import TeamPanel from '@/components/TeamPanel'
// import Events from '@/components/Events'

//css
import '@/styles/globals.css'

// export const metadata = {
//   title: 'DSC VITB',
//   description: 'Data Science Club VIT Bhopal',
// }

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
            <Box id='landing'>
              <ParticlesBG />
              <Hero />
            </Box>
            <About />
            <Faculty />
            <TeamPanel />
            {children}
            <Footer />
        </ChakraProvider>
        </body>
    </html>
  )
}
