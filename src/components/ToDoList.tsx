import React from "react";
import { Task } from "../models/Interface";
import "./ToDoList.css";

interface Props {
  task: Task;
  completeTask(taskNameToDelete: string): void;
}

export default function ToDoList({ task, completeTask }: Props) {
  return (
    <div className="list">
      <div className="content">
        <span className="child1">{task.taskName}</span>
        <span className="child2">{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
    </div>
  );
}
