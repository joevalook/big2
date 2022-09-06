import Player1 from "./components/Player1";
import Player2 from "./components/Player1";
import Player3 from "./components/Player1";
import Player4 from "./components/Player1";
import './App.css';

function App() {
  return (
    <div className={`App`}>
      <h1>Big 2 Score Keeping</h1>
      <section>
        <Player1 />
        <Player2 />
        <Player3 />
        <Player4 />
      </section>
    </div>
  );
}

export default App;
