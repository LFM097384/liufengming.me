import React from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Paper
} from '@mui/material'
import {
  Article,
  Construction
} from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const Blog = () => {
  const { t } = useTranslation()
  
  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('blog.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t('blog.subtitle')}
        </Typography>
      </Box>

      {/* Coming Soon Notice */}
      <Card elevation={2}>
        <CardContent sx={{ textAlign: 'center', py: 6 }}>
          <Construction sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            {t('blog.coming_soon')}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {t('blog.coming_soon_description')}
          </Typography>
          
          <Box sx={{ mt: 3, textAlign: 'left', maxWidth: 600, mx: 'auto' }}>
            <Paper elevation={1} sx={{ p: 3, bgcolor: 'grey.50' }}>
              <Typography variant="body2" component="div">
                • {t('blog.feature_research_insights')}<br/>
                • {t('blog.feature_ai_applications')}<br/>
                • {t('blog.feature_writing_tips')}<br/>
                • {t('blog.feature_commentary')}<br/>
                • {t('blog.feature_tutorials')}
              </Typography>
            </Paper>
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            {t('blog.check_back_soon')}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Blog