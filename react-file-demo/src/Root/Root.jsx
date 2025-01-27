import { Outlet } from "react-router-dom";
import Navber from "../Pages/Sheard/Navber";
import Footer from "../Pages/Sheard/Footer";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;