import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import { LampDemo } from '@/components/ui/Lamp'
import Experience from './components/Experience'
import Footer from './components/Footer'

export default function page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="dark:bg-slate-950 bg-white">
        <div className="max-w-7xl mx-auto p-5">
          <Navbar></Navbar>
          <HeroSection></HeroSection>
          <LampDemo></LampDemo>
          <Skills></Skills>
          <Experience></Experience>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
