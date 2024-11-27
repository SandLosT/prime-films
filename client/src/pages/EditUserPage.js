import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUsuarios, updateUsuario } from "../services/api";
import "./EditUserPage.css";

function EditUserPage() {
  const { id } = useParams();
  const [nome, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState(""); // Estado para a senha
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const users = await getUsuarios();
    const user = users.find((u) => u.id === parseInt(id));
    if (user) {
      setName(user.nome);
      setEmail(user.email);
      // Defina a senha apenas se necessário. Caso contrário, a senha será ignorada.
      setPassword(""); // Não mostra a senha no input, a não ser que o usuário queira mudar.
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Crie um objeto de usuário com todos os dados que precisam ser atualizados
    const updatedUser = { nome, email };
    
    // Se a senha não estiver vazia, inclua a senha no objeto de atualização
    if (senha) {
      updatedUser.senha = senha;
    }

    // Atualize o usuário
    await updateUsuario(id, updatedUser);
    alert("Usuário atualizado com sucesso!");
    navigate("/users");
  };

  return (
    <div className="edit-user-container">
      <h1>Editar Usuário</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
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
          value={senha}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default EditUserPage;
