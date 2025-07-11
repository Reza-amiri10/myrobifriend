import CardMaker from "./CardMaker";
import "tachyons";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="App pa0 ma0">
      <Header />
      <main className="mt7 pa3">
        <div className="lh-copy">
          <CardMaker />
        </div>
      </main>
    </div>
  );
}

export default App;
