// Importa o módulo Express para criar o servidor web.
import express from "express";
import routes from "./src/routes/postRoutes.js";


// Cria uma instância do aplicativo Express.
const app = express();
app.use(express.static("uploads"))
routes(app);

// Define um array de objetos chamado posts, cada objeto representa um post com suas informações.
const posts = [
    {
        id: 1,
        descricao: "uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "um gatinho fofo",
        imagem: "https://placecats.com/200/300",
    },
    {
        id: 3,
        descricao: "paisagem exuberante",
        imagem: "https://placeimg.com/640/480/nature",
    },
    {
        id: 4,
        descricao: "uma obra de arte",
        imagem: "https://placeimg.com/640/480/art",
    },
    {
        id: 5,
        descricao: "um carro esportivo",
        imagem: "https://placeimg.com/640/480/tech",
    },
    {
        id: 6,
        descricao: "uma pessoa feliz",
        imagem: "https://placeimg.com/640/480/people",
    }
];


// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando estiver pronto.
app.listen(3000, () => {
    console.log("servidor escutando...");
});

