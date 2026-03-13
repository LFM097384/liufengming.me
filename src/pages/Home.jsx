import React from 'react'
import { Typography, Box, Chip, Link, Divider } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import SEO from '../components/SEO'
import SectionTitle from '../components/SectionTitle'
import { useTranslation } from 'react-i18next'
import { getStaticPath } from '../utils/paths'
import LazyImage from '../components/LazyImage'

const Home = () => {
  const { t } = useTranslation()

  const recentPubs = [
    {
      authors: 'Liu, F., & Yu, S.',
      title: 'MimiTalk: Revolutionizing Qualitative Research with Dual-Agent AI',
      venue: 'arXiv (2025)',
      doi: 'https://doi.org/10.48550/arXiv.2511.03731',
      note: 'SSRN Recent Top Paper',
    },
    {
      authors: 'Huang, Y., Shu, M., Liu, F., et al.',
      title: 'Nonlinear Heterogeneity Impact of El Niño-Southern Oscillation on Energy Markets',
      venue: 'Energy (2025)',
      doi: 'https://doi.org/10.1016/j.energy.2025.137475',
    },
    {
      authors: 'Shu, M., Wang, C., Liu, F., et al.',
      title: 'The Risk Transmission Mechanism of Global Stock Markets from the Perspective of Entropy-Riemann Geometry',
      venue: 'Computational Economics (2025)',
      doi: 'https://doi.org/10.1007/s10614-025-10913-4',
    },
  ]

  return (
    <>
      <SEO
        title="Home"
        description="Fengming Liu – researcher in AI-augmented qualitative methods, computational text analysis, and political economy of technology. BSc PPE, University College London."
        keywords="Fengming Liu, AI Research, Computational Text Analysis, Political Economy, UCL"
      />

      {/* ── HERO ── */}
      <Box sx={{ mb: 6 }}>
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 3, md: 5 },
            alignItems: { xs: 'center', md: 'flex-end' },
            flexDirection: { xs: 'column', md: 'row' },
            mb: 4,
          }}
        >
          <LazyImage
            src={getStaticPath('Images/b71f54d23e1517e62a9235a7760e265.jpg')}
            alt="Fengming Liu"
            sx={{
              width: { xs: 120, md: 140 },
              height: { xs: 120, md: 140 },
              borderRadius: '50%',
              border: '3px solid #e0dcd6',
              flexShrink: 0,
            }}
          />
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontSize: { xs: '2.2rem', md: '2.8rem' }, mb: 0.5 }}
            >
              {t('hero.title')}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"EB Garamond", serif',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#666',
                mb: 1,
              }}
            >
              {t('hero.subtitle')}
            </Typography>
            <Typography variant="body2" sx={{ color: '#888' }}>
              {t('hero.institution')}
            </Typography>
            <Box
              sx={{
                mt: 1.5,
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Link
                href="mailto:liu_fengming@outlook.com"
                sx={{ fontSize: '0.85rem', color: '#888', '&:hover': { color: '#b0413e' } }}
              >
                liu_fengming@outlook.com
              </Link>
              <Typography variant="body2" sx={{ color: '#ccc' }}>·</Typography>
              <Link
                href="https://orcid.org/0009-0009-3881-496X"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: '0.85rem', color: '#888', '&:hover': { color: '#b0413e' } }}
              >
                ORCID
              </Link>
              <Typography variant="body2" sx={{ color: '#ccc' }}>·</Typography>
              <Link
                href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6120349"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: '0.85rem', color: '#888', '&:hover': { color: '#b0413e' } }}
              >
                SSRN
              </Link>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ borderColor: '#2c2c2c', borderWidth: 1.5 }} />
      </Box>

      {/* ── ABOUT ── */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="body1" sx={{ lineHeight: 1.85, mb: 2 }}>
          {t('hero.bio')}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {[
            'AI-Augmented Qualitative Methods',
            'Computational Text Analysis',
            'Political Economy of Technology',
            'Consumer Behavior in Digital Markets',
          ].map((tag, i) => (
            <Chip
              key={i}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ borderColor: '#c4b8a8', color: '#3a3a3a', fontWeight: 500 }}
            />
          ))}
        </Box>
      </Box>

      {/* ── FEATURED PROJECT ── */}
      <Box
        component="a"
        href="https://mimitalk.app"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'block',
          mb: 6,
          p: 3,
          bgcolor: '#f0edea',
          border: '1.5px solid #c4b8a8',
          borderRadius: 1,
          textDecoration: 'none',
          transition: 'all 0.2s ease',
          '&:hover': { borderColor: '#b0413e', transform: 'translateY(-1px)' },
        }}
      >
        <Typography variant="overline" sx={{ color: '#b0413e', mb: 0.5, display: 'block' }}>
          FEATURED PROJECT
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontFamily: '"EB Garamond", serif', color: '#1a1a1a', mb: 0.8 }}
        >
          MimiTalk — AI-Powered Interview Platform
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          {t('hero.mimitalk_desc')}
        </Typography>
      </Box>

      {/* ── SELECTED PUBLICATIONS ── */}
      <Box>
        <SectionTitle title={t('hero.selected_pubs')} />
        {recentPubs.map((pub, i) => (
          <Box key={i} sx={{ mb: 3 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 600, lineHeight: 1.35, mb: 0.3 }}
            >
              {pub.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.84rem' }}>
              {pub.authors}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mt: 0.3 }}>
              <Typography variant="body2" sx={{ color: '#b0413e', fontStyle: 'italic', fontSize: '0.84rem' }}>
                {pub.venue}
              </Typography>
              {pub.note && (
                <Chip label={pub.note} size="small" sx={{ height: 20, fontSize: '0.68rem', bgcolor: '#fff3e0', color: '#e65100' }} />
              )}
            </Box>
            <Link href={pub.doi} target="_blank" rel="noopener noreferrer" sx={{ fontSize: '0.82rem' }}>
              DOI →
            </Link>
          </Box>
        ))}
        <Link
          component={RouterLink}
          to="/publications"
          sx={{ fontSize: '0.88rem', fontWeight: 500, mt: 1, display: 'inline-block' }}
        >
          All publications & conferences →
        </Link>
      </Box>
    </>
  )
}

export default Home
