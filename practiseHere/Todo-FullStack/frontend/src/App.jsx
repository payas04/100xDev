import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CreateTodo} from './components/CreateTodo'

function App() {
  

  return (
    <div>
        <CreateTodo/>
        <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
