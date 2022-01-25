import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import Main from './Main';

const Detail = () => {

const [todo, setTodo] = useState([])
const {id} = useParams()

const todoDetail = async () => {
    const response = await fetch(`http://10.1.140.49:8080/todo/get/${id}`)
    const data = await response.json()
    setTodo(data.data)
}

useEffect(() => {
    let isMounted = true
    if(isMounted) {
            todoDetail()
    }
    return () => isMounted = false
})

  return (
  <>
    <Link to={'/'} element={<Main/>} style={{textDecoration: 'none'}}>&#8592; Back</Link>
    <h4 className='mt-3'>{todo.msg}</h4>
  </>
  );
}

export default Detail;
