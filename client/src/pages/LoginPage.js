import axios from "axios";
import { API_BASE_URL } from "../services/api.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Envie os dados para o backend
      const response = await axios.post(`${API_BASE_URL}/login`, { email, senha });
  
      // Simula o recebimento do token (ou status de sucesso)
      if (response.status === 200) {
        alert("Login bem-sucedido!");
        navigate("/dashboard"); // Redireciona para o dashboard
      } else {
        alert("Erro ao realizar login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };
  

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
