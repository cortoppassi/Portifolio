import React, { useState } from "react";
import { CssBaseline, Grid, Box, Typography, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import ChatBot from "../components/ChatBot";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "dotenv/config";

const defaultTheme = createTheme();

export default function About() {
  const [repos, setRepos] = useState([]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <CssBaseline />
      
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            minHeight: "100vh",
            width: "100%",
            pt: 8,
            pb: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container maxWidth={false} sx={{ margin: "auto" }}>
          <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={8}>
                <Typography
                  component="h1"
                  variant="h3"
                  align="left"
                  color="text.primary"
                  gutterBottom
                  style={{ color: "#1976d2" }}
                >
                  Olá, sou Jonathan Cortoppassi!
                </Typography>

                <Typography
                  variant="h5"
                  align="left"
                  color="text.secondary"
                  paragraph
                >
                  <br />
                  <strong>Formação:</strong>
                  <br />- 3° Semestre em Análises e Desenvolvimento de Sistemas
                  - UNIFACS
                  <br />
                  <br />
                  <strong>Certificados:</strong>
                  <br />- Fundamentos de JavaScript Funcional | JavaScript
                  Funcional e Reativo
                  <br />- 701 - Linux Fundamentals | 702 - Linux Essentials
                  <br />- 538 - Containers Fundamentals
                  <br />- 530 - Cloud Fundamentals
                  <br />- Cisco - Dispositivos de Rede e Configuração
                  <br />
                  <br />
                  <strong>Experiência:</strong>
                  <br />- Desenvolvimento de chatbots e assistentes virtuais.
                  <br />- Gerenciamento de instâncias (EC2) na nuvem.
                  <br />- Automação de navegação por meio do protocolo DevTools.
                  <br />- Desenvolvimento de projetos web, com foco na
                  integração de APIs, otimização de desempenho e implementação
                  de funcionalidades.
                  <br />
                  <br />
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>


      <ChatBot />
      <Footer />
    </ThemeProvider>
  );
}
