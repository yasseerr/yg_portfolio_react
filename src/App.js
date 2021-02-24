//import logo from './logo.svg';
import './App.css';
import { Button } from "@blueprintjs/core";
import Cosmos from "./components/Cosmos/Cosmos"
import "./components/Cosmos/Cosmos.scss"

function App() {
  return (
    <Cosmos className="Cosmos"></Cosmos>
    // <div className="App">
    //   <Button icon="refresh" text="This is the text modified"/>
    //   <Button icon="refresh" text="This is the text modified"/>
    //   <Button icon="refresh" text="This is the text modified"/>
    // </div>
  );
}

export default App;
