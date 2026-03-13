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
        DOI →
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
        authors: 'Shu, M., Wang, C., Liu, F. et al.',
        title:
          'The Risk Transmission Mechanism of Global Stock Markets from the Perspective of Entropy-Riemann Geometry: Theoretical Construction and Empirical Analysis',
        journal: 'Computational Economics',
        year: '2025',
        doi: '10.1007/s10614-025-10913-4',
        correspondingAuthor: 'Fengming Liu',
        status: 'Published',
      },
    ],
    preprint: [
      {
        authors: 'Liu, F., & Yu, S.',
        title: 'MimiTalk: Revolutionizing Qualitative Research with Dual-Agent AI',
        year: '2025',
        doi: '10.48550/arXiv.2511.03731',
        ssrn: 'https://dx.doi.org/10.2139/ssrn.5120349',
        note: 'Designated as a Recent Top Paper by SSRN (Frontiers in Information Systems Research & Applications eJournal), April 2025.',
        correspondingAuthor: 'Shubin Yu',
        status: 'Preprint',
      },
    ],
    workingPapers: [
      {
        authors: 'Shu, M., Liu, F., & Wang, S.',
        title:
          "Cannon to Kilowatts: The Enduring Legacy of the Self-Strengthening Movement on China's Electrification",
        targetJournal: 'R&R at Cliometrica',
        correspondingAuthor: 'Mingyu Shu',
        status: 'Working Paper',
      },
    ],
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
        description="Academic publications by Fengming Liu including research on energy markets, financial risk transmission, and AI-powered qualitative research."
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
