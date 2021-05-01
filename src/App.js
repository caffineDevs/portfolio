import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Router from "./components/Router/Router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
