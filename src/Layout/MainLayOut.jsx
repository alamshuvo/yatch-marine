import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="font-railway bg-nav">
       <div className="container mx-auto p-4 ">
       <Navbar></Navbar>
       </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
