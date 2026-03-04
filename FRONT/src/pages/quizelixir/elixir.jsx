import { useState, useEffect } from "react";

export default function Elixir({ cartas }) {
  const [cartaAtual, setCartaAtual] = useState(null);
  const [score, setScore] = useState(0);
  const [resposta, setResposta] = useState("");
  const [mostrarNome, setMostrarNome] = useState(false);
  const [feedback, setFeedback] = useState("");

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
      setFeedback("Acertou!");
    } else {
      setScore((prev) => Math.max(prev - 1, 0));
      setFeedback(`Que pena, você errou! O custo era ${custoCorreto}`);
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
    <div className="container-elixir" style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Quiz Clash Royale</h1>

      <h2>Score: {score}</h2>

      {/* Feedback */}
      {feedback && (
        <h3
          style={{
            color: feedback.startsWith("Acertou") ? "green" : "red",
            marginBottom: "15px",
          }}
        >
          {feedback}
        </h3>
      )}

      {/* Nome escondido */}
      <div style={{ marginBottom: "15px" }}>
        <h3
          style={{
            filter: mostrarNome ? "none" : "blur(8px)",
            cursor: "pointer",
          }}
          onClick={() => setMostrarNome(true)}
        >
          {cartaAtual.name}
        </h3>
        {!mostrarNome && <small>Clique no nome para revelar</small>}
      </div>

      <img
        src={cartaAtual.iconUrls.medium}
        alt={cartaAtual.name}
        style={{ width: "200px" }}
      />

      <h3>Qual o custo de elixir?</h3>

      <input
        className="input-elixir"
        type="number"
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        placeholder="Digite o custo"
        disabled={!!feedback}
      />

      <br />
      <br />

      <button  className="bnt-elixir" onClick={verificarResposta} disabled={!!feedback}>
        Responder
      </button>
    </div>
  );
}
