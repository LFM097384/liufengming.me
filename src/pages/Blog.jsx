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

const Blog = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Thoughts, insights, and research notes
        </Typography>
      </Box>

      {/* Coming Soon Notice */}
      <Card elevation={2}>
        <CardContent sx={{ textAlign: 'center', py: 6 }}>
          <Construction sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            Blog Coming Soon
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            I'm currently working on setting up my blog section where I'll share:
          </Typography>
          
          <Box sx={{ mt: 3, textAlign: 'left', maxWidth: 600, mx: 'auto' }}>
            <Paper elevation={1} sx={{ p: 3, bgcolor: 'grey.50' }}>
              <Typography variant="body2" component="div">
                • Research insights and methodology discussions<br/>
                • AI applications in social science research<br/>
                • Academic writing and research tips<br/>
                • Commentary on political economy and quantitative analysis<br/>
                • Technical tutorials and coding resources
              </Typography>
            </Paper>
          </Box>
          
          <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
            Please check back soon for updates!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Blog