import { RecoilRoot } from "recoil";
import Counter from "./components/counter";

function App() {
  return (
    <>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </>
  );
}

export default App;
