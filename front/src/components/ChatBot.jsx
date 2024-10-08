import React, { useState, useRef, useEffect } from "react";
const axios = require("axios");
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularProgress from "@mui/material/CircularProgress";
import MicIcon from "@mui/icons-material/Mic";
import CampaignIcon from "@mui/icons-material/Campaign";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
require("dotenv").config();

const chatBotStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const liStyle = {
  margin: "0 10px",
  cursor: "pointer",
  padding: "5px",
  transition: "border 0.3s ease-in-out",
  borderRadius: "5px",
  border: "1px solid transparent",
};

const modalStyle = {
  overflow: "auto",
  position: "absolute",
  bottom: "10px",
  right: "25px",
  padding: "4px",
  backgroundColor: "#343541",
  borderRadius: "5px",
  width: "90%",
  height: "50%",
  opacity: "0.9",
  maxWidth: "400px", // Adicionado limite máximo de largura
};

const imgStyle = {
  width: "130px",
  height: "130px",
  zIndex: "9999",
  objectFit: "cover",
  cursor: "pointer",
};

const inputStyle = {
  display: "flex",
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "#222",
  borderRadius: "5px",
  padding: "6px",
  overflow: "hidden",
  margin: "6px",
  justifyContent: "space-evenly",
};

const options = [
  { id: 1, label: "Quem sou eu?" },
  { id: 2, label: "Projetos" },
  { id: 3, label: "Habilidades" },
  { id: 4, label: "Contato" },
  { id: 5, label: "Currículo" },
];

