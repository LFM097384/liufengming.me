import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loading from './components/Loading'

// 懒加载页面组件
const Home = React.lazy(() => import('./pages/Home'))
const Publications = React.lazy(() => import('./pages/Publications'))
const Research = React.lazy(() => import('./pages/Research'))
const Blog = React.lazy(() => import('./pages/Blog'))
const CV = React.lazy(() => import('./pages/CV'))
const Contact = React.lazy(() => import('./pages/Contact'))

function App() {
  return (
    <>
      <Header />      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, minHeight: 'calc(100vh - 200px)' }}>
        <Suspense fallback={<Loading message="Loading page..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/research" element={<Research />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Container>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
