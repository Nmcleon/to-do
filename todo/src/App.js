import { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { db } from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            item: doc.data(),
          }))
        );
      });
  }, [input]);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  console.log(todos);

  return (
    <div className="App">
      <h1>TODO React Firebase</h1>
      <form>
        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
          disabled={!input}
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((it) => (
          <Todo key={it.id} arr={it} />
        ))}
      </ul>
    </div>
  );
}
export default App;

{
  {
    /*import { useState, useEffect } from 'react';
  import './App.css';
  import { Button, TextField, FormControl, InputLabel } from '@mui/material';
  import Todo from './components/Todo';
  import { db } from './firebase';
  
  function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
  
    useEffect(() => {
      db.collection('todos')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          setTodos(snapshot.docs.map((doc) => doc.data()));
        });
    }, [input]);
    const addTodo = (e) => {
      e.preventDefault();
      db.collection('todos').add({
        todo: input,
        timestamp: new Date().toISOString(),
      });
      setInput('');
    };
  
    return (
      <div className="App">
        <h1>To Do React & Firebase</h1>
        <form>
          <FormControl>
            <InputLabel htmlFor="write-a-todo">Write a TODO</InputLabel>
            <TextField
              id="write-a-todo"
              label="Write a TODO"
              variant="outlined"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              type="submit"
              onClick={addTodo}
              variant="contained"
              color="primary"
              disabled={!input}
            >
              Add Todo
            </Button>
          </FormControl>
        </form>
        <ul>
          {todos.map(({ todo }) => (
            <Todo todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
  
  export default App;
  */
  }
}
