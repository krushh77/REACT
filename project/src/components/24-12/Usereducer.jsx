import React, {useReducer} from 'react'
import Counter from '../Counter'

const initialState = {counter: 0, username: "krushnaraj", userrole:"study"}


const Reducer = (state, action) => {
        switch (action.type){
            case "increment":
                return { ...state, counter: state.counter + 1 }
                case "decrement":
                    return { ...state, counter: state.counter - 1 }
                    case "changename":
                        return { ...state, username: "krush_77"}
                        case "RESET":return { ...state, counter: 0 }
                        default:
                            return state
        }
}

const Usereducer = () => {
    
    const [state, dispatch] = useReducer(Reducer, initialState)
    console.log(state, "state")

  return (
    <div>
    <h1>{state.counter}</h1>
    <h1>{state.username}</h1>
    <button onClick={() => dispatch({ type: "increment" })}>Increment</button><br />
    <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button><br />
    <button onClick={() => dispatch({ type: "RESET" })}>Reset</button><br/>
    <button onClick={() => dispatch({ type: "changename" })}>Change Name</button>
    

</div>
  )
}

export default Usereducer