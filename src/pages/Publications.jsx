import React, { useState, useMemo } from 'react'
import {
  Typography,
  Box,
  Chip,
  Link,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material'
import SEO from '../components/SEO'
import { Search, Clear } from '@mui/icons-material'
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

/* ── Publication entry component ── */
const PubEntry = ({ pub }) => (
  <Box sx={{ mb: 4 }}>
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 0.8 }}>
      <Chip
        label={pub.status}
        size="small"
        sx={{
          bgcolor:
            pub.status === 'Published'
              ? '#e8f5e9'
              : pub.status === 'Preprint'
              ? '#fff3e0'
              : '#e3f2fd',
          color:
            pub.status === 'Published'
              ? '#2e7d32'
              : pub.status === 'Preprint'
              ? '#e65100'
              : '#1565c0',
          fontWeight: 600,
          fontSize: '0.72rem',
          height: 22,
          borderRadius: '3px',
        }}
      />
      {pub.year && (
        <Typography variant="body2" sx={{ color: '#999', fontSize: '0.8rem' }}>
          {pub.year}
        </Typography>
      )}
    </Box>

    <Typography
      variant="subtitle1"
      sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 600, lineHeight: 1.35, mb: 0.5 }}
    >
      {pub.title}
    </Typography>

    <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
      {pub.authors}
    </Typography>

    {pub.journal && (
      <Typography variant="body2" sx={{ color: '#b0413e', fontStyle: 'italic', mb: 0.3 }}>
        {pub.journal}
      </Typography>
    )}

    {pub.targetJournal && (
      <Typography variant="body2" sx={{ color: '#b0413e', fontStyle: 'italic', mb: 0.3 }}>
        {pub.targetJournal}
      </Typography>
    )}

    {pub.note && (
      <Typography variant="body2" sx={{ color: '#888', fontSize: '0.82rem', mt: 0.5 }}>
        {pub.note}
      </Typography>
    )}

    <Typography variant="body2" sx={{ color: '#999', fontSize: '0.8rem', mt: 0.5 }}>
      Corresponding Author: <strong style={{ color: '#3a3a3a' }}>{pub.correspondingAuthor}</strong>
    </Typography>

    {pub.doi && (
      <Link
        href={pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ fontSize: '0.82rem', display: 'inline-block', mt: 0.5 }}
      >
        {pub.doi.includes('arxiv') ? 'arXiv →' : 'DOI →'}
      </Link>
    )}
    {pub.ssrn && (
      <Link
        href={pub.ssrn}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ fontSize: '0.82rem', display: 'inline-block', mt: 0.5, ml: pub.doi ? 2 : 0 }}
      >
        SSRN →
      </Link>
    )}
  </Box>
)

