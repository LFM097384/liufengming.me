import React from 'react'
import {
  Typography,
  Box,
  Grid,
  Link,
  Button,
  Divider,
} from '@mui/material'
import SEO from '../components/SEO'
import { Email } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

/* ── Section title ── */
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

const Contact = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title="Contact"
        description="Contact information for Fengming Liu – researcher at University College London."
        keywords="Fengming Liu contact, UCL, research collaboration"
      />

      {/* Header */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
          {t('contact.title')}
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          {t('contact.subtitle')}
        </Typography>
      </Box>

      <Grid container spacing={6} sx={{ mb: 6 }}>
        {/* Contact Info */}
        <Grid item xs={12} md={6}>
          <SectionTitle number="01" title={t('contact.info_title')} />

          <Box sx={{ mb: 2.5 }}>
            <Typography variant="overline" sx={{ color: '#888', display: 'block', mb: 0.3 }}>
              Email
            </Typography>
            <Link href="mailto:liu_fengming@outlook.com" sx={{ fontSize: '0.95rem' }}>
              liu_fengming@outlook.com
            </Link>
          </Box>

          <Box sx={{ mb: 2.5 }}>
            <Typography variant="overline" sx={{ color: '#888', display: 'block', mb: 0.3 }}>
              Phone
            </Typography>
            <Typography variant="body2">+44 7436 241983</Typography>
          </Box>

          <Box sx={{ mb: 2.5 }}>
            <Typography variant="overline" sx={{ color: '#888', display: 'block', mb: 0.3 }}>
              Address
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              Department of Political Science
              <br />
              University College London
              <br />
              Gower Street, London WC1E 6BT
              <br />
              United Kingdom
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<Email />}
            href="mailto:liu_fengming@outlook.com"
            sx={{ mt: 1, px: 3 }}
          >
            {t('contact.send_email')}
          </Button>
        </Grid>

        {/* Academic Profiles */}
        <Grid item xs={12} md={6}>
          <SectionTitle number="02" title={t('contact.academicProfiles')} />

          <Box sx={{ mb: 2.5 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 600 }}
            >
              ORCID
            </Typography>
            <Link
              href="https://orcid.org/0009-0009-3881-496X"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: '0.9rem' }}
            >
              orcid.org/0009-0009-3881-496X →
            </Link>
            <Typography variant="body2" sx={{ color: '#888', mt: 0.3 }}>
              Academic profile and publication list
            </Typography>
          </Box>

          <Box sx={{ mb: 2.5 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 600 }}
            >
              SSRN
            </Typography>
            <Link
              href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6120349"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: '0.9rem' }}
            >
              SSRN Author Page →
            </Link>
            <Typography variant="body2" sx={{ color: '#888', mt: 0.3 }}>
              Preprints and working papers
            </Typography>
          </Box>

          <Box sx={{ mb: 2.5 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 600 }}
            >
              MimiTalk
            </Typography>
            <Link
              href="https://mimitalk.app"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: '0.9rem' }}
            >
              mimitalk.app →
            </Link>
            <Typography variant="body2" sx={{ color: '#888', mt: 0.3 }}>
              AI-powered interview platform
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 5 }} />

      {/* Research Collaboration */}
      <Box sx={{ mb: 6 }}>
        <SectionTitle number="03" title={t('contact.researchCollaboration')} />
        <Typography variant="body1" sx={{ mb: 2 }}>
          {t('contact.researchCollaborationDescription')}
        </Typography>
        <Box component="ul" sx={{ pl: 2.5, mb: 2 }}>
          {[
            'AI-augmented qualitative research methods',
            'Computational text analysis for social science',
            'Political economy and quantitative analysis',
            'Consumer behavior in digital markets',
          ].map((area, i) => (
            <Box component="li" key={i} sx={{ mb: 0.8 }}>
              <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                {area}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="body2" sx={{ color: '#888' }}>
          {t('contact.researchCollaborationNote')}
        </Typography>
      </Box>

      {/* Response time */}
      <Box
        sx={{
          p: 2.5,
          bgcolor: '#f0edea',
          border: '1.5px solid #c4b8a8',
          borderRadius: 1,
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography variant="body2" sx={{ color: '#666' }}>
          {t('contact.responseTime')}
        </Typography>
      </Box>
    </>
  )
}

export default Contact
