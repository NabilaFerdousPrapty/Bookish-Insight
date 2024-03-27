import { useState } from 'react';
import { useEffect } from 'react';
import Wishlist from '../Wishlist/Wishlist';

// import WishlistBooks from './WishlistBooks';

const WishlistBooks = ({sortBy}) => {
    const [wishlistBooks,setWishlistBook]=useState([]);
    // console.log(wishlistBooks);
    
    const [displayBooks, setDisplayBooks] = useState([]);
    useEffect(()=>{
      const getWishlistBooks=JSON.parse(localStorage.getItem('wishlist'))||[];
      setWishlistBook(getWishlistBooks);
      // setDisplayBooks(getWishlistBooks);
      handleBooksFilter(getWishlistBooks);
    },[]);
    const handleBooksFilter = (wishlistBooks) => {
        let sortedBooks = [...wishlistBooks];
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
          setDisplayBooks([...wishlistBooks])
        }
      
        
      }
      useEffect(() => {
        handleBooksFilter(wishlistBooks);
      }, [sortBy,wishlistBooks]);
    
    return (
        <div>
            {
                displayBooks.map((wishlistBook,ind)=><Wishlist wishlistBook={wishlistBook} key={ind}></Wishlist>)
            }
        </div>
    );
};

export default WishlistBooks;
