import React, { useState, useRef, useEffect } from 'react';
const axios = require('axios');
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CircularProgress from '@mui/material/CircularProgress';
import MicIcon from '@mui/icons-material/Mic';
import CampaignIcon from '@mui/icons-material/Campaign';
import MenuIcon from '@mui/icons-material/Menu';
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

const liStyle = {
  margin: '0 10px',
  cursor: 'pointer',
  padding: '5px',
  transition: 'border 0.3s ease-in-out',
  borderRadius: '5px',
  border: '1px solid transparent',
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

const options = [
  { id: 1, label: 'Quem sou eu?' },
  { id: 2, label: 'Projetos' },
  { id: 3, label: 'Habilidades' },
  { id: 4, label: 'Contato' },
  { id: 5, label: 'Currículo' },
];

export default function ChatbotModal() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseOver = (item) => {
    setHoveredItem(item);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  const [bootVisible, setBotVisible] = useState(true) //Estado para controlar a visibilidade do bot
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

  const recognition = useRef(null); // SpeechRecognition

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
    const mensagemPersonalizada = "Olá! Eu sou Jonathan, um entusiasta de Análise e Desenvolvimento de Sistemas apaixonado por transformar ideias em realidade através da programação.Durante minha jornada acadêmica, explorei diversos projetos, desde a criação de páginas web simples até o desenvolvimento de soluções avançadas em inteligência artificial, chatbots e automação de tarefas. Atualmente, estou dedicado a aprimorar minhas habilidades em tecnologias essenciais, como React e Node.js, para acompanhar as demandas dinâmicas do mercado. Minha paixão pela programação e meu desejo constante de aprendizado me impulsionam a buscar soluções inovadoras e eficazes, sempre com o objetivo de agregar valor à organização. Resido em Salvador-BA e tenho 26 anos. Estou ansioso para explorar novas oportunidades e contribuir para projetos que promovam impacto positivo. Seja na criação de experiências web envolventes ou no desenvolvimento de soluções avançadas de inteligência artificial, estou pronto para enfrentar desafios e elevar o potencial da tecnologia. Como posso ajudar você hoje?"

    const promptCompleto = mensagemPersonalizada + pergunta;
    try {
      const resposta = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: promptCompleto }],
          temperature: 0.7,
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
  
      const respostaDoChat = resposta.data.choices[0].message.content;
      console.log('Resposta do Chat:', respostaDoChat);
      setResposta(respostaDoChat);
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

  const [respostaOption, setRespostaOption] = useState('');
  const handleOptionClick = (option) => {
    switch (option) {
      case 1:
        setRespostaOption('Eu sou o mestre da procrastinação digital, o artista dos códigos inacabados, Jonathan Cortoppassi, também conhecido como John "Ctrl+C, Ctrl+V, talvez Ctrl+Z"!');
        toggleMenuVisibility();
        break;
      case 2:
        setRespostaOption('Meus projetos são como páginas de um livro inacabado. Começo cheio de empolgação, mas quando chego na página 2, já estou pensando na próxima história!');
        toggleMenuVisibility();
        break;
      case 3:
        setRespostaOption('Minha experiência? Sou Conjurador de código JavaScrip, já enfrentei dragões de bugs e lancei encantamentos para que meus chat bots fossem mais inteligentes que um oráculo. Criei páginas web tão simples e elegantes que até mesmo os unicórnios ficariam com inveja. Ah, e os projetos mais complexos? Bem, esses são como poções mágicas, misturando algoritmos e códigos para criar resultados verdadeiramente encantadores!🧙‍♂️✨');
        toggleMenuVisibility();
        break;
      case 4:
        setRespostaOption('Por que o celular foi ao terapeuta? Porque estava se sentindo desconectado! Chama no whats! (71)9 9921-4693');
        toggleMenuVisibility();
        break;
      case 5:
        setRespostaOption('Meu currículo é como um download de alta velocidade - em poucos segundos, você tem acesso a uma versão compacta, mas poderosa, da minha jornada profissional. Estou pronto para ser "instalado" na sua equipe! 🚀📄');
        window.open('https://raw.githubusercontent.com/cortoppassi/Portifolio/main/curriculoJonathan.pdf', '_blank');
        toggleMenuVisibility();
        break;
      default:
        console.log('Opção não reconhecida');
    }
  };

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
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
          <div>
          <MenuIcon onClick={toggleMenuVisibility} style={{ cursor: 'pointer' }} />
            {menuVisible && (
              <div style={{ overflow: 'hidden', backgroundColor: '#222', color: '#bababa', borderRadius: '4px', marginBottom: '20px' }}>
                <ul style={{ listStyleType: 'none', padding: '6px', margin: '0' }}>
                  {options.map((option) => (
                    <li
                      key={option.id}
                      style={{
                        ...liStyle,
                        border: hoveredItem === option.id ? '1px solid #bababa' : liStyle.border,
                      }}
                      onMouseOver={() => handleMouseOver(option.id)}
                      onMouseOut={handleMouseOut}
                      onClick={() => handleOptionClick(option.id)}
                    >
                      {option.id} - {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', backgroundColor: '#343541' }}>
            {respostaOption && <p style={{ color: '#bababa', display: pergunta ? 'none' : 'flex' }}>{resposta ? '' :respostaOption}</p>}
            {resposta && <p style={{ color: '#bababa'}}>{resposta}</p>}
            
            {resposta && (
              <Button type="button" style={{ color: 'white' }} onClick={speakResponse}>
                <CampaignIcon />
              </Button>
            )}
          </div>

          <div style={{ overflow: 'hidden', backgroundColor: '#222',color: '#bababa' , borderRadius: '4px',display: pergunta ? 'flex' : 'none'}}>
            <p style={{ color: '#bababa', padding: '10px' }}>{pergunta}</p>
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
