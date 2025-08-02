import React from 'react'
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper
} from '@mui/material'
import SEO from '../components/SEO'
import {
  School,
  Work,
  Language,
  Code,
  Email,
  Phone,
  LocationOn,
  Launch,
  Star
} from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { getStaticPath } from '../utils/paths'
import LazyImage from '../components/LazyImage'

const Home = () => {
  const { t } = useTranslation()
  
  const education = [
    {
      period: "2023 – Present",
      degree: "BSc Philosophy, Politics and Economics",
      institution: "University College London",
      department: "Department of Political Science"
    },
    {
      period: "2020 – 2023",
      degree: "High School Diploma",
      institution: "Experimental High School Attached to Beijing Normal University"
    }
  ]

  const experience = [
    {
      period: "2024 – Present",
      position: "Research Assistant",
      institution: "BI Norwegian Business School",
      supervisor: "Dr. Shubin Yu",
      project: "Impact of AI on Academic Inequality",
      responsibilities: [
        "Conducted interviews",
        "Designed questionnaires",
        "Built an online interview platform",
        "Drafted papers"
      ]
    }
  ]

  const skills = {
    languages: ["Mandarin (Native)", "English (Fluent)", "French (Basic)"],
    programming: ["C", "Javascript", "Python", "R", "LaTeX","SQL"],
    research: ["AI Application", "Political Economy", "Social Science", "Quantitative History"]
  }
  // Publications data for statistics
  const publications = {
    published: [
      {
        title: "The Risk Transmission Mechanism of Global Stock Markets from the Perspective of Entropy-Riemann Geometry: Theoretical Construction and Empirical Analysis"
      }
    ],
    preprint: [
      {
        title: "Step Further Towards Automated Social Science: An AI-Powered Interview Platform"
      }
    ],
    workingPapers: [
      {
        title: "Consumer Research in the Age of Generative AI: Comparing AI and Human Interview Performance"
      }
    ]
  }

  return (
    <>
      <SEO 
        title="Home"
        description="Fengming Liu - Academic researcher specializing in AI applications in business and social science. BSc Philosophy, Politics and Economics student at University College London."
        keywords="Fengming Liu, AI Research, Consumer Decision-Making, AI Transparency, Social Science Research, Philosophy Politics Economics, PPE, UCL, Academic Research"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Fengming Liu",
          "jobTitle": "Research Assistant",
          "worksFor": {
            "@type": "Organization",
            "name": "BI Norwegian Business School"
          },
          "alumniOf": {
            "@type": "Organization", 
            "name": "University College London"
          },
          "knowsAbout": [
            "AI Research",
            "Consumer Decision-Making", 
            "AI Transparency",
            "Social Science Research"
          ]
        }}
      />
      <Container maxWidth="lg">
        {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6, py: 4 }}>        <LazyImage
          src={getStaticPath("Images/b71f54d23e1517e62a9235a7760e265.jpg")}
          alt="Fengming Liu"
          sx={{
            width: 150,
            height: 150,
            mx: 'auto',
            mb: 3,
            bgcolor: 'primary.main',
            fontSize: '3rem'
          }}
        >
          FL
        </LazyImage>        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }} role="heading" aria-level="1">
          {t('hero.title')}
        </Typography>
        
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {t('hero.subtitle')}
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {t('hero.institution')}
        </Typography>
        
        {/* Contact Info */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Email color="primary" />
            <Typography variant="body2">leo.liu.23@ucl.ac.uk</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Email color="primary" />
            <Typography variant="body2">liu_fengming@outlook.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Phone color="primary" />
            <Typography variant="body2">+44 7436241983</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOn color="primary" />
            <Typography variant="body2">London, WC1E 6BT</Typography>
          </Box>
        </Box>        <Typography variant="body2" sx={{ mt: 2 }}>
          ORCID iD: <a href="https://orcid.org/0009-0009-3881-496X" target="_blank" rel="noopener noreferrer">
            orcid.org/0009-0009-3881-496X
          </a>
        </Typography>

        {/* Mimitalk Project Highlight */}
        <Box 
          component="a"
          href="https://mimitalk.app"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ 
            mt: 3, 
            p: 2, 
            bgcolor: 'primary.main', 
            color: 'white',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            '&:hover': {
              bgcolor: 'primary.dark',
              transform: 'translateY(-2px)',
              boxShadow: 3
            }
          }}
        >
          <Star />
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'inherit' }}>
            🎯 Mimitalk - AI-Powered Interview Platform
          </Typography>
          <Launch />
        </Box>{/* Personal Introduction */}
        <Box sx={{ 
          mt: 4, 
          p: 3, 
          bgcolor: 'background.paper', 
          borderRadius: 2,
          border: 1,
          borderColor: 'divider',
          textAlign: 'left'
        }}>
          <Typography variant="h6" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
            {t('hero.personal_intro.title')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('hero.personal_intro.paragraph1')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('hero.personal_intro.paragraph2')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('hero.personal_intro.paragraph3')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('hero.personal_intro.paragraph4')}
          </Typography>
          <Typography variant="body1">
            {t('hero.personal_intro.paragraph5')}
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* Education */}
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <School color="primary" />
                {t('sections.education')}
              </Typography>
              {education.map((edu, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {edu.degree}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {edu.institution}
                  </Typography>
                  {edu.department && (
                    <Typography variant="body2" color="text.secondary">
                      {edu.department}
                    </Typography>
                  )}
                  <Typography variant="body2" color="primary">
                    {edu.period}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Research Experience */}
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Work color="primary" />
                {t('sections.experience')}
              </Typography>
              {experience.map((exp, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {exp.position}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exp.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Supervisor: {exp.supervisor}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Project: {exp.project}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
                    {exp.period}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    Responsibilities:
                  </Typography>
                  <List dense>
                    {exp.responsibilities.map((resp, idx) => (
                      <ListItem key={idx} sx={{ py: 0 }}>
                        <ListItemText primary={`• ${resp}`} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Skills */}
        <Grid item xs={12}>
          <Card elevation={2}>
            <CardContent>              <Typography variant="h5" gutterBottom>
                {t('sections.skills')}
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Paper sx={{ p: 2, bgcolor: 'background.default' }}>                    <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Language color="primary" />
                      {t('sections.languages')}
                    </Typography>
                    {skills.languages.map((lang, index) => (
                      <Chip key={index} label={lang} sx={{ m: 0.5 }} />
                    ))}
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Paper sx={{ p: 2, bgcolor: 'background.default' }}>                    <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Code color="primary" />
                      {t('sections.programming')}
                    </Typography>
                    {skills.programming.map((skill, index) => (
                      <Chip key={index} label={skill} sx={{ m: 0.5 }} color="primary" variant="outlined" />
                    ))}
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Paper sx={{ p: 2, bgcolor: 'background.default' }}>                    <Typography variant="h6" gutterBottom>
                      {t('sections.research_interests')}
                    </Typography>
                    {skills.research.map((interest, index) => (
                      <Chip key={index} label={interest} sx={{ m: 0.5 }} color="secondary" variant="outlined" />
                    ))}
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default Home
