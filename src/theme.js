import { createTheme } from '@mui/material/styles'

// 系统字体栈 - 优先使用本地系统字体
const systemFontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"'
].join(',')

const theme = createTheme({
  typography: {
    fontFamily: systemFontFamily,
    // 确保所有变体都使用系统字体
    h1: { fontFamily: systemFontFamily },
    h2: { fontFamily: systemFontFamily },
    h3: { fontFamily: systemFontFamily },
    h4: { fontFamily: systemFontFamily },
    h5: { fontFamily: systemFontFamily },
    h6: { fontFamily: systemFontFamily },
    subtitle1: { fontFamily: systemFontFamily },
    subtitle2: { fontFamily: systemFontFamily },
    body1: { fontFamily: systemFontFamily },
    body2: { fontFamily: systemFontFamily },
    button: { fontFamily: systemFontFamily },
    caption: { fontFamily: systemFontFamily },
    overline: { fontFamily: systemFontFamily }
  },
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0'
    },
    secondary: {
      main: '#dc004e',
      light: '#ff5983',
      dark: '#9a0036'
    }
  },
  components: {
    // 优化MUI组件性能
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: systemFontFamily,
          // 防止字体闪烁
          fontDisplay: 'swap'
        }
      }
    }
  }
})

export default theme
