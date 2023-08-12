import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Product = ({ product }) => {
    const { id, name, price, stock, img } = product;

    const handleOrder =() =>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Click on cart and review your order',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        
        <div className="card w-80 bg-base-100 shadow-xl text-center">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                <p>Available: {stock}</p>
                

                <div className="card-actions justify-center">
                    <button onClick={handleOrder} className="btn btn-sm bg-cyan-400">Add To Cart</button>
                    <Link to={`../productdetails/${id}`}>
                        <button className="btn btn-sm bg-green-500">View Details</button>

                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Product;