// Sidebar Context
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext.jsx";

// Styles
import "./Sidebar.css";

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);

    return (
        <div className={`${!isOpen ? "" : "show-sidebar"} sidebar-container`}>
            <h1>Sidebar</h1>
            <button onClick={handleClose}>X</button>
        </div>
    );
};

export default Sidebar;