const Publications = () => {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('')

  const publications = {
    published: [
      {
        authors: 'Shu, M., Liu, F., & Wang, S.',
        title: "How to Achieve Technological Leapfrogging: Evidence from China's Self-Strengthening Movement",
        journal: 'Cliometrica, forthcoming (accepted November 2026)',
        year: '2026',
        correspondingAuthor: 'Mingyu Shu',
        status: 'Forthcoming',
      },
      {
        authors: 'Huang, Y., Shu, M., Liu, F., Liu, B., Huang, C., & Wang, S.',
        title:
          'Nonlinear Heterogeneity Impact of El Niño-Southern Oscillation on Energy Markets: A Global Perspective Analysis',
        journal: 'Energy',
        year: '2025',
        doi: '10.1016/j.energy.2025.137475',
        correspondingAuthor: 'Baoliu Liu',
        status: 'Published',
      },
      {
        authors: 'Lin, Z., & Liu, F.',
        title:
          'Position: LLM Social-Simulation Agents in the Wild Cannot Serve as Social Scientific Evidence Without an Identification Strategy',
        journal: 'ICML 2026 Workshop on Agents in the Wild (AIWILD), non-archival',
        year: '2026',
        correspondingAuthor: 'Zezheng Lin',
        status: 'Published',
      },
    ],
    preprint: [
      {
        authors: 'Liu, F.',
        title: 'Where Language-Model Vocabulary Rose on Stack Exchange',
        year: '2026',
        doi: 'https://arxiv.org/abs/2611.15172',
        correspondingAuthor: 'Fengming Liu',
        status: 'Preprint',
      },
      {
        authors: 'Liu, F., & Shu, M.',
        title: 'Embedding Cosine Measures Text Length Before It Measures Homogenization',
        year: '2026',
        doi: 'https://arxiv.org/abs/2611.21519',
        correspondingAuthor: 'Fengming Liu',
        status: 'Preprint',
      },
      {
        authors: 'Liu, F.',
        title: 'Asymmetric Discourse Homogenization on Reddit Was a Text-Length Artifact: A Reanalysis',
        year: '2026',
        doi: 'https://arxiv.org/abs/2608.13674',
        correspondingAuthor: 'Fengming Liu',
        status: 'Preprint',
      },
      {
        authors: 'Lin, Z., Liu, F., & Li, H.',
        title:
          'The Translation Tax Is Not a Scalar: A Counterfactual Audit of English-Source Cue Inheritance in Chinese Multilingual Benchmarks',
        year: '2026',
        doi: 'https://arxiv.org/abs/2605.07093',
        correspondingAuthor: 'Zezheng Lin',
        status: 'Preprint',
      },
      {
        authors: 'Lin, Z., & Liu, F.',
        title:
          'Position: Mechanistic Interpretability Must Disclose Identification Assumptions for Causal Claims',
        year: '2026',
        doi: 'https://arxiv.org/abs/2605.08012',
        correspondingAuthor: 'Zezheng Lin',
        status: 'Preprint',
      },
      {
        authors: 'Liu, F., & Yu, S.',
        title: 'MimiTalk: Revolutionizing Qualitative Research with Dual-Agent AI',
        year: '2025',
        doi: 'https://arxiv.org/abs/2511.03731',
        ssrn: 'https://dx.doi.org/10.2139/ssrn.5120349',
        note: 'Presented by S. Yu at COMPTEXT 2026 (oral) and the Wharton Business and Gen AI Conference (2025).',
        correspondingAuthor: 'Shubin Yu',
        status: 'Preprint',
      },
    ],
    workingPapers: [],
  }
  const allPubs = [
    ...publications.published,
    ...publications.preprint,
    ...publications.workingPapers,
  ]

  const filtered = useMemo(() => {
    if (!searchQuery) return null
    const q = searchQuery.toLowerCase()
    return allPubs.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        (p.journal && p.journal.toLowerCase().includes(q)) ||
        p.status.toLowerCase().includes(q)
    )
  }, [searchQuery])

  const showFiltered = searchQuery.length > 0

  return (
    <>
      <SEO
        title="Publications"
        description="Academic publications by Fengming Liu on language models and public expression, measurement validity for text-as-data, AI-assisted qualitative research, and quantitative history."
        keywords="Fengming Liu publications, AI research papers, energy markets, MimiTalk, academic papers"
      />

      {/* Header */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
          {t('publications.title')}
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          {t('publications.subtitle')}
        </Typography>
      </Box>

      {/* Search */}
      <Box sx={{ mb: 5 }}>
        <TextField
          fullWidth
          variant="standard"
          placeholder="Search publications..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#999', fontSize: '1.1rem' }} />
              </InputAdornment>
            ),
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <IconButton onClick={() => setSearchQuery('')} size="small">
                  <Clear sx={{ fontSize: '1rem' }} />
                </IconButton>
              </InputAdornment>
            ),
            sx: { fontSize: '0.9rem', pb: 0.5 },
          }}
        />
      </Box>

      {showFiltered ? (
        <Box>
          <Typography variant="body2" sx={{ color: '#999', mb: 3 }}>
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "{searchQuery}"
          </Typography>
          {filtered.map((pub, i) => (
            <PubEntry key={i} pub={pub} />
          ))}
          {filtered.length === 0 && (
            <Typography variant="body1" sx={{ color: '#999', textAlign: 'center', py: 4 }}>
              No publications match your search.
            </Typography>
          )}
        </Box>
      ) : (
        <>
          {/* Published */}
          <Box sx={{ mb: 6 }}>
            <SectionTitle number="01" title={t('publications.published')} />
            {publications.published.map((pub, i) => (
              <PubEntry key={i} pub={pub} />
            ))}
          </Box>

          {/* Preprints */}
          <Box sx={{ mb: 6 }}>
            <SectionTitle number="02" title={t('publications.preprints')} />
            {publications.preprint.map((pub, i) => (
              <PubEntry key={i} pub={pub} />
            ))}
          </Box>

          {/* Working Papers */}
          <Box sx={{ mb: 6 }}>
            <SectionTitle number="03" title={t('publications.working_papers')} />
            {publications.workingPapers.map((pub, i) => (
              <PubEntry key={i} pub={pub} />
            ))}
          </Box>
        </>
      )}

      {/* Conference Presentations */}
      <Box sx={{ mb: 4 }}>
        <SectionTitle number="04" title="Conference Presentations" />
        {[
          {
            year: '2026',
            title: 'Quantifying Linguistic Injustice in Multilingual Foundation Model Evaluation: The Translation Tax',
            venue: '6th European Experimental Philosophy Conference',
            type: 'Presentation (presented by Z. Lin)',
          },
          {
            year: '2026',
            title: 'MimiTalk: Revolutionizing Qualitative Research with Dual-Agent AI',
            venue: 'COMPTEXT 2026 — The 8th International Interdisciplinary Conference on Computational Text Analysis',
            type: 'Oral presentation (accepted)',
          },
          {
            year: '2025',
            title: 'MimiTalk: Revolutionizing Qualitative Research with Dual-Agent AI',
            venue: 'HumanTech Summit 2025 Conference',
            type: 'Oral presentation (presented by F. Liu)',
          },
          {
            year: '2025',
            title: 'MimiTalk: Revolutionizing Qualitative Research with Dual-Agent AI',
            venue: 'Wharton "Business and Gen AI" Conference',
            type: 'Oral presentation (presented by S. Yu)',
          },
          {
            year: '2025',
            title: 'MimiTalk: Revolutionizing Qualitative Research with Dual-Agent AI',
            venue: 'Biz AI Conference: AI Applications in Business Research',
            type: 'Poster presentation',
          },
          {
            year: '2025',
            title: 'MimiTalk: Revolutionizing Qualitative Research with Dual-Agent AI',
            venue: 'AMA Summer Academic Conference 2025',
            type: 'Poster presentation',
          },
          {
            year: '2025',
            title: "Cannon to Kilowatts: The Enduring Legacy of the Self-Strengthening Movement on China's Electrification",
            venue: 'The Eleventh Annual Symposium on Quantitative History',
            type: 'Oral presentation (presented by M. Shu)',
          },
        ].map((conf, i) => (
          <Box key={i} sx={{ mb: 2.5, display: 'flex', gap: 2 }}>
            <Typography
              variant="body2"
              sx={{
                color: '#b0413e',
                fontWeight: 600,
                fontSize: '0.8rem',
                minWidth: 36,
                pt: 0.2,
              }}
            >
              {conf.year}
            </Typography>
            <Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, lineHeight: 1.5 }}
              >
                "{conf.title}"
              </Typography>
              <Typography variant="body2" sx={{ color: '#888', fontSize: '0.82rem' }}>
                {conf.venue}. <em>{conf.type}</em>
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Publications
