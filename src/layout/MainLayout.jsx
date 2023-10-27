import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
           <div className="py-10">
           <Outlet></Outlet>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default MainLayout;