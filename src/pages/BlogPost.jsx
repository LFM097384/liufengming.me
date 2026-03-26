import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Typography, Box, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'
import { getStaticPath } from '../utils/paths'

const BlogPost = () => {
  const { slug } = useParams()
  const { i18n } = useTranslation()
  const isZh = i18n.language === 'zh'
  const iframeRef = useRef(null)

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [iframeHeight, setIframeHeight] = useState(600)
  const [srcUrl, setSrcUrl] = useState('')

  useEffect(() => {
    fetch(getStaticPath('blog/posts.json'))
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.slug === slug)
        setPost(found || null)
      })
      .catch(() => setPost(null))
      .finally(() => setLoading(false))
  }, [slug])

  // Resolve file URL when post or language changes
  useEffect(() => {
    if (!post) return
    const base = post.folder || post.slug
    const primaryFile = isZh
      ? (post.file_zh ? `${base}/${post.file_zh}` : `${base}/zh.html`)
      : (post.file_en ? `${base}/${post.file_en}` : `${base}/en.html`)
    const fallbackFile = isZh
      ? (post.file_en ? `${base}/${post.file_en}` : `${base}/en.html`)
      : (post.file_zh ? `${base}/${post.file_zh}` : `${base}/zh.html`)
    const postUrl = getStaticPath(`blog/${primaryFile}`)
    const fallbackUrl = getStaticPath(`blog/${fallbackFile}`)

    fetch(postUrl, { method: 'HEAD' })
      .then(res => setSrcUrl(res.ok ? postUrl : fallbackUrl))
      .catch(() => setSrcUrl(fallbackUrl))
  }, [post, isZh])

  // Auto-resize iframe to fit content
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.type === 'blog-post-height') {
        setIframeHeight(e.data.height)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  const handleIframeLoad = () => {
    try {
      const iframe = iframeRef.current
      if (iframe && iframe.contentDocument) {
        const doc = iframe.contentDocument
        const height = doc.documentElement.scrollHeight
        setIframeHeight(height + 32)

        const observer = new ResizeObserver(() => {
          const h = doc.documentElement.scrollHeight
          setIframeHeight(h + 32)
        })
        observer.observe(doc.body)
      }
    } catch {
      // Cross-origin — fallback height stays
    }
  }

  if (loading) {
    return <Typography sx={{ color: '#888' }}>{isZh ? '加载中...' : 'Loading...'}</Typography>
  }

  if (!post) {
    return (
      <Box>
        <Typography sx={{ mb: 2 }}>{isZh ? '文章未找到' : 'Post not found.'}</Typography>
        <Button component={Link} to="/blog" startIcon={<ArrowBackIcon />} size="small">
          {isZh ? '返回博客' : 'Back to Blog'}
        </Button>
      </Box>
    )
  }

  const title = isZh ? (post.title_zh || post.title) : post.title

  return (
    <>
      <SEO title={`${title} - Fengming Liu`} description={isZh ? post.description_zh : post.description} />

      <Button
        component={Link}
        to="/blog"
        startIcon={<ArrowBackIcon />}
        size="small"
        sx={{ mb: 2, color: '#888', '&:hover': { color: '#b0413e' } }}
      >
        {isZh ? '返回博客' : 'Back to Blog'}
      </Button>

      <Typography
        variant="h4"
        sx={{
          fontFamily: '"EB Garamond", serif',
          fontWeight: 700,
          mb: 0.5,
        }}
      >
        {title}
      </Typography>

      <Typography variant="body2" sx={{ color: '#999', mb: 3, fontSize: '0.85rem' }}>
        {post.date}
      </Typography>

      <Box
        sx={{
          border: '1px solid #e8e4df',
          borderRadius: 1,
          overflow: 'hidden',
          bgcolor: '#fff',
        }}
      >
        <iframe
          ref={iframeRef}
          src={srcUrl}
          title={title}
          onLoad={handleIframeLoad}
          style={{
            width: '100%',
            height: iframeHeight,
            border: 'none',
            display: 'block',
          }}
          sandbox="allow-same-origin allow-scripts allow-popups"
        />
      </Box>
    </>
  )
}

export default BlogPost
