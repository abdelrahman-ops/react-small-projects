import { useState } from "react"


const Todo = () => {

    const [task , setTask] = useState("");
    const [data , setData] = useState([]);

    const handleAdd = (e)=>{
        setTask(e.target.value);
        // console.log(e.target.value);
    }
    const addTask = ()=>{
        if (task.trim() !== "") {
            setData([...data, task]);
            setTask(""); 
        }
    };

    const deleteTask = (index) => {
        const newTasks = data.filter((_,i) => i !== index);
        setData(newTasks);
    }
    
    
    return (
        <div className="todo">
            <h1>Todo List</h1>
            <div>
                <input type="text" value={task} onChange={handleAdd} />
                <button type="button" id="add" onClick={addTask}>add task</button>
            </div>
            
            <ul>
                {data.map((task,index) => (
                        <li key={index}>
                            {task}
                            <button id="delete" onClick={()=> deleteTask(index)}>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo
