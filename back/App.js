//abaixo importamos o express.
import express, { json } from 'express';
import PeliculaController from './app/controllers/PeliculaController.js';
import UsuarioController from './app/controllers/UsuarioController.js';

//abaixo alocamos o express em app.
const app = express();
app.use(express.json());
     //ROTAS
     // CRUD DE MERCADORIAS

     //End point que busca a lista de peliculas
     app.get("/peliculas", PeliculaController.index)//ok

     //End point de busca por id
     app.get("/peliculas/:id", PeliculaController.show)//ok

     //End point de busca por modelo de telefone
     app.get("/peliculas/tell/:tell", PeliculaController.showfortell)//ok

     //End point de busca por película
     app.get("/peliculas/pelicula/:pelicula", PeliculaController.showforpelicula)//ok

     //End point de cadastro de película
     app.post("/peliculas", PeliculaController.store) //ok

     //end point de update
     app.put("/peliculas/:id", PeliculaController.update) //ok

     //End point de exclusão e configurado para excluir por modelo de telefone.
     app.delete("/peliculas/:tell", PeliculaController.delete) //ok

    // CRUD de Usuários

    // End point que busca a lista de usuários
    app.get("/usuarios",UsuarioController.index)//ok

    // End point de busca por ID
    app.get("/usuarios/:id", UsuarioController.show)//ok

    // Endpoint de login
    app.post('/login',UsuarioController.showLogin)

    // End point de cadastro de usuário
    app.post("/usuarios", UsuarioController.store)//ok

    // End point de exclusão de usuário por ID
    app.delete("/usuarios/:id",UsuarioController.delete)//ok

    // End point de alteração de dados do usuário
    app.put("/usuarios/:id", UsuarioController.update)

// no metodo acima o "req" significa requisição e o "res" significa resposta.
export default app;