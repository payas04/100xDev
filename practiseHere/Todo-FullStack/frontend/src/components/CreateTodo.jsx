import { useState } from "react";

export function CreateTodo(){
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");    
    return <div>
        <input id='title' style={{
            margin: 10,
            padding: 10
        }} type= 'text' placeholder='Title' onChange={function (e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br/>
        <input style={{
            margin: 10,
            padding: 10
        }} type= 'text' placeholder='Description'></input> <br/>

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={()=>{
            //axios can be a better way to do this  
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-Type": "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo addec");
                })
        }}>Add a Todo</button>
    </div>
}