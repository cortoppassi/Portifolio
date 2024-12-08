import React from 'react';
import { Box, Typography, useMediaQuery, Link, Container } from '@mui/material';
import CardBlog from '../components/CardsBlog';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const contactInfo = [
    {
      icon: <WhatsAppIcon />,
      text: '71 99921-4693',
      link: 'https://api.whatsapp.com/send?phone=71999214693',
    },
    {
      icon: <EmailIcon />,
      text: 'jonathan-516@hotmail.com',
      link: 'mailto:jonathan-516@hotmail.com',
    },
    {
      icon: <LinkedInIcon />,
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/johncortoppassi/',
    },
  ];

  return (
    <Container
      sx={{
        p: 6,
        // bgcolor: '#dadada',
        backgroundImage: "linear-gradient(to top, #ffffff, #b8b8b8)",
        minHeight: '50vh',
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        alignItems: 'center',
        width: '100vh',
      }}
      component="footer"
    >
      <div style={{ flex: 1 }}>
        <Typography
          component="h1"
          variant="h4"
          align="left"
          color="text.primary"
          gutterBottom
          sx={{ color: '#1b263b' }}
        >
          Contato
        </Typography>
        {contactInfo.map((info, index) => (
        <div key={index} style={{ display: 'flex', color: '#1b263b', alignItems: 'center', marginBottom: '10px' }}>
          {info.icon}
          <Link href={info.link} style={{ textDecoration: 'none', color: '#1b263b', marginLeft: '10px' }} target="_blank" rel="noopener noreferrer">
            {info.text}
          </Link>
        </div>
        ))}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <CardBlog />
        <Typography variant="subtitle1" align="center" color="#1b263b" component="p">
          Conecte-se comigo para colaborações e oportunidades futuras.
        </Typography>
        <Typography variant="subtitle1" align="center" color="#1b263b" component="p">
          <Link href="https://www.linkedin.com/in/johncortoppassi/" target="_blank" rel="noopener noreferrer" color='#1b263b'>
            LinkedIn
          </Link>
        </Typography>
      </div>
    </Container>
  );
}

export default Footer;
