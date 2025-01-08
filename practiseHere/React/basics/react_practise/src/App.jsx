import { useEffect, useState } from 'react';
import React from 'react';
let counter = 4;
function App() {
  const [todos, SetTodo] = useState([]);
  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
        const json = await res.json();
        SetTodo(json.todos);
      })
  })

  return 
    <div>
      {todos.map(todo=> <Todo key = {todo.id} title = {todo.title} description = {todo.description}/> )}
    </div>
  
}


function Todo({title, description}){
return <div>
  <h1> {title}</h1>
  <h3>{description}</h3>
</div>

}

export default App
