import React from 'react';
import CounterContainer from './container/CounterContainer';
import GithubProfileLoader from './container/GithubProfileLoader';
import TodoApp from './container/TodoApp';

function App() {
  return (
    <div>
      <CounterContainer/>
      <TodoApp/>
      <GithubProfileLoader/>
    </div>
  );
}

export default App;
