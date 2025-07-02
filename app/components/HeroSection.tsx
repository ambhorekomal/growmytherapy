'use client'

import VideoBackground from './VideoBackground'

interface HeroSectionProps {
  onScheduleClick: () => void
}

export default function HeroSection({ onScheduleClick }: HeroSectionProps) {
  return (
    <section className="relative max-w-[90rem] mx-auto px-8 hero-section">
      <VideoBackground />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 video-overlay">
        <div className="sqs-block-content">
          <div className="sqs-html-content">
            <h1 className="hero-main-title max-w-4xl mb-2 transition-all duration-900 ease-out">
              <span className="sqsrte-text-color--darkAccent">
                <strong> Psychological Care for </strong>
              </span>
            </h1>
            <h1 className="hero-main-title max-w-4xl mb-6 transition-all duration-900 ease-out">
              <span className="sqsrte-text-color--darkAccent">
                <strong>Change, Insight, and Well-Being</strong>
              </span>
            </h1>
            <h4 className="hero-subtitle max-w-3xl mb-10 transition-all duration-900 ease-out">
              <span className="sqsrte-text-color--darkAccent">
                Offering individual psychotherapy for adults via telehealth in Michigan and{' '}
              </span>
              <a 
                href="https://psypact.org/mpage/psypactmap" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white underline hover:no-underline"
              >
                <span className="sqsrte-text-color--darkAccent">most U.S. states</span>
              </a>
              <span className="sqsrte-text-color--darkAccent">
                {' '}through PSYPACT participation
              </span>
            </h4>
          </div>
        </div>
        <div className="sqs-block-button-container sqs-block-button-container--center preFade fadeIn mt-6" data-animation-role="button" data-alignment="center" data-button-size="medium" data-button-type="primary">
          <button
            onClick={onScheduleClick}
            className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element consultation-button"
            data-sqsp-button=""
            data-initialized="true"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}