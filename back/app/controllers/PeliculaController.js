import conexao from '../database/conexao.js'
class PeliculaController{
    //busca todas as peliculas
    index(req, res) {
        const sql = "SELECT * FROM estoque_peliculas;";
        conexao.query(sql, (erro, resultado) =>{
             if(erro){
                 console.log(erro);
                 res.status(404)
             } else{
                 res.status(200).json(resultado);
             }
        })
    };
    //busca um pelicula por um "id" que é passado por parametro
    show(req, res) {
        const id = req.params.id;
        const sql = "SELECT * FROM estoque_peliculas WHERE id=?";
        conexao.query(sql, id, (erro, resultado) =>{
             if(erro){
                 console.log(erro);
                 res.status(404)
             } else{
                 res.status(200).json(resultado);
             }
        })
    };
    // busca no banco o modelo de telefone que sendo passado por parametro
    // antes era showforname
    showfortell(req, res) {
        try {
            const tell = req.params.tell;
            console.log("Parâmetro recebido:", tell);
    
            const sql = "SELECT * FROM estoque_peliculas WHERE TRIM(LOWER(model_tell)) = TRIM(LOWER(?))";
    
            conexao.query(sql, tell, (erro, resultado) => {
                if (erro) {
                    console.error("Erro na consulta:", erro);
                    res.status(500).json({ mensagem: "Erro interno do servidor" });
                } else {
                    console.log("Resultado da consulta:", resultado);
                    if (resultado.length === 0) {
                        res.status(404).json({ mensagem: "tell não encontrado" });
                    } else {
                        res.status(200).json(resultado);
                    }
                }
            });
        } catch (erro) {
            console.error("Erro inesperado:", erro);
            res.status(500).json({ mensagem: "Erro inesperado no servidor" });
        }
    };
    //fazer busca pelicula
    //Antes era showfrogroup
    showforpelicula(req, res) {
        const pelicula = req.params.pelicula; // Captura o tell enviado como parâmetro na URL
        console.log("Parâmetro recebido (pelicula):", pelicula); // Log para verificar o valor recebido
    
        const sql = "SELECT * FROM estoque_peliculas WHERE model_peli = ?"; // Consulta SQL para filtrar por pelicula
    
        conexao.query(sql, pelicula, (erro, resultado) => {
            if (erro) {
                console.error("Erro na consulta:", erro);
                res.status(500).json({ mensagem: "Erro interno do servidor" }); // Erro interno no servidor
            } else if (resultado.length === 0) {
                console.log("Nenhuma pelicula encontrada:", pelicula);
                res.status(404).json({ mensagem: "Nenhuma pelicula encontrada para este modelo" }); // Nenhum pelicula encontrada
            } else {
                console.log("Peliculas encontradas:", resultado);
                res.status(200).json(resultado); // Retorna os dados encontrados
            }
        });
    };
    //metodo para cadastrar novas películas
    //dados sendo passados pelo corpo  
    store(req, res) {
        const dados = req.body;
        const sql = "INSERT INTO estoque_peliculas SET ?";
        conexao.query(sql, dados, (erro, resultado) =>{
             if(erro){
                 console.log(erro);
                 res.status(404)
             } else{
                res.status(201).json({ mensagem: "Película cadastrada com sucesso", id: resultado.insertId });
             }
        })
    };
    //metodo para atualizar películas
    //"alterações" sendo passadas no corpo e "id" pelo parametro
    update (req,res) {
        const alteracoes = req.body;
        const id = req.params.id;
        const sql = "UPDATE estoque_peliculas SET ? WHERE id=?";
        conexao.query(sql,[alteracoes, id], (erro, resultado) =>{
             if(erro){
                 console.log(erro);
                 res.status(404)
             } else{
                 res.status(200).json(resultado);
             }
        })
    };
    //metodo para deletar uma película pelo nome do telefone
    //o modelo do telefone deve ser passado pelo parametro
    delete(req, res) {
        const tell = req.params.tell;
        const sql = "DELETE FROM estoque_peliculas WHERE model_tell=?";
        conexao.query(sql, tell, (erro, resultado) =>{
             if(erro){
                 console.log(erro);
                 res.status(404)
             } else{
                 res.status(200).json(resultado);
             }
        });
}}
//padrão Singleton
export default new PeliculaController();