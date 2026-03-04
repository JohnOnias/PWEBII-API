import React, { useState, useEffect } from "react";
import "./styles/style.css";


export default function Classico({cartas}){
  
    const [cartaAtual, setCartaAtual] = useState(null);
    const [score, setScore] = useState(0);
    const [resposta, setResposta] = useState("");
    const [mostrarNome, setMostrarNome] = useState(false);
    const [feedback, setFeedback] = useState("");
    

    function handleKeyPress(e) {
      if (e.key === "Enter") {
        verificarResposta();
      }
    }

    function handleCheck() {
      verificarResposta();
    }
  
    function pegarCartaAleatoria(lista, atual) {
      if (!lista || lista.length === 0) return null;
  
      let novaCarta;
  
      do {
        const index = Math.floor(Math.random() * lista.length);
        novaCarta = lista[index];
      } while (atual && novaCarta.id === atual.id);
  
      return novaCarta;
    }
  
    useEffect(() => {
      if (cartas && cartas.length > 0) {
        setCartaAtual(pegarCartaAleatoria(cartas, null));
        setMostrarNome(false);
      }
    }, [cartas]);
  
    function verificarResposta() {
      if (!cartaAtual || feedback) return;
  
      const nomecorreto = cartaAtual.name;
      const acertou = resposta === nomecorreto;
  
      console.log("Resposta do usuário:", resposta);
      console.log("Nome correto:", nomecorreto);

      if (acertou) {
        setScore((prev) => prev + 1);
        setFeedback("Acertou!");
      } else {
        setScore((prev) => Math.max(prev - 1, 0));
        setFeedback(`você errou! O nome correto era: ${nomecorreto}`);
      }
  
      setResposta("");
  
      setTimeout(() => {
        const novaCarta = pegarCartaAleatoria(cartas, cartaAtual);
        setCartaAtual(novaCarta);
        setMostrarNome(false);
        setFeedback("");
      }, 1500);
    }
  
    if (!cartas || cartas.length === 0) {
      return <h2>Carregando cartas...</h2>;
    }
  
    if (!cartaAtual) {
      return <h2>Preparando carta...</h2>;
    }
  
  
  return (

    <div className="quiz-container">



      <div className="quiz-card">
        <div className="quiz-header">
          <h2>QUAL É A CARTA?</h2>
        </div>



        <div className="card-display">
          <img src={cartaAtual.iconUrls.medium} alt="Carta" className="mystery-card" />
        </div>


        <div className="input-area">
          <input
            type="text"
            value={resposta}
            onChange={(e) => setResposta(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escreva o nome do personagem..."
            autoComplete="off"
          />
          <button id="btnCheck" onClick={handleCheck}>
            ➤
          </button>
        </div>

        {feedback && (
          <div className="feedback" id="feedbackMsg">
            {feedback}
          </div>
        )}

      </div>

     
    </div>

  );
};


