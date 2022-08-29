import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";

function App() {
  return (
    <div className="App">
      <Header />
      <ToDoForm />
    </div>
  );
}

export default App;
