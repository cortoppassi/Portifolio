import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularProgress from "@mui/material/CircularProgress";
import MicIcon from "@mui/icons-material/Mic";
import MenuIcon from "@mui/icons-material/Menu";
import chatbotImage from "./images/chatbot.png";

import {
  ChatBotContainer,
  ModalStyled,
  ScrollableDivStyled,
  InputStyle,
} from "./style";

const imgStyle = {
  width: "130px",
  height: "130px",
  zIndex: "9999",
  objectFit: "cover",
  cursor: "pointer",
};

export default function Chatbot() {
  const [modalPosition, setModalPosition] = useState({ bottom: 20, right: 20 });
  const chatBotRef = useRef();
  const [menuVisible, setMenuVisible] = useState(false);
  const [pergunta, setPergunta] = useState("");
  const [messages, setMessages] = useState([]);
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [bootVisible, setBotVisible] = useState(true);
  const [userPrompt, setUserPrompt] = useState("");
  const [exampleInput, setExampleInput] = useState([""]);
  const [messageInit, setMessageInit] = useState(
    "Olá! Como posso ajudar você hoje?"
  );
  const [promptType, setPromptType] = useState("zero-shot");
  const [examples, setExamples] = useState([]);
  const [menuConfig, setMenuConfig] = useState(true);
  const [open, setOpen] = useState(false);
  const textAreaRef = useRef(null);
  const recognition = useRef(null);

  const handleOpenModal = () => {
    if (chatBotRef.current) {
      const rect = chatBotRef.current.getBoundingClientRect();
      let newBottom = window.innerHeight - rect.bottom + 10;
      let newRight = window.innerWidth - rect.right + 10;

      const modalHeight = window.innerHeight * 0.6;
      const modalWidth = Math.min(window.innerWidth * 0.9, 400);

      if (newBottom + modalHeight > window.innerHeight) {
        newBottom = 10; // Ajusta para não ultrapassar a borda inferior
      }

      if (newRight + modalWidth > window.innerWidth) {
        newRight = 10; // Ajusta para não ultrapassar a borda direita
      }

      setModalPosition({
        bottom: newBottom,
        right: newRight,
      });
    }
    handleOpen();
  };

  const handleOpen = () => {
    setOpen(true);
    setBotVisible(false);
    addMessage({ role: "bot", content: messageInit });
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  const handleClose = () => {
    setOpen(false);
    setBotVisible(true);
    setMessages([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    addMessage({ role: "user", content: pergunta });
    setPergunta("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:1234/v1/chat/completions",
        {
          model: "deepseek-r1-distill-qwen-7b",
          messages: [
            {
              role: "system",
              content:
                "Responda de forma natural e amigável, mantendo o contexto da conversa.",
            },
            { role: "user", content: pergunta },
          ],
          temperature: 0.7,
          max_tokens: 500,
        }
      );

      const reply = response.data.choices[0].message.content
        .replace(/<think>[\s\S]*?<\/think>/g, "")
        .trim();
      addMessage({ role: "bot", content: reply });
    } catch (error) {
      addMessage({ role: "bot", content: "Verifique as configurações" });
      console.error("Erro ao fazer pedido:", error.message);
    }

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
  };

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      recognition.current = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.current.continuous = true;
      recognition.current.lang = "pt-BR";

      recognition.current.onresult = (event) => {
        const text = event.results[event.results.length - 1][0].transcript;
        setPergunta(text);
      };

      recognition.current.onend = () => {};

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

  return (
    <>
      <ChatBotContainer ref={chatBotRef}>
        <img
          src={chatbotImage}
          alt="bot"
          width={70}
          height={70}
          style={{ ...imgStyle, display: bootVisible ? "block" : "none" }}
          onClick={handleOpenModal}
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
          <ModalStyled
            bottom={modalPosition.bottom}
            right={modalPosition.right}
          >
            <ScrollableDivStyled>
              <MenuIcon
                onClick={toggleMenuVisibility}
                style={{ cursor: "pointer" }}
              />

              {menuVisible && (
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "flex-start",
                    padding: "8px",
                    listStyle: "none",
                    overflow: "hidden",
                    backgroundColor: "#222",
                    color: "#bababa",
                    borderRadius: "8px",
                    border: "solid 1px #fff",
                  }}
                >
                  <li>
                    <button onClick={() => setMenuConfig(true)}>
                      Configurações Gerais
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setMenuFlows(true)}>
                      Fluxos de Conversação
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setMenuIntegrations(true)}>
                      Integrações
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setMenuHelp(true)}>
                      Ajuda e Suporte
                    </button>
                  </li>
                </ul>
              )}

              {menuConfig && (
                <>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      style={{
                        overflow: "hidden",
                        backgroundColor:
                          message.role === "user" ? "#292929" : "#343541",
                        color: "#bababa",
                        margin: "8px",
                        padding: "8px",
                        borderRadius: "8px",
                        border: "solid 1px #ccc",
                        wordWrap: "break-word",
                      }}
                    >
                      <h3>{message.content}</h3>
                    </div>
                  ))}
                </>
              )}
            </ScrollableDivStyled>
            {menuConfig && (
              <InputStyle>
                <form
                  onSubmit={handleSubmit}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <textarea
                    rows="1"
                    placeholder="Faça sua pergunta aqui..."
                    value={pergunta}
                    onChange={handleOnChange}
                    onKeyPress={handleKeyPress}
                    style={{
                      backgroundColor: "transparent",
                      flex: 2,
                      color: "#bababa",
                      border: "none",
                      resize: "none",
                      padding: "8px",
                      outline: "none",
                      overflow: "hidden",
                      fontFamily: "Arial, sans-serif",
                      fontSize: "1.25rem",
                    }}
                    ref={textAreaRef}
                  ></textarea>
                  <Button
                    type="submit"
                    disabled={loading}
                    style={{
                      color: "white",
                      padding: "6px",
                      minWidth: "32px",
                      height: "32px",
                    }}
                  >
                    {loading ? <CircularProgress /> : <PlayArrowIcon />}
                  </Button>
                </form>
              </InputStyle>
            )}
          </ModalStyled>
        </Modal>
      </ChatBotContainer>
    </>
  );
}
