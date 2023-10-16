import React, { useState } from 'react';
import {
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardBlog from '../components/CardsBlog';
import ChatBot from '../components/ChatBot';
import Navbar from '../components/Navbar'
import Image from 'next/image';
import 'dotenv/config';

const defaultTheme = createTheme();
export default function about () {
    const [repos, setRepos] = useState([]);

    return (
      <ThemeProvider theme={defaultTheme}>
          <Navbar />
        <CssBaseline />
        <main style={{ backgroundColor: 'white' }}>
          <Box
            sx={{
              bgcolor: '#f5f5f5',
              minHeight: '100vh',
              pt: 8,
              pb: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Container maxWidth="md">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid black',
                }}>
                  <Image
                    src="https://media.licdn.com/dms/image/D4D03AQFCRG9dOfKk5g/profile-displayphoto-shrink_800_800/0/1695567050459?e=1702512000&v=beta&t=m1ayRzeMsYTLIfHa2TYybEJ5ulYqIQDbATa1OWjf3_o"
                    width={200}
                    height={200}
                    alt="Nome da Imagem"
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography
                  component="h1"
                  variant="h3"
                  align="left"
                  color="text.primary"
                  gutterBottom
                  style={{ color: '#001568' }}
                >
                  Olá
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                  sou Jonathan Cortoppassi, estudante de Análise e Desenvolvimento de Sistemas.
                  Durante minha jornada acadêmica, adquiri uma ampla gama de experiências em projetos, desde a criação de páginas web simples até o desenvolvimento de projetos envolvendo inteligência artificial.
                </Typography>
              </Grid>
            </Grid>
          </Container>
          </Box>
  
        </main>
        <ChatBot />
        <Box
          sx={{
            p: 6,
            bgcolor: '#f5f5f5',
            minHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          component="footer"
        >
          <div>
            <CardBlog />
          </div>
          <div>
            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
              Conecte-se comigo para colaborações e oportunidades futuras.
            </Typography>
            <Typography variant="subtitle1" align="center" color="#001568" component="p">
              <a href="https://www.linkedin.com/in/johncortoppassi/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Typography>
          </div>
        </Box>
      </ThemeProvider>
    );
  }  