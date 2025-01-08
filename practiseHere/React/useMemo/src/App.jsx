import { useMemo, useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0);
  
 let ans  = useMemo(()=>{
    let ans=0;
    for(let i=0; i<=number; i++){
      ans = ans + i ;
     }
     console.log(ans) 
     return ans
  },[number])
   
  
  return <div>
    <input onChange= {(e)=>{
      console.log(e)
      setNumber(e.target.valueAsNumber)
    }}type= "number" id='number' placeholder='Enter number'></input>

    <h2>sum is: {ans}</h2>

    <button onClick={()=>{
      setCount(count+1)
    }}>Counter {count}</button>
  <button onClick={()=>setCount(0)}>Reset</button>
  </div>
  
}

export default App
