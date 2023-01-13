import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [book,setBook] = useState({
    title:"",
    desc:"",
    year: 0,
    cover: ""
  });
  const handleChange = (e) =>{
    setBook((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split("/")[2];

  
  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.put("http://localhost:8800/books/"+bookId,book)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='form'>
      <h1> Update Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name="title"/>
      <input type="text" placeholder='desc' onChange={handleChange} name="desc"/>
      <input type="decimal" placeholder='year' onChange={handleChange} name="year"/>
      <input type="text" placeholder='cover' onChange={handleChange} name="cover"/>

      <button className='formButton' nClick={handleClick}>Update book</button>
    </div>
  )
}

export default Update