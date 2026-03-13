import React from 'react'
import { Typography, Box, Button, Divider } from '@mui/material'
import { Download, Visibility } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { getStaticPath } from '../utils/paths'

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
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
          {t('cv.title')}
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          {t('cv.subtitle')}
        </Typography>
      </Box>

      <Box sx={{ mb: 5, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button variant="contained" startIcon={<Download />} onClick={handleDownload} sx={{ px: 3 }}>
          {t('cv.download')}
        </Button>
        <Button variant="outlined" startIcon={<Visibility />} onClick={handlePreview} sx={{ px: 3 }}>
          {t('cv.preview_button')}
        </Button>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: 800,
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
    </>
  )
}

export default CV
