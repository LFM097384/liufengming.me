import React from 'react'
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
} from '@mui/material'

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4, 
        mt: 10,
        borderTop: '2px solid #2c2c2c',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 3,
          mb: 3 
        }}>
          <Box>
            <Typography 
              variant="h6" 
              sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 700, mb: 0.5 }}
            >
              Fengming Liu
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', fontSize: '0.82rem' }}>
              Department of Political Science
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', fontSize: '0.82rem' }}>
              University College London
            </Typography>
          </Box>
          <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
            <Typography variant="body2" sx={{ color: '#888', fontSize: '0.82rem' }}>
              <Link href="mailto:liu_fengming@outlook.com" sx={{ color: '#888', '&:hover': { color: '#b0413e' } }}>
                liu_fengming@outlook.com
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', fontSize: '0.82rem', mt: 0.5 }}>
              <Link href="https://orcid.org/0009-0009-3881-496X" target="_blank" rel="noopener noreferrer" sx={{ color: '#888', '&:hover': { color: '#b0413e' } }}>
                ORCID
              </Link>
              {' · '}
              <Link href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=7378335" target="_blank" rel="noopener noreferrer" sx={{ color: '#888', '&:hover': { color: '#b0413e' } }}>
                SSRN
              </Link>
              {' · '}
              <Link href="https://www.linkedin.com/in/liufengming" target="_blank" rel="noopener noreferrer" sx={{ color: '#888', '&:hover': { color: '#b0413e' } }}>
                LinkedIn
              </Link>
              {' · '}
              <Link href="https://github.com/LFM097384" target="_blank" rel="noopener noreferrer" sx={{ color: '#888', '&:hover': { color: '#b0413e' } }}>
                GitHub
              </Link>
            </Typography>
          </Box>
        </Box>
        
        <Divider sx={{ borderColor: '#ddd', mb: 2 }} />
        
        <Typography variant="body2" sx={{ color: '#999', fontSize: '0.75rem', textAlign: 'center' }}>
          © {new Date().getFullYear()} Fengming Liu. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
