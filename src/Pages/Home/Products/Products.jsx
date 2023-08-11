
import Product from "./Product";
import { useEffect, useState } from "react";


const Products = () => {
    const [products, setProducts] = useState([]);
    




    useEffect(() => {
        fetch('/public/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>

            <div className='text-center mt-36 mb-36'>
                <h3 className=' text-4xl mb-3'>Latest Products</h3>


                <div className='flex justify-center items-center flex-wrap gap-10 mt-10'>

                    {
                        products.slice(0, 9).map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }


                </div>



            </div>
            

        </div>
    );
};

export default Products;