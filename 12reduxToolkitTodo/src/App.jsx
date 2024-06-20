import { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  useEffect(()=>{
    document.querySelector('body').classList.add("bg-gray-300")
  }, [])

  return (
    <>
    
      <h1>Learn about redux toolkit</h1>
      <div className="flex flex-col justify-center w-3/4 mx-auto">
      <AddTodo />
      <Todo />
      </div>
    </>
  )
}

export default App
