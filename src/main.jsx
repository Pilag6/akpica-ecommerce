import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Start Router
import { BrowserRouter } from "react-router-dom";

// Contexts
import ProductContextProvider from "./contexts/ProductContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ProductContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductContextProvider>
);

/* BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useParams */
