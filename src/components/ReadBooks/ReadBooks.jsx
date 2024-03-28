import { useEffect, useState } from "react";
import Read from "../Read/Read";
import PropTypes from 'prop-types'; 
const ReadBooks = ({sortBy}) => {
  const [readBooks, setReadBooks] = useState([]);
  // console.log(sortBy);
  const [displayBooks, setDisplayBooks] = useState([]);

  useEffect(() => {
    const getStoredBooks = JSON.parse(localStorage.getItem('read')) || [];
    setReadBooks(getStoredBooks);
    // setDisplayBooks(getStoredBooks);
    handleBooksFilter(getStoredBooks);
  }, []);

  const handleBooksFilter = (readBooks) => {
    let sortedBooks = [...readBooks];
  // console.log(sortBy);
    if (sortBy === 'rating') {
      sortedBooks.sort((a, b) => b.rating - a.rating);
      setDisplayBooks([...sortedBooks]);
    } else if (sortBy === 'totalPages') {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
      setDisplayBooks([...sortedBooks]);
    } else if (sortBy === 'publishedYear') {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setDisplayBooks([...sortedBooks]);
    }else if(sortBy===''){
      setDisplayBooks([...readBooks])
    }
  
    
  }
  
  useEffect(() => {
    handleBooksFilter(readBooks);
  }, [sortBy,readBooks]);

  return (
    <div className="border-2 border-[#13131399] p-4 border-opacity-10 rounded-2xl ">
      {
        displayBooks.map((readBook, ind) => <Read readBook={readBook} key={ind}></Read>)
      }
    </div>
  );
};

export default ReadBooks;

ReadBooks.propTypes={
  sortBy:PropTypes.string,
  

}
