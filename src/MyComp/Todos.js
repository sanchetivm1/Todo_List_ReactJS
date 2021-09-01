import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div className = "container">
            <h3 className = "text-center my-3">Todos Work</h3>
            {props.todos.length===0 ? "No todo list to show" : props.todos.map((todo) => {
                return <TodoItem todo = {todo} key = {todo.sNo} onDelete = {props.onDelete}/>
            })
        }
        </div>
    )
}
