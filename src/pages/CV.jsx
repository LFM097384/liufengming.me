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
import { getStaticPath } from '../utils/paths'

const CV = () => {
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
          Curriculum Vitae
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Academic CV and complete professional profile
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* CV Actions */}
        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Description color="primary" />
                CV Document
              </Typography>
              
              <Typography variant="body2" color="text.secondary" paragraph>
                Download or preview my complete academic CV including education, research experience, 
                publications, presentations, and skills.
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Download />}
                  onClick={handleDownload}
                  fullWidth
                >
                  Download CV (PDF)
                </Button>
                
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Visibility />}
                  onClick={handlePreview}
                  fullWidth
                >
                  Preview CV
                </Button>
              </Box>
              
              <Alert severity="info" sx={{ mt: 3 }}>
                Last updated: March 2024
              </Alert>
            </CardContent>
          </Card>
        </Grid>

        {/* CV Highlights */}
        <Grid item xs={12} md={8}>
          <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom>
                CV Highlights
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <School color="primary" />
                    <Typography variant="h6">Education</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    • BSc Philosophy, Politics and Economics (UCL)<br/>
                    • Experimental High School (Beijing Normal University)
                  </Typography>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Work color="primary" />
                    <Typography variant="h6">Experience</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    • Research Assistant at BI Norwegian Business School<br/>
                    • AI and Academic Inequality Research
                  </Typography>
                </Grid>
                
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Article color="primary" />
                    <Typography variant="h6">Publications & Research</Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    • 1 Published paper in risk transmission mechanisms<br/>
                    • 1 Preprint on AI-powered interview platforms<br/>
                    • 5+ Working papers covering political economy, energy markets, and Chinese cultural economics<br/>
                    • Research focus: AI applications, political economy, quantitative history
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* PDF Preview */}
        <Grid item xs={12}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                CV Preview
              </Typography>
              
              <Paper elevation={1} sx={{ p: 2, bgcolor: 'grey.50' }}>
                <Box sx={{ 
                  width: '100%', 
                  height: '600px', 
                  border: '1px solid #ddd',
                  borderRadius: 1,
                  overflow: 'hidden'
                }}>                  <iframe
                    src={`${getStaticPath('CV.pdf')}#toolbar=1`}
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                    title="CV Preview"
                  />
                </Box>
              </Paper>
              
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  If the preview doesn't load properly, please use the download or preview buttons above.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Information */}
      <Card elevation={2} sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Additional Information
          </Typography>
          
          <Typography variant="body1" paragraph>
            This CV provides a comprehensive overview of my academic background, research experience, 
            and professional achievements. It includes detailed information about:
          </Typography>
          
          <Box component="ul" sx={{ pl: 4 }}>
            <li>Educational background and academic performance</li>
            <li>Research experience and ongoing projects</li>
            <li>Published papers and working papers</li>
            <li>Technical skills and programming languages</li>
            <li>Language proficiencies</li>
            <li>Professional references and contact information</li>
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            For any questions about my background or to request additional materials, 
            please feel free to contact me directly.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default CV
