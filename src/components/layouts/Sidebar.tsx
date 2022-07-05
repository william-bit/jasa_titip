import { Popover } from "@headlessui/react";
import { useStore } from "../../store/store";
import { Link } from "../Links";

function Menu({ label = "", href = "" }) {
  return (
    <Link href={href}>
      <div className="flex items-center px-1 py-2 text-sm font-medium tracking-wide text-gray-400 rounded-md cursor-pointer hover:text-gray-300 hover:bg-gray-600">
        <div className="px-2">{label}</div>
      </div>
    </Link>
  );
}
interface ISidebar {
  listMenu: Array<{ label: string; src?: string }>;
}

export default function Sidebar({ listMenu }: ISidebar) {
  const userProfile = useStore((state) => state.userProfile);
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
        <div key={i}>{Menu(item)}</div>
      ))}
    </div>
  );
}
