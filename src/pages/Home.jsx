import React from 'react'
import {
  Typography,
  Box,
  Grid,
  Chip,
  Link,
  Divider,
} from '@mui/material'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'
import { getStaticPath } from '../utils/paths'
import LazyImage from '../components/LazyImage'

/* ─── Reusable section title matching poster aesthetic ─── */
const SectionTitle = ({ number, title }) => (
  <Typography
    variant="h5"
    sx={{
      fontFamily: '"EB Garamond", serif',
      fontWeight: 700,
      fontSize: '1.15rem',
      mb: 2,
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

const Home = () => {
  const { t } = useTranslation()

  const researchInterests = [
    'AI-Augmented Qualitative Methods',
    'Computational Text Analysis',
    'Political Economy of Technology',
    'Consumer Behavior in Digital Markets',
  ]

  const education = [
    {
      period: '2023 – 2026 (expected)',
      degree: 'BSc Philosophy, Politics and Economics',
      institution: 'University College London',
      department: 'Department of Political Science',
    },
    {
      period: '2020 – 2023',
      degree: 'High School Diploma',
      institution: 'Experimental High School Attached to Beijing Normal University',
    },
  ]

  const experience = [
    {
      period: '2025 – Present',
      position: 'Research Assistant',
      institution: 'University College London',
      supervisor: 'Dr. Handi Li',
      project: 'Quantitative Analysis of Political Discourse on Social Media',
    },
    {
      period: '2024 – Present',
      position: 'Research Assistant',
      institution: 'BI Norwegian Business School & HEC Paris',
      supervisor: 'Dr. Shubin Yu',
      project: 'Generative AI for Research Initiative',
      link: 'https://www.gaiforresearch.com/about',
      details:
        'Conducted interviews, designed questionnaires, co-developed mimitalk.app, drafted papers.',
    },
    {
      period: '2024 – 2026',
      position: 'Research Assistant',
      institution: 'Anhui University',
      supervisor: 'Dr. Shun Wang',
      project: 'Data collection and processing, literature review and synthesis.',
    },
  ]

  const skills = {
    languages: ['Mandarin (Native)', 'English (Fluent)', 'French (Basic)'],
    programming: ['C', 'Javascript', 'Python', 'SQL', 'LaTeX', 'AI-assisted Development'],
  }

  return (
    <>
      <SEO
        title="Home"
        description="Fengming Liu – Academic researcher specializing in AI-augmented qualitative research, computational text analysis, and political economy of technology. BSc PPE at University College London."
        keywords="Fengming Liu, AI Research, Computational Text Analysis, Political Economy, Social Science, PPE, UCL"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Fengming Liu',
          jobTitle: 'Research Assistant',
          worksFor: [
            { '@type': 'Organization', name: 'University College London' },
            { '@type': 'Organization', name: 'BI Norwegian Business School' },
          ],
          alumniOf: { '@type': 'Organization', name: 'University College London' },
        }}
      />

      {/* ── HERO ── */}
      <Box sx={{ mb: 8 }}>
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 3, md: 5 },
            alignItems: { xs: 'center', md: 'flex-end' },
            flexDirection: { xs: 'column', md: 'row' },
            mb: 4,
          }}
        >
          <LazyImage
            src={getStaticPath('Images/b71f54d23e1517e62a9235a7760e265.jpg')}
            alt="Fengming Liu"
            sx={{
              width: { xs: 120, md: 140 },
              height: { xs: 120, md: 140 },
              borderRadius: '50%',
              border: '3px solid #e0dcd6',
              flexShrink: 0,
            }}
          />
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontSize: { xs: '2.2rem', md: '2.8rem' }, mb: 0.5 }}
            >
              {t('hero.title')}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"EB Garamond", serif',
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#666',
                mb: 1,
              }}
            >
              {t('hero.subtitle')}
            </Typography>
            <Typography variant="body2" sx={{ color: '#888' }}>
              {t('hero.institution')}
            </Typography>

            {/* Contact row */}
            <Box
              sx={{
                mt: 1.5,
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Link
                href="mailto:liu_fengming@outlook.com"
                sx={{ fontSize: '0.85rem', color: '#888', '&:hover': { color: '#b0413e' } }}
              >
                liu_fengming@outlook.com
              </Link>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                ·
              </Typography>
              <Link
                href="https://orcid.org/0009-0009-3881-496X"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontSize: '0.85rem', color: '#888', '&:hover': { color: '#b0413e' } }}
              >
                ORCID: 0009-0009-3881-496X
              </Link>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: '#2c2c2c', borderWidth: 1.5 }} />
      </Box>

      {/* ── RESEARCH INTERESTS ── */}
      <Box sx={{ mb: 6 }}>
        <SectionTitle number="01" title={t('sections.research_interests')} />
        <Typography variant="body1" sx={{ mb: 2 }}>
          {t('hero.research_summary')}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
          {researchInterests.map((interest, i) => (
            <Chip
              key={i}
              label={interest}
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

      {/* ── MIMITALK HIGHLIGHT ── */}
      <Box
        component="a"
        href="https://mimitalk.app"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'block',
          mb: 6,
          p: 3,
          bgcolor: '#f0edea',
          border: '1.5px solid #c4b8a8',
          borderRadius: 1,
          textDecoration: 'none',
          transition: 'all 0.2s ease',
          '&:hover': { borderColor: '#b0413e', transform: 'translateY(-1px)' },
        }}
      >
        <Typography variant="overline" sx={{ color: '#b0413e', mb: 0.5, display: 'block' }}>
          FEATURED PROJECT
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontFamily: '"EB Garamond", serif', color: '#1a1a1a', mb: 1 }}
        >
          MimiTalk — AI-Powered Interview Platform
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          {t('hero.mimitalk_desc')}
        </Typography>
      </Box>

      {/* ── EDUCATION & EXPERIENCE ── */}
      <Grid container spacing={6} sx={{ mb: 6 }}>
        <Grid item xs={12} md={5}>
          <SectionTitle number="02" title={t('sections.education')} />
          {education.map((edu, i) => (
            <Box key={i} sx={{ mb: 3 }}>
              <Typography
                variant="body2"
                sx={{ color: '#b0413e', fontWeight: 600, fontSize: '0.8rem', mb: 0.3 }}
              >
                {edu.period}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: '"EB Garamond", serif',
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {edu.degree}
              </Typography>
              <Typography variant="body2" sx={{ color: '#888' }}>
                {edu.institution}
              </Typography>
              {edu.department && (
                <Typography variant="body2" sx={{ color: '#888' }}>
                  {edu.department}
                </Typography>
              )}
            </Box>
          ))}
        </Grid>

        <Grid item xs={12} md={7}>
          <SectionTitle number="03" title={t('sections.experience')} />
          {experience.map((exp, i) => (
            <Box key={i} sx={{ mb: 3 }}>
              <Typography
                variant="body2"
                sx={{ color: '#b0413e', fontWeight: 600, fontSize: '0.8rem', mb: 0.3 }}
              >
                {exp.period}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: '"EB Garamond", serif',
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {exp.position}, {exp.institution}
              </Typography>
              <Typography variant="body2" sx={{ color: '#888' }}>
                Supervisor: {exp.supervisor}
              </Typography>
              <Typography variant="body2" sx={{ color: '#3a3a3a', mt: 0.5 }}>
                {exp.project}
              </Typography>
              {exp.details && (
                <Typography
                  variant="body2"
                  sx={{ color: '#666', fontStyle: 'italic', mt: 0.3 }}
                >
                  {exp.details}
                </Typography>
              )}
              {exp.link && (
                <Link
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontSize: '0.82rem' }}
                >
                  Project Website →
                </Link>
              )}
            </Box>
          ))}
        </Grid>
      </Grid>

      {/* ── SKILLS ── */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle number="04" title={t('sections.skills')} />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="overline" sx={{ color: '#888', mb: 1, display: 'block' }}>
              {t('sections.languages')}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skills.languages.map((lang, i) => (
                <Chip
                  key={i}
                  label={lang}
                  size="small"
                  sx={{ bgcolor: '#f0edea', border: 'none' }}
                />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="overline" sx={{ color: '#888', mb: 1, display: 'block' }}>
              {t('sections.programming')}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skills.programming.map((skill, i) => (
                <Chip
                  key={i}
                  label={skill}
                  size="small"
                  variant="outlined"
                  sx={{ borderColor: '#c4b8a8' }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
