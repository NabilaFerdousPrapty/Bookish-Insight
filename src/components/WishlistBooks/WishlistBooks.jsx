
import { useState } from 'react';
import { useEffect } from 'react';
import Wishlist from '../Wishlist/Wishlist';
import { useOutletContext } from 'react-router-dom';

const WishlistBooks = () => {
    const [wishlistBooks,setWishlistBook]=useState([]);
    // console.log(wishlistBooks);
    const [sortBy] = useOutletContext();
    const [displayBooks, setDisplayBooks] = useState([]);
    useEffect(()=>{
      const getWishlistBooks=JSON.parse(localStorage.getItem('wishlist'))||[];
      setWishlistBook(getWishlistBooks);
      setDisplayBooks(getWishlistBooks);
    },[]);
    const handleBooksFilter = (sortBy) => {
        let sortedBooks = [...wishlistBooks];
      
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
          setDisplayBooks([...wishlistBooks])
        }
      
        
      }
      useEffect(() => {
        handleBooksFilter(sortBy);
      }, [sortBy]);
    
    return (
        <div>
            {
                displayBooks.map((wishlistBook,ind)=><Wishlist wishlistBook={wishlistBook} key={ind}></Wishlist>)
            }
        </div>
    );
};

export default WishlistBooks;