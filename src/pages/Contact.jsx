import React from 'react'
import { Typography, Box, Grid, Link, Button } from '@mui/material'
import SEO from '../components/SEO'
import SectionTitle from '../components/SectionTitle'
import { Email } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title="Contact"
        description="Contact information for Fengming Liu – researcher at the Harris School of Public Policy, University of Chicago."
        keywords="Fengming Liu contact, University of Chicago, Harris School, research collaboration"
      />

      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 1 }}>
          {t('contact.title')}
        </Typography>
        <Typography variant="body1" sx={{ color: '#666' }}>
          {t('contact.subtitle')}
        </Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <SectionTitle number="01" title={t('contact.info_title')} />

          <Box sx={{ mb: 2 }}>
            <Typography variant="overline" sx={{ color: '#888', display: 'block', mb: 0.3 }}>
              Email
            </Typography>
            <Link href="mailto:fengmingliu@uchicago.edu" sx={{ fontSize: '0.95rem' }}>
              fengmingliu@uchicago.edu
            </Link>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography variant="overline" sx={{ color: '#888', display: 'block', mb: 0.3 }}>
              Phone
            </Typography>
            <Typography variant="body2">+1 773 241 4359</Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="overline" sx={{ color: '#888', display: 'block', mb: 0.3 }}>
              Address
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              Harris School of Public Policy<br />
              University of Chicago<br />
              1307 E 60th St, Chicago, IL 60637, United States
            </Typography>
          </Box>

          <Button variant="contained" startIcon={<Email />} href="mailto:fengmingliu@uchicago.edu" sx={{ px: 3 }}>
            {t('contact.send_email')}
          </Button>
        </Grid>

        <Grid item xs={12} md={6}>
          <SectionTitle number="02" title={t('contact.academicProfiles')} />

          {[
            { name: 'ORCID', url: 'https://orcid.org/0009-0009-3881-496X', label: '0009-0009-3881-496X' },
            { name: 'SSRN', url: 'https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=7378335', label: 'Author Page' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/liufengming', label: 'liufengming' },
            { name: 'GitHub', url: 'https://github.com/LFM097384', label: 'LFM097384' },
            { name: 'MimiTalk', url: 'https://mimitalk.app', label: 'mimitalk.app' },
          ].map((p, i) => (
            <Box key={i} sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ fontFamily: '"EB Garamond", serif', fontWeight: 600, fontSize: '1rem' }}>
                {p.name}
              </Typography>
              <Link href={p.url} target="_blank" rel="noopener noreferrer" sx={{ fontSize: '0.9rem' }}>
                {p.label} →
              </Link>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default Contact
