import { Link, useLoaderData } from "react-router-dom";
import banner5 from '../../../images/banner4.jpg'
import { FaGlasses, FaShoppingCart } from "react-icons/fa";
import useTitle from "../../../Hooks/usetitle";

const AllProducts = () => {
    useTitle('All Products')
    const allProdutcs = useLoaderData();
    return (
        < div >
        <div id='projects' className=' h-full bg-slate-500' style={{ backgroundImage: `url(${banner5})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
            <div className=" text-white ps-36 pt-60 pb-60">
                
            </div>

        </div>
        <div>
            <div>

                <div className='text-center mt-10 mb-36'>
                    <h3 className=' text-4xl mb-3'>All Products</h3>


                    <div className='flex justify-center items-center flex-wrap gap-10 mt-10'>

                        {
                            allProdutcs.map(s => <div key={s.id} className="card w-80 bg-base-100 shadow-xl text-center">
                            <figure><img src={s.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{s.name}</h2>
                                <p>Price: ${s.price}</p>
                                <p>Available: {s.stock}</p>
        
        
                                <div className="card-actions justify-center text-2xl">
                                    <FaShoppingCart className='text-amber-400 me-2'></FaShoppingCart>
                                    <Link to={`../productdetails/${s.id}`}>
                                        <FaGlasses className='text-green-600 ms-2'></FaGlasses>
        
                                    </Link>
        
                                </div>
                            </div>
                        </div> )
                        }


                    </div>



                </div>



            </div>
            
        </div>

    </div >
    );
};

export default AllProducts;