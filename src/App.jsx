import "./styles.css"
import {useState} from "react";
import {TodoForm} from "./TodoForm.jsx";

export default function App() {
    const [todos, setTodos] = useState([])

    function addTodo(title) {
        setTodos(currentTodos => {
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title: title, completed: false }
            ]
        })
        setNewItem("")
    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed}
                }
                return todo
            })
        })
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
            })
    }

    return (
    <>
        <TodoForm onSubmit={addTodo}/>
        <h1 className="header">Todo List</h1>
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return <li key={todo.id}>
                    <label>
                        <input onChange={e => toggleTodo(todo.id, e.target.checked)}
                               type="checkbox"
                               checked={todo.complete}/>
                        {todo.title}
                    </label>
                    <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
                </li>
                }
            )}
        </ul>
    </>
    )
}