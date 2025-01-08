import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
 
  const [clicked, setClick] = useState(1);


    return <div>
      <button onClick= {function (){
        setClick(1)}}>1</button>
      <button onClick= {function (){setClick(2)}}>2</button>
      <button onClick= {function (){setClick(3)}}>3</button>
      <button onClick= {function (){setClick(4)}}>4</button>
      <h4>id: {clicked}</h4>
      <Todo id={clicked} />
    </div>

 
 /* return (
   <>
    {todos.map((todo) => (
  <Todo key={todo.id} title={todo.todo} status={todo.completed} />
    ))}
    </>
  )
  */
    
}

function Todo({ title, status,clicked }) {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/todos/random')
    .then(function (response){
      setTodo ([response.data]);
      console.log(response.data)
    })  
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
 },[])
  return (
    <div>
      <h1>{title}</h1>
      <h2>{status ? 'Completed' : 'Not Completed'}</h2>
    </div>
  );
}

export default App
