import { createTheme } from '@mui/material/styles'

// Poster-inspired typography: EB Garamond (serif) + IBM Plex Sans (sans-serif)
const serifFont = ['"EB Garamond"', 'Georgia', '"Times New Roman"', 'serif'].join(',')
const sansFont = ['"IBM Plex Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'].join(',')

const theme = createTheme({
  palette: {
    primary: {
      main: '#b0413e',
      light: '#c4635f',
      dark: '#8a302e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2c2c2c',
      light: '#555',
      dark: '#1a1a1a',
    },
    background: {
      default: '#faf8f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c2c2c',
      secondary: '#666666',
    },
    divider: '#ddd',
  },
  typography: {
    fontFamily: sansFont,
    h1: { fontFamily: serifFont, fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.01em' },
    h2: { fontFamily: serifFont, fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.01em' },
    h3: { fontFamily: serifFont, fontWeight: 700, color: '#1a1a1a' },
    h4: { fontFamily: serifFont, fontWeight: 700, color: '#1a1a1a' },
    h5: { fontFamily: serifFont, fontWeight: 600, color: '#1a1a1a' },
    h6: { fontFamily: serifFont, fontWeight: 600, color: '#1a1a1a' },
    subtitle1: { fontFamily: sansFont, fontWeight: 500 },
    subtitle2: { fontFamily: sansFont, fontWeight: 500 },
    body1: { fontFamily: sansFont, lineHeight: 1.7, color: '#3a3a3a', fontSize: '0.975rem' },
    body2: { fontFamily: sansFont, lineHeight: 1.6, color: '#3a3a3a' },
    button: { fontFamily: sansFont, fontWeight: 500, textTransform: 'none', letterSpacing: '0.02em' },
    caption: { fontFamily: sansFont },
    overline: { fontFamily: sansFont, letterSpacing: '0.12em', fontWeight: 600, fontSize: '0.7rem' },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#faf8f5',
          fontDisplay: 'swap',
        },
        '::selection': {
          backgroundColor: '#b0413e',
          color: '#fff',
        },
        a: {
          color: '#b0413e',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#faf8f5',
          color: '#2c2c2c',
          boxShadow: 'none',
          borderBottom: '2px solid #2c2c2c',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          fontWeight: 500,
          padding: '8px 20px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': { borderWidth: '1.5px' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid #e0dcd6',
          borderRadius: 4,
          transition: 'border-color 0.2s ease',
          '&:hover': { borderColor: '#c4b8a8' },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          fontWeight: 500,
          fontSize: '0.8rem',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: '#ddd' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
})

export default theme
