import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const Books = () => {
  const [books,setBoooks] = useState([])

  useEffect(()=>{
    const fetchAllBooks = async () =>{
      try {
        const res = await axios.get("http://localhost:8800/books")
        setBoooks(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllBooks()
  })
  return (

    <div>
    <h1>The onyx bookstorage </h1>
    <button>
      <Link to="/add">Add new book</Link>
      </button>
    <div className='books'>
      {books.map((book)=>
        <div className='book' key={book.id}>
          {book.cover && <img src={book.cover} alt=""/>}
          <h2>{book.title}</h2>
          <p>{book.desc}</p>
          <span>{book.year}</span>
        </div>
      )}
    </div>
    </div>
  )
}

export default Books