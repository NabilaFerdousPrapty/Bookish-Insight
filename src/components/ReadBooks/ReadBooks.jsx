import { useEffect, useState } from "react";
import Read from "../Read/Read";

const ReadBooks = () => {
  const [readBooks,setReadBooks]=useState([]);
  console.log(readBooks);
  useEffect(()=>{
    const getStoredBooks=JSON.parse(localStorage.getItem('read'))||[];
    setReadBooks(getStoredBooks)
  },[])
  return (
    <div className="border-2 border-[#13131399] p-4 border-opacity-10 rounded-2xl ">
      {
        readBooks.map((readBook,ind)=><Read readBook={readBook} key={ind}></Read>)
      }
    </div>
      
    
  );
};

export default ReadBooks;
