import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home_page/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import PrivateRouter from "./PrivateRouter";

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
            }
        ]
    }
])

export default MainRouter;