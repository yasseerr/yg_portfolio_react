//import logo from './logo.svg';
import './App.css';
import { Button } from "@blueprintjs/core";
import Cosmos from "./components/Cosmos/Cosmos"
import "./components/Cosmos/Cosmos.scss"
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <Cosmos className="Cosmos"></Cosmos>
    </Router>
  );
}

export default App;
