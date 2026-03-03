import { Outlet } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";

import "./styles/layout.css"; 



function Layout() {

  return (

    <div className="layout">


            <Navbar />

                <div className="conteudo">
                    <Outlet />
                </div>

            <Footer/>




    </div>

  );
}

export default Layout;
