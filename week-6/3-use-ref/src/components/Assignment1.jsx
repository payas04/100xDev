import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const inputBox = useRef();
   

    useEffect(() => {
        inputBox.current.focus();
    }, []);

    const handleButtonClick = () => {
        inputBox.current.focus();
    };
    console.log(inputBox); //for understanding 
    return (
    
        <div>
            <input ref = {inputBox} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
