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
import {
  School,
  Work,
  Language,
  Code,
  Email,
  Phone,
  LocationOn,
  Article,
  Assignment
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
    programming: ["C", "Javascript", "Python", "R", "LaTeX"],
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
    <Container maxWidth="lg">      {/* Hero Section */}
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
        </LazyImage>        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
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
            <Phone color="primary" />
            <Typography variant="body2">+44 7436241983</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOn color="primary" />
            <Typography variant="body2">London, WC1E 6BT</Typography>
          </Box>
        </Box>
        
        <Typography variant="body2" sx={{ mt: 2 }}>
          ORCID iD: <a href="https://orcid.org/0009-0009-3881-496X" target="_blank" rel="noopener noreferrer">
            orcid.org/0009-0009-3881-496X
          </a>
        </Typography>
          {/* PhD Opportunity Notice */}
        <Box sx={{ 
          mt: 4, 
          p: 3, 
          bgcolor: 'primary.light', 
          borderRadius: 2,
          color: 'white',
          textAlign: 'center'
        }}>          <Typography variant="h6" gutterBottom>
            {t('hero.phd_notice.title')}
          </Typography>
          <Typography variant="body1">
            {t('hero.phd_notice.content')}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
            {t('hero.phd_notice.timing')}
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

        {/* Quick Navigation */}
        <Grid item xs={12}>
          <Card elevation={2}>
            <CardContent>              <Typography variant="h5" gutterBottom>
                {t('sections.quick_stats')}
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
                    <Typography variant="h4" gutterBottom>
                      {publications.published.length + publications.preprint.length + publications.workingPapers.length}
                    </Typography>                    <Typography variant="body1">
                      {t('stats.total_publications')}
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'success.main', color: 'white' }}>
                    <Typography variant="h4" gutterBottom>
                      {publications.published.length}
                    </Typography>                    <Typography variant="body1">
                      {t('stats.published_papers')}
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'warning.main', color: 'white' }}>
                    <Typography variant="h4" gutterBottom>
                      1+
                    </Typography>                    <Typography variant="body1">
                      {t('stats.years_research')}
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} sm={6} md={3}>
                  <Paper sx={{ p: 3, textAlign: 'center', bgcolor: 'info.main', color: 'white' }}>
                    <Typography variant="h4" gutterBottom>
                      {skills.research.length}
                    </Typography>                    <Typography variant="body1">
                      {t('stats.research_areas')}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Updates */}
      <Card elevation={2} sx={{ mt: 4 }}>
        <CardContent>          <Typography variant="h5" gutterBottom>
            {t('sections.recent_updates')}
          </Typography>
          
          <List>
            <ListItem>
              <ListItemIcon><Article color="primary" /></ListItemIcon>              <ListItemText 
                primary={t('updates.new_publication')}
                secondary={t('updates.new_publication_desc')}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><Assignment color="primary" /></ListItemIcon>              <ListItemText 
                primary={t('updates.preprint')}
                secondary={t('updates.preprint_desc')}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><Work color="primary" /></ListItemIcon>              <ListItemText 
                primary={t('updates.research_position')}
                secondary={t('updates.research_position_desc')}
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Home
