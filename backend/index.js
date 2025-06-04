import "dotenv/config";
import express from "express";
import jwt from "jsonwebtoken";
import { supabase } from "./db.js";
import { v4 as uuidv4 } from "uuid"; // para gerar user_id único

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // para ler JSON do body

// ✅ Rota para criar conta
app.post("/registrar", async (req, res) => {
  const { name, email, password, birthdate } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Nome, email e senha são obrigatórios." });
  }

  // Verifica se já existe usuário com esse email
  const { data: existingUser } = await supabase
    .from("users")
    .select("user_id")
    .eq("email", email)
    .single();

  if (existingUser) {
    return res.status(409).json({ error: "Usuário já existe." });
  }

  // Cria usuário com UUID como user_id
  const { data, error } = await supabase
    .from("users")
    .insert([{
      user_id: uuidv4(),
      name,
      email,
      password,
      birthdate
    }])
    .select()
    .single();

  if (error) return res.status(500).json({ error });

  res.status(201).json({ message: "Usuário criado com sucesso", user: data });
});

// ✅ Rota para login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email e senha são obrigatórios." });
  }

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("password", password)
    .single();

  if (error || !user) {
    return res.status(401).json({ error: "Email ou senha inválidos." });
  }

  const token = jwt.sign(
    { id: user.user_id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ message: "Login realizado com sucesso", token });
});

// ✅ Rota pública
app.get("/filmes", async (req, res) => {
  const { data, error } = await supabase.from("titles").select("*");
  if (error) return res.status(500).send(error);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
