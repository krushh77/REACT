import Usereducer from "../components/24-12/Usereducer"
import {createContext,useReducer} from "react"

export const Mycontext = createContext(); 




const initialstate = {user: null, test: 'krushnaraj'}



const reducer = (state, action) => {

    switch (action.type){
        case "login":
        return { ...state, user: action.playload }
        case "logout":
          return  {  ...state, user:null}
          default:
            return state
    }
              

}
const Authcontext = ({ children }) => {
    const [state,dispatch]= useReducer(reducer,initialstate)

    return (
        <Mycontext.Provider value={{ state, dispatch}}>{children}</Mycontext.Provider>
        )
    }
        export default Authcontext;