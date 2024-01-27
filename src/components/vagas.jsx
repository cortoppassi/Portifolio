import React, { useEffect, useState } from 'react';

const VagasList = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/vagas');
        const data = await response.json();
        setVagas(data);
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
          <li key={index}>{vaga}</li>
        ))}
      </ul>
    </div>
  );
};

export default VagasList;
