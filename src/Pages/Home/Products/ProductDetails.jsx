import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const [state, setState] = useState([])
    const details = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        if (details) {
            const detailsData = details.find(dt => dt.id == id);
            setState(detailsData)
        }

    }, [])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row mt-36 mb-36 gap-4 max-w-5xl">
                <img src={state.img} className="max-w-lg rounded-lg shadow-2xl " />
                <div>
                    <h1 className="text-5xl font-bold">{state.name}</h1>
                    <p className="py-2">Seller Name: {state.seller}</p>
                    <p className="py-2">Category: {state.category}</p>
                    <p className="py-2">Price: ${state.price}</p>
                    <p className="py-2">Stock Available: {state.stock}</p>
                    <p className="py-2">Shipping: {state.shipping}</p>
                    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque molestias velit saepe, aperiam totam necessitatibus obcaecati eveniet quo animi nihil quas porro asperiores quia, expedita quisquam reiciendis. Dolorum et dicta, quisquam nobis eveniet reprehenderit adipisci molestias officia? Ducimus quae ex ratione temporibus sequi eos pariatur quia iusto labore quibusdam modi facilis fugiat doloribus, explicabo in dolor, aut animi, beatae facere repellendus voluptatum consectetur. Porro sint quo eum obcaecati explicabo, ea corporis fuga fugit, consequatur esse suscipit aut exercitationem labore. </p>
                    <button className="btn btn-primary mt-2">Order</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;