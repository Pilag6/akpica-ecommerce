import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext.jsx";

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    return (
        <div>
            <h1>Header</h1>
            <button onClick={() => setIsOpen(!isOpen)}>T</button>
        </div>
    );
};

export default Header;
