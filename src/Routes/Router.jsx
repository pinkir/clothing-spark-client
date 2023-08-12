import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../layouts/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProductDetails from "../Pages/Home/Products/ProductDetails";
import AllProducts from "../Pages/Home/Products/AllProducts";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allproduct",
                element: <AllProducts></AllProducts>,
                loader: () => fetch('/product.json'),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/dashboard",
                element: <Cart></Cart>,
                loader: () => fetch('/product.json'),
            },
            {
                path: "/productdetails/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch('/product.json'),
            },

        ]
    },
]);

export default router;