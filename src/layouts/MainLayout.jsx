/* eslint-disable react/prop-types */

// Components
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

// Styles
import "./MainLayout.css";

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <Header />
            {children}
            <Sidebar />
            <Footer />
        </div>
    );
};

export default MainLayout;
