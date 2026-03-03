import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.get("/cards", async (req, res) => {
  try {
    const response = await axios.get("https://api.clashroyale.com/v1/cards", {
      headers: {
        Authorization: `Bearer ${process.env.CLASH_API_KEY}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json(error.response?.data || error.message);
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
