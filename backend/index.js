require("dotenv").config();
const express = require("express");
const { supabase } = require("./db");
const app = express();
const port = process.env.PORT || 3000;

app.get("/filmes", async (req, res) => {
  let { data: titles, error } = await supabase.from("titles").select("*");

  res.send(titles);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
