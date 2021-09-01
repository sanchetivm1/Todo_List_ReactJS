import './App.css';
import Header from "./MyComp/Header";
import {Todos} from "./MyComp/Todos";
import {AddToDos} from "./MyComp/AddToDos";
import {Footer} from "./MyComp/Footer";
import React, { useState } from 'react';
function App() {
  const onDelete = (todo)=>{
    console.log("I am on Delete of todo ",todo);
    // does not work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index , 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo = (title, desc)=>{
    console.log("I am adding this into Todos",title, desc)
    let sNo = todos[todos.length-1].sNo +  1;
    const myTodo = {
      sNo:sNo,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }
  const [todos, setTodos] = useState([
    { 
      sNo : 1,
      title: "Go to market",
      desc: "To get job done 1"
    },
    { 
      sNo : 2,
      title: "Go to Mall",
      desc: "To get job done 2"
    },
    { 
      sNo : 3,
      title: "Go to Ghat",
      desc: "To get job done 3"
    }
  ]);
  return (
    <>
     <Header title="My Todos List" searchBar={true}/>
     <AddToDos addTodo={addTodo}/>
     <Todos todos={todos} onDelete = {onDelete}/>
     <Footer/>

    </>
  );
}

export default App;
