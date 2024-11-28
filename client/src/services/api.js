import axios from "axios";

// URL base do backend
export const API_BASE_URL = "http://localhost:3000"; // Certifique-se de que a porta está correta

// Funções da API de Películas
export const getPeliculas = async () => {
  const response = await axios.get(`${API_BASE_URL}/peliculas`);
  return response.data;
};


export const getPeliculabyid = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/peliculas/${id}`);
  return response.data;
};



export const addPelicula = async (pelicula) => {
  try {
    console.log("Dados enviados:", {
      model_tell: pelicula.model_tell,
      model_peli: pelicula.model_peli,
      quantidade: pelicula.quantidade,
      valor: pelicula.valor,
    });

    const response = await axios.post(`${API_BASE_URL}/peliculas`, {
      model_tell: pelicula.model_tell,
      model_peli: pelicula.model_peli,
      quantidade: pelicula.quantidade,
      valor: pelicula.valor,
    });

    console.log("Resposta do servidor:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar película:", error.response || error);
    throw error; // Lança o erro para ser tratado em outro lugar
  }
};



export const updatePelicula = async (id, peliculaData) => {
  try {
    const response = await fetch(`/api/peliculas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(peliculaData),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar película");
    }
    
    return await response.json(); // Retorna a resposta da API
  } catch (error) {
    console.error("Erro ao atualizar película:", error);
    throw error; // Lança o erro para ser tratado no front-end
  }
};


export const deletePelicula = async (tell) => {
  await axios.delete(`${API_BASE_URL}/peliculas/${tell}`);
};

// Funções da API de Usuários
export const getUsuarios = async () => {
  const response = await axios.get(`${API_BASE_URL}/usuarios`);
  return response.data;
};


export const addUsuario = async (usuario) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/usuarios`, usuario);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error.response || error);
    throw error; // Lança o erro para ser tratado em outro lugar
  }
};

export const updateUsuario = async (id, usuario) => {
  const response = await axios.put(`${API_BASE_URL}/usuarios/${id}`, usuario);
  return response.data;
};

export const deleteUsuario = async (id) => {
  await axios.delete(`${API_BASE_URL}/usuarios/${id}`);
};

export const getPeliculaByTell = async (tell) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/peliculas/tell/${tell}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar película:", error.response || error);
    throw error; // Lança o erro para ser tratado em outro lugar
  }
};

export const getPeliculaByModel = async (pelicula) => {
  const response = await fetch(`/peliculas/pelicula/${pelicula}`);
  return response.json();
};