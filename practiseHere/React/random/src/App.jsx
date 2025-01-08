import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Sum(){
  const [counter, setCount] = useState(0);
  setCount(counter + 1 )
  return <div>
    {counter}
  </div>

}
function App() {
   

  return <>
   <Sum/>
  </>
}

export default App
