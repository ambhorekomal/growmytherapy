import ScrollAnimation from './ScrollAnimation'

export default function FinalContactSection() {
  return (
    <section className="final-contact-section">
      <ScrollAnimation>
        <div className="sqs-html-content">
          <h3 className="final-contact-title">
            Dr. Serena Blake, PsyD, Licensed Clinical Psychologist
          </h3>
          <p className="final-contact-info">
            <a href="mailto:serena@blakepsychology.com">serena@blakepsychology.com</a>
            <br />
            Phone: <a href="tel:+13235550192">(323) 555-0192</a> Fax: (323) 555-0193
          </p>
          <p className="final-contact-address">
            1287 Maplewood Drive, Los Angeles, CA 90026
          </p>
          <p className="final-contact-links">
            <a href="/">Home</a>   <a href="/privacy-policy">Privacy Policy</a>  <a href="/good-faith-estimate">Good Faith Estimate</a>
          </p>
        </div>
      </ScrollAnimation>
      
      <ScrollAnimation delay={0.2}>
        <div className="sqs-html-content">
          <p className="final-contact-portal">
            <a href="https://drserenablake.sessionshealth.com/">Client Portal</a>
          </p>
        </div>
      </ScrollAnimation>
    </section>
  )
}