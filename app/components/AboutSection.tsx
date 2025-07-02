import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'

export default function AboutSection() {
  return (
    <section className="content-section">
      <ScrollAnimation>
        <h2 className="subsection-title" style={{ color: '#7E7E6B', fontSize: '23.7472px', fontFamily: 'freight-display-pro, serif' }}>About Dr. Serena Blake</h2>
      </ScrollAnimation>
      
      <div className="about-section">
        <ScrollAnimation delay={0.2}>
          <div className="about-text">
            <p className="mb-4" style={{ fontFamily: 'freight-sans-pro, sans-serif', fontSize: '18.5824px', color: '#7E7E6B' }}>
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
              with eight years of experience and over 500 client sessions. She blends evidence-based 
              approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
              personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            <p className="mb-4" style={{ fontFamily: 'freight-sans-pro, sans-serif', fontSize: '18.5824px', color: '#7E7E6B' }}>
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
              Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>
            
            <h3 className="subsection-title">Experience & Credentials</h3>
            <ul className="mb-4 list-disc list-inside" style={{ fontFamily: 'freight-sans-pro, sans-serif', fontSize: '18.5824px', color: '#7E7E6B' }}>
              <li>8 years of clinical practice</li>
              <li>500+ therapy sessions completed</li>
              <li>Licensed Clinical Psychologist (PsyD)</li>
              <li>Evidence-based treatment approaches</li>
            </ul>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.4}>
          <div className="about-image-container">
            <Image
              src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg"
              alt="Dr. Serena Blake, Clinical Psychologist"
              width={400}
              height={500}
              className="therapist-image"
            />
          </div>
        </ScrollAnimation>
      </div>
      
      <ScrollAnimation delay={0.6}>
        <hr className="section-hr" />
      </ScrollAnimation>
    </section>
  )
}