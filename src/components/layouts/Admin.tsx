import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../../components/layouts/Sidebar";
import Header from "../../components/layouts/Header";
import { useStore } from "../../store/store";
import { listMenu } from "../../utils/admin";
interface IAdmin {
  children: JSX.Element | JSX.Element[];
}
const Admin = (props: IAdmin) => {
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
        <div className="bg-gray-700 w-52">
          <Sidebar listMenu={listMenu}></Sidebar>
        </div>
        <div className="flex flex-col w-full h-screen overflow-hidden">
          <div className="flex flex-none h-12 border-2">
            <Header listMenu={listMenu}></Header>
          </div>
          <div className="flex flex-initial overflow-hidden">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
