import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Register from "./pages/register/Index";
import Admin from "./pages/admin/Index";
import Product from "./pages/admin/Product";
import { checkGetToken } from "./utils/authenticate";
import { ToastContainer } from "react-toastify";
import { Checkout } from "./pages/Checkout";
import { Profile } from "./pages/Profile";
import Customer from "./pages/register/Customer";
import Shop from "./pages/Shop";
import Vendor from "./pages/register/Vendor";
import { AdminProfile } from "./pages/admin/Profile";
import { Request } from "./pages/Request";
import Report from "./pages/admin/Report";
import Index from "./pages/admin/Index";

function App() {
  checkGetToken();
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/vendor" element={<Vendor />} />
        <Route path="/register/customer" element={<Customer />} />
        <Route path="/checkout/:productId" element={<Checkout />} />
        <Route path="/profile/ongoing" element={<Checkout />} />
        <Route path="/profile/finish" element={<Checkout />} />
        <Route path="/profile/rejected" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/request/:id" element={<Request />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/report" element={<Report />} />
        <Route path="/admin/order" element={<Product />} />
        <Route path="/admin/request" element={<Product />} />
        <Route path="/admin/complain" element={<Product />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/dashboard" element={<Index />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
