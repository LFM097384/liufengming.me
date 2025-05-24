import React, { useState, useEffect } from 'react'
import {
  Fab,
  Zoom
} from '@mui/material'
import { KeyboardArrowUp } from '@mui/icons-material'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={scrollToTop}
        color="primary"
        size="small"
        aria-label="scroll back to top"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  )
}

export default ScrollToTop
