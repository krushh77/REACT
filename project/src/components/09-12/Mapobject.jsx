import React from 'react'

const Mapobject = ({ mystudentsdata }) => {
     console.log(mystudentsdata, "Mystudentdata")
  return (
    <div> 
    {mystudentsdata.map((studentsdata) => (
        <div>
            <img src={studentsdata.image}/>
            <h1>{studentsdata.name}</h1>
            <p>{studentsdata.marks}</p>
            
            </div>
    ))}
    </div>
  )
}

export default Mapobject