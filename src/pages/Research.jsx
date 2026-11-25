import React from 'react'
import { Typography, Box, Grid, Chip } from '@mui/material'
import SEO from '../components/SEO'
import SectionTitle from '../components/SectionTitle'
import { useTranslation } from 'react-i18next'

const Research = () => {
  const { t } = useTranslation()

  const areas = [
    {
      area: 'Language Models and Public Expression',
      description:
        'Measuring how language models change the diversity of public and political expression, from individual drafting to whole communities.',
    },
    {
      area: 'Measurement Validity and Identification',
      description:
        'When text-as-data measures and AI-based evidence can be trusted, from length artifacts in embedding similarity to identification strategies for LLM simulations and interpretability claims.',
    },
    {
      area: 'AI-Assisted Qualitative Methods',
      description:
        'Building and studying AI interviewers, and what changes in what people say when they know a machine is listening.',
    },
    {
      area: 'Technology, Discourse and Value',
      description:
        'How the systems that carry public discourse shape what people value, read through intellectual history, critical theory and psychoanalysis.',
    },
  ]

  const currentProjects = [
    {
      title: 'Where Language-Model Vocabulary Rose on Stack Exchange',
      role: 'Solo Author',
      supervisor: 'arXiv:2611.15172',
      description:
        'Across 3.8 million answers on 170 Stack Exchange sites, words typical of language models rose most where authors seldom revised their own answers and hardly at all where self-revision was routine.',
    },
    {
      title: 'Embedding Cosine Measures Text Length Before It Measures Homogenization',
      role: 'With Mingyu Shu',
      supervisor: 'arXiv:2611.21519',
      description:
        'Documents how far the length dependence of average pairwise cosine similarity reaches across embedding models, and what researchers can do about it. Builds on my reanalysis of partisan Reddit discourse (arXiv:2608.13674).',
    },
    {
      title: 'Qualitati: AI-Powered Qualitative Research Platform',
      role: 'Co-founder & Lead Developer',
      supervisor: 'Generative AI for Research Initiative (with Dr. Shubin Yu, HEC Paris)',
      description:
        'AI-moderated interviews, focus groups, and conversational surveys at scale, with an automated thematic-analysis pipeline. Research paper (MimiTalk) presented at COMPTEXT 2026 and the Wharton Business and Gen AI conference.',
    },
    {
      title: 'Political Discourse on Weibo',
      role: 'Research Assistant',
      supervisor: 'Dr. Handi Li (University College London)',
      description:
        'Quantitative analysis of political discourse on Weibo and auditing of Chinese-language LLM benchmarks.',
    },
    {
      title: 'Language-Model Agents for the Study of Science',
      role: 'Research Assistant',
      supervisor: 'Dr. Robert Ward (Knowledge Lab, University of Chicago)',
      description: 'Early-stage work at the Knowledge Lab.',
    },
  ]
  return (
    <>
      <SEO
        title="Research"
        description="Research interests of Fengming Liu: how language models change the diversity of public and political expression, measurement validity for text-as-data, and AI-assisted qualitative methods."
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
