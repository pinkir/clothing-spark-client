import { useState } from "react";
import { FaDollarSign, FaTrashAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/usetitle";


const Cart = () => {
    useTitle('Cart')
    const order = useLoaderData();
    const orderItem = order.slice(0, 10)
    const [items, setItems] = useState(orderItem);

    const handleDelete = (id) => {
        const updatedItems = items.filter(i => i.id !== id);
            setItems(updatedItems);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

    }
    return (
        <div className="w-full">
            <div className="">
                <h5 className="text-2xl font-bold text-white">Total Product: {orderItem.length}</h5>
            </div>
            <div className="max-w-6xl mx-auto p-5  rounded border font-semibold mt-20 mb-20 bg-sky-100">
                <h5 className="text-2xl font-bold">Total Product: {orderItem.length}</h5>
                <h5 className="text-2xl font-bold">Total Price: $1267</h5>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead className="text-sky-500 border-b-2 font-semibold uppercase">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Delete Item</th>
                                <th>Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((item, index) => <tr key={item.id}>
                                    <td>
                                        <label>
                                            {index + 1}
                                        </label>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20 h-20">
                                                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}


                                    </td>
                                    <td>${item.price}</td>
                                    <td>

                                        <FaTrashAlt onClick={() => handleDelete(item.id)} className=" text-red-600 text-2xl"></FaTrashAlt>
                                    </td>
                                    <td>

                                        <FaDollarSign className=" text-green-600 text-2xl"></FaDollarSign>
                                    </td>
                                </tr>)
                            }


                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;