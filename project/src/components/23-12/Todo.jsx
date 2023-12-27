import React, { memo } from 'react'
import toast from 'react-hot-toast'



function Todo(props) {
    const todos = props.todos;
    const AddTodo = props.AddTodo;

    toast.success('Hello From Todo')
  return (
    <div>
        <h1>Todo</h1>
        {
            todos.map((todo)=>( 
                <h3>{todo}</h3>
            ))
        }
        <button onClick={AddTodo}>Add Todo</button>
    </div>
  )
}

export default memo(Todo);