import React, { useState } from "react";
import { CssBaseline, Grid, Box, Typography, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import ChatBot from "../components/ChatBot";
import Navbar from "../components/navbar/index";
import Footer from "../components/Footer";
import "dotenv/config";

const defaultTheme = createTheme();

export default function About() {
  const [repos, setRepos] = useState([]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <CssBaseline />

      <Container
        sx={{
          backgroundImage: "linear-gradient(to bottom, #ffffff, #b8b8b8)",
          minHeight: "100vh",
          width: "100%",
          pt: 8,
          pb: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
          <Grid container spacing={2} justifyContent="center" padding='32px'>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" align="left" color="#1b263b" paragraph>
                <strong>Formação Acadêmica:</strong>
                <br />
                5° Semestre em Análise e Desenvolvimento de Sistemas - UNIFACS
                <br />
                <br />
                <strong>Certificados Relevantes:</strong>
                <ul>
                  <li>Engenharia de Prompt</li>
                  <li>Fundamentos de JavaScript Funcional | JavaScript Funcional e Reativo</li>
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
                    empresariais, com ênfase na entrega de qualidade e
                    otimização de custos.
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
                    Experiência em integração de APIs, otimização de
                    desempenho web e implementação de novas funcionalidades para
                    projetos de grande porte.
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
      </Container>

      <ChatBot />
      <Footer />
    </ThemeProvider>
  );
}
