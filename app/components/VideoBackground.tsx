'use client'

import { useEffect, useRef, useState } from 'react'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.loop = true
    video.autoplay = true
    video.playsInline = true
    video.playbackRate = 0.5

    const handleError = () => setVideoError(true)

    const playVideo = async () => {
      try {
        await video.play()
      } catch (error) {
        console.error('Autoplay failed:', error)
        setVideoError(true)
      }
    }

    video.addEventListener('error', handleError)
    video.addEventListener('loadeddata', playVideo)

    return () => {
      video.removeEventListener('error', handleError)
      video.removeEventListener('loadeddata', playVideo)
    }
  }, [])

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {!videoError ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
          muted
          loop
          autoPlay
          playsInline
          poster="/fallback.jpg" // optional: fallback image from /public
        >
          <source src="/videos/ocean.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="/fallback.jpg"
          alt="Ocean fallback"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
        />
      )}
    </div>
  )
}
