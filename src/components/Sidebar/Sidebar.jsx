// Sidebar Context
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext.jsx";

// Styles
import "./Sidebar.css";

// Icons
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);

    return (
        <div className={`${!isOpen ? "" : "show-sidebar"} sidebar-container`}>
            <h1>Sidebar</h1>
            <div onClick={handleClose}>
                <FaArrowRightFromBracket />
            </div>
        </div>
    );
};

export default Sidebar;
