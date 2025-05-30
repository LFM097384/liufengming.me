import React from 'react'
import {
  Box,
  CircularProgress,
  Typography
} from '@mui/material'
import { useTranslation } from 'react-i18next'

const Loading = ({ message }) => {
  const { t } = useTranslation()
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        gap: 2
      }}
    >
      <CircularProgress size={60} />      <Typography variant="h6" color="text.secondary">
        {message || t('common.loading')}
      </Typography>
    </Box>
  )
}

export default Loading
