/* eslint-disable react/prop-types */

// Components
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

// Styles
import "./MainLayout.css"

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <h1>AkPiCa</h1>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
