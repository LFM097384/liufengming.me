import React from 'react'
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  IconButton
} from '@mui/material'
import {
  Email,
  School,
  Article
} from '@mui/icons-material'

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'grey.100', 
        py: 4, 
        mt: 8,
        borderTop: 1,
        borderColor: 'grey.300'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Fengming Liu
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            BSc Philosophy, Politics and Economics | University College London
          </Typography>
          
          <Box sx={{ my: 2 }}>
            <IconButton 
              color="primary" 
              href="mailto:leo.liu.23@ucl.ac.uk"
              aria-label="Email"
            >
              <Email />
            </IconButton>
            <IconButton 
              color="primary" 
              href="https://orcid.org/0009-0009-3881-496X"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ORCID"
            >
              <School />
            </IconButton>
            <IconButton 
              color="primary" 
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5120349"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SSRN"
            >
              <Article />
            </IconButton>
          </Box>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Fengming Liu. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Link 
              href="https://orcid.org/0009-0009-3881-496X" 
              target="_blank" 
              rel="noopener noreferrer"
              variant="body2"
              color="text.secondary"
            >
              ORCID
            </Link>
            <Link 
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5120349" 
              target="_blank" 
              rel="noopener noreferrer"
              variant="body2"
              color="text.secondary"
            >
              SSRN
            </Link>
            <Typography variant="body2" color="text.secondary">
              Last updated: {new Date().toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
