import React from 'react'
import { Typography, Box, Grid, Chip } from '@mui/material'
import SEO from '../components/SEO'
import SectionTitle from '../components/SectionTitle'
import { useTranslation } from 'react-i18next'

const Research = () => {
  const { t } = useTranslation()

  const areas = [
    {
      area: 'AI-Augmented Qualitative Research',
      description:
        'Developing AI tools that enhance qualitative data collection and analysis, including dual-agent interview systems and automated coding frameworks.',
    },
    {
      area: 'Computational Text Analysis',
      description:
        'Applying NLP and computational methods to analyze political discourse, media narratives, and large-scale text corpora in social science contexts.',
    },
    {
      area: 'Political Economy of Technology',
      description:
        'Examining how technological change shapes political institutions, economic structures, and power relations in contemporary societies.',
    },
    {
      area: 'Consumer Behavior in Digital Markets',
      description:
        'Investigating how digital platforms and AI mediation influence consumer decision-making processes and market dynamics.',
    },
    {
      area: 'Quantitative History',
      description:
        'Applying quantitative methods to historical research, particularly in understanding long-term economic and social transformations.',
    },
    {
      area: 'Financial Markets & Risk Analysis',
      description:
        'Analyzing economic systems and financial market dynamics using advanced mathematical and statistical frameworks.',
    },
  ]

  const currentProjects = [
    {
      title: 'MimiTalk: Dual-Agent AI Interview Platform',
      role: 'Co-developer & Lead Author',
      supervisor: 'Dr. Shubin Yu (BI Norwegian Business School & HEC Paris)',
      description:
        'Developing an AI-powered platform for conducting qualitative research interviews using a dual-agent architecture.',
    },
    {
      title: 'Political Discourse on Social Media',
      role: 'Research Assistant',
      supervisor: 'Dr. Handi Li (University College London)',
      description:
        'Quantitative analysis of political discourse patterns on social media platforms.',
    },
    {
      title: "Self-Strengthening Movement & China's Electrification",
      role: 'Research Assistant',
      supervisor: 'Dr. Shun Wang (Anhui University)',
      description:
        'Investigating the long-term legacy of 19th-century industrialization on modern infrastructure development.',
    },
  ]

  return (
    <>
      <SEO
        title="Research"
        description="Research interests of Fengming Liu: AI-augmented qualitative methods, computational text analysis, political economy of technology."
        keywords="Fengming Liu research, AI qualitative methods, computational text analysis, political economy"
      />

      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
          {t('research.title')}
        </Typography>
      </Box>

      {/* Research Areas */}
      <Box sx={{ mb: 6 }}>
        <SectionTitle number="01" title={t('research.research_interests')} />
        <Grid container spacing={3}>
          {areas.map((a, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Typography
                variant="subtitle1"
                sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 600, mb: 0.5 }}
              >
                {a.area}
              </Typography>
              <Typography variant="body2" sx={{ color: '#3a3a3a', lineHeight: 1.65 }}>
                {a.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Current Projects */}
      <Box>
        <SectionTitle number="02" title={t('research.current_projects')} />
        {currentProjects.map((p, i) => (
          <Box key={i} sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 600, lineHeight: 1.3 }}
            >
              {p.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', mb: 0.3 }}>
              {p.role} · {p.supervisor}
            </Typography>
            <Typography variant="body2" sx={{ color: '#3a3a3a', lineHeight: 1.6 }}>
              {p.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Research
