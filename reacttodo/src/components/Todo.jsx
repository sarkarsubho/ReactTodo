import axios from "axios";
import { useEffect, useState } from "react"
import "./Todo.css"
export const Todo =()=>{
    const [image,setImage]=useState("");
    const [todos,setTodos]=useState("");
    const [datas,setData]=useState([]);
    const [linethrough,setLinethrough]=useState(false);
    
    useEffect(()=>{
        axios.get(' http://localhost:8008/todos').then(resp => {

            console.log(resp.data);
            setData(resp.data);
        });
   
    },[]);
    const handlesubmit=(e)=>{
        console.log("Submitted")
        e.preventDefault();
        const fromData=new FormData();
        fromData.append("image",image)

        console.log(fromData,image)
        axios.post("http://localhost:8008/todos",fromData).then((res)=>{
            console.log(res)
        })
        
    }

    useEffect(()=>{
    
    },[])

    const handlestyle=(id)=>{
        console.log(id)
    }
   
    return(<>
        <div className="main">
            {/* <form action="http://localhost:8008/todos" method="post" encType="multipart/form-data" > */}
             <input type="file"    onChange={(e)=>{console.log(e.target.files[0]),setImage(e.target.files[0])}} />
             {/* <button onClick={handlesubmit}> Submit</button> */}
            {/* </form> */}
            <input onChange={(e)=>{
                setTodos(e.target.value)
            }} type="text"  placeholder={` +  Add a To-do.. ` } value={todos}/>



            <button onClick={()=>{
                const payload={
                    title:todos,
                    state:false,
                    pic:image
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
                    <button onClick={()=> handlestyle(e.id)}>Done</button>
                    </div>)
            }

           
        </div>
  


         {/* <div style={{color:'red',textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>color</div> */}
        </>
    )
}