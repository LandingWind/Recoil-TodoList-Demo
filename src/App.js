import React from 'react';
import { RecoilRoot } from "recoil";
import TodoList from './Components/TodoList'

import './App.css';

function App() {
  return (
    <div className="App" style={{textAlign:"center"}}>
      <h3>The TodoList based on React && Recoil</h3>
      <RecoilRoot>
        <TodoList></TodoList>
      </RecoilRoot>
    </div>
  );
}

export default App;
