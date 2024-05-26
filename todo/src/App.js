import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'make a react firebase project',
    'record a coding video',
  ]);

  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="App">
      <h1>To Do React & Firebase</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;