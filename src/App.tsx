import React from 'react';
import './App.css';
import CounterContainer from './container/CounterContainer';
import TodoApp from './container/TodoApp';

function App() {
  return (
    <div>
      <CounterContainer/>
      <TodoApp/>
    </div>
  );
}

export default App;
