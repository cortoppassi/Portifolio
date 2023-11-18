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
              {/* <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
              </Grid> */}
              <Grid item xs={12} md={8}>
                <Typography
                  component="h1"
                  variant="h3"
                  align="left"
                  color="text.primary"
                  gutterBottom
                  style={{ color: '#1976d2' }}
                >
                  Olá
                </Typography>
                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                  Sou Jonathan Cortoppassi, um estudante de Análise e Desenvolvimento de Sistemas com uma paixão fervorosa pela criação e inovação através da programação.
                </Typography>

                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                  Durante minha jornada acadêmica, mergulhei em uma ampla gama de projetos, desde a construção de páginas web simples até o desenvolvimento de soluções envolvendo inteligência artificial. Um dos projetos mais empolgantes que tive a oportunidade de liderar é o chatbot que você está usando para explorar meu portfólio. Este projeto não apenas destaca minhas habilidades técnicas, mas também reflete minha abordagem criativa para simplificar interações digitais.
                </Typography>

                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                  Além dos desafios acadêmicos, faço parte ativa da comunidade 5onda, onde compartilhamos a crença de que a tecnologia tem o poder de mudar o mundo. Na 5onda, estamos unidos pelo desejo comum de aprender, colaborar e fazer a diferença na sociedade. Acreditamos que a tecnologia, quando utilizada com responsabilidade e inovação, pode ser uma força transformadora.
                </Typography>

                <Typography variant="h5" align="left" color="text.secondary" paragraph>
                  Estou constantemente em busca de novas oportunidades para aplicar minhas habilidades de programação e contribuir para projetos que tenham um impacto positivo. Seja na criação de experiências web envolventes ou no desenvolvimento de soluções avançadas de inteligência artificial, estou sempre pronto para enfrentar desafios e elevar o potencial da tecnologia.
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
