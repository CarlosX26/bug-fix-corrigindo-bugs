import { useEffect, useState } from "react";
import CardsList from "./components/cards-list";
import "./App.css";

const App = () => {
  const [showDeck, setShowDeck] = useState(false);
  const [cardsList, setCardsList] = useState([]);
  const [deck, setDeck] = useState("");

  const handleShowDeck = () => {
    setShowDeck((prevState) => !prevState);
  };

  useEffect(() => {
    (async () => {
      await fetch("https://deckofcardsapi.com/api/deck/new/")
        .then((res) => res.json())
        .then((res) => setDeck(res.deck_id));
    })();
  }, [showDeck]);

  useEffect(() => {
    (async () => {
      if (deck === "") {
        return;
      }
      await fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=52`)
        .then((res) => res.json())
        .then((res) => setCardsList([...res.cards]));
    })();
  }, [deck]);

  return (
    <div className="main-container">
      <h1 className="main-title">Debugue para ver o baralho</h1>
      <button onClick={() => handleShowDeck()} className="new-deck-button">
        Novo baralho
      </button>
      {showDeck && <CardsList cardsList={cardsList} />}
    </div>
  );
};

export default App;
