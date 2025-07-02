'use client'

import { useState } from 'react'

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

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
      alert('Thank you for your message! Dr. Blake will contact you within 24 hours.')
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
      onClose()
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[#3f4a3f]">Schedule a Consultation</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
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
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
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
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="reason" className="form-label">What brings you here? *</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Please describe what you're looking for in therapy..."
              />
              {errors.reason && <div className="error-message">{errors.reason}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="preferredTime" className="form-label">Preferred time to reach you *</label>
              <input
                type="text"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., Weekday mornings, Tuesday evenings, etc."
              />
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
                <label htmlFor="agreeToContact" className="form-label">
                  I agree to be contacted by Dr. Blake regarding my inquiry *
                </label>
              </div>
              {errors.agreeToContact && <div className="error-message">{errors.agreeToContact}</div>}
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 submit-button"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}