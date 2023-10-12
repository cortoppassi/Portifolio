import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  p: 4,
  backgroundColor: '#333',
};

const modalStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
};

const chatBotStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '16px',
  borderRadius: '8px',
};

export default function ChatbotModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={modalStyle}>
      <img
        src="https://github.com/cortoppassi/Assistente-OpenAI/blob/main/image/ia.gif?raw=true"
        alt=""
        style={{
          width: '130px',
          height: '130px',
          zIndex: '9999',
          clipPath: 'circle(30px at center)',
          objectFit: 'cover',
        }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ChatGPTApp />
        </Box>
      </Modal>
    </div>
  );
}

function ChatGPTApp() {
  const [pergunta, setPergunta] = React.useState('');
  const [resposta, setResposta] = React.useState('');
  const [apiKey, setApiKey] = React.useState('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');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!apiKey) {
      setResposta('Necessário colocar a chave da API no arquivo custom.js');
      setLoading(false);
      return;
    }

    setResposta('');
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + apiKey,
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: pergunta,
          max_tokens: 20,
          temperature: 0.5,
        }),
      });

      const data = await response.json();
      const answer = data.choices[0].text;
      setResposta(answer);
    } catch (error) {
      setResposta('Sem resposta');
    }

    setLoading(false);
  }

  const chatBotStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '16px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputContainerStyle = {
    display: 'flex',
    flexDirection: 'row', // Alterado para linha (horizontal)
    alignItems: 'center',
  };

  const inputStyle = {
    backgroundColor: '#222',
    color: 'white',
    padding: '8px',
    flex: 1, // Ocupa todo o espaço disponível
    marginRight: '16px', // Espaço entre o campo de texto e o botão
    overflow: 'hidden',
  };

  const buttonStyle = {
    width: '100px', // Largura do botão
  };



  return (
    <div style={chatBotStyle}>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ color: 'white' }}>{pergunta}</p>
        <p style={{ color: 'white' }}> {resposta}</p>
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={inputContainerStyle}>
          <textarea
            rows="1"
            cols="40"
            placeholder="Digite a pergunta"
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
            style={inputStyle}
          ></textarea>
          <Button variant="contained" type="submit" disabled={loading} style={buttonStyle}>
            {loading ? 'Pesquisando...' : 'Enviar'}
          </Button>
          
        </div>
      </form>
    </div>
  );
}