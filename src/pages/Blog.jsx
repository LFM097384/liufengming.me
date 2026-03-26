import React, { useState, useEffect } from 'react'
import { Typography, Box, Chip, Link as MuiLink } from '@mui/material'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import SectionTitle from '../components/SectionTitle'
import { useTranslation } from 'react-i18next'
import { getStaticPath } from '../utils/paths'

const Blog = () => {
  const { t, i18n } = useTranslation()
  const isZh = i18n.language === 'zh'
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(getStaticPath('blog/posts.json'))
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date))
        setPosts(sorted)
      })
      .catch(() => setPosts([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <SEO
        title="Blog - Fengming Liu"
        description="Blog posts by Fengming Liu on research, AI, and social science."
      />

      <SectionTitle title={isZh ? '博客' : 'Blog'} />

      {loading ? (
        <Typography sx={{ color: '#888' }}>{t('common.loading')}</Typography>
      ) : posts.length === 0 ? (
        <Typography sx={{ color: '#888' }}>{isZh ? '暂无文章' : 'No posts yet.'}</Typography>
      ) : (
        <Box>
          {posts.map((post) => (
            <Box
              key={post.slug}
              sx={{
                py: 2.5,
                borderBottom: '1px solid #e8e4df',
                '&:last-child': { borderBottom: 'none' },
              }}
            >
              <MuiLink
                component={Link}
                to={`/blog/${post.slug}`}
                sx={{
                  fontFamily: '"EB Garamond", serif',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: '#2c2c2c',
                  textDecoration: 'none',
                  '&:hover': { color: '#b0413e' },
                }}
              >
                {isZh ? (post.title_zh || post.title) : post.title}
              </MuiLink>

              <Typography variant="body2" sx={{ color: '#999', mt: 0.5, fontSize: '0.82rem' }}>
                {post.date}
              </Typography>

              <Typography variant="body2" sx={{ color: '#666', mt: 0.5, lineHeight: 1.7 }}>
                {isZh ? (post.description_zh || post.description) : post.description}
              </Typography>

              {post.tags && post.tags.length > 0 && (
                <Box sx={{ mt: 1, display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                  {post.tags.map(tag => (
                    <Chip key={tag} label={tag} size="small" sx={{ fontSize: '0.72rem', height: 22 }} />
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}

export default Blog