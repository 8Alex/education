import './App.css';
import Hero from './components/hero';
import './components/hero.css';
import data from "./data.json"

function App() {
  return (
      <div className="App">
      <h1>10 крутейших супергероев</h1>
      <div className="container">
      {
        data.map((heroItem)=>
        <Hero key={heroItem.id} name={heroItem.name} img={heroItem.img} universe={heroItem.universe} alterEgo={heroItem.alterEgo} career={heroItem.career} friends={heroItem.friends} superpowers={heroItem.superpowers} more={heroItem.more}></Hero>
        )
      }
      </div>
    </div>
  );
}

export default App;
