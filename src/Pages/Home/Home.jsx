import { AllBooks } from "../../components/AllBooks/AllBooks";
import Banner from "../../components/Banner/Banner";
import '../../assets/style.css'


const Home = () => {
    return (
        <div className="md:px-5 my-5">
            <Banner/>
            <AllBooks/>
        </div>
    );
};

export default Home;