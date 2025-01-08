import "./App.css";
import Card from "./card.jsx";
import UserInput from "./UserInput.jsx";
import { useState } from "react";
function App() {
  const [formData, setForm] = useState({
    name: "",
    description: "",
    interests: "",
    linkedin: "",
    instagram: "",
  });
  const [finalData, setFinalData] = useState();
  return (
    <div style={{height:"100vh",display:"flex",flexDirection:"column"}}>
      <h1 style={{ textAlign: "center", fontSize: "80px" }}>Card Generator</h1>
      <div style={{ display: "flex" , height:"100%"}}>
        <UserInput
          formData={formData}
          setForm={setForm}
          setFinalData={setFinalData}
        />
        {finalData && (
          <Card
            name={finalData.name}
            description={finalData.description}
            interests={finalData.interests}
            linkedin={finalData.linkedin}
            instagram={finalData.instagram}
          />
        )}
      </div>
    </div>
  );
}

export default App;
