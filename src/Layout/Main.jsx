import { Outlet } from "react-router-dom";

import Footer from "../Shared/Footer/Footer";
import CommonPart from "../Shared/CommonPart/CommonPart";
import Header from "../Shared/Navbar/Header";


const Main = () => {
    return (
        <div>
            <CommonPart/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;