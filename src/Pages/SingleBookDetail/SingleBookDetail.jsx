import { useLoaderData, useParams } from "react-router-dom";
import "../../assets/style.css";
import { saveReadBooksToLocalStorage, saveWishlistBooksToLocalStorage } from "../../utils/localStorage";



const SingleBookDetail = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const idInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === idInt);
  // console.log(book);

 
  const handleRead = () => {
  saveReadBooksToLocalStorage(book,bookId)
}

  
  const handleWishlist = () => {
     saveWishlistBooksToLocalStorage(book,bookId)
  }
  
  
  return (
    <section className="py-6 px-4">
      <div className="container flex  mx-auto lg:flex-row-reverse flex-col-reverse">
        <div className="flex flex-col  space-y-2 rounded-sm sm:p-10 lg:p-12 lg:w-1/2 xl:w-2/5 ">
          <h2 className="playfair-display-Bold text-4xl">{book.bookName}</h2>
          <p className="text-xl ">By: {book.author}</p>
          <div className="font-medium ">
            <p className="border-y-2 border-[#13131326] lg:py-2 py-1">{book.category}</p>
            <p className="font-normal">
              <span className="font-bold">Review</span> :{book.review}
            </p>
          </div>
          <div className="flex justify-between items-center border-b-2 border-[#13131326] lg:pb-3 pb-1 flex-col md:flex-row">
            <p className="font-bold">Tag:</p>
            {book.tags.map((tag, index) => (
              <p className="text-[#23BE0A] px-3 py-1 bg-[#F3F3F3] rounded-2xl"tag={tag}
                key={index}
              >
                #{tag}
              </p>
            ))}
          </div>
          <div>
            <div className="container p-2 mx-auto sm:p-4 ">
              <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                  <colgroup>
                    <col />
                    <col />

                    <col className="w-12" />
                  </colgroup>

                  <tbody>
                    <tr className="  ">
                      <td className="p-3">
                        <p>Number of Pages:</p>
                      </td>
                      <td className="p-3 font-bold">
                        <p>{book.totalPages}</p>
                      </td>
                    </tr>
                    <tr className="  ">
                      <td className="p-3">
                        <p>Publisher:</p>
                      </td>
                      <td className="p-3 font-bold">
                        <p>{book.publisher}</p>
                      </td>
                    </tr>
                    <tr className=" ">
                      <td className="p-3">
                        <p>Year of Publishing:</p>
                      </td>
                      <td className="p-3 font-bold">
                        <p>{book.yearOfPublishing}</p>
                      </td>
                    </tr>
                    <tr className="  ">
                      <td className="p-3">
                        <p>Rating:</p>
                      </td>
                      <td className="p-3 font-bold">
                        <p>{book.rating}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex gap-8 items-center">
            <button onClick={handleRead} className="btn btn-outline">Read</button>
            <button onClick={handleWishlist} className="btn bg-[#50B1C9]">Wishlist</button>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 xl:w-3/5 bg-[#1313130D] rounded-2xl">
          <div className="flex items-center justify-center p-4 md:p-8 lg:p-12 pb-5">
            <img
              src={book.image}
              alt=""
              className="rounded-lg shadow-lg bg-gray-500 aspect-video lg:w-[550px] h-[590px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBookDetail;
