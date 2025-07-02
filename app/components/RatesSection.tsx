import ScrollAnimation from './ScrollAnimation'

export default function RatesSection() {
  return (
    <section className="rates-section">
      <ScrollAnimation>
        <h2 className="rates-title">Rates and Insurance</h2>
      </ScrollAnimation>
      
      <ScrollAnimation delay={0.2}>
        <div>
          <div className="rate-item">Session Fee - $200</div>
          <div className="rate-item">Couples Session - $240</div>
          
          <p className="rate-description">
            I accept both private pay and insurance. I am in network with BCBS and Aetna.
            For out of network plans, I've partnered with Mentaya using this tool to help you check your eligibility 
            for reimbursement for my services.
          </p>
        </div>
      </ScrollAnimation>
    </section>
  )
}