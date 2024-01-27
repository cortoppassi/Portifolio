import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Typography,
  Container,
  TextField,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const VagasList = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/vagas');
        const data = await response.json();
        setVagas(data);
        
        // Adicione o console.log para visualizar as vagas no console
        console.log('Vagas:', data);
      } catch (error) {
        console.error('Erro ao buscar vagas:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Listagem de Vagas</h1>
      <ul>
        {vagas.map((vaga, index) => (
          <li key={index}>{vaga.nomeDaVaga}</li>,
        ))}
      </ul>
    </div>
  );
};

export default VagasList;
