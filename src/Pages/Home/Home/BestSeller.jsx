import { useEffect, useState } from 'react';
import banner1 from '../../../images/banner1.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.jpg'
import banner5 from '../../../images/banner5.jpg'
import { Link } from 'react-router-dom';
import { FaGlasses, FaShoppingCart, FaStreetView } from 'react-icons/fa';


const BestSeller = () => {
    const [seller, setSeller] = useState([]);
    const sixSeller = seller.slice(0, 3);
    console.log(sixSeller)





    useEffect(() => {
        fetch('/public/product.json')
            .then(res => res.json())
            .then(data => setSeller(data))
    }, [])
    return (
        <div>
            <div id='projects' className='bg-gray-600 h-full bg-fixed mt-40' style={{ backgroundImage: `url(${banner5})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}>
                <div className=" text-white ps-36 pt-20 pb-40">
                    <h1 className="text-4xl font-bold text-start mt-40 ">Best Seller</h1>
                    <p className="text-start text-white mb-10 mt-3 "> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, architecto magnam? <br /> Aliquam maiores, molestias exercitationem, error expedita praesentium porro est nemo <br /> tempore officiis eaque. <br /> Unde ad dicta iste tempora amet cumque dolores aliquam est ex <br /> aliquid doloribus odio veniam facilis impedit ipsum rem cupiditate vel, <br /> sequi odit obcaecati nihil quisquam.</p>
                </div>

            </div>
            <div>
                <div>

                    <div className='text-center mt-36 mb-36'>
                        <h3 className=' text-4xl mb-3'>Best Seller Products</h3>


                        <div className='flex justify-center items-center flex-wrap gap-10 mt-10'>

                            {
                                sixSeller.map(s => <div key={s.id} className="card w-80 bg-base-100 shadow-xl text-center">
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

        </div>
    );
};

export default BestSeller;