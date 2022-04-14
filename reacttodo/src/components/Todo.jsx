import "./Todo.css"
export const Todo =()=>{

    return(
        <div className="main">
            <input type="text"  placeholder={`    +  Add a To-do.. `} onDragEnter/>
        </div>
    )
}