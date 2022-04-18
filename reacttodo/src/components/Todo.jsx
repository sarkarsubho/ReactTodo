import axios from "axios";
import { useEffect, useState } from "react"
import "./Todo.css"
export const Todo =()=>{
    const [todos,setTodos]=useState("");
    const [datas,setData]=useState([]);
    const [linethrough,setLinethrough]=useState(false);
    
    useEffect(()=>{
        axios.get(' http://localhost:8008/todos').then(resp => {

            console.log(resp.data);
            setData(resp.data);
        });
   
    },[]);

    useEffect(()=>{

    },[])

    return(<>
        <div className="main">
            <input onChange={(e)=>{
                setTodos(e.target.value)
            }} type="text"  placeholder={` +  Add a To-do.. ` } value={todos}/>



            <button onClick={()=>{
                const payload={
                    title:todos,
                    state:false,
                }
                console.log(datas);
                axios.post("http://localhost:8008/todos",payload);

                setData([...datas,payload]);
                
            }}>Add todo</button>
{/* ---------------------------render---------------------- */}

            <h4 className="heading">Have to Do</h4>
            {
                datas.map(e=>
                <div key={e.id} className="gap"  style={linethrough ? {textDecorationLine: 'line-through'}:{}}>

                    <div>{e.id}. { e.title}</div>
                    <button onClick={()=>setLinethrough(!linethrough)}>Done</button>
                    </div>)
            }

           
        </div>
  


         <div style={{color:'red',textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>color</div>
        </>
    )
}