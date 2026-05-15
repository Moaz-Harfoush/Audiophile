import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import OtherLinks from "./pages/OtherLinks";
import ScrollToTop from "./components/utils/ScrollToTop";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:categoryName" element={<OtherLinks />} />
          <Route path="/:categoryName/:itemName" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
