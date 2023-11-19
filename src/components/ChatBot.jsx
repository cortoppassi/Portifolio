import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CircularProgress from '@mui/material/CircularProgress';
import MicIcon from '@mui/icons-material/Mic';
import CampaignIcon from '@mui/icons-material/Campaign';
import Image from 'next/image';
require('dotenv').config();

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
  backgroundColor: '#343541',
  borderRadius: '5px',
  width: '90%', // Alterado para 100% para tela pequena
  height: '50%',
  opacity: '0.9',
  maxWidth: '400px', // Adicionado limite máximo de largura
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
  justifyContent: 'space-evenly',
};

export default function ChatbotModal() {
  const [bootVisible, setBotVisible] = useState(true) //Estado para controlar a visibilidade da img
  const [open, setOpen] = useState(false);
  const textAreaRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
    setBotVisible(false)
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };
  const handleClose = () => {
    setOpen(false);
    setBotVisible(true)
  }
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [apiKey, setApiKey] = useState(process.env.NEXT_PUBLIC_OPEN_AI_TOKEN);
  const [loading, setLoading] = useState(false);

  const recognition = useRef(null); // Create a ref for SpeechRecognition

  useEffect(() => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.current.continuous = true;
      recognition.current.lang = 'pt-BR'; // Set the desired language

      recognition.current.onresult = (event) => {
        const text = event.results[event.results.length - 1][0].transcript;
        setPergunta(text);
      };

      recognition.current.onend = () => {
        // Recording has ended
      };

      recognition.current.onerror = (event) => {
        console.error('Voice recognition error:', event.error);
      };
    } else {
      console.error('Speech recognition is not supported in this browser.');
    }

    return () => {
      if (recognition.current) {
        recognition.current.stop();
      }
    };
  }, []);

  const startListening = () => {
    if (recognition.current) {
      recognition.current.start();
    }
  };

  const stopListening = () => {
    if (recognition.current) {
      recognition.current.stop();
    }
  };

  const speakResponse = () => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(resposta);
      synth.speak(utterance);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!apiKey) {
      setResposta('Necessário colocar a chave da API');
      setLoading(false);
      return;
    }

    setResposta('');
    const mensagemPersonalizada = "Você é Jonathan, estudante de Análise e Desenvolvimento de Sistemas. Durante sua jornada acadêmica, adquiriu experiência prática em desenvolvimento de projetos relacionados a inteligência artificial, chatbots, automação de tarefas, criação de páginas web simples até o desenvolvimento de projetos mais avançados. Atualmente, estou dedicado a aprimorar minhas habilidades em tecnologias essenciais, como React e Node.js, a fim de atender às demandas do mercado em constante evolução. Minha paixão pela programação e meu desejo contínuo de aprendizado me impulsionam a buscar soluções criativas e eficazes, com o objetivo de agregar valor à organização. Mora em Salvado-BA e tem 26 anos";
    const promptCompleto = mensagemPersonalizada + pergunta;
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: promptCompleto,
          max_tokens: 100,
          temperature: 0.5,
        }),
      });

      const data = await response.json();
      const answer = data.choices[0].text;
      setResposta(answer);
    } catch (error) {
      console.error('Erro ao fazer pedido:', error.message);
    }

    setPergunta('');
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <div style={chatBotStyle}>
      <Image
        src='https://media.licdn.com/dms/image/D5612AQHyZAlKMTOc0w/article-cover_image-shrink_423_752/0/1678039642851?e=1702512000&v=beta&t=gzAEKOjlZuYpMWOBfBM6MXSreupFeCfoXfJsAaxXtrE'
        alt="bot"
        width={70}
        height={70}
        style={{...imgStyle, display: bootVisible? 'block' : 'none'}}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor: '#222' }}>
            <p style={{ color: '#bababa' }}>{pergunta}</p>
          </div>
          <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor: '#343541' }}>
            <p style={{ color: '#bababa' }}>{resposta}</p>
            {resposta && (
              <Button type="button" style={{ color: 'white' }} onClick={speakResponse}>
                <CampaignIcon />
              </Button>
            )}
          </div>
          <div style={inputStyle}>
            <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <textarea
                rows="1"
                cols="40"
                placeholder="Digite a pergunta..."
                value={pergunta}
                onChange={(e) => setPergunta(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{
                  backgroundColor: 'transparent',
                  flex: 1,
                  color: '#bababa',
                  resize: 'none',
                  border: 'none',
                  outline: 'none',
                  overflow: 'hidden',
                }}
                ref={textAreaRef}
              ></textarea>
              <Button type="submit" disabled={loading} style={{ color: 'white' }}>
                {loading ? <CircularProgress /> : <PlayArrowIcon />}
              </Button>
              <Button type="button" style={{ color: 'white' }} onMouseDown={startListening} onMouseUp={stopListening}>
                {<MicIcon />}
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
