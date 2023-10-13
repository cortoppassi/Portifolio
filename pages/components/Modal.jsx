import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CircularProgress from '@mui/material/CircularProgress';

const chatBotStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const modalStyle = {
  position: 'absolute',
  bottom: '10px',
  right: '25px',
  padding: '4px',
  backgroundColor: '#343541', // Manter a cor de fundo
  borderRadius: '5px',
  width: '30%',
  height: '50%',
  opacity: '0.9'
};

const imgStyle = {
  width: '130px',
  height: '130px',
  zIndex: '9999',
  objectFit: 'cover',
  cursor: 'pointer',
};

const inputStyle = {
  display: 'flex',
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: '#222',
  borderRadius: '5px',
  padding: '8px',
  overflow: 'hidden',
  margin: '5px',
  // alignItems: 'center',
};

export default function ChatbotModal() {
  const [open, setOpen] = useState(false);
  const textAreaRef = useRef(null); // Add a ref
  const handleOpen = () => {
    setOpen(true);
    if (textAreaRef.current) {
      textAreaRef.current.focus(); // Focus on the textarea when the modal opens
    }
  };
  const handleClose = () => setOpen(false);

  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [apiKey, setApiKey] = useState('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');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!apiKey) {
      setResposta('Necessário colocar a chave da API');
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
          max_tokens: 50,
          temperature: 0.5,
        }),
      });

      const data = await response.json();
      const answer = data.choices[0].text;
      setResposta(answer);
    } catch (error) {
      setResposta('Sem resposta');
    }

    setPergunta(''); // Clear the input field
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      // Submit the form when Enter is pressed without Shift
      handleSubmit(e);
    }
  };

  return (
    <div style={chatBotStyle}>
      <img
        src="https://github.com/cortoppassi/Portifolio/blob/main/public/image/chatbot.gif?raw=true"
        alt=""
        style={imgStyle}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor:'#222'}}>
            <p style={{ color: '#bababa' }}>{pergunta}</p>
          </div>
          <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor:'#343541'}}>
            <p style={{ color: '#bababa' }}>{resposta}</p>
          </div>
          <div style={inputStyle}>
            <form onSubmit={handleSubmit}>
              <textarea
                rows="1"
                cols="40"
                placeholder="Digite a pergunta"
                value={pergunta}
                onChange={(e) => setPergunta(e.target.value)}
                onKeyPress={handleKeyPress} // Handle Enter key press
                style={{ backgroundColor: 'transparent', flex: 1, color: '#bababa', resize: 'none', border: 'none', outline: 'none'}}
                ref={textAreaRef} // Attach the ref to the textarea
              ></textarea>
              <Button type="submit" disabled={loading} style={{ color: 'white' }}>
                {loading ? <CircularProgress /> : <PlayArrowIcon />}
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}