'use client'

import { useState } from 'react'
import ScrollAnimation from './ScrollAnimation'

interface FormData {
  name: string
  phone: string
  email: string
  reason: string
  preferredTime: string
  agreeToContact: boolean
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  reason?: string
  preferredTime?: string
  agreeToContact?: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    reason: '',
    preferredTime: '',
    agreeToContact: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.reason.trim()) {
      newErrors.reason = 'Please tell us what brings you here'
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred contact time is required'
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        reason: '',
        preferredTime: '',
        agreeToContact: false
      })
      setErrors({})
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  if (isSubmitted) {
    return (
      <section className="contact-section">
        <ScrollAnimation>
          <div className="contact-container">
            <div className="contact-success">
              <h2 className="contact-title">Thank You!</h2>
              <p className="contact-success-message">
                Your message has been sent successfully. Dr. Blake will contact you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="contact-reset-button"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    )
  }

  return (
    <section className="contact-section">
      <ScrollAnimation>
        <h2 className="section-title">Get In Touch</h2>
      </ScrollAnimation>
      
      <div className="contact-container">
        <ScrollAnimation delay={0.2}>
          <div className="contact-intro">
            <p className="contact-intro-text">
              Simply fill out the brief fields below and Dr. Blake will be in touch with you soon, 
              usually within one business day. This form is safe, private, and completely free.
            </p>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.4}>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Name"
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="you@example.com"
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="(555) 234-5678"
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="reason" className="form-label">Message *</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="form-textarea"
                placeholder="How can I help you?"
              />
              {errors.reason && <div className="error-message">{errors.reason}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="preferredTime" className="form-label">Preferred Contact Time *</label>
              <input
                type="text"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
              />
              <p className="form-help-text">Let us know when you're typically available for a call or consultation</p>
              {errors.preferredTime && <div className="error-message">{errors.preferredTime}</div>}
            </div>

            <div className="form-group">
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="agreeToContact"
                  name="agreeToContact"
                  checked={formData.agreeToContact}
                  onChange={handleChange}
                  className="checkbox-input"
                />
                <label htmlFor="agreeToContact" className="form-label checkbox-label">
                  I agree to be contacted by Dr. Blake regarding my inquiry *
                </label>
              </div>
              {errors.agreeToContact && <div className="error-message">{errors.agreeToContact}</div>}
            </div>

            <div className="form-submit-container">
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>

            <div className="form-disclaimer">
              <p className="disclaimer-text">
                By clicking submit you consent to receive texts and emails from Dr. Serena Blake
              </p>
            </div>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  )
}