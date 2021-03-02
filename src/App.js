//import logo from './logo.svg';
import './App.css';
import { Button } from "@blueprintjs/core";
import Cosmos from "./components/Cosmos/Cosmos"
import "./components/Cosmos/Cosmos.scss"
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers  from "./reducers";

function App() {
  return (
    <Provider store={createStore(reducers)}>
    <Router>
        <Cosmos className="Cosmos"></Cosmos>
    </Router>
    </Provider>

  );
}

export default App;
