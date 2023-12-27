import React from 'react'
export const Button = ({ children }) => {

    return <button style={{ color: 'red' }}>{children}</button>
}

const Childrenprop = () => {


    
  return (
    <Button>ChildrenProp</Button>
  )
}

export default Childrenprop