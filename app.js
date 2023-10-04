import express  from "express"

const app = express()
app.use(express.json())

const cardapio = [
    {
      id: 1,
      prato: "Salada"
    },
    {
      id: 2,
      prato: "Macarrão"
    }
  ]
  
  function buscaPrato(id) {
    return cardapio.findIndex(prato => {
      return prato.id === Number(id);
    })
  }
  
  app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
  });
  
  app.get("/cardapio", (req, res) => {
    res.status(200).json(cardapio);
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