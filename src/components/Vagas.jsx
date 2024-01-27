import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

const OutlinedCard = ({ vaga }) => {
  return (
    <Box sx={{ width: 275, mx: 'auto', mb: 2 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {vaga.nomeDaVaga}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {vaga.nomeDaEmpresa}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {vaga.viaSite}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {vaga.publicado}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

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
      <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems={"center"}>
        {vagas.map((vaga, index) => (
          <OutlinedCard key={index} vaga={vaga} />
        ))}
      </Box>
    </div>
  );
};

export default VagasList;
