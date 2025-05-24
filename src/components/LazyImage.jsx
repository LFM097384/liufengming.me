import React, { useState, useRef, useEffect } from 'react'
import { Avatar, Skeleton } from '@mui/material'

const LazyImage = ({ src, alt, sx, children, ...props }) => {
  const [loaded, setLoaded] = useState(false)
  const [inView, setInView] = useState(false)
  const imgRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef}>
      {!loaded && (
        <Skeleton 
          variant="circular" 
          sx={{
            ...sx,
            position: loaded ? 'absolute' : 'static',
            zIndex: loaded ? -1 : 1
          }}
        />
      )}
      {inView && (
        <Avatar
          src={src}
          alt={alt}
          sx={{
            ...sx,
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          onLoad={() => setLoaded(true)}
          {...props}
        >
          {children}
        </Avatar>
      )}
    </div>
  )
}

export default LazyImage
