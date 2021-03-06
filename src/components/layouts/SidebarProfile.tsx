import { useNavigate } from "react-router-dom";
import { IProfile, useStore } from "../../store/store";
import { Link } from "../Links";

function Menu({ label = "", href = "" }) {
  return (
    <Link href={href}>
      <div className="flex items-center px-1 py-2 text-sm font-medium tracking-wide text-gray-800 rounded-md cursor-pointer hover:bg-gray-100">
        <div className="px-2">{label}</div>
      </div>
    </Link>
  );
}
interface ISidebar {
  listMenu: Array<{ label: string; src?: string }>;
}

export default function SidebarProfile({ listMenu }: ISidebar) {
  const setUserProfile = useStore((state) => state.setUserProfile);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("hai");
    setUserProfile({} as IProfile);
    navigate("/");
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center h-10 justify-items-center">
        <span className="text-white">TipBel.com</span>
      </div>
      {listMenu.map((item: object, i: number) => (
        <div key={i}>{Menu(item)}</div>
      ))}
      <div
        onClick={handleLogout}
        className="flex items-center px-1 py-2 text-sm font-medium tracking-wide text-gray-800 rounded-md cursor-pointer hover:bg-gray-100"
      >
        <a className="px-2">LogOut</a>
      </div>
    </div>
  );
}