export default function ChatbotModal() {
  const handlePlay = () => {
    // Reproduza o áudio usando um elemento de áudio HTML
    const audioElement = new Audio(audioUrl);
    audioElement.play();
  };

  const [menuVisible, setMenuVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleMouseOver = (item) => {
    setHoveredItem(item);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  const [bootVisible, setBotVisible] = useState(true); //Estado para controlar a visibilidade do bot
  const [open, setOpen] = useState(false);
  const textAreaRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
    setBotVisible(false);
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };
  const handleClose = () => {
    setOpen(false);
    setBotVisible(true);
  };
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [apiKey, setApiKey] = useState(process.env.NEXT_PUBLIC_OPEN_AI_TOKEN);
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  const recognition = useRef(null); // SpeechRecognition

  useEffect(() => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      recognition.current = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.current.continuous = true;
      recognition.current.lang = "pt-BR"; // Set the desired language

      recognition.current.onresult = (event) => {
        const text = event.results[event.results.length - 1][0].transcript;
        setPergunta(text);
      };

      recognition.current.onend = () => {
        // Recording has ended
      };

      recognition.current.onerror = (event) => {
        console.error("Voice recognition error:", event.error);
      };
    } else {
      console.error("Speech recognition is not supported in this browser.");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!apiKey) {
      setResposta("Necessário colocar a chave da API");
      setLoading(false);
      return;
    }

    setResposta("");
    try {
      const resposta = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "Você é Jonathan, um estudante de Análise e Desenvolvimento de Sistemas apaixonado por transformar ideias em realidade através da programação. Durante minha jornada acadêmica, explorei diversos projetos, desde a criação de páginas web simples até o desenvolvimento de soluções avançadas em inteligência artificial, chatbots e automação de tarefas. Atualmente, estou dedicado a aprimorar minhas habilidades em tecnologias essenciais, como React e Node.js, para acompanhar as demandas dinâmicas do mercado. Minha paixão pela programação e meu desejo constante de aprendizado me impulsionam a buscar soluções inovadoras e eficazes, sempre com o objetivo de agregar valor à organização. Resido em Salvador-BA e tenho 26 anos. Estou ansioso para explorar novas oportunidades e contribuir para projetos que promovam impacto positivo. Seja na criação de experiências web envolventes ou no desenvolvimento de soluções avançadas de inteligência artificial, estou pronto para enfrentar desafios e elevar o potencial da tecnologia. Como posso ajudar você hoje?" },
            { role: "user", content: pergunta },
          ],
          temperature: 0.7,
          max_tokens: 100,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const respostaDoChat = resposta.data.choices[0].message.content;
      setResposta(respostaDoChat);

      // Obtendo o áudio da resposta usando a API de Text to Speech (TTS)
      const audioResposta = await axios.post(
        "https://api.openai.com/v1/audio/speech",
        {
          model: "tts-1",
          input: respostaDoChat,
          voice: "alloy",
          format: "mp3", // ou 'opus', 'aac', 'flac' conforme necessário
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          responseType: "arraybuffer", // Processar a resposta como um array de bytes
        }
      );

      // Verifique se há uma URL de áudio na resposta
      if (audioResposta.headers["content-type"] === "audio/mpeg") {
        // Crie um Blob a partir dos dados da resposta
        const blob = new Blob([audioResposta.data], { type: "audio/mpeg" });

        // Crie uma URL a partir do Blob
        const audioUrl = URL.createObjectURL(blob);

        // Salvando o URL do áudio
        setAudioUrl(audioUrl);
      } else {
        console.error(
          "A resposta da API de áudio não contém uma URL válida:",
          audioResposta.data
        );
      }
    } catch (error) {
      console.error("Erro ao fazer pedido:", error.message);
    }

    setPergunta("");
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const handleOnChange = (e) => {
    setMenuVisible(false);
    setPergunta(e.target.value);
    setRespostaOption("");
  };

  const [respostaOption, setRespostaOption] = useState("");
  const handleOptionClick = (option) => {
    switch (option) {
      case 1:
        setRespostaOption(
          <>
            Estudante do 3° Semestre em Análises e Desenvolvimento de Sistemas - UNIFACS<br /><br />
            - Fundamentos de JavaScript Funcional | JavaScript Funcional e Reativo<br />
            - 701 - Linux Fundamentals | 702 - Linux Essentials<br />
            - 538 - Containers Fundamentals<br />
            - 530 - Cloud Fundamentals<br />
            - Cisco - Dispositivos de Rede e Configuração<br />
          </>
          
        );
        toggleMenuVisibility();
        break;
      case 2:
          setRespostaOption(
            <>
              • Assistente-OpenAI: Desenvolvimento de assistentes capazes de chamar modelos e utilizar ferramentas para a execução de tarefas.<br />
              • Stable Diffusion: Participação ativa em um projeto que combinou os conceitos de Midjourney e Stable Diffusion no treinamento de modelos de inteligência artificial.<br />
              • Rede-Neural: Utilização de biblioteca de redes neurais para simular aprendizado de máquina.<br />
              • ElectronChat-OpenAI: Aplicação que integra a tecnologia Electron com um modelo de chat GPT, proporcionando interações inteligentes com os usuários.<br />  
            </>
          );
          toggleMenuVisibility();
          break;
        
        toggleMenuVisibility();
        break;
      case 3:
        setRespostaOption(
          <>
            • Desenvolvimento de chatbots e assistentes virtuais.<br />
            • Gerenciamento de instâncias (EC2) na nuvem.<br />
            • Automação de navegação por meio do protocolo DevTools.<br />
            • Desenvolvimento de projetos web, com foco na integração de APIs, otimização de desempenho e implementação de funcionalidades.<br />
          </>
          
        );
        toggleMenuVisibility();
        break;
      case 4:
        const numeroWhatsapp = "71999214693";
        const mensagem = "Olá, gostaria de entrar em contato!";
        const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(
          mensagem
        )}`;
        window.open(linkWhatsapp, "_blank");
        toggleMenuVisibility();
        break;
      case 5:
        window.open(
          "https://raw.githubusercontent.com/cortoppassi/Portifolio/main/curriculoJonathan.pdf",
          "_blank"
        );
        toggleMenuVisibility();
        break;
      default:
        console.log("Opção não reconhecida");
    }
  };

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div style={chatBotStyle}>
      <Image
        src="/chatbot.png"
        alt="bot"
        width={70}
        height={70}
        style={{ ...imgStyle, display: bootVisible ? "block" : "none" }}
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <Box sx={modalStyle}>
          <div>
            <MenuIcon
              onClick={toggleMenuVisibility}
              style={{ cursor: "pointer" }}
            />
            {menuVisible && (
              <div
                style={{
                  overflow: "hidden",
                  backgroundColor: "#222",
                  color: "#bababa",
                  borderRadius: "4px",
                  margin: "2px",
                  padding: "2px",
                }}
              >
                <ul
                  style={{ listStyleType: "none", padding: "6px", margin: "0" }}
                >
                  {options.map((option) => (
                    <li
                      key={option.id}
                      style={{
                        ...liStyle,
                        border:
                          hoveredItem === option.id
                            ? "1px solid #bababa"
                            : liStyle.border,
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

          <div
            style={{
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#343541",
            }}
          >
            {respostaOption && (
              <p
                style={{
                  color: "#bababa",
                  display: pergunta ? "none" : "flex",
                }}
              >
                {resposta ? "" : respostaOption}
              </p>
            )}
            {resposta && (
              <div>
                <p
                  style={{
                    color: "#bababa",
                    backgroundColor: "#1a1a1a",
                    margin: "2px",
                    padding: "2px",
                    borderRadius: "2px",
                  }}
                >
                  {resposta}
                  <button onClick={handlePlay}>
                    <CampaignIcon></CampaignIcon>
                  </button>
                </p>
              </div>
            )}
          </div>

          <div
            style={{
              overflow: "hidden",
              backgroundColor: "#292929",
              color: "#bababa",
              margin: "2px",
              padding: "2px",
              borderRadius: "4px",
              display: pergunta ? "flex" : "none",
            }}
          >
            <p style={{ color: "#bababa", padding: "10px" }}>{pergunta}</p>
          </div>

          <div style={inputStyle}>
            <form
              onSubmit={handleSubmit}
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <textarea
                rows="1"
                cols="40"
                placeholder="Digite a pergunta..."
                value={pergunta}
                onChange={handleOnChange}
                onKeyPress={handleKeyPress}
                style={{
                  backgroundColor: "transparent",
                  flex: 1,
                  color: "#bababa",
                  resize: "none",
                  border: "none",
                  outline: "none",
                  overflow: "hidden",
                }}
                ref={textAreaRef}
              ></textarea>
              <Button
                type="submit"
                disabled={loading}
                style={{ color: "white" }}
              >
                {loading ? <CircularProgress /> : <PlayArrowIcon />}
              </Button>
              <Button
                type="button"
                style={{ color: "white" }}
                onMouseDown={startListening}
                onMouseUp={stopListening}
              >
                {<MicIcon />}
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
