import "dotenv/config"; // ✅ This loads .env automatically

import express from "express";
import { supabase } from "./db.js";

const app = express();
const port = process.env.PORT || 3000;

app.get("/filmes", async (req, res) => {
  const { data, error } = await supabase.from("titles").select("*");
  if (error) return res.status(500).send(error);
  res.send(data);
});

app.post("/registrar", async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();

  if (error) return res.status(500).send(error);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
