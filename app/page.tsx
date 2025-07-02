'use client'

import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import HRDivider from './components/HRDivider'
import QuoteSection from './components/QuoteSection'
import AreasOfFocusSection from './components/AreasOfFocusSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import RatesSection from './components/RatesSection'
import StatusSection from './components/StatusSection'
import BackgroundImageSection from './components/BackgroundImageSection'
import FinalContactSection from './components/FinalContactSection'
import ContactModal from './components/ContactModal'

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleScheduleClick = () => {
    setIsContactModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <main>
      <Header />
      <HeroSection onScheduleClick={handleScheduleClick} />
      <AboutSection />
      <HRDivider />
      <QuoteSection />
      <HRDivider />
      <AreasOfFocusSection />
      <FAQSection />
      <ContactSection />
      <RatesSection />
      <StatusSection />
      <BackgroundImageSection />
      <FinalContactSection />
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseModal} />
    </main>
  )
}