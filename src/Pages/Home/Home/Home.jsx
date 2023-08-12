import useTitle from "../../../Hooks/usetitle";
import Products from "../Products/Products";
import Banner from "./Banner";
import BestSeller from "./BestSeller";
import Contact from "./Contact";
import Gallary from "./Gallary";
import Partners from "./Partners";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            
            <Banner></Banner>
            <Products></Products>
            <BestSeller></BestSeller>
            <Gallary></Gallary>
            <Partners></Partners>
            <Contact></Contact>
        </div>
    );
};

export default Home;