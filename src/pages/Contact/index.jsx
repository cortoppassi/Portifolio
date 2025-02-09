import React, { useState } from "react";
import * as S from "./styles";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Criar backend para enviar email
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      alert(response.data);
    } catch (error) {
      alert("Erro ao enviar o formulário.");
    } finally {
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <S.AboutContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <h1>Contact</h1>
        <h1 style={{ color: "#00a5ec" }}>Me!</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: "30%",
          height: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "8px",
          }}
        >
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              border: "solid 1px #00a5ec",
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "transparent",
              width: "100%",
            }}
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              border: "solid 1px #00a5ec",
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "transparent",
              width: "100%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: "8px",
          }}
        >
          <input
            placeholder="Subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              border: "solid 1px #00a5ec",
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "transparent",
              width: "100%",
            }}
          />
          <input
            placeholder="Phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              border: "solid 1px #00a5ec",
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "transparent",
              width: "100%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "50%",
          }}
        >
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{
              border: "solid 1px #00a5ec",
              borderRadius: "8px",
              padding: "8px",
              width: "100%",
              backgroundColor: "transparent",
            }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#00a5ec",
            color: "#081b29",
            padding: "8px 24px",
          }}
        >
          Submit
        </button>
      </form>
    </S.AboutContainer>
  );
};

export default Contact;
