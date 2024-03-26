
import { useState } from 'react';
import { useEffect } from 'react';
import Wishlist from '../Wishlist/Wishlist';

const WishlistBooks = () => {
    const [wishlistBooks,setWishlistBook]=useState([]);
    console.log(wishlistBooks);
    useEffect(()=>{
      const getWishlistBooks=JSON.parse(localStorage.getItem('wishlist'))||[];
      setWishlistBook(getWishlistBooks)
    },[])
    return (
        <div>
            {
                wishlistBooks.map((wishlistBook,ind)=><Wishlist wishlistBook={wishlistBook} key={ind}></Wishlist>)
            }
        </div>
    );
};

export default WishlistBooks;