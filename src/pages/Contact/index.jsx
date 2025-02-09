import React from "react";
import * as S from "./styles";

const Contact = () => {
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
        action=""
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
            type="text"
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
          placeholder="Assunto"
            type="text"
            style={{
              border: "solid 1px #00a5ec",
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "transparent",
              width: "100%",
            }}
          />
          <input
          placeholder="Telefone"
            type="text"
            style={{
              border: "solid 1px #00a5ec",
              borderRadius: "8px",
              padding: "8px",
              backgroundColor: "transparent",
              width: "100%",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "50%" }}>
          <textarea
          placeholder="Mensagem"
            name=""
            id=""
            style={{
              border: "solid 1px #00a5ec",
              borderRadius: "8px",
              padding: "8px",
              width: "100%",
              backgroundColor: "transparent"
            }}
          ></textarea>
        </div>

        <button style={{ backgroundColor: "#00a5ec", color: "#081b29", padding: "8px 24px" }}>
          Submit
        </button>
      </form>
    </S.AboutContainer>
  );
};

export default Contact;
