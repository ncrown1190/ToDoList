import { useState } from "react";
import ToDoForm from "./ToDoForm";
import "./TestForm.css";

export default function TestForm() {
  const [showForm, setShowForm] = useState(false);

  const formChecked = () => {
    if (showForm) setShowForm(false);
    if (!showForm) setShowForm(true);
  };

  return (
    <div className="start-container">
      <div className="start">
        {/* <input className="btn" type="submit" onClick={formChecked} /> */}
        <button className="btn" onClick={formChecked}>
          START
        </button>
        {showForm ? <ToDoForm /> : null}
      </div>
    </div>
  );
}
