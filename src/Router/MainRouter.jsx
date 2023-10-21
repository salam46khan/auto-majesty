import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home_page/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import PrivateRouter from "./PrivateRouter";
import Cart from "../Pages/Cart/cart";
import Products from "../Components/Products/Products";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Update from "../Components/Update/Update";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addproduct',
                element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: `/product/:brand`,
                element: <Products></Products>,
                loader: ({params})=> fetch(`http://localhost:5000/products/${params.brand}`)
                
            },
            {
                path: `/details/:id`,
                element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: `/update/:id`,
                element: <PrivateRouter><Update></Update></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            }
        ]
    }
])

export default MainRouter;