import React, { useState } from "react";
import "./styles/style.css";



function Quiz(){

  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");



  const [currentCard, setCurrentCard] = useState({
    image: "https://link-da-imagem-da-carta.png",
    name: "",
  });


  const handleCheck = () => {
    if (userInput.trim() === "") {
      setFeedback("Por favor, digite um nome!");
      return;
    }
    

    // Aqui você implementará a lógica de verificação
    setFeedback(`Você digitou: ${userInput}`);
  };


  // Função para lidar com a tecla Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCheck();
    }
  };

  // Funções para os botões do footer
  const handleClose = () => {
    console.log("Fechar");
  };


  const handleInfo = () => {
    console.log("Informações");
  };


  const handleRestart = () => {
    setUserInput("");
    setFeedback("");
    console.log("Reiniciar jogo");
  };


  return (

    <div className="game-container">



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
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
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

export default Quiz;
