import React from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Paper
} from '@mui/material'
import {
  Psychology,
  Computer,
  Group,
  Assignment,
  TrendingUp,
  Science,
  Public,
  BusinessCenter,
  School
} from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const Research = () => {
  const { t } = useTranslation()

  const currentProject = {
    title: "Impact of AI on Academic Inequality",
    institution: "BI Norwegian Business School",
    supervisor: "Dr. Shubin Yu",
    period: "2024 – Present",
    description: "Investigating how artificial intelligence technologies affect academic inequality across different institutions and demographics, with a focus on applications in business and social science education.",
    activities: [
      "Conducted structured interviews with academic professionals",
      "Designed comprehensive questionnaires for data collection",
      "Built an online interview platform for remote data gathering",
      "Drafted academic papers for publication",
      "Analyzed data using quantitative and qualitative methods"
    ]
  }

  const researchInterests = [
    {
      area: "AI in Business Education",
      icon: <BusinessCenter />,
      description: "Exploring how artificial intelligence can transform business education methodologies and improve learning outcomes in commercial disciplines.",
      projects: ["AI-Powered Business Case Analysis", "Automated Financial Research Tools"]
    },
    {
      area: "AI in Social Science Research",
      icon: <School />,
      description: "Developing AI applications to enhance social science research methodologies and data analysis capabilities.",
      projects: ["AI-Powered Interview Platform", "Automated Social Science Research", "Consumer Research with AI"]
    },
    {
      area: "Digital Transformation in Academia",
      icon: <Computer />,
      description: "Studying the impact of digital technologies on academic institutions and research practices.",
      projects: ["Academic Inequality Studies", "Technology Adoption in Universities"]
    }
  ]
  const methodologies = [
    "AI & Machine Learning",
    "Quantitative Analysis",
    "Qualitative Research", 
    "Mixed Methods",
    "Data Mining",
    "Statistical Modeling",
    "Interview Platform Development",
    "Business Research Methods"
  ]

  const collaborations = [
    {
      institution: "BI Norwegian Business School",
      collaborators: ["Dr. Shubin Yu"],
      projects: ["AI Impact on Academic Inequality"]
    },
    {
      institution: "Various International Institutions",
      collaborators: ["Dr. Baoliu Liu", "M. Shu", "C. Wang", "S. Wang"],
      projects: ["Economic & Financial Market Analysis", "Historical Studies"]
    }
  ]

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>        <Typography variant="h3" component="h1" gutterBottom>
          {t('research.title')}
        </Typography>        <Typography variant="body1" color="text.secondary">
          {t('research.subtitle')}
        </Typography>
      </Box>

      {/* Current Research Project */}
      <Card elevation={2} sx={{ mb: 4 }}>
        <CardContent>          <Typography variant="h4" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Psychology />
            {t('research.current_projects')}
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            {currentProject.title}
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>Institution:</strong> {currentProject.institution}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Supervisor:</strong> {currentProject.supervisor}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Period:</strong> {currentProject.period}
            </Typography>
          </Box>
            <Typography variant="body1" paragraph>
            {currentProject.description}
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            Research Activities:
          </Typography>
          <List>
            {currentProject.activities.map((activity, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Assignment color="primary" />
                </ListItemIcon>
                <ListItemText primary={activity} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Research Interests */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Science />
          Research Interests
        </Typography>
        
        <Grid container spacing={3}>
          {researchInterests.map((interest, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card elevation={1} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {interest.icon}
                    {interest.area}
                  </Typography>
                  
                  <Typography variant="body2" paragraph>
                    {interest.description}
                  </Typography>
                  
                  <Typography variant="subtitle2" gutterBottom>
                    Related Projects:
                  </Typography>
                  {interest.projects.map((project, idx) => (
                    <Chip key={idx} label={project} size="small" sx={{ m: 0.5 }} variant="outlined" />
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container spacing={4}>
        {/* Research Methodologies */}
        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Computer color="primary" />
                Research Methodologies
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {methodologies.map((method, index) => (
                  <Chip key={index} label={method} color="primary" variant="outlined" />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Collaborations */}
        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Public color="primary" />
                Research Collaborations
              </Typography>
              
              {collaborations.map((collab, index) => (
                <Paper key={index} sx={{ p: 2, mb: 2, bgcolor: 'background.default' }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {collab.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Collaborators: {collab.collaborators.join(', ')}
                  </Typography>
                  <Typography variant="body2">
                    Projects: {collab.projects.join(', ')}
                  </Typography>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>      {/* Research Impact */}
      <Card elevation={2} sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Research Focus & Future Directions
          </Typography>
          
          <Typography variant="body1" paragraph>
            My research centers on the transformative applications of artificial intelligence in business and social science contexts. 
            I focus on developing AI-powered tools and methodologies that can enhance research capabilities, improve educational outcomes, 
            and address inequality in academic access and opportunity.
          </Typography>
          
          <Typography variant="body1" paragraph>
            Through interdisciplinary approaches that bridge technology and social sciences, I aim to create practical solutions 
            that benefit both academic institutions and the broader business community. My work emphasizes the ethical implementation 
            of AI technologies in educational and research environments.
          </Typography>
          
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Key Research Objectives:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><BusinessCenter color="primary" /></ListItemIcon>
                <ListItemText primary="Advance AI applications in business education and research" />
              </ListItem>
              <ListItem>
                <ListItemIcon><School color="primary" /></ListItemIcon>
                <ListItemText primary="Enhance social science research methodologies through technology" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Group color="primary" /></ListItemIcon>
                <ListItemText primary="Promote academic equality and accessibility through digital innovation" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Computer color="primary" /></ListItemIcon>
                <ListItemText primary="Develop ethical AI frameworks for academic applications" />
              </ListItem>
            </List>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Research
