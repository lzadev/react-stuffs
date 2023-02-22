import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const inputHandler = ($event) => {
    setNewTask($event.target.value);
  };

  const addNewTask = () => {
    if (newTask !== "") {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
      };
      setTodoList((tasks) => [...tasks, task]);

      setNewTask("");
    }
  };

  const deteleTask = (task) => {
    const tasks = todoList.filter((value) => value.id !== task.id);
    setTodoList(tasks);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input name="newTask" value={newTask} onChange={inputHandler} />
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div key={task.id}>
              <h2 className="detail">{task.taskName}</h2>
              <button onClick={() => deteleTask(task)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
