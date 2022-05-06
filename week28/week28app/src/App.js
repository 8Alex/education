import React, { useState } from "react";
import "./App.css";
import Card from "./components/card";
import "./components/card.css";

function App() {
  const [card, setCard] = useState();

  const handleClick = (card) => {
    setCard(card);
  };

  return (
    <div className='App'>
      <Card
        onClick={handleClick}
        selected={1 === card}
        id={1}
        color={"colorBlue"}
        rate={300}
        price={300}
        megabit={10}></Card>
      <Card
        onClick={handleClick}
        selected={2 === card}
        id={2}
        color={"colorGreen"}
        rate={450}
        price={450}
        megabit={50}></Card>
      <Card
        onClick={handleClick}
        selected={3 === card}
        id={3}
        color={"colorRed"}
        rate={550}
        price={550}
        megabit={100}></Card>
      <Card
        onClick={handleClick}
        selected={4 === card}
        id={4}
        color={"colorGrey"}
        rate={1000}
        price={1000}
        megabit={200}></Card>
    </div>
  );
}

export default App;
