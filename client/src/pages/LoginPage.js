import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Aqui estamos simulando uma verificação de login com credenciais fixas
    const validEmail = "teste@teste.com";
    const validPassword = "senha123";

    if (email === validEmail && password === validPassword) {
      // Simulando uma resposta de sucesso
      alert("Login bem-sucedido!");
      navigate("/dashboard"); // Redireciona para a página principal
    } else {
      alert("Erro ao realizar login. Verifique suas credenciais.");
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
