import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { t } = useTranslation()

  const menuItems = [
    { path: '/', label: t('navigation.home') },
    { path: '/publications', label: t('navigation.publications') },
    { path: '/research', label: t('navigation.research') },
    { path: '/cv', label: t('navigation.cv') },
    { path: '/blog', label: t('navigation.blog') },
    { path: '/contact', label: t('navigation.contact') }
  ]

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ 
        maxWidth: 'lg', 
        width: '100%', 
        mx: 'auto',
        px: { xs: 2, md: 3 },
        py: 1.5,
      }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography 
            variant="h5" 
            component={Link} 
            to="/"
            sx={{ 
              fontFamily: '"EB Garamond", serif',
              fontWeight: 700,
              color: '#1a1a1a',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              '&:hover': { color: '#b0413e', textDecoration: 'none' }
            }}
          >
            Fengming Liu
          </Typography>
          <Typography 
            variant="caption" 
            sx={{ 
              display: { xs: 'none', sm: 'block' },
              color: '#888',
              fontWeight: 400,
              letterSpacing: '0.06em',
              mt: -0.3,
              fontSize: '0.72rem'
            }}
          >
            UCL &middot; POLITICAL SCIENCE
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <LanguageSwitcher variant="chip" />
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  width: 260,
                  bgcolor: '#faf8f5',
                  pt: 2,
                }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 1 }}>
                <IconButton onClick={() => setDrawerOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Divider sx={{ mb: 1 }} />
              <List>
                {menuItems.map((item) => (
                  <ListItem key={item.path} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={item.path}
                      onClick={() => setDrawerOpen(false)}
                      selected={location.pathname === item.path}
                      sx={{
                        py: 1.5,
                        px: 3,
                        '&.Mui-selected': {
                          bgcolor: 'transparent',
                          borderLeft: '3px solid #b0413e',
                          color: '#b0413e',
                          fontWeight: 600,
                        },
                      }}
                    >
                      <ListItemText 
                        primary={item.label} 
                        primaryTypographyProps={{ 
                          fontFamily: '"EB Garamond", serif',
                          fontSize: '1.05rem',
                          fontWeight: location.pathname === item.path ? 600 : 400
                        }} 
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? '#b0413e' : '#2c2c2c',
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  fontSize: '0.875rem',
                  px: 1.8,
                  py: 0.8,
                  borderBottom: location.pathname === item.path ? '2px solid #b0413e' : '2px solid transparent',
                  borderRadius: 0,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: 'transparent',
                    color: '#b0413e',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Box sx={{ ml: 1 }}>
              <LanguageSwitcher />
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
