import React from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Grid,
  Alert,
  Paper
} from '@mui/material'
import {
  Download,
  Visibility,
  Description,
  School,
  Work,
  Article
} from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { getStaticPath } from '../utils/paths'

const CV = () => {
  const { t } = useTranslation()

  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement('a')
    link.href = getStaticPath('CV.pdf')
    link.download = 'Fengming_Liu_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  const handlePreview = () => {
    // Open PDF in new tab for preview
    window.open(getStaticPath('CV.pdf'), '_blank')
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('cv.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t('cv.subtitle')}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* CV Actions */}
        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Description color="primary" />
                {t('cv.document.title')}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" paragraph>
                {t('cv.document.description')}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Download />}
                  onClick={handleDownload}
                  fullWidth
                >
                  {t('cv.download')}
                </Button>
                  <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Visibility />}
                  onClick={handlePreview}
                  fullWidth
                >
                  {t('cv.preview_button')}
                </Button>
              </Box>
              
              <Alert severity="info" sx={{ mt: 3 }}>
                {t('cv.document.last_updated')}
              </Alert>
            </CardContent>
          </Card>
        </Grid>

        {/* CV Highlights */}
        <Grid item xs={12} md={8}>
          <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>              <Typography variant="h5" gutterBottom>
                {t('cv.highlights.title')}
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <School color="primary" />                    <Typography variant="h6">{t('cv.highlights.education.title')}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {t('cv.highlights.education.content')}
                  </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Work color="primary" />                    <Typography variant="h6">{t('cv.highlights.experience.title')}</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {t('cv.highlights.experience.content')}
                  </Typography>
                </Grid>
                
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Article color="primary" />                    <Typography variant="h6">{t('cv.highlights.publications.title')}</Typography>
                  </Box>                  <Typography variant="body2" color="text.secondary">
                    {t('cv.highlights.publications.content')}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* PDF Preview */}
        <Grid item xs={12}>
          <Card elevation={2}>
            <CardContent>              <Typography variant="h5" gutterBottom>
                {t('cv.preview.title')}
              </Typography>
              
              <Paper elevation={1} sx={{ p: 2, bgcolor: 'grey.50' }}>                <Box sx={{ 
                  width: '100%', 
                  height: '800px', 
                  border: '1px solid #ddd',
                  borderRadius: 1,
                  overflow: 'hidden'
                }}><iframe
                    src={`${getStaticPath('CV.pdf')}#toolbar=1`}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title="CV Preview"
                  />
                </Box>
              </Paper>
              
              <Box sx={{ mt: 2, textAlign: 'center' }}>                <Typography variant="body2" color="text.secondary">
                  {t('cv.preview_note')}
                </Typography>
              </Box>
            </CardContent>
          </Card>        </Grid>
      </Grid>
    </Container>
  )
}

export default CV
