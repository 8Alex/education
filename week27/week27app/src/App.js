import React from "react";
import "./App.css";
import Card from "./components/card";
import "./components/card.css";

function App() {
  return (
    <div className='App'>
      <Card color={"colorBlue"} rate={300} price={300} megabit={10}></Card>
      <Card color={"colorGreen"} rate={450} price={450} megabit={50}></Card>
      <Card
        selected={true}
        color={"colorRed"}
        rate={550}
        price={550}
        megabit={100}></Card>
      <Card color={"colorGrey"} rate={1000} price={1000} megabit={200}></Card>
    </div>
  );
}

export default App;
