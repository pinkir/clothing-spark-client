import Products from "../Products/Products";
import Banner from "./Banner";
import BestSeller from "./BestSeller";
import Contact from "./Contact";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Products></Products>
            <BestSeller></BestSeller>
            <Contact></Contact>
        </div>
    );
};

export default Home;