import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Paths of Legend</h1>
        <h2>Companion</h2>
      </header>
      <p className="sub-title">
        Welcome to the companion site for Paths of Legend, an in-development RPG
        where your choices matter!
      </p>
      <ul>
        <li>
          <Link to={"wiki"}>Wiki</Link>
        </li>
        <li>
          <Link to={"battle-maker"}>Battle maker</Link>
        </li>
        <li>
          <Link to={"character-creation"}>Character creation</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
