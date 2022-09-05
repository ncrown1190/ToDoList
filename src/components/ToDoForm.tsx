import "./ToDoForm.css";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../models/Interface";
import ToDoList from "./ToDoList";

export default function ToDoForm() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Task[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="todoform">
      <div className="formHeader">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task...."
            name="task"
            value={task}
            onChange={handleChange}
          />
          {/* <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          /> */}
        </div>
        <button onClick={addTask}>Add</button>
      </div>

      <div className="todoList">
        <h1>My Todo List</h1>
        {todoList.map((task: Task, key: number) => {
          return <ToDoList key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}
