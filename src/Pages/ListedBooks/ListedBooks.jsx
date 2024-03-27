import { useEffect, useState } from "react";
import {  useLocation } from "react-router-dom";
import ReadBooks from "../../components/ReadBooks/ReadBooks";
import WishlistBooks from "../../components/WishlistBooks/WishlistBooks";

const ListedBooks = () => {
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(0);
  const [sortBy, setSortBy] = useState('');
console.log(sortBy);
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };
  

  useEffect(() => {
    if (location.pathname === "/listedBooks") {
      setTabIndex(0);
    } else if (location.pathname === "/listedBooks/wishListBooks") {
      setTabIndex(1);
    }
  }, [location]);

  return (
    <div>
      <div className="navbar bg-[#1313130D] justify-center rounded-2xl my-5">
        <button className="btn btn-ghost text-xl">Books</button>
      </div>
      <div className="flex justify-between items-center flex-col">
        <div className="inline-flex items-center divide-x rounded bg-[#23BE0A] text-white divide-none">
          <select className="select w-full max-w-xs bg-[#23BE0A]" value={sortBy} onChange={handleSortByChange}>
            <option disabled value=''>
              Sort by
            </option>
            <option value='rating'>Rating</option>
            <option value='totalPages'>Number Of Pages </option>
            <option value='publishedYear'>Published Year</option>
          </select>
        </div>
      </div>
      <div className="flex md:justify-start items-center py-10 mx-4 justify-center">
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap ">
          <button
            
            onClick={() => {
              setTabIndex(0);
            }}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            }  border-gray-400 `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>
          </button>
          <button
           
            onClick={() => {
              setTabIndex(1);
            }}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg border-gray-400 `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Books</span>
          </button>
        </div>
      </div>
      <div className="px-3">
        {
          tabIndex===0?<ReadBooks sortBy={sortBy} ></ReadBooks >:<WishlistBooks sortBy={sortBy}></WishlistBooks>
        }
      </div>
    </div>
  );
};

export default ListedBooks;

