import {  toast } from 'react-toastify';
const notifyRead = () => toast.success("You have successfully read this Book");
const notifyAlreadyRead = () => toast.info("You have read this Book");
const notifyWishlist = () => toast.success("You have added this Book to your wishlist");
const notifyAlreadyInWishlist = () => toast.error('You have already added this book in your wishlist');


export const saveReadBooksToLocalStorage=(book,bookId)=>{
    const jsonData = localStorage.getItem('read');
    const storedReadBooks = JSON.parse(jsonData) || [];
    const isExistInRead = storedReadBooks.find(storedReadBook => storedReadBook.bookId == bookId);
    
    const saveWishlistData = localStorage.getItem('wishlist');
    const saveWishlist = JSON.parse(saveWishlistData) || [];
    const updatedWishlist = saveWishlist.filter(wishlistBook => wishlistBook.bookId != bookId);

    if (isExistInRead) {
        notifyAlreadyRead();
    } else {
        storedReadBooks.push(book);
        localStorage.setItem('read', JSON.stringify(storedReadBooks));
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        notifyRead();
    }
}
export const saveWishlistBooksToLocalStorage=(book,bookId)=>{
    const jsonData = localStorage.getItem('read');
    const storedReadBooks = JSON.parse(jsonData) || [];
    const alreadyRead = storedReadBooks.find(storedBook => storedBook.bookId == bookId);
    if (alreadyRead) {
        notifyAlreadyRead();
    } else {
        const saveWishlistData = localStorage.getItem('wishlist');
        const saveWishlist = JSON.parse(saveWishlistData) || [];
        const existInWishlist = saveWishlist.find(wishlistBook => wishlistBook.bookId == bookId);
        if (existInWishlist) {
            notifyAlreadyInWishlist();
        } else {
            saveWishlist.push(book);
            localStorage.setItem('wishlist', JSON.stringify(saveWishlist));
            notifyWishlist();
        }
    }
}