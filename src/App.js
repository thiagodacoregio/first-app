import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  // Recupera os dados do localStorage ao carregar a página
  useEffect(() => {
    const taskStorage = localStorage.getItem("@task");
    if (taskStorage) {
      setTask(JSON.parse(taskStorage));
    }
  }, []);

  // Salva as tarefas no localStorage sempre que o array "task" for atualizado
  useEffect(() => {
    if (task.length > 0) {
      localStorage.setItem("@task", JSON.stringify(task));
    }
  }, [task]);

  // Adiciona uma nova tarefa
  function handleRegister(e) {
    e.preventDefault();
    if (input.trim() === "") {
      alert("Please, write a task before submitting!");
      return;
    }
    setTask([...task, input.trim()]);
    setInput("");
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleRegister}>
        <label>Task name:</label>
        <br />
        <input
          placeholder="Write one task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <br />
      <br />

      <ul>
        {task.map((getTask, index) => (
          <li key={index}>{getTask}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
