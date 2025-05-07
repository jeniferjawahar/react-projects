import { useState } from "react";
function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleClick() {
    console.log(tasks);
    if (task.trim() == "") return;
    setTasks([...tasks, task]);
    setTask("");
  }

  function handleDelete(index) {
    const newTasks = tasks.filter((t, i) => i != index);
    setTasks(newTasks);
  }

  function handleReset() {
    const confirmClear = window.confirm("Are you sure you want to clearAll?");
    console.log(confirmClear);
    if (confirmClear) {
      setTasks([]);
    }
  }
  return (
    <div className="container">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        className="input"
      />

      <button onClick={handleClick}>Add Task</button>
      <button onClick={handleReset}>Clear All</button>
      <ul className="list">
        {tasks.map((task, index) => (
          <li>
            {task}
            <button onClick={() => handleDelete(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
