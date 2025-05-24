// Utility function to handle static file paths for both development and production

/**
 * Get the correct path for static files
 * In development: /filename
 * In production (GitHub Pages): /liufengming.me/filename
 */
export const getStaticPath = (filename) => {
  const isDev = import.meta.env.DEV
  const basePath = isDev ? '' : '/liufengming.me'
  return `${basePath}/${filename}`
}

/**
 * Get optimized image path with WebP fallback
 */
export const getOptimizedImagePath = (filename) => {
  const isDev = import.meta.env.DEV
  const basePath = isDev ? '' : '/liufengming.me'
  
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
    return `${basePath}/${nameWithoutExt}.webp`
  }
  
  return `${basePath}/${filename}`
}

/**
 * Get the base URL for the application
 */
export const getBaseUrl = () => {
  const isDev = import.meta.env.DEV
  return isDev ? '' : '/liufengming.me'
}
