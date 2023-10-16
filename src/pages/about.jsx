import React, { useState } from 'react';
import {
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import ChatBot from '../components/ChatBot';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'dotenv/config';

const defaultTheme = createTheme();

export default function About() {
  const [repos, setRepos] = useState([]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <CssBaseline />

      <main style={{ backgroundColor: 'white' }}>
        <Box
          sx={{
            bgcolor: '#fff',
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
      <Footer />
    </ThemeProvider>
  );
}
