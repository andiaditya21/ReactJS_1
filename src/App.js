import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./Component/Input";
import Button from "./Component/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" />
      </header>
    </div>
  );
}

export default App;
