const express = require("express");
const app = express();
const port = 3001;

app.get("/filmes", (req, res) => {
  res.send("Veja sua lista de filmes aqui!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
