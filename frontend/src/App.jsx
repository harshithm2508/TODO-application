import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { Todos } from './components/ToDos'

function App() {

  const [todos,setTodos] = useState([])

  fetch("http://localhost:3000/todos")
  .then(async (res)=>{
      const json = await res.json();
      setTodos(json);
  })

  return (
    <>
      <CreateToDo/>
      <Todos todos={[
        {
          title : "Go to gym",
          description : "You need to go to gym to put on some muscles",
          completed : false
        }
      ]}/>
    </>
  )
}

export default App
