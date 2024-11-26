import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUsers, updateUser } from "../services/api";
import "./EditUserPage.css";

function EditUserPage() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const users = await getUsers();
    const user = users.find((u) => u.id === parseInt(id));
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email };
    await updateUser(id, updatedUser);
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default EditUserPage;
