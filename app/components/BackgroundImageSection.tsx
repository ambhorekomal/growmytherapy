import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'

export default function BackgroundImageSection() {
  return (
    <div className="section-border">
      <div className="section-background">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/44c05ca0-453a-453a-811d-c7bc342ee810/pexels-josh-sorenson-386148.jpg"
          alt="Background image"
          width={3992}
          height={2992}
          className="background-image"
          priority={false}
        />
        <div className="section-background-overlay" style={{ opacity: 0.4 }}></div>
        
        {/* Inspirational Quote Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
          <ScrollAnimation>
            <h3 className="inspirational-quote-text text-center text-white">
              "I have come to believe that caring for myself is not self-indulgent. Caring for myself is an act of survival."
            </h3>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.3}>
            <p className="quote-author text-center text-white">
              —Audre Lorde
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}