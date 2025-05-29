import dotenv from "dotenv";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config()

app.post("/registrar", () => {
  // Implement registration logic here
  // This is a placeholder for the registration endpoint
  res.send("Registration endpoint");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
