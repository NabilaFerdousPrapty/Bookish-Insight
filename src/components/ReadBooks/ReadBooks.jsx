import { useEffect, useState } from "react";

const ReadBooks = () => {
  const [readBooks,setReadBooks]=useState([]);
  console.log(readBooks);
  useEffect(()=>{
    const getStoredBooks=JSON.parse(localStorage.getItem('read'))||[];
    setReadBooks(getStoredBooks)
  },[])
  return (
    <div className="border-2 border-[#13131399]">

    </div>
      
    
  );
};

export default ReadBooks;
