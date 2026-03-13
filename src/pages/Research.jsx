import React from 'react'
import {
  Typography,
  Box,
  Grid,
  Chip,
  Divider,
  Link,
} from '@mui/material'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

/* ── Section title ── */
const SectionTitle = ({ number, title }) => (
  <Typography
    variant="h5"
    sx={{
      fontFamily: '"EB Garamond", serif',
      fontWeight: 700,
      fontSize: '1.15rem',
      mb: 2.5,
      pb: 1,
      borderBottom: '1px solid #ddd',
    }}
  >
    <Box
      component="span"
      sx={{
        fontFamily: '"IBM Plex Sans", sans-serif',
        fontSize: '0.78rem',
        fontWeight: 600,
        color: '#b0413e',
        mr: 1.5,
      }}
    >
      {number}
    </Box>
    {title}
  </Typography>
)

const Research = () => {
  const { t } = useTranslation()

  const researchAreas = [
    {
      area: 'AI-Augmented Qualitative Research',
      description:
        'Developing AI tools that enhance qualitative data collection and analysis, including dual-agent interview systems and automated coding frameworks.',
      projects: ['MimiTalk Platform', 'Dual-Agent AI Systems'],
    },
    {
      area: 'Computational Text Analysis',
      description:
        'Applying NLP and computational methods to analyze political discourse, media narratives, and large-scale text corpora in social science contexts.',
      projects: ['Political Discourse on Social Media', 'Text Mining Methods'],
    },
    {
      area: 'Political Economy of Technology',
      description:
        'Examining how technological change shapes political institutions, economic structures, and power relations in contemporary societies.',
      projects: ['Historical Economic Development', 'Institutional Analysis'],
    },
    {
      area: 'Consumer Behavior in Digital Markets',
      description:
        'Investigating how digital platforms and AI mediation influence consumer decision-making processes and market dynamics.',
      projects: ['AI-Mediated Consumer Choice', 'Digital Market Dynamics'],
    },
    {
      area: 'Quantitative History',
      description:
        'Applying quantitative methods to historical research, particularly in understanding long-term economic and social transformations.',
      projects: ["China's Electrification History", 'Long-term Development Studies'],
    },
    {
      area: 'Financial Markets & Risk Analysis',
      description:
        'Analyzing economic systems and financial market dynamics using advanced mathematical and statistical frameworks.',
      projects: ['Market Risk Transmission', 'Energy Market Studies'],
    },
  ]

  const methodologies = [
    'Natural Language Processing',
    'Machine Learning',
    'Quantitative Analysis',
    'Qualitative Interviews',
    'Mixed Methods',
    'Econometric Modeling',
    'Computational Text Analysis',
    'Historical Data Analysis',
  ]

  const collaborations = [
    {
      institution: 'University College London',
      person: 'Dr. Handi Li',
      focus: 'Political Discourse Analysis',
    },
    {
      institution: 'BI Norwegian Business School & HEC Paris',
      person: 'Dr. Shubin Yu',
      focus: 'Generative AI for Research',
    },
    {
      institution: 'Anhui University',
      person: 'Dr. Shun Wang',
      focus: 'Economic History & Data Analysis',
    },
  ]

  return (
    <>
      <SEO
        title="Research"
        description="Research interests and methodologies of Fengming Liu including AI-augmented qualitative methods, computational text analysis, and political economy of technology."
        keywords="Fengming Liu research, AI qualitative methods, computational text analysis, political economy, consumer behavior"
      />

      {/* Header */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
          {t('research.title')}
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          {t('research.subtitle')}
        </Typography>
      </Box>

      {/* Research Overview */}
      <Box
        sx={{
          mb: 6,
          p: 3,
          bgcolor: '#f0edea',
          border: '1.5px solid #c4b8a8',
          borderRadius: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"EB Garamond", serif',
            color: '#b0413e',
            mb: 1.5,
            pb: 1,
            borderBottom: '1px solid #c4b8a8',
          }}
        >
          Research Focus
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          My research centers on AI-augmented qualitative research methods, computational text
          analysis, political economy of technology, and consumer behavior in digitally mediated
          markets. Through interdisciplinary approaches that bridge computational tools and social
          science theory, I aim to develop practical solutions that advance empirical research while
          maintaining methodological rigor.
        </Typography>
      </Box>

      {/* Research Areas */}
      <Box sx={{ mb: 6 }}>
        <SectionTitle number="01" title={t('research.research_interests')} />
        <Grid container spacing={4}>
          {researchAreas.map((area, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: '"EB Garamond", serif',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    mb: 0.8,
                  }}
                >
                  {area.area}
                </Typography>
                <Typography variant="body2" sx={{ color: '#3a3a3a', mb: 1, lineHeight: 1.6 }}>
                  {area.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {area.projects.map((proj, j) => (
                    <Chip
                      key={j}
                      label={proj}
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: '#c4b8a8', fontSize: '0.75rem', height: 24 }}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Methodologies */}
      <Box sx={{ mb: 6 }}>
        <SectionTitle number="02" title={t('research.methodologies')} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {methodologies.map((method, i) => (
            <Chip
              key={i}
              label={method}
              variant="outlined"
              sx={{
                borderColor: '#c4b8a8',
                color: '#3a3a3a',
                fontWeight: 500,
                '&:hover': { borderColor: '#b0413e', color: '#b0413e' },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Collaborations */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle number="03" title={t('research.collaborations')} />
        {collaborations.map((collab, i) => (
          <Box key={i} sx={{ mb: 2.5 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 600, lineHeight: 1.3 }}
            >
              {collab.institution}
            </Typography>
            <Typography variant="body2" sx={{ color: '#888' }}>
              {collab.person} — {collab.focus}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Research
