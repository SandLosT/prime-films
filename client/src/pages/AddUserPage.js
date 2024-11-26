import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/api";
import "./AddUserPage.css";

function AddUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAddUser = async (e) => {
    e.preventDefault();
    const user = { name, email, password };
    await addUser(user);
    alert("Usuário adicionado com sucesso!");
    navigate("/users");
  };

  return (
    <div className="add-user-container">
      <h1>Adicionar Usuário</h1>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default AddUserPage;
