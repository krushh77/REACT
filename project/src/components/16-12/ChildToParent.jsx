import { useContext, useState } from "react"
import { Mycontext } from "../../Context/Authcontext"

function ChildrenComponent({ ChangeValue }) {

    return (
        <input onChange={ChangeValue} />
    )
}

function ChildToParent() {  // Parent Component - cart
    const [myValue, setMyValue] = useState('')
    function ChangeValue(e) {
        setMyValue(e.target.value)
    }
    const {state,dispatch} = useContext(Mycontext)

    return (
        <div>
            <h1>Typed value : state = {state.test} {myValue}</h1>
            <ChildrenComponent ChangeValue={ChangeValue} /> 
            {/* products, pricing, offers  */}
        </div>
    )
}

export default ChildToParent