import { useState , useEffect} from 'react'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo,setTodo] = useState("")
  const [todos,setTodos] = useState([])
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(todoString)
    setTodos(todos)
    }
    
  }, [])
  
  const saveTLS = (e)=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }
 const handleEdit = (e,id)=>{
  let t =  todos.filter (i=>i.id==id)
  setTodo(t[0].todo )
  let newTodos = todos.filter(item=>{
    return item.id!=id
    
  })
  
  setTodos (newTodos)
  saveTLS()
 }

 const handleDelete = (e,id)=>{
 
  let newTodos = todos.filter(item=>{
    return item.id!=id
  })
  
  setTodos (newTodos)
  saveTLS()
 }

 const handleAdd = ()=>{
    setTodos([...todos,{id: uuidv4(),todo, isCompleted: false}])
    setTodo("")
    saveTLS()
 }

 const handleChange = (e)=>{
  setTodo(e.target.value)
}

const handleCheckBox =(e)=>{
  let id =  e.target.name 
  let index = todos.findIndex(item=>{
    return item.id = id;
  })
  let newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted
  setTodos (newTodos)
  saveTLS()
}

  return (
    <>
      <Navbar/>
      <div className="conatiner rounded-md flex flex-col mx-auto bg-cyan-200 w-2/3 text-lg px-3 text-black min-h-[80vh]">
      <h3 className='font-bold my-4'>Add Task</h3>
        <div className="add-todos gap-5 flex">
        <input type="text" onChange={handleChange} value={todo} placeholder='add your task' />
        <button onClick={handleAdd} disabled={todo.length<3} className='bg-cyan-500 hover:bg-cyan-700 rounded-lg px-2 p1-1 disabled:bg-cyan-900 text-slate-300'>add</button>
        </div>
        <h3 className='font-bold  my-4'>Your Task</h3>
        {todos.length==0 && <div className='m-3'>No to do Display</div>}
        {todos.map(item=>{
       return <div key={item.id} className="my-todos flex gap-5 flex-row m-3">
          <input name={item.id} onChange={handleCheckBox} type="checkbox" value={item.isCompleted} />
          <div className={item.isCompleted?"line-through":""}>
            {item.todo}
          </div>
          <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-cyan-500 hover:bg-cyan-700 rounded-lg px-2 p1-1 text-slate-300'>edit</button>
          <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-cyan-500 hover:bg-cyan-700 rounded-lg px-2 pl-1 text-slate-300'>delete</button>
        </div>
         })}
      </div>
    </>
  )
}

export default App
