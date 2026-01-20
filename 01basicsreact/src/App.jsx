import React from 'react'
import Chai from "./Chai"
const App = () => {
  const username = "chai aur code"
  return (
    <div>
      <h1>This is React {username}</h1>
      
      <Chai />
    </div>
  )
}

export default App


// {username}(returned expression) we write the evaluated expression(final outcome of the javascript)