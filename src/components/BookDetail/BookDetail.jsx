import { Link } from "react-router-dom";
import "../../assets/style.css";
import { FaRegStarHalfStroke } from "react-icons/fa6";
const BookDetail = ({ book }) => {
  const {bookId, image, bookName, tags, category, rating,author } = book;
  return (
    <Link to={`/bookDetail/${bookId}`} className="max-w-sm p-6 shadow-md rounded-xl border-2 border-[#13131326]">
      <img
        src={image}
        alt=""
        className="h-[230px] object-center w-full rounded-md  bg-gray-500"
      />
      <div className="mt-6 mb-2 border-dashed border-b-2 border-[#13131326] pb-4">
        <div className="flex text-xs  gap-5 items-center uppercase font-semibold ">
          {tags.map((tag, index) => (
            <p
              className="text-[#23BE0A] p-3 bg-[#F3F3F3] rounded-2xl"
              tag={tag}
              key={index}
            >
              {tag}
            </p>
          ))}
        </div>

        <h2 className="text-xl font-semibold tracking-wide playfair-display-Bold">
          {bookName}
        </h2>
        <p className="font-medium space-x-2">By: {author}</p>
      </div>
      <div className="flex justify-between items-center font-medium">
        <p >{category}</p>
        <p className="flex items-center gap-2">{rating}<FaRegStarHalfStroke /></p>
      </div>
    </Link>
  );
};

export default BookDetail;
