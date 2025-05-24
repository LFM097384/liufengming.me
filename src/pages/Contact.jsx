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
  Button,
  Link,
  Paper
} from '@mui/material'
import {
  Email,
  Phone,
  LocationOn,
  School,
  AccountCircle,
  Link as LinkIcon,
  Message
} from '@mui/icons-material'

const Contact = () => {
  const contactInfo = {
    email: "leo.liu.23@ucl.ac.uk",
    phone: "+44 7436241983",
    address: {
      institution: "University College London",
      department: "Department of Political Science",
      street: "Gower Street",
      city: "London, WC1E 6BT",
      country: "United Kingdom"
    },
    orcid: "orcid.org/0009-0009-3881-496X"
  }

  const socialLinks = [
    {
      platform: "ORCID",
      url: "https://orcid.org/0009-0009-3881-496X",
      description: "Academic profile and publication list"
    },
    {
      platform: "SSRN",
      url: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6120349",
      description: "Preprints and working papers"
    }
  ]

  const officeHours = [
    "Tuesdays: 2:00 PM - 4:00 PM",
    "Thursdays: 10:00 AM - 12:00 PM",
    "By appointment"
  ]

  const researchCollaboration = [
    "AI applications in social science research",
    "Political economy and quantitative analysis",
    "Academic inequality and accessibility studies",
    "Quantitative history and data analysis"
  ]

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Get in touch for research collaboration, academic inquiries, or general questions
        </Typography>
      </Box>      <Grid container spacing={4}>
        {/* Primary Contact Information */}
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccountCircle color="primary" />
                Contact Information
              </Typography>
              
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Email color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Email" 
                    secondary={
                      <Link href={`mailto:${contactInfo.email}`} color="inherit">
                        {contactInfo.email}
                      </Link>
                    } 
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <Phone color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Phone" 
                    secondary={
                      <Link href={`tel:${contactInfo.phone}`} color="inherit">
                        {contactInfo.phone}
                      </Link>
                    } 
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <School color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Institution" 
                    secondary={contactInfo.address.institution} 
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemIcon>
                    <LocationOn color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Address" 
                    secondary={
                      <Box>
                        <Typography variant="body2">{contactInfo.address.department}</Typography>
                        <Typography variant="body2">{contactInfo.address.street}</Typography>
                        <Typography variant="body2">{contactInfo.address.city}</Typography>
                        <Typography variant="body2">{contactInfo.address.country}</Typography>
                      </Box>
                    } 
                  />
                </ListItem>
              </List>
              
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button 
                  variant="contained" 
                  startIcon={<Email />}
                  href={`mailto:${contactInfo.email}`}
                  size="large"
                >
                  Send Email
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>        {/* Academic Profiles */}
        <Grid item xs={12} md={6}>
          <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LinkIcon color="primary" />
                Academic Profiles
              </Typography>
              
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AccountCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="ORCID iD" 
                    secondary={
                      <Link href={`https://${contactInfo.orcid}`} target="_blank" rel="noopener noreferrer">
                        {contactInfo.orcid}
                      </Link>
                    } 
                  />
                </ListItem>
                
                {socialLinks.map((link, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <LinkIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={link.platform}
                      secondary={
                        <Box>
                          <Link href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.platform} Profile
                          </Link>
                          <Typography variant="caption" display="block" color="text.secondary">
                            {link.description}
                          </Typography>
                        </Box>
                      } 
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>        </Grid>

        {/* Research Collaboration */}
        <Grid item xs={12}>
          <Card elevation={2}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Research Collaboration
              </Typography>
              
              <Typography variant="body2" color="text.secondary" paragraph>
                I welcome collaboration opportunities in the following areas:
              </Typography>
              
              <List>
                {researchCollaboration.map((area, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <School color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={area} />
                  </ListItem>
                ))}
              </List>
              
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2">
                  Feel free to reach out if you have interesting research ideas, 
                  data collaboration opportunities, or if you're interested in 
                  jointly applying for research grants.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Contact Form Alternative */}
      <Card elevation={2} sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Quick Contact
          </Typography>
          
          <Typography variant="body1" paragraph>
            For the fastest response, please send me an email directly. Include the following 
            information to help me respond more effectively:
          </Typography>
          
          <List>
            <ListItem>
              <ListItemText 
                primary="Subject Line" 
                secondary="Clear and specific subject (e.g., 'Research Collaboration Inquiry', 'Academic Question')" 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Your Affiliation" 
                secondary="Your institution, department, or organization" 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Purpose" 
                secondary="Brief description of your inquiry or collaboration interest" 
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Timeline" 
                secondary="Any relevant deadlines or preferred response timeframe" 
              />
            </ListItem>
          </List>
          
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              I typically respond to emails within 2-3 business days.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Contact
