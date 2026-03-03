import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/layout/layout.jsx";
import Classico from "../pages/quizname/classico.jsx";
import Home from "../pages/home/Home.jsx";
import Elixir from "../pages/quizelixir/elixir.jsx";



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
          element: <Classico /> 

      },
      {
        path: "/elixir",
        element: <Elixir />
      },

    ],
  },
]);


export default router;