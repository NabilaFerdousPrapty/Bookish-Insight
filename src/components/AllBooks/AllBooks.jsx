import { useEffect } from "react";
import { useState } from "react"
import BookDetail from "../BookDetail/BookDetail";


export const AllBooks = () => {
  const [allBooks,setAllBooks]=useState([]);
  useEffect(()=>{
    fetch('/public/AllBooks.json')
    .then(response=>response.json())
    .then(allBooks=>setAllBooks(allBooks));
    
  },[])
  return (
    <div className="py-4 md:mt-5 mt-1">
        <h2 className="text-center text-4xl playfair-display-Bold">Books</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 md:py-5 px-5">
          {
              allBooks.map(book=><BookDetail book={book} key={book.bookId} ></BookDetail>)
          }
        </div>
    </div>
  )
}
