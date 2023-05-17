import React, { useState } from "react";
import axios from "axios";

function App(): JSX.Element {
  const [response, setResponse] = useState<string>("");
  //const [image, setImage] = useState<string>("");

  const handleLogin = async (): Promise<void> => {
    try {

      const apiUrl = `https://0a9900fd04a6909380eac1f90099002a.web-security-academy.net/login`;

      const response = await axios.get(apiUrl);



      if (response.data) {
        setResponse("HACKED");
      } else {
        setResponse("FAILED");
        //setImage("");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("FAILED");
      //setImage("")
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f1f1f1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h1>Ingresa tu usuario</h1>
        <div style={{ marginBottom: "10px" }}>
          <input type="text" placeholder="Usuario" />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input type="password" placeholder="Contraseña" />
        </div>
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "orange",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Log In
        </button>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;

