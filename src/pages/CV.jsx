import React from 'react'
import {
  Typography,
  Box,
  Grid,
  Button,
  Divider,
} from '@mui/material'
import { Download, Visibility } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { getStaticPath } from '../utils/paths'

/* ── Section title ── */
const SectionTitle = ({ number, title }) => (
  <Typography
    variant="h5"
    sx={{
      fontFamily: '"EB Garamond", serif',
      fontWeight: 700,
      fontSize: '1.15rem',
      mb: 2,
      pb: 1,
      borderBottom: '1px solid #ddd',
    }}
  >
    <Box
      component="span"
      sx={{
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontSize: '0.78rem',
        fontWeight: 600,
        color: '#b0413e',
        mr: 1.5,
      }}
    >
      {number}
    </Box>
    {title}
  </Typography>
)

const CV = () => {
  const { t } = useTranslation()

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = getStaticPath('CV.pdf')
    link.download = 'Fengming_Liu_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePreview = () => {
    window.open(getStaticPath('CV.pdf'), '_blank')
  }

  return (
    <>
      {/* Header */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
          {t('cv.title')}
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          {t('cv.subtitle')}
        </Typography>
      </Box>

      {/* Download actions */}
      <Box
        sx={{
          mb: 6,
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Button
          variant="contained"
          startIcon={<Download />}
          onClick={handleDownload}
          sx={{ px: 3 }}
        >
          {t('cv.download')}
        </Button>
        <Button
          variant="outlined"
          startIcon={<Visibility />}
          onClick={handlePreview}
          sx={{ px: 3 }}
        >
          {t('cv.preview_button')}
        </Button>
      </Box>

      {/* Highlights */}
      <Grid container spacing={5} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <SectionTitle number="01" title={t('cv.highlights.education.title')} />
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ color: '#b0413e', fontWeight: 600, fontSize: '0.8rem' }}>
              2023 – 2026 (expected)
            </Typography>
            <Typography variant="subtitle1" sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 600 }}>
              BSc Philosophy, Politics and Economics
            </Typography>
            <Typography variant="body2" sx={{ color: '#888' }}>
              University College London, Department of Political Science
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ color: '#b0413e', fontWeight: 600, fontSize: '0.8rem' }}>
              2020 – 2023
            </Typography>
            <Typography variant="subtitle1" sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 600 }}>
              High School Diploma
            </Typography>
            <Typography variant="body2" sx={{ color: '#888' }}>
              Experimental High School Attached to Beijing Normal University
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <SectionTitle number="02" title={t('cv.highlights.experience.title')} />
          <Box sx={{ mb: 1.5 }}>
            <Typography variant="body2" sx={{ color: '#b0413e', fontWeight: 600, fontSize: '0.8rem' }}>
              2025 – Present
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Research Assistant, UCL (Dr. Handi Li)
            </Typography>
          </Box>
          <Box sx={{ mb: 1.5 }}>
            <Typography variant="body2" sx={{ color: '#b0413e', fontWeight: 600, fontSize: '0.8rem' }}>
              2024 – Present
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Research Assistant, BI Norwegian Business School & HEC Paris (Dr. Shubin Yu)
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ color: '#b0413e', fontWeight: 600, fontSize: '0.8rem' }}>
              2024 – 2026
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              Research Assistant, Anhui University (Dr. Shun Wang)
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <SectionTitle number="03" title={t('cv.highlights.publications.title')} />
          <Typography variant="body2" sx={{ color: '#3a3a3a', lineHeight: 1.8 }}>
            {t('cv.highlights.publications.content')}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 4 }} />

      {/* PDF Preview */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontFamily: '"EB Garamond", serif', mb: 2 }}>
          {t('cv.preview.title')}
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: 750,
            border: '1px solid #e0dcd6',
            borderRadius: 1,
            overflow: 'hidden',
            bgcolor: '#fff',
          }}
        >
          <iframe
            src={`${getStaticPath('CV.pdf')}#toolbar=1`}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="CV Preview"
          />
        </Box>
        <Typography variant="body2" sx={{ color: '#999', mt: 1.5, textAlign: 'center', fontSize: '0.82rem' }}>
          {t('cv.preview_note')}
        </Typography>
      </Box>
    </>
  )
}

export default CV
