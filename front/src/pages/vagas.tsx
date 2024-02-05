import React, { useState } from "react";
import { CssBaseline, Grid, Box, Typography, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Vagas from "../components/Vagas";
import ChatBot from "../components/ChatBot";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const defaultTheme = createTheme();

export default function About() {
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
                Oportunidades de Carreira em Desenvolvimento!
              </Typography>

              <Typography
                variant="body1"
                align="left"
                color="text.secondary"
                paragraph
              >
                Aqui, compartilho algumas oportunidades de carreira em
                desenvolvimento que podem ser do seu interesse. Sinta-se à
                vontade para explorar as vagas abaixo e candidatar-se às que se
                alinham ao seu perfil e aspirações profissionais.
              </Typography>
              <Vagas />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ChatBot />
      <Footer />
    </ThemeProvider>
  );
}
