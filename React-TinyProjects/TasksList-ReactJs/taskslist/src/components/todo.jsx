import { useState } from "react";

export default function Todo({item, onUpdate, onDelete}) {

    const [isEdit, setIsEdit] = useState(false);

    const FormEdit = () => {

        const [newValue, setNewValue] = useState(item.title)

        const handleSubmit = (e) => {
            e.preventDefault();
            
        }

        const handleChange = (e) => {
            setNewValue(e.target.value)
        }

        function handlerClickUpdateTodo() {
            onUpdate(item.id, newValue)
            setIsEdit(false)
        }

        return (
        <form className="todoUpdate" action="" onSubmit={handleSubmit}>
            <input className="todoInput" type="text" 
            onChange={handleChange}
            value={newValue}/>
            <button className="btn btnUpdate" onClick={handlerClickUpdateTodo}>Update</button>
        </form>
        )
    }

    const TodoElement = () => {
        return(
        <div className="todoInfo">
            <span className="todoTitle">{item.title}</span>
            <button className="btn btnEdit" onClick={() => setIsEdit(true)}>Edit</button>    
            <button className="btn btnDelete" onClick={(e) => onDelete(item.id)}>Delete</button>    
        </div>
        )
    }

    return (

        <div className="todo">
            {isEdit? <FormEdit></FormEdit>: <TodoElement></TodoElement>}
    
        </div>

    )
}