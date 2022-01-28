import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/quiz" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
