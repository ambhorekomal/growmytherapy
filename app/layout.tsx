import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Serena Blake, PsyD - Clinical Psychologist',
  description: 'Compassionate care for anxiety, relationships, and trauma. Evidence-based therapy with personalized care in Los Angeles, CA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}