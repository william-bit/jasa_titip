import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Register from "./pages/register/Index";
import Admin from "./pages/admin/Index";
import Product from "./pages/admin/Product";
import { checkGetToken, checkToken } from "./utils/authenticate";
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
import axios from "axios";
import { useStore } from "./store/store";
import { NotFound } from "./pages/NotFound";
import RequestAdmin from "./pages/admin/RequestAdmin";
import Order from "./pages/admin/Order";
import Complain from "./pages/admin/Complain";

function App() {
  checkGetToken();
  const userProfile = useStore((state) => state.userProfile);
  const setUserEmpty = useStore((state) => state.setUserProfile);
  if (
    Object.keys(userProfile).length !== 0 &&
    axios.defaults.headers.common["Authorization"]
  ) {
    checkToken(setUserEmpty);
  }
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
        <Route path="*" element={<Home />} />
        {userProfile.role == 1 ? (
          <>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/product" element={<Product />} />
            <Route path="/admin/report" element={<Report />} />
            <Route path="/admin/order" element={<Order />} />
            <Route path="/admin/request" element={<RequestAdmin />} />
            <Route path="/admin/complain" element={<Complain />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/admin/dashboard" element={<Index />} />
          </>
        ) : (
          <Route path="/admin/*" element={<NotFound />} />
        )}
      </Routes>
    </>
  );
}

export default App;
