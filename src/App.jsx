// Routes
import { Route, Routes } from "react-router-dom";

// Style
import "./App.css";

// Pages
import Home from "./routes/Home.jsx";
import ProductDetails from "./routes/ProductDetails/ProductDetails.jsx";
import NotFound from "./routes/NotFound.jsx";
import Women from "./routes/Women.jsx";
import Men from "./routes/Men.jsx";
import Tech from "./routes/Tech.jsx";
import HomeDeco from "./routes/HomeDeco.jsx";
import Beauty from "./routes/Beauty.jsx";
import Sunglasses from "./routes/Sunglasses.jsx";
import Accessories from "./routes/Accessories.jsx";

// Layout
import MainLayout from "./layouts/MainLayout.jsx";
import SmoothScroll from "./utils/SmoothScrool.jsx";

function App() {
    return (
        <>
            <SmoothScroll>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="product/:id" element={<ProductDetails />} />
                        <Route path="/checkout" element={<div>Checkout</div>} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="women" element={<Women />} />
                        <Route path="men" element={<Men />} />
                        <Route path="tech" element={<Tech />} />
                        <Route path="home-deco" element={<HomeDeco />} />
                        <Route path="beauty" element={<Beauty />} />
                        <Route path="sunglasses" element={<Sunglasses />}/>
                        <Route path="accessories" element={<Accessories />} />
                    </Routes>
                </MainLayout>
            </SmoothScroll>
        </>
    );
}

export default App;
