import { useEffect, useState } from "react";
import SingleReview from "../../components/Review/SingleReview";
import { MdRateReview } from "react-icons/md";
import "../../assets/style.css";


const Review = () => {
  const [firstReview, setFirstReview] = useState(null);
  const [allReviews, setAllReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("./AllReviews.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setFirstReview(data[0]);
          setAllReviews(data.slice(1, 5)); // Set other reviews
          // Set loading to false once data is fetched
        }
      });
  }, []);
  //  console.log(isLoading);
  return (
    <div className="px-2 mx-1">
      <section className="py-6 bg-[#1313130D]  rounded-3xl">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            Explore Books Like Never Before
          </h1>
          <p className="pt-2 pb-8 text-xl font-medium text-center">
            Discover a world of literature with our curated book reviews and
            expert critiques. Dive deep into captivating stories, broaden your
            horizons, and find your next great read. Whether you're a casual
            reader or a literary enthusiast, our platform offers something for
            everyone.
          </p>
          <button className="px-8 py-3 text-lg font-semibold   bg-[#23BE0A] text-gray-900 rounded-2xl">
            Log in to explore more
          </button>
        </div>
      </section>
      <h1 className="p-4 py-7 text-4xl font-bold bg-gray-100 rounded-2xl leading-none text-center my-20 playfair-display-Bold">
        What our customers are saying about us
      </h1>

      {firstReview && (
        <section className="my-8 bg-gray-100 text-gray-800">
          <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-16 h-16 text-[#23BE0A]"
            >
              <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
              <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
            </svg>
            <p className="playfair-display-Bold text-3xl">Our Top Customer</p>
            <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl text-gray-700">
              "{firstReview.reviewText}"
            </p>
            <div className="flex justify-center lg:gap-10 space-x-3">
              <img
                src={firstReview.userImage}
                alt=""
                className="w-20 h-20 bg-center bg-cover rounded-md bg-gray-300"
              />
              <div className="text-[#23BE0A] bg-[#1313130D] py-2 px-5 rounded-2xl text-center">
                <p className="leading-tight">{firstReview.userName}</p>
                <p className="font-bold leading-tight text-gray-700">
                  {firstReview.designation}
                </p>
                <p className=" flex  justify-center gap-3 items-center ">
                  <MdRateReview />
                  rating:{firstReview.rating}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="  text-4xl  leading-none text-center playfair-display-Bold">
          Other Valuable Customers
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row  lg:flex-wrap lg:justify-evenly lg:px-10">
        {allReviews.map((reviews, idx) => (
          <SingleReview
            key={idx}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            reviews={reviews}
          ></SingleReview>
        ))}
      </div>
      <div className="mx-auto flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800">
	<div className="flex flex-col w-full">
		<h2 className="text-3xl font-semibold text-center py-5">All The Customer Reviews</h2>
		<div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
			<div className="flex">
				<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-[#23BE0A]">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-[#23BE0A]">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-[#23BE0A]">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-400">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-400">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
			</div>
			<span className="text-gray-600">3 out of 5</span>
		</div>
		<p className="text-sm text-gray-600">861 global ratings</p>
		<div className="flex flex-col mt-4">
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">5 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
					<div className="bg-[#23BE0A] h-4 w-5/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">4 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
					<div className="bg-[#23BE0A] h-4 w-4/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">3 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
					<div className="bg-[#23BE0A] h-4 w-3/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">2 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
					<div className="bg-[#23BE0A] h-4 w-2/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">1 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
					<div className="bg-[#23BE0A] h-4 w-1/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
			</div>
		</div>
	</div>
</div>
    </div>
  );
};

export default Review;
