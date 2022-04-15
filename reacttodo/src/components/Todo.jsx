import { useState } from "react"
import "./Todo.css"
export const Todo =()=>{
    const [todos,setTodos]=useState("");
    const [datas,setData]=useState([]);

    return(<>
        <div className="main">
            <input onChange={(e)=>{
                setTodos(e.target.value)
            }} type="text"  placeholder={`    +  Add a To-do.. ` } value={todos}/>
            <button>Add todo</button>
        </div>
       
        </>
    )
}