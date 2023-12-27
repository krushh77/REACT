import React, {useCallback, useState } from 'react'
import  Todos from './Todo'

function Callback() {
    const [counter , setCounter] = useState(0);
    const [todos , AddTodo] = useState([ ]);

    // function AddingTodo(){
    //     AddTodo((todos) => [...todos , "NEW TODO"])
    // }

    const AddingTodo = useCallback(() => {
            AddTodo((todo) => [...todo, "New todo"])
        }, [todos])

  return (
    <div>Callback
        <div>
                <h1>Counter : {counter}</h1>
                <button onClick={() => setCounter((c) => c + 1)}>+</button>
            </div>
            <Todos todos={todos} AddTodo={AddingTodo} />
    </div>
  )
}

export default Callback