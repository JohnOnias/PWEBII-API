import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/layout/layout.jsx";
import Classico from "../pages/quizname/classico.jsx";
import Home from "../pages/home/Home.jsx";
import Elixir from "../pages/quizelixir/elixir.jsx";

export default function AppRouter() {
  const [cartas, setCartas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarCartas() {
      try {
        const res = await axios.get("http://localhost:3000/cards");
        setCartas(res.data.items);
      } catch (err) {
        console.error("Erro ao carregar cartas:", err);
      } finally {
        setLoading(false);
      }
    }

    carregarCartas();
  }, []);

  if (loading) return <h2>Carregando cartas...</h2>;

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/classico",
          element: <Classico cartas={cartas} />,
        },
        {
          path: "/elixir",
          element: <Elixir cartas={cartas} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}