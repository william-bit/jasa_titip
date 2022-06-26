import { ToastContainer, toast } from "react-toastify";
import Header from "../../components/layouts/Header";
import Sidebar from "../../components/layouts/Sidebar";
import InputForm from "../../custom/InputForm";
import { TableCustom } from "../../custom/Table";
import { useStore } from "../../store/store";
const Product = () => {
  let listMenu = [
    { label: "Dashboard" },
    { label: "Product" },
    { label: "Report" },
  ];
  const loginToast = useStore((state) => state.loginToast);
  const toggleLoginToast = useStore((state) => state.toggleLoginToast);
  if (loginToast) {
    toast("Success login!!!");
    toggleLoginToast();
  }
  return (
    <>
      <ToastContainer />
      <div className="flex flex-row h-screen">
        <div className="bg-gray-700 w-50">
          <Sidebar listMenu={listMenu}></Sidebar>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex items-center h-10">
            <Header listMenu={listMenu}></Header>
          </div>
          <div className="flex flex-1 overflow-scroll ">
            <InputForm></InputForm>
            <TableCustom></TableCustom>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
