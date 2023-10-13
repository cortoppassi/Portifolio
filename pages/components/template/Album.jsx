import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardBlog from '../CardsBlog';
import Modal from '../Modal'

const defaultTheme = createTheme();

export default function Album() {
  const [repos, setRepos] = useState([]);
  const selectedRepos = ['Assistente-OpenAI', 'Marionetista-Puppeteer', 'Rede-Neural'];

  useEffect(() => {
    const token = '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';
    const apiUrl = 'https://api.github.com/user/repos';

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `token ${token}`,
      }
    })
    .then(response => response.json())
    .then(data => {
      // Filtra os repositórios específicos com base nos nomes
      console.log(data)
      const filteredRepos = data.filter(repo => selectedRepos.includes(repo.name));
      setRepos(filteredRepos);
    })
    .catch(error => {
      console.error('Ocorreu um erro ao acessar a API do GitHub:', error);
    });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
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
              <Grid item xs={12} md={4}>
                <img
                  src="https://media.licdn.com/dms/image/D4D03AQFCRG9dOfKk5g/profile-displayphoto-shrink_800_800/0/1695567050459?e=1702512000&v=beta&t=m1ayRzeMsYTLIfHa2TYybEJ5ulYqIQDbATa1OWjf3_o"
                  alt=""
                  style={{ borderRadius: '50%', width: '100%', border: 'solid 1px black' }}
                />
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
          
        <Container sx={{ py: 8}} maxWidth="lg">
          <Grid container spacing={10}>
            {repos.map(repo => (
              <Grid item key={repo.name} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '70%', display: 'flex', flexDirection: 'column', backgroundColor:'#f5f5f5'}}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {repo.name}
                    </Typography>
                    <Typography>
                      {repo.description || 'No description available'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      Repositório
                    </Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Modal/>
      <Box
        sx={{
          p: 6,
          bgcolor: '#f5f5f5',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column', // Organizar os elementos verticalmente
          justifyContent: 'space-between', // Alinhar os elementos no início e no final
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
