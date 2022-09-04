import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TestForm from "./components/TestForm";
import ToDoForm from "./components/ToDoForm";

function App() {
  return (
    <div className="App">
      <Header />
      <TestForm />
      {/* <ToDoForm /> */}
    </div>
  );
}

export default App;
