// Utility function to handle static file paths for both development and production

/**
 * Get the correct path for static files
 * The site is served from the domain root (fengmingliu.com), so no base path is needed.
 */
export const getStaticPath = (filename) => {
  return `/${filename}`
}

/**
 * Get optimized image path with WebP fallback
 */
export const getOptimizedImagePath = (filename) => {
  // Check if browser supports WebP
  const supportsWebP = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }

  // Return WebP version if supported, otherwise original
  const ext = filename.split('.').pop()
  const nameWithoutExt = filename.replace(`.${ext}`, '')

  if (supportsWebP() && ext !== 'webp') {
    return `/${nameWithoutExt}.webp`
  }

  return `/${filename}`
}

/**
 * Get the base URL for the application
 */
export const getBaseUrl = () => {
  return ''
}
