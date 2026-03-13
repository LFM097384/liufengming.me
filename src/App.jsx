import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loading from './components/Loading'

// 懒加载页面组件
const Home = React.lazy(() => import('./pages/Home'))
const Publications = React.lazy(() => import('./pages/Publications'))
const Research = React.lazy(() => import('./pages/Research'))
const CV = React.lazy(() => import('./pages/CV'))
const Contact = React.lazy(() => import('./pages/Contact'))

function App() {
  return (
    <HelmetProvider>
      <Header />
      <Box 
        component="main" 
        sx={{ 
          maxWidth: 960, 
          mx: 'auto', 
          px: { xs: 2, sm: 3, md: 4 }, 
          py: { xs: 4, md: 6 },
          minHeight: 'calc(100vh - 200px)',
        }}
      >
        <Suspense fallback={<Loading message="Loading..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/research" element={<Research />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Box>
      <Footer />
      <ScrollToTop />
    </HelmetProvider>
  )
}

export default App
