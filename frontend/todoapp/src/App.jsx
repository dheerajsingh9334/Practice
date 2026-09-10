
import React ,{useEffect, useState} from 'react'

const App = () => {
  
  const [todos,setTodos] = useState(()=>{
    const storedTodos = localStorage.getItem('todos');
    return storedTodos?JSON.parse(storedTodos):[];
  })
  const [task,setTasks] = useState("");
const [edit , setEdit] = useState

  // useEffect(()=>{
  //   const storedTodos = JSON.parse(localStorage.getItem('todos'))
  //   if(storedTodos){
  //     setTodos(storedTodos);
  //   }
  // },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const handleAddTodo = () =>{
    if(task.trim() !== ''){
      setTodos([...todos,task]);
      // setTasks('')
    }
    
  }

  const deleteTodo = (id)=>{
    const newTodos = todos.filter((_,i)=>i!==id);
    setTodos(newTodos)
  };

  const updatetodo = (id)=>{
    const 
  }
  return (
    <div>
      <header className='"app header'>
        <h1>Todo</h1>
        <div>
          <input
          type='text'
          placeholder='enter new todo'
          value={task}
          onChange = {(e)=>setTasks(e.target.value)}
          />
          <button onClick={()=>handleAddTodo()}>add</button>
        </div>
        <ul className='todo-list'>
          {todos.map((todo,id)=>{
           return ( <li key={id}>
              {todo}
            <button onClick={()=>deleteTodo(id)}>remove</button>
            </li>)
          })}
        </ul>
        </header>

    </div>
  )
}

export default App
