import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ChatBot from "../components/ChatBot";
import Navbar from "../components/navbar/index";
import Footer from "../components/Footer";
import Image from "next/image";
import "dotenv/config";
import VanillaTilt from "vanilla-tilt";

const defaultTheme = createTheme();
const repoData = [
  {
    name: "Assistente-OpenAI",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Aplicação que combina a tecnologia Electron com um modelo de chat GPT para proporcionar interações inteligentes com os usuários.",
    html_url: "https://github.com/cortoppassi/Assistente-OpenAI",
  },
  {
    name: "Marionetista-Puppeteer",
    image:
      "https://cdn.prod.website-files.com/5e42f62100b3495a91c730f1/664c76201fc5ab434ca8fcac_What%20is%20Puppeteer_.webp",
    description:
      "Automação de tarefas no navegador usando o Puppeteer, uma API de alto nível para controlar o Chrome/Chromium através do protocolo DevTools.",
    html_url: "https://github.com/cortoppassi/Marionetista-Puppeteer",
  },
  {
    name: "Rede-Neural",
    image: "https://tutorialzine.com/media/2017/04/brain.jpg",
    description:
      "Este projeto utiliza a biblioteca de redes neurais Brain.js para simular portas lógicas. As redes neurais são uma técnica de aprendizado de máquina que pode ser aplicada em diversos problemas, incluindo problemas de lógica. Este projeto demonstra o uso da biblioteca Brain.js para implementar portas lógicas como XOR, AND, OR e outras.",
    html_url: "https://github.com/cortoppassi/Rede-Neural",
  },
];

export default function Index() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      // glare: true,
      "max-glare": 0.5,
    });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <CssBaseline />
      <main style={{ backgroundColor: "#b8b8b8" }}>
        <Box
          sx={{
            backgroundImage: "linear-gradient(to bottom, #ffffff, #b8b8b8)",
            minHeight: "50vh",
            width: "100vw",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container
            component="main"
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/profile.jpeg"
                    width={200}
                    height={200}
                    alt="Nome da Imagem"
                    style={{ zIndex: "1" }}
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
                  style={{ color: "#1b263b" }}
                >
                  Olá
                </Typography>
                <Typography
                  variant="h5"
                  align="left"
                  color="#1b263b"
                  textDecoration="none"
                  fontSize="1.5rem"
                  paragraph
                >
                  Sou Jonathan Cortoppassi, estudante de Análise e
                  Desenvolvimento de Sistemas.
                  <br />
                  Atualmente, atuo como Analista Desenvolvedor na SEIDOR, onde
                  sou responsável pelo desenvolvimento de soluções avançadas em
                  Inteligência Artificial, focando em atender às necessidades
                  empresariais com alta qualidade e eficiência de custos.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          sx={{
            backgroundColor: "#b8b8b8",
            minHeight: "100vh",
            width: "100vw",
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
            <Grid container spacing={4} justifyContent="center">
              {repoData.map((repo) => (
                <Grid
                  item
                  key={repo.name}
                  xs={12}
                  sm={6}
                  md={4}
                  className="card"
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 15px 50px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        pt: "56.25%",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                      }}
                      image={repo.image}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        sx={{ fontWeight: "bold", color: "#333" }}
                      >
                        {repo.name}
                      </Typography>
                      <Typography sx={{ color: "#555" }}>
                        {repo.description || "No description available"}
                      </Typography>
                    </CardContent>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        width: "100%",
                        backgroundColor: "#fff",
                        padding: "10px 15px",
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottomLeftRadius: "8px",
                        borderBottomRightRadius: "8px",
                      }}
                    >
                      <Button
                        size="small"
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: "#1b263b",
                          fontWeight: "bold",
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "#33486f",
                          },
                        }}
                      >
                        Repositório
                      </Button>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </main>
      <ChatBot />
      <Footer />
    </ThemeProvider>
  );
}
