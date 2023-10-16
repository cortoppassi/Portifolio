import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  TextField,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardBlog from '../components/CardsBlog';
import ChatBot from '../components/ChatBot';
import Navbar from '../components/Navbar';

const defaultTheme = createTheme();

export default function portfolio() {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/cortoppassi/repos');
        setRepos(response.data);
        setFilteredRepos(response.data); // Mostrar todos os projetos inicialmente
      } catch (error) {
        console.error('Error fetching GitHub repositories', error);
      }
    };

    fetchGitHubRepos();
  }, []);

  const filterReposByName = (name) => {
    const filteredProjects = repos.filter((repo) =>
      repo.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredRepos(filteredProjects);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <CssBaseline />
      <main style={{ backgroundColor: 'white' }}>
        <Container sx={{ py: 20, minHeight: '100vh' }} maxWidth="lg" className="portfolio">
          <TextField
            variant="outlined"
            placeholder="Filtrar por nome"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              filterReposByName(e.target.value);
            }}
            fullWidth // Ocupa toda a largura disponível
            sx={{ margin: '20px 0' }}
          />
          <Grid container spacing={4}>
            {filteredRepos.map((repo) => (
              <Grid item key={repo.name} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '60vh',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#f5f5f5',
                    position: 'relative',
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: '56.25%',
                    }}
                    image={repo.html_url}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {repo.name}
                    </Typography>
                    <Typography>{repo.description || 'No description available'}</Typography>
                  </CardContent>
                  <div style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: '#f5f5f5', padding: '5px', display: 'flex', justifyContent: 'space-between' }}>
                    <Button size="small" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      Repositório
                    </Button>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
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
          alignItems: 'center',
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
