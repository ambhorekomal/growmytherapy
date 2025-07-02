import ScrollAnimation from './ScrollAnimation'

export default function StatusSection() {
  return (
    <section className="status-section">
      <ScrollAnimation>
        <h2 className="status-text">Currently accepting new clients.</h2>
      </ScrollAnimation>
    </section>
  )
}