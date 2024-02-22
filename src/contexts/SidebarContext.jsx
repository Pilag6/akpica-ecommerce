/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [isToggle, setIsToggle] = useState(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleToggle = () => {
        setIsToggle(!isToggle);
    };

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose, isToggle, setIsToggle, handleToggle }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
