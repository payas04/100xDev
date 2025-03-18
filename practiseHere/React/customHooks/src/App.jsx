import { useState } from "react";
import "./App.css";
import useIsOnline from "./hooks/useIsOnline";
import useDimensions from "./hooks/useDimensions";
import useDebounce from "./hooks/useDebounce";

function App() {
  // // using a isOnline hook
  // const isOnline = useIsOnline();
  // if (isOnline) {
  //   return "Yay you are online";
  // }
  // return "Oops you are offline ";
  /////////////////////////////////////////////////////////////////////////
  // //using useDimensions hook
  // const { width, height } = useDimensions();
  // return (
  //   <div>
  //     Height : {height}
  //     <br />
  //     Width : {width}
  //   </div>
  // );
  //////////////////////////////////////////////////////////////////////
  // // Using UseDebounce
  // const [value, setValue] = useState("");
  // const debouncedValue = useDebounce(value, 500);
  // return (
  //   <div>
  //     Debounced value is : {debouncedValue}
  //     <input type="text" onChange={(e) => setValue(e.target.value)} />
  //   </div>
  // );
  /////////////////////////////////////////////////////////////////////////
}
export default App;
