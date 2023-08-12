import { Link } from "react-router-dom";


const Product = ({ product }) => {
    const { id, name, price, stock, rating, img } = product;
    return (
        
        <div className="card w-80 bg-base-100 shadow-xl text-center">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Available: {stock}</p>
                

                <div className="card-actions justify-center">
                    <button className="btn btn-sm bg-cyan-400">Add To Cart</button>
                    <Link to={`../productdetails/${id}`}>
                        <button className="btn btn-sm bg-green-500">View Details</button>

                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Product;