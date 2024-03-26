import { useEffect, useState } from "react";
import Read from "../Read/Read";
import { useOutletContext } from "react-router-dom";
const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [sortBy] = useOutletContext();
  const [displayBooks, setDisplayBooks] = useState([]);

  useEffect(() => {
    const getStoredBooks = JSON.parse(localStorage.getItem('read')) || [];
    setReadBooks(getStoredBooks);
    setDisplayBooks(getStoredBooks);
  }, []);

  const handleBooksFilter = (sortBy) => {
    let sortedBooks = [...readBooks];
  
    if (sortBy === 'rating') {
      sortedBooks.sort((a, b) => b.rating - a.rating);
      setDisplayBooks([...sortedBooks]);
    } else if (sortBy === 'totalPages') {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
      setDisplayBooks([...sortedBooks]);
    } else if (sortBy === 'publishedYear') {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setDisplayBooks([...sortedBooks]);
    }else if(sortBy===' '){
      setDisplayBooks([...readBooks])
    }
  
    
  }
  
  useEffect(() => {
    handleBooksFilter(sortBy);
  }, [sortBy]);

  return (
    <div className="border-2 border-[#13131399] p-4 border-opacity-10 rounded-2xl ">
      {
        displayBooks.map((readBook, ind) => <Read readBook={readBook} key={ind}></Read>)
      }
    </div>
  );
};

export default ReadBooks;

