import NotFound from "../pages/NotFound";
import AddProduct from "../pages/AddProduct";
import ListProducts from "../pages/ListProducts";
import { BrowserRouter ,Routes, Route } from "react-router-dom";

const RouterProvider = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<ListProducts />} />
                <Route path="add-product" element={<AddProduct />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterProvider