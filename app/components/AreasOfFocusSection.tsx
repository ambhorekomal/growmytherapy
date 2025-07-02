import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'

export default function AreasOfFocusSection() {
  const areas = [
  {
    title: "Anxiety & Stress Management",
    description: "Evidence-based techniques to help you manage anxiety, reduce stress, and develop healthy coping strategies for daily challenges. Learn mindfulness practices and cognitive-behavioral approaches to find peace.",
    image: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg" // person meditating, calm vibes
  },
  {
    title: "Relationship Counseling", 
    description: "Support for individuals and couples to improve communication, resolve conflicts, and strengthen emotional connections. Build healthier relationship patterns and deeper intimacy.",
    image:  "https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg"
  },
  {
  title: "Trauma Recovery",
  description: "Compassionate, specialized care to help you process traumatic experiences and develop resilience for healing and growth. Work through past experiences in a safe, supportive environment.",
  image: "https://images.squarespace-cdn.com/content/v1/5ec33f400be7e16a9a6dc2af/99d1fd79-dd67-4384-8149-683422aef660/A+woman+smelling+the+roses+representing+glimmers+helping+with+trauma+triggers.+Start+trauma+therapy+in+detroit"
}

]

  return (
    <section className="areas-section">
      <ScrollAnimation>
        <h2 className="section-title">Areas of Focus</h2>
      </ScrollAnimation>
      
      <div className="areas-grid">
        {areas.map((area, index) => (
          <ScrollAnimation key={index} delay={0.2 * (index + 1)}>
            <div className="area-card">
              <Image
                src={area.image}
                alt={area.title}
                width={200}
                height={200}
                className="area-image"
              />
              <h3 className="area-title">{area.title}</h3>
              <p className="area-description">{area.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  )
}