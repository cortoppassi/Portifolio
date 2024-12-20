import React, { useState } from "react";
import { CssBaseline, Grid, Box, Typography, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ChatBot from "../../components/ChatBot";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/Footer";

const defaultTheme = createTheme();

export default function About() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          backgroundImage: "linear-gradient(to bottom, #ffffff, #b8b8b8)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container
           component="main"
           sx={{
             flex: 1, // Faz o container expandir para ocupar o espaço disponível
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             textAlign: "center",
           }}
        >
          <Grid container spacing={2} justifyContent="center" padding="32px">
            <Typography variant="h5" align="left" color="#1b263b" paragraph>
              <strong>Formação Acadêmica:</strong>
              <br />
              5° Semestre em Análise e Desenvolvimento de Sistemas - UNIFACS
              <br />
              <br />
              <strong>Certificados Relevantes:</strong>
              <ul>
                <li>Engenharia de Prompt</li>
                <li>
                  Fundamentos de JavaScript Funcional | JavaScript Funcional e
                  Reativo
                </li>
                <li>701 - Linux Fundamentals | 702 - Linux Essentials</li>
                <li>538 - Containers Fundamentals</li>
                <li>530 - Cloud Fundamentals</li>
                <li>Cisco - Dispositivos de Rede e Configuração</li>
              </ul>
              <br />
              <strong>Experiência Profissional:</strong>
              <ul>
                <li>
                  Como Analista Desenvolvedor na SEIDOR, sou responsável por
                  criar soluções de IA para atender a diversas necessidades
                  empresariais, com ênfase na entrega de qualidade e otimização
                  de custos.
                </li>
                <li>
                  Desenvolvimento e implementação de chatbots e assistentes
                  virtuais, proporcionando um atendimento automatizado e
                  eficiente.
                </li>
                <li>
                  Gerenciamento de instâncias EC2 em ambientes de nuvem, com
                  foco em escalabilidade e segurança.
                </li>
                <li>
                  Automação de navegação através do protocolo DevTools para
                  facilitar a interação com sistemas externos.
                </li>
                <li>
                  Experiência em integração de APIs, otimização de desempenho
                  web e implementação de novas funcionalidades para projetos de
                  grande porte.
                </li>
              </ul>
            </Typography>
          </Grid>
        </Container>
      </Box>
      <ChatBot />
      <Footer />
    </ThemeProvider>
  );
}
