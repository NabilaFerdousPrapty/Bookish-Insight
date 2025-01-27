import { IoPersonCircleSharp } from "react-icons/io5";
import { ImPageBreak } from "react-icons/im";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Wishlist = ({ wishlistBook }) => {
  const {
    image,
    bookName,
    tags,
    publisher,
    totalPages,
    category,
    rating,
    bookId,
    yearOfPublishing,
    author,
  } = wishlistBook;
  return (
    <div className="flex md:flex-row flex-col lg:w-full w-auto space-x-2 sm:space-x-4 border-2 border-[#13131399] p-4 border-opacity-30 rounded-2xl m-4 gap-5">
      <img
        className="flex-shrink-0 md: h-56 md:w-48 sm:w-32 sm:h-32 bg-[#1313130D] "
        src={image}
        alt="Polaroid camera"
      />
      <div className="flex flex-col justify-between w-full pb-4">
        <div className="flex justify-between w-full pb-2 space-x-2">
          <div className="space-y-1 md:text-left text-center">
            <h3 className="text-lg font-semibold leading-snug sm:pr-8 text-center md:text-left">
              {bookName}
            </h3>
            <div className="flex flex-col md:flex-row justify-between items-center md:gap-5 gap-2 font-bold">
              <p className="text-sm text-gray-400 font-bold">Tag</p>
              {tags.map((tag, idx) => (
                <p
                  value={tag}
                  key={idx}
                  className="text-sm text-[#23BE0A] bg-[#1313130D] p-1 md:p-3 rounded-2xl"
                >
                  #{tag}
                </p>
              ))}
              <p>Year of Publishing:{yearOfPublishing}</p>
            </div>
            <div className=" justify-between items-center md:flex md:gap-6">
              <p className="flex md:gap-3 items-center gap-3 justify-center md:justify-between ">
                <IoPersonCircleSharp />
                Publisher:{publisher}
              </p>
              <p className="flex md:gap-3 items-center gap-3 justify-center md:justify-between ">
                <IoPersonCircleSharp />
                Author: {author}
              </p>

              <p className="flex justify-center md:gap-3 items-center">
                <ImPageBreak />
                Page:{totalPages}{" "}
              </p>
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
          <Link to={`/bookDetail/${bookId}`}>
            <button className="btn bg-[#23BE0A] rounded-2xl">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
Wishlist.propTypes = {
  wishlistBook: PropTypes.object,
};
