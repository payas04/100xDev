import { counterState, isEven } from "../store/atoms/count";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Counter() {
  const [count, setCount] = useRecoilState(counterState);
  const Even = useRecoilValue(isEven);
 
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div>
  
        <h1><b>Counter:{count}</b></h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }} 
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
        <h4>{Even}</h4>
    </div>
  );
}
