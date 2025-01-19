import { useState } from "react";
import "./App.css";
import { Card } from "./Component/Card";
import imges from "./Data/cardsData";

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [isFlipping, setIsFlipping] = useState(false);

  const startGame = () => {
    const shuffledCards = [...imges, ...imges]
      .map((card) => ({ ...card, id: Math.random() }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setIsFlipping(false);
  };

  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || isFlipping) return;

    const clickedCard = cards.find((card) => card.id === id);
    setFlippedCards((prevFlipped) => [...prevFlipped, clickedCard]);

    if (flippedCards.length === 1) {
      const [firstCard] = flippedCards;
      setIsFlipping(true);

      if (firstCard.img === clickedCard.img) {
        setMatchedCards((prevMatched) => [
          ...prevMatched,
          firstCard,
          clickedCard,
        ]);
        setIsFlipping(false);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setIsFlipping(false);
        }, 1000);
      }
    }
  };

  const handleNewGame = () => {
    startGame();
  };

  const checkGameOver = () => {
    return matchedCards.length === cards.length;
  };

  const isCardFlipped = (cardId) => {
    const flippedCard = flippedCards.find(
      (flippedCard) => flippedCard.id === cardId
    );
    const matchedCard = matchedCards.find(
      (matchedCard) => matchedCard.id === cardId
    );

    return flippedCard || matchedCard;
  };

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={handleNewGame}>New Game</button>
      <div className="grid-container">
        {cards.map((card) => (
          <div key={card.id} className="grid-item">
            <Card
              imge={card}
              onClick={handleCardClick}
              isFlipped={isCardFlipped(card.id)}
              id={card.id}
            />
          </div>
        ))}
      </div>
      {checkGameOver() && <div className="game-over">You Win!</div>}
    </div>
  );
}

export default App;
