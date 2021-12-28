import "./App.css";
import TinderCards from "./components/TinderCards";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";
function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
