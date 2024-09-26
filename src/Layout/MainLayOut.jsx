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
      <div className="min-h-[100vh]">
        <Outlet></Outlet>
      </div>
      <div className="mt-32">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
