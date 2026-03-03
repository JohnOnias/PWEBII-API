import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/layout/layout.jsx";
import Quiz from "../pages/quizname/quiz.jsx";



const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
    
      {
        path: "/",
        element: <Quiz />
      }

    ]
  }
]);


export default router;