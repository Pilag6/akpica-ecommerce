/* eslint-disable react/prop-types */

// Components
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

// Styles
import "./MainLayout.css"

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <h1>AkPiCa</h1>
            <Header />
            {children}
            <Sidebar />
            <Footer />
        </div>
    );
};

export default MainLayout;
