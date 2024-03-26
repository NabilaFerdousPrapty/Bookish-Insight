import { IoPersonCircleSharp } from "react-icons/io5";
import { ImPageBreak } from "react-icons/im";
import { Link } from "react-router-dom";

const Wishlist = ({wishlistBook}) => {
    const {image,bookName,tags,publisher,totalPages,category ,rating}=wishlistBook;
    return (
        <div className="flex w-full space-x-2 sm:space-x-4 border-2 border-[#13131399] p-4 border-opacity-30 rounded-2xl m-4 gap-5">
        <img
          className="flex-shrink-0 md: h-56 md:w-48 sm:w-32 sm:h-32 bg-[#1313130D] "
          src={image}
          alt="Polaroid camera"
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {bookName}
              </h3>
              <div className="flex justify-between items-center gap-5 font-bold">
              <p  className="text-sm text-gray-400 font-bold">Tag</p>
              {
                tags.map((tag,idx)=><p tag={tag}  key={idx} className="text-sm text-[#23BE0A] bg-[#1313130D] p-3 rounded-2xl">{tag}</p>)
              }
              </div>
              <div className=" justify-between items-center flex gap-6">
                <p className="flex gap-3 items-center justify-between justify-between"><IoPersonCircleSharp />Publisher: {publisher}</p>
                <p className="flex gap-3 items-center"><ImPageBreak />Page:{totalPages} </p>
              </div>
              
            </div>
        
           
          </div>
          <div className="flex text-sm justify-between md:max-w-md border-t-2 border-[#13131326] pt-5 border-opacity-10">
            <button
              type="button"
              className="flex items-center px-2 py-1 pl-0 space-x-1"
            >
            
              <span>{category}</span>
            </button>
            <button
              type="button"
              className="flex items-center px-2 py-1 space-x-1"
            >
             
              <span>{rating}</span>
            </button>
            <Link><button className="btn bg-[#23BE0A] rounded-2xl">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Wishlist;