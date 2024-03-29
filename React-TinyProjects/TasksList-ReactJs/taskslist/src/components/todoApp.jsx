import { useState } from "react"
import Todo from "./todo";
import "./todoApp.css";

export default function TodoApp() {
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);


    const handleChange = (e) => {
        const value = e.target.value;
        setTitle(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        };
    
        setTodos(prevTodos => [newTodo, ...prevTodos]);

        setTitle("")
    }

    function handleUpdate(id, value) {
        const temp = [... todos]
        const item = temp.find((item) => item.id === id)
        item.title = value
        setTodos(temp)
    }

    function handleDelete(id) {
        const temp = todos.filter(item => item.id !== id)
        setTodos(temp)
    }


    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text"  className="todoInput" value={title}/>
                <button className="buttonCreate" type="submit">Create Todo</button>
            </form>

            <div className="todosContainer">
                {
                    todos.map((item) => (
                        <Todo key={item.id} item = {item} onUpdate={handleUpdate} onDelete={handleDelete}></Todo>
                        ))

                }
            </div>
        </div>
    )
}