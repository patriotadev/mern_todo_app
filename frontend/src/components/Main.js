import React from 'react';
import {useState, useEffect} from "react";
import InputField from "./InputField";
import TableData from "./TableData";

const Main = () => {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")
  
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            fetch('http://10.1.140.49:8080/todo/get')
            .then(res => res.json())
            .then((result) => {
              setTodos(result.data)
            })
        }
        return () => isMounted = false
    }, [todos])
  
    const handleInput = async (e) => {
       await setInput(e.target.value)
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
          method: 'POST',
          mode: 'cors',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            msg : input
          })
        }
        fetch('http://10.1.140.49:8080/todo/add', requestOptions)
        .then(res => res.json()).then((result) => {
          console.log(result)
          setTodos([...todos, result])
          setInput("")
        }).catch(err => console.log(err))
      }
  
    const handleUpdate = (todo) => {
        let todoStatus = false
  
        if (todo.done) {
          todoStatus = false
        } else {
          todoStatus = true
        }
        console.log(todo.done)
        const requestOptions = {
          method: 'PUT',
          mode: 'cors',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            msg: todo.msg,
            done : todoStatus
          })
        }
        fetch('http://10.1.140.49:8080/todo/update/' + todo._id, requestOptions)
        .then(res => res.json()).then((result) => {
          console.log(result)
        })
    }
  
    const handleDelete = (id) => {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }
       fetch('http://10.1.140.49:8080/todo/delete/' + id, requestOptions)
       .then(res => res.json()).then((result) => {
         console.log(result)
       }).catch(err => console.log(err))
    }
  
  return (
  <>
      <div className="container">
          <InputField todos={input} handleInput={handleInput} handleSubmit={handleSubmit}/>
          <TableData handleUpdate={handleUpdate} handleDelete={handleDelete} data={todos}/>
      </div>
  </>);
}

export default Main;
