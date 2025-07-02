'use client'

import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "What is the structure of Cognitive Behavioral Treatment for Insomnia (CBT-I)?",
      answer: "CBT-I is a structured, evidence-based approach typically delivered over 6-8 sessions. It includes sleep education, sleep restriction therapy, stimulus control, relaxation techniques, and cognitive restructuring to address thoughts and beliefs about sleep. We'll work together to identify your specific sleep patterns and develop personalized strategies to improve your sleep quality and duration."
    },
    {
      question: "Do you treat children or adolescents?",
      answer: "My practice focuses exclusively on adult therapy (ages 18 and older). I specialize in working with adults who are dealing with anxiety, relationship issues, trauma recovery, and other mental health concerns. If you're seeking therapy for a child or adolescent, I'd be happy to provide referrals to qualified therapists who specialize in younger populations."
    },
    {
      question: "Which geographic regions do you serve?",
      answer: "I offer telehealth services to clients in Michigan and most U.S. states through my participation in PSYPACT (Psychology Interjurisdictional Compact). This allows me to provide virtual therapy sessions to clients in participating states. I also offer in-person sessions at my Los Angeles office for local clients. Please contact me to confirm if I can provide services in your specific location."
    },
    {
      question: "Do you offer in-person sessions?",
      answer: "Yes, I offer in-person therapy sessions at my office located at 1287 Maplewood Drive in Los Angeles, CA. I also provide telehealth sessions via secure video conferencing for clients who prefer virtual sessions or are located outside the Los Angeles area. We can discuss which format works best for your needs and circumstances."
    },
    {
      question: "What technology do we use for virtual sessions?",
      answer: "I use secure, HIPAA-compliant video conferencing platforms to ensure your privacy and confidentiality during virtual sessions. The specific platform details will be provided when you schedule your appointment. All you need is a reliable internet connection and a device with a camera and microphone (computer, tablet, or smartphone)."
    },
    {
      question: "What are your hours?",
      answer: "I offer flexible scheduling to accommodate various needs, including evening and some weekend appointments. My typical hours are Monday through Friday, with some evening availability. I understand that finding time for therapy can be challenging, so I work with clients to find appointment times that fit their schedules. Please contact me to discuss availability that works for you."
    },
    {
      question: "Do you take insurance?",
      answer: "I am in-network with Blue Cross Blue Shield (BCBS) and Aetna insurance plans. For clients with out-of-network insurance plans, I've partnered with Mentaya to help you check your eligibility for reimbursement. I also accept private pay clients. During our initial consultation, we can discuss your insurance coverage and payment options to find the best solution for your situation."
    },
    {
      question: "What is the cost of therapy?",
      answer: "My session fee is $200 for individual therapy sessions and $240 for couples sessions. I accept both insurance (BCBS and Aetna in-network) and private pay. For out-of-network insurance, I can provide you with a superbill for potential reimbursement. I believe therapy is an investment in your well-being, and I'm committed to working with you to make it accessible."
    },
    {
      question: "What are the benefits of private pay therapy?",
      answer: "Private pay therapy offers several advantages: greater privacy (no insurance records), more flexibility in session frequency and duration, no insurance-mandated treatment limitations, and the ability to focus purely on your therapeutic goals without external constraints. You have complete control over your treatment, and there are no requirements for diagnosis codes or treatment authorizations."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <ScrollAnimation>
        <h2 className="section-title">Frequently Asked Questions</h2>
      </ScrollAnimation>
      
      <div className="faq-container">
        <ScrollAnimation delay={0.2}>
          <h3 className="faq-category">Therapy</h3>
        </ScrollAnimation>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} delay={0.1 * (index + 1)}>
              <div className="faq-item">
                <button
                  className={`faq-question ${openIndex === index ? 'open' : ''}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon">
                    <svg
                      className={`faq-chevron ${openIndex === index ? 'rotated' : ''}`}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}