// Routes
import { Route, Routes } from "react-router-dom";

// Style
import "./App.css";

// Pages
import Home from "./routes/Home.jsx";
import ProductDetails from "./routes/ProductDetails.jsx";
import NotFound from "./routes/NotFound.jsx";

function App() {
    return (
        <>
            <h1>AkPiCa</h1>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="product/:id" element={<ProductDetails />} />
                <Route path="/checkout" element={<div>Checkout</div>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
