import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import PeliculasPage from "./pages/PeliculasPage";
import UsersPage from "./pages/UsersPage";
import AddUserPage from "./pages/AddUserPage";
import EditUserPage from "./pages/EditUserPage";
import AddPeliculaPage from "./pages/AddPeliculaPage";
import EditPeliculaPage from "./pages/EditPeliculaPage"; // Renomeie este componente corretamente.
import { 
  getPeliculas, 
  addPelicula, 
  updatePelicula, 
  deletePelicula, 
  getUsuarios, 
  addUsuario, 
  updateUsuario, 
  deleteUsuario 
} from './services/api';

function App() {
  const [peliculas, setPeliculas] = useState([]); // Renomeado de products para peliculas
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Carregar películas
    getPeliculas().then((data) => setPeliculas(data));

    // Carregar usuários
    getUsuarios().then((data) => setUsers(data));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/peliculas" element={<PeliculasPage peliculas={peliculas} />} />
        <Route path="/users" element={<UsersPage users={users} />} />
        <Route path="/add-user" element={<AddUserPage />} />
        <Route path="/edit-user/:id" element={<EditUserPage />} />
        <Route path="/add-pelicula" element={<AddPeliculaPage />} />
        <Route path="/edit-pelicula/:id" element={<EditPeliculaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
