import React from 'react'
import { Typography, Box } from '@mui/material'

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
    {number && (
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
    )}
    {title}
  </Typography>
)

export default SectionTitle
