import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;