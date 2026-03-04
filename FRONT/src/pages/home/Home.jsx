import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/home.css";
import Elixir from "../../assets/elixir.png";
import Classico from "../../assets/classico.png";
import axios from "axios"; 



export default function Home() {






    const navigate = useNavigate(); 

  return (
    <div className="home-container">
      <div className="titulo">Adivinhe as cartas e elixir do Clash Royale</div>

      <div className="home-lista">
        <img
          className="modo-jogo2"
          src={Classico}
          alt="modo de jogo classico"
          onClick={() => navigate("/classico")}
        />
        <img
          className="modo-jogo1"
          src={Elixir}
          alt="modo de jogo elixir"
          onClick={() => navigate("/elixir")}
        />
      </div>
    </div>
  );
}
