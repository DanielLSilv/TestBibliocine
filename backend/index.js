import "dotenv/config";
import express from "express";
import jwt from "jsonwebtoken";
import { supabase } from "./db.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // para ler JSON do body das requisições

// ✅ Rota para criar conta
app.post("/registrar", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: "Email e senha são obrigatórios." });
  }

  // Verifica se já existe usuário com o mesmo email
  const { data: userExistente } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .single();

  if (userExistente) {
    return res.status(409).json({ error: "Usuário já existe." });
  }

  // Cria novo usuário
  const { data, error } = await supabase
    .from("users")
    .insert([{ email, senha }])
    .select()
    .single();

  if (error) return res.status(500).json({ error });

  res.status(201).json({ message: "Usuário criado com sucesso", user: data });
});

// ✅ Rota para login
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: "Email e senha são obrigatórios." });
  }

  // Busca usuário com email e senha informados
  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("senha", senha)
    .single();

  if (error || !user) {
    return res.status(401).json({ error: "Email ou senha inválidos." });
  }

  // Gera token JWT
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ message: "Login realizado com sucesso", token });
});

// ✅ Rota pública de exemplo
app.get("/filmes", async (req, res) => {
  const { data, error } = await supabase.from("titles").select("*");
  if (error) return res.status(500).send(error);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
