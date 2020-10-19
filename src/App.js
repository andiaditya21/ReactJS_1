import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./Component/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
      </header>
    </div>
  );
}

export default App;
