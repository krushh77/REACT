import React from 'react'

const Propsmaps = ({ krish, myage, anything, students }) => {
    
    console.log(krish,myage,students,"krish")
  return (
    <div>

    <ul>
        {students.map((studentss)=>(
            <h1>{studentss}</h1>
        ))}
        </ul>

        <h1>{krish}</h1>

        <button onClick={anything}>changename</button>
    </div>
  )
}

export default Propsmaps