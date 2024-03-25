import bg from "../../assets/Banner.png";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="">
      <div className="hero min-h-screen bg-[#1313130D] rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between px-9">
          <img src={bg} className="lg:w-1/5 md:w-2/3" alt="Banner" />
          <div className="max-w-screen-sm">
            <h1 className="md:text-5xl font-bold text-2xl">
              Explore New Worlds with Our Book Selections
            </h1>
            <p className="py-6 md:text-base text-sm">
              Discover captivating stories and enrich your mind with our curated
              collection of books. Whether you&apos;re seeking thrilling adventures,
              insightful reflections, or heartwarming tales, we have something
              for every reader.
            </p>
           <Link to='/listedBooks'> <button className="btn bg-[#23BE0A] ">View The List</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
