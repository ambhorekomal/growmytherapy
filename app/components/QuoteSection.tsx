import ScrollAnimation from './ScrollAnimation'

export default function QuoteSection() {
  return (
    <section className="quote-section">
      <ScrollAnimation>
        <h2 className="quote-text">
          Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
        </h2>
      </ScrollAnimation>
      
      <ScrollAnimation delay={0.3}>
        <p className="quote-description">
          You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, 
          grief and loss, self-esteem issues, or challenges with family, parenting, or parental 
          relationships. Whatever the source of your stress, you don't have to face it alone. Therapy 
          offers you the time and space to work toward wellness and peace.
        </p>
      </ScrollAnimation>
    </section>
  )
}