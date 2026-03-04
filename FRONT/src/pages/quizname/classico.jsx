import React, { useState } from "react";
import "./styles/style.css";



export default function Classico({cartas}){
  
  const [feedback, setFeedback] = useState("");
  const [formulario, setFormulario] = useState(""); 
  
  const [currentCard, setCurrentCard] = useState({
    image: "",
    name: "",
  });





  const handleCheck = () => {
    
    if (formulario.trim() === "") {
      setFeedback("Por favor, digite um nome!");
      return;
    }


    // por a logica de comparação com a carta alvo    
    setFeedback(`Você digitou: ${formulario}`);
  };



  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCheck();
    }
  };






  const handleRestart = () => {

    setFormulario("");
    setFeedback("");
    console.log("Reiniciar jogo");
  };


  return (

    <div className="quiz-container">



      <div className="quiz-card">
        <div className="quiz-header">
          <div className="tab-icons">
            <span>⚔️</span>
            <span>👑</span>
            <span>🛡️</span>
          </div>
          <h2>QUAL É A CARTA?</h2>
        </div>



        <div className="card-display">
          <img src={currentCard.image} alt="Carta" className="mystery-card" />
        </div>


        <div className="input-area">
          <input
            type="text"
            value={formulario}
            onChange={(e) => setFormulario(e.target.value)}
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


