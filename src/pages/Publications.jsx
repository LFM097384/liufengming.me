import React, { useState, useMemo } from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Link,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  IconButton,
  InputAdornment,
  Button
} from '@mui/material'
import {
  Article,
  Visibility,
  Edit,
  AccessTime,
  Search,
  Clear,
  Refresh
} from '@mui/icons-material'
import { useTranslation } from 'react-i18next'

const Publications = () => {
  const { t } = useTranslation()

  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const resetFilters = () => {
    setSearchQuery('')
    setStatusFilter('all')
  }
  const publications = {
    published: [
      {
        authors: "Shu, M., Wang, C., Liu, F. et al.",
        title: "The Risk Transmission Mechanism of Global Stock Markets from the Perspective of Entropy-Riemann Geometry: Theoretical Construction and Empirical Analysis",
        journal: "Computational Economics",
        year: "2025",
        doi: "https://doi.org/10.1007/s10614-025-10913-4",
        correspondingAuthor: "Fengming Liu",
        status: "Published"
      }
    ],
    preprint: [
      {
        authors: "Liu, F. and Yu, S.",
        title: "Step Further Towards Automated Social Science: An AI-Powered Interview Platform",
        date: "December 01, 2024",
        ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5120349",
        underReview: "Computers in Human Behavior",
        correspondingAuthor: "Shubin Yu",
        status: "Under Review"
      }
    ],
    workingPapers: [
      {
        authors: "Yu, S., Shu, M., Liu, F., Hu, J & Joerling, M",
        title: "Consumer Research in the Age of Generative AI: Comparing AI and Human Interview Performance",
        targetJournal: "Targeting at Journal of Consumer Research",
        correspondingAuthor: "Shubin Yu",
        status: "Working Paper"
      }
    ]
  }

  // Combine all publications for filtering
  const allPublications = [
    ...publications.published.map(pub => ({ ...pub, category: 'published' })),
    ...publications.preprint.map(pub => ({ ...pub, category: 'preprint' })),
    ...publications.workingPapers.map(pub => ({ ...pub, category: 'working' }))
  ]
  // Filter publications based on search and status
  const filteredPublications = useMemo(() => {
    return allPublications.filter(pub => {
      const matchesSearch = searchQuery === '' || 
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pub.journal && pub.journal.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (pub.underReview && pub.underReview.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (pub.year && pub.year.includes(searchQuery)) ||
        pub.status.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'published' && pub.category === 'published') ||
        (statusFilter === 'review' && (pub.status === 'Under Review' || pub.category === 'preprint')) ||
        (statusFilter === 'working' && pub.category === 'working')
      
      return matchesSearch && matchesStatus
    })
  }, [searchQuery, statusFilter, allPublications])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'success'
      case 'Under Review': return 'warning'
      case 'Working Paper': return 'info'
      default: return 'default'
    }
  }

  const PublicationCard = ({ publication, showSSRN = false }) => (
    <Card elevation={2} sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Chip 
            label={publication.status} 
            color={getStatusColor(publication.status)}
            icon={publication.status === 'Published' ? <Article /> : 
                  publication.status === 'Under Review' ? <Visibility /> : <Edit />}
          />
          {publication.year && (
            <Chip label={publication.year} variant="outlined" />
          )}
        </Box>
        
        <Typography variant="h6" gutterBottom>
          {publication.title}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {publication.authors}
        </Typography>
        
        {publication.journal && (
          <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
            <strong>{publication.journal}</strong>
          </Typography>
        )}
          {publication.underReview && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Under review at <em>{publication.underReview}</em>
          </Typography>
        )}
        
        {publication.targetJournal && (
          <Typography variant="body2" color="primary" sx={{ mb: 1 }}>
            <em>{publication.targetJournal}</em>
          </Typography>
        )}
        
        {publication.date && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessTime fontSize="small" />
            {publication.date}
          </Typography>
        )}
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Corresponding Author: <strong>{publication.correspondingAuthor}</strong>
        </Typography>
        
        {publication.doi && (
          <Link href={publication.doi} target="_blank" rel="noopener noreferrer" sx={{ display: 'block', mb: 1 }}>
            DOI: {publication.doi}
          </Link>
        )}
        
        {showSSRN && publication.ssrn && (
          <Link href={publication.ssrn} target="_blank" rel="noopener noreferrer" sx={{ display: 'block' }}>
            Available at SSRN
          </Link>
        )}
      </CardContent>
    </Card>
  )

  return (
    <Container maxWidth="lg">      <Box sx={{ mb: 4 }}>        <Typography variant="h3" component="h1" gutterBottom>
          {t('publications.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t('publications.subtitle')}
        </Typography>
      </Box>

      {/* Search and Filter Controls */}
      <Card elevation={1} sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={3} alignItems="center">            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search by title, author, journal, year, or status..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                  endAdornment: searchQuery && (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setSearchQuery('')}
                        size="small"
                        edge="end"
                      >
                        <Clear />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={statusFilter}
                  label="Status"
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <MenuItem value="all">All Publications</MenuItem>
                  <MenuItem value="published">Published</MenuItem>
                  <MenuItem value="review">Under Review</MenuItem>
                  <MenuItem value="working">Working Papers</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" color="primary">
                  {filteredPublications.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  of {allPublications.length} publications
                </Typography>
                {searchQuery && (
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                    matching "{searchQuery}"
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              {(searchQuery || statusFilter !== 'all') && (
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Refresh />}
                  onClick={resetFilters}
                  size="small"
                >
                  Reset Filters
                </Button>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>      {/* Filtered Publications Display */}
      {filteredPublications.length > 0 ? (
        <>
          {statusFilter === 'all' || statusFilter === 'published' ? (
            filteredPublications.filter(pub => pub.category === 'published').length > 0 && (
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom color="primary">
                  Published
                </Typography>
                <Divider sx={{ mb: 3 }} />
                {filteredPublications
                  .filter(pub => pub.category === 'published')
                  .map((pub, index) => (
                    <PublicationCard key={`published-${index}`} publication={pub} />
                  ))}
              </Box>
            )
          ) : null}

          {statusFilter === 'all' || statusFilter === 'review' ? (
            filteredPublications.filter(pub => pub.category === 'preprint').length > 0 && (
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom color="primary">
                  Preprints
                </Typography>
                <Divider sx={{ mb: 3 }} />
                {filteredPublications
                  .filter(pub => pub.category === 'preprint')
                  .map((pub, index) => (
                    <PublicationCard key={`preprint-${index}`} publication={pub} showSSRN={true} />
                  ))}
              </Box>
            )
          ) : null}

          {statusFilter === 'all' || statusFilter === 'working' ? (
            filteredPublications.filter(pub => pub.category === 'working').length > 0 && (
              <Box sx={{ mb: 6 }}>
                <Typography variant="h4" gutterBottom color="primary">
                  Working Papers
                </Typography>
                <Divider sx={{ mb: 3 }} />
                {filteredPublications
                  .filter(pub => pub.category === 'working')
                  .map((pub, index) => (
                    <PublicationCard key={`working-${index}`} publication={pub} />
                  ))}
              </Box>
            )
          ) : null}
        </>
      ) : (        <Card elevation={1} sx={{ mb: 4, textAlign: 'center', py: 4 }}>
          <CardContent>
            <Search sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No publications found
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Try adjusting your search query or filter settings
            </Typography>
            <Button
              variant="contained"
              startIcon={<Refresh />}
              onClick={resetFilters}
            >
              Reset All Filters
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Publication Stats */}
      <Card elevation={2} sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Publication Summary
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Total Publications" 
                secondary={`${publications.published.length + publications.preprint.length + publications.workingPapers.length} papers`} 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Published Papers" 
                secondary={`${publications.published.length} papers`} 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Papers Under Review" 
                secondary={`${publications.preprint.length + publications.workingPapers.filter(p => p.status === 'Under Review').length} papers`} 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Working Papers" 
                secondary={`${publications.workingPapers.filter(p => p.status === 'Working Paper').length} papers`} 
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Publications
