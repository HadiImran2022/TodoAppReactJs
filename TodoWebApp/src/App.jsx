import { useState } from 'react'
import './App.css'

function App() {
  const [isComplete,setIsComplete] = useState(false)
  const [allTodos,setAllTodos] = useState([])
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  const [completedTodos,setCompletedTodos] = useState([]);

  const handleAddTodo = () =>{
    setNewTitle("")
    setNewDescription("")
    let newTodoItems = {
      title: newTitle,
      description: newDescription
    }

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItems)
    setAllTodos(updatedTodoArr);
  }

  const handleDeleteTodo = (index) =>{
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index)
    setAllTodos(reducedTodo)
   }
   const handleCompleted = (index) =>{
    let now = new Date();
    let dd = now.getDate();
    let nm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = dd + '-' + nm + '-' + yyyy + 'at' + h + ':' + m + ':' + s + ':'
    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn
    }
    let updatedCompletedArr = [...completedTodos]
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr)
   }

 return (
   <div className="header">
    {/* <h1 style={{textAlign:"center"}}>My todos</h1> */}
    <div className="inside">
      <div className="field-cont">
      <div className="class1">
        <label style={{padding:"0 10px", color:"#fff", fontSize:"20px", fontWeight:"bold"}} htmlFor="">Title</label>
        <input style={{width:"300px", height:"30px",padding:"0 10px"}} type="text" placeholder='Add Title' value={newTitle} onChange={(e)=>{
          setNewTitle(e.target.value)
        }} />
      </div>
      <div className="">
        <label style={{padding:"0 10px", color:"#fff", fontSize:"20px", fontWeight:"bold"}} htmlFor="">Description</label>
        <input style={{width:"300px", height:"30px",padding:"0 10px"}} type="text" placeholder='Add Description' value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} />
      </div>
      <div className="">
        <button style={{padding:"8px 30px", backgroundColor:"#02E57C", border:"none", outline:"none",color:"#fff", fontWeight:"bold",}} type='button' onClick={handleAddTodo}>ADD</button>
      </div>
      </div>

      <hr />
    <div className="buttons">
        <button className={`secondaryBtn ${isComplete === false && 'active'}`} style={{padding:"8px 30px", backgroundColor:"#02E57C", border:"none", outline:"none",color:"#fff", fontWeight:"bold", margin:"0 3px",cursor:"pointer"}} onClick={()=> setIsComplete(false)}>ToDo</button>
        <button className={`secondaryBtn ${isComplete === true && 'active'}`} style={{padding:"8px 30px", backgroundColor:"#02E57C", border:"none", outline:"none",color:"#fff", fontWeight:"bold",cursor:"pointer"}} onClick={()=> setIsComplete(true)}>Completed</button>
    </div>

    {isComplete === false && allTodos.map((item,index)=>{
      return(
        <div className="task-cont" key={index}>
        <h2 style={{color:"#02E57C", textTransform:"capitalize"}}>{item.title}</h2>
        <h4 style={{paddingTop:"12px", color:"darkgray",textTransform:"capitalize"}}>{item.description}</h4>
        <div className="icons">
        <button style={{padding:"8px 30px", backgroundColor:"#02E57C", border:"none", outline:"none",color:"#fff", fontWeight:"bold", margin:"0 3px", cursor:"pointer"}} onClick={()=>handleDeleteTodo(index)}>Delete Todo</button>
        <button style={{padding:"8px 30px", backgroundColor:"#02E57C", border:"none", outline:"none",color:"#fff", fontWeight:"bold", margin:"0 3px", cursor:"pointer"}} onClick={()=>handleCompleted(index)}>Completed Todo</button>
        </div>
      </div>
      )
    })}
    {isComplete === true && completedTodos.map((item,index)=>{
      return(
        <div className="task-cont" key={index}>
        <h2 style={{color:"#02E57C", textTransform:"capitalize"}}>{item.title}</h2>
        <h4 style={{paddingTop:"12px", color:"darkgray",textTransform:"capitalize"}}>{item.description}</h4>
        <h4 style={{paddingTop:"12px", color:"darkgray"}}>CompletedON: {item.completedOn}</h4>
        <div className="icons">
        <button style={{padding:"8px 30px", backgroundColor:"#02E57C", border:"none", outline:"none",color:"#fff", fontWeight:"bold", margin:"0 3px", cursor:"pointer"}} onClick={()=>handleDeleteTodo(index)}>Delete Todo</button>
        </div>
      </div>
      )
    })}
    </div>

  </div>
 )
}

export default App
