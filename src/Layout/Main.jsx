import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import CommonPart from "../Shared/CommonPart/CommonPart";


const Main = () => {
    return (
        <div>
            <CommonPart/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;