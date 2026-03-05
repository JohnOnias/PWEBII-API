import { useState, useEffect } from "react";
import "./style/elixir.css";
import trofeu from "../../../src/assets/trofeu.png";
import enviar from "../../assets/respond.png";

export default function Elixir({ cartas }) {
  const [cartaAtual, setCartaAtual] = useState(null);
  const [score, setScore] = useState(0);
  const [resposta, setResposta] = useState("");
  const [mostrarNome, setMostrarNome] = useState(false);
  const [feedback, setFeedback] = useState(null); 

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

    const custoCorreto = cartaAtual.elixirCost;
    const acertou = Number(resposta) === custoCorreto;

    if (acertou) {
      setScore((prev) => prev + 1);
      setFeedback({
        tipo: "acerto",
        mensagem: "You’re right!",
      });
    } else {
      setScore((prev) => Math.max(prev - 1, 0));
      setFeedback({
        tipo: "erro",
        mensagem: `That’s a shame! The cost was ${custoCorreto}`,
      });
    }

    setResposta("");
  }

  function fecharModal() {
    const novaCarta = pegarCartaAleatoria(cartas, cartaAtual);
    setCartaAtual(novaCarta);
    setMostrarNome(false);
    setFeedback(null);
  }

  if (!cartas || cartas.length === 0) {
    return <h2>Loading cards...</h2>;
  }

  if (!cartaAtual) {
    return <h2>Preparing card...</h2>;
  }

  return (
    
    <div className="quiz-container">

    {/*  <div className="score-elixir">
        <img className="icon-score" src={trofeu} alt="trophies" />
        <div className="score-number-elixir">{score}</div>
      </div>

     <div style={{ marginBottom: "15px" }}>
        <h3
          className="nome-card-elixir"
          style={{
            filter: mostrarNome ? "none" : "blur(8px)",
            cursor: "pointer",
          }}
          onClick={() => setMostrarNome(true)}
        >
          {cartaAtual.name}
        </h3>
        {!mostrarNome && <small>Click the name to reveal</small>}
      </div>*/ }

      <div className="card-elixir">
        <div className="quiz-header">
          <h2 className="quiz-titulo-elixir">What is the elixir cost?</h2>
        </div>

        <div className="card-display-elixir">
          <img
            src={cartaAtual.iconUrls.medium}
            alt={cartaAtual.name}
            className="carta-atual"
          />
        </div>

        <div className="input-area">
          <input
            className="input-elixir"
            type="number"
            value={resposta}
            onChange={(e) => setResposta(e.target.value)}
            placeholder="Enter the cost"
            disabled={!!feedback}
          />
        </div>

        <img
          className="bnt-elixir"
          src={enviar}
          alt="submit button"
          onClick={verificarResposta}
        />
      </div>


      {/* moda de feedback*/}
      {feedback && (
        <div className="modal-overlay">
          <div className={`modal-feedback ${feedback.tipo}`}>
            <h2>{feedback.mensagem}</h2>
            <button onClick={fecharModal}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}
