import React, { useEffect, useState } from 'react'
import { 
  FormControl, 
  Select, 
  MenuItem, 
  Box,
  Chip
} from '@mui/material'
import { Language as LanguageIcon } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'

const LanguageSwitcher = ({ variant = 'select' }) => {
  const { i18n } = useTranslation()
  const theme = useTheme()
  const [currentLang, setCurrentLang] = useState(i18n.language || 'en')

  useEffect(() => {
    setCurrentLang(i18n.language || 'en')
  }, [i18n.language])

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value
    i18n.changeLanguage(newLanguage)
    setCurrentLang(newLanguage)
  }

  const toggleLanguage = () => {
    const newLanguage = currentLang === 'en' ? 'zh' : 'en'
    i18n.changeLanguage(newLanguage)
    setCurrentLang(newLanguage)
  }

  const languages = {
    en: 'English',
    zh: '中文'
  }
    if (variant === 'chip') {
    return (
      <Chip
        icon={<LanguageIcon />}
        label={languages[currentLang] || 'English'}
        onClick={toggleLanguage}
        variant="outlined"
        sx={{ 
          cursor: 'pointer',
          fontFamily: theme.typography.fontFamily,
          color: '#2c2c2c',
          borderColor: '#c4b8a8',
          '& .MuiChip-label': {
            fontFamily: theme.typography.fontFamily,
            color: '#2c2c2c'
          },
          '& .MuiChip-icon': {
            color: '#888'
          },
          '&:hover': {
            backgroundColor: 'rgba(176,65,62,0.06)',
            borderColor: '#b0413e'
          }
        }}
      />
    )
  }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <LanguageIcon sx={{ color: '#888' }} />
      <FormControl size="small" variant="outlined">
        <Select
          value={i18n.language}
          onChange={handleLanguageChange}
          sx={{ 
            minWidth: 100,
            fontFamily: theme.typography.fontFamily,
            color: '#2c2c2c',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#c4b8a8'
            },
            '& .MuiSelect-select': {
              padding: '8px 12px',
              fontFamily: theme.typography.fontFamily,
              color: '#2c2c2c'
            },
            '& .MuiSelect-icon': {
              color: '#888'
            },
            '& .MuiMenuItem-root': {
              fontFamily: theme.typography.fontFamily
            }
          }}
        >
          <MenuItem value="en" sx={{ fontFamily: theme.typography.fontFamily }}>English</MenuItem>
          <MenuItem value="zh" sx={{ fontFamily: theme.typography.fontFamily }}>中文</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default LanguageSwitcher
