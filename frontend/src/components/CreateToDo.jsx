import { useState } from "react";

export function CreateToDo(){

    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");


    return(
        <>
            <input style={{padding:10 , margin:10, borderRadius:"10px"}} type="text" onChange={(e)=>{
                const value = e.target.value;
                setTitle(value);
            }} placeholder="Enter title"/>  <br /><br />

            <input style={{padding:10 , margin:10, borderRadius:"10px"}} type="text" onChange={(e)=>{
                const value = e.target.value;
                setDescription(value);
            }} placeholder="Enter description" />   <br />  <br />

            <button onClick={()=>{
                fetch("http://localhost:3000/todos",{
                    method: "POST",
                    body:JSON.stringify({
                        title : title,
                        description : description
                    }),
                    headers:{
                        "Content-type" : "application/json"
                    }
                })
                .then(async (res)=>{
                    const json = await res.json();
                    alert("To do added.")
                })
            }}>Add To Do</button>
        </>
    )
}