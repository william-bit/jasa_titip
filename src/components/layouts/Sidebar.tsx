import { Popover } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { IProfile, useStore } from "../../store/store";
import { Link } from "../Links";

function Menu({ label = "", href = "", color = "" }) {
  return (
    <Link href={href}>
      <div
        className={`flex items-center px-1 py-2 text-sm font-medium tracking-wide text-white rounded-md cursor-pointer hover:text-gray-100 ${color}`}
      >
        <div className="px-2">{label}</div>
      </div>
    </Link>
  );
}
interface ISidebar {
  listMenu: Array<{ label: string; src?: string }>;
  color?:
    | "hover:bg-gray-600"
    | "hover:bg-blue-600"
    | "hover:bg-red-600"
    | "hover:bg-green:600";
}

export default function Sidebar({ listMenu, color }: ISidebar) {
  const userProfile = useStore((state) => state.userProfile);
  const setUserProfile = useStore((state) => state.setUserProfile);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("hai");
    setUserProfile({} as IProfile);
    navigate("/");
  };
  if (color == undefined) {
    color = "hover:bg-gray-600";
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center mt-4 justify-items-center">
        <Link href="/" className="text-white">
          TipBel.com Panel
        </Link>
      </div>
      <span className="flex items-center justify-center font-light text-white justify-items-center">
        Welcome {userProfile.name}
      </span>
      {listMenu.map((item: object, i: number) => (
        <div key={i}>{Menu({ ...item, color })}</div>
      ))}
      <div>
        <div
          className={`flex items-center px-1 py-2 text-sm font-medium tracking-wide text-white rounded-md cursor-pointer hover:text-gray-200 ${color}`}
        >
          <div className="px-2" onClick={handleLogout}>
            LogOut
          </div>
        </div>
      </div>
    </div>
  );
}
