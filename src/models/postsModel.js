import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Chama a função conectarAoBanco para estabelecer a conexão com o banco de dados,
// utilizando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO.
// Aguarda a resolução da promessa para obter a conexão.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// Define uma função assíncrona chamada getTodosPosts que busca todos os posts do banco de dados.
export async function getTodosPosts() {
    // Obtém o banco de dados "imersao-instabyes" da conexão.
    const db = conexao.db("imersao-instabyes");
    // Obtém a coleção "posts" do banco de dados.
    const colecao = db.collection("posts");
    // Retorna um array com todos os posts encontrados na coleção.
    return colecao.find().toArray();
};

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabyes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabyes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({ _id: new ObjectId(objID) }, { $set: novoPost })
}