// Routes
import { Route, Routes } from "react-router-dom";

// Style
import "./App.css";

// Pages
import Accessories from "./routes/Accessories.jsx";
import Beauty from "./routes/Beauty.jsx";
import Checkout from "./routes/Checkout/Checkout.jsx";
import Home from "./routes/Home.jsx";
import HomeDeco from "./routes/HomeDeco.jsx";
import Men from "./routes/Men.jsx";
import NotFound from "./routes/NotFound.jsx";
import ProductDetails from "./routes/ProductDetails/ProductDetails.jsx";
import Sunglasses from "./routes/Sunglasses.jsx";
import Tech from "./routes/Tech.jsx";
import Women from "./routes/Women.jsx";

// Layout
import MainLayout from "./layouts/MainLayout.jsx";

// Util
import SmoothScroll from "./utils/SmoothScrool.jsx";

function App() {
    return (
        <>
            <SmoothScroll>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="product/:id"
                            element={<ProductDetails />}
                        />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/*" element={<NotFound />} />
                        <Route path="women" element={<Women />} />
                        <Route path="men" element={<Men />} />
                        <Route path="tech" element={<Tech />} />
                        <Route path="home-deco" element={<HomeDeco />} />
                        <Route path="beauty" element={<Beauty />} />
                        <Route path="sunglasses" element={<Sunglasses />} />
                        <Route path="accessories" element={<Accessories />} />
                    </Routes>
                </MainLayout>
            </SmoothScroll>
        </>
    );
}

export default App;
