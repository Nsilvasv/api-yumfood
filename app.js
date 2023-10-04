import express  from "express"
import conectarBanco from "./config/db.js"
import prato from "./models/prato.js";

const conexao = await conectarBanco()

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express()
app.use(express.json())

  
app.get("/", (req, res) => {
  res.status(200).send("rota raiz")
});


app.get("/cardapio", async (req, res) => {
  const listaPratos = await prato.find({})
  res.status(200).json(listaPratos);
});

app.get("/cardapio/:id", (req, res) => {
  const index = buscaPrato(req.params.id);
  res.status(200).json(cardapio[index]);
})

app.post("/cardapio", (req, res) => {
  cardapio.push(req.body);
  res.status(201).send("prato cadastrado com sucesso");
});

app.put("/cardapio/:id", (req, res) => {
  const index = buscaPrato(req.params.id);
  cardapio[index].prato = req.body.prato;
  res.status(200).json(cardapio);
});

app.delete("/cardapio/:id", (req, res) => {
  const index = buscaPrato(req.params.id);
  cardapio.splice(index, 1);
  res.status(200).send("prato removido com sucesso");
});


app.listen(3001, () => {
    console.log("servidor rodando");
})

