import { Link } from "../Links";

function Menu({ label = "", href = "" }) {
  return (
    <Link href={href}>
      <div className="flex items-center px-1 py-2 text-sm font-medium tracking-wide text-gray-800 rounded-md cursor-pointer hover:text-gray-600 hover:bg-gray-100">
        <div className="px-2">{label}</div>
      </div>
    </Link>
  );
}
interface ISidebar {
  listMenu: Array<{ label: string; src?: string }>;
}

export default function SidebarProfile({ listMenu }: ISidebar) {
  return (
    <div className="flex flex-col h-screen border-2">
      <div className="flex items-center justify-center h-10 justify-items-center">
        <span className="text-white">Titip Panel</span>
      </div>
      {listMenu.map((item: object, i: number) => (
        <div key={i}>{Menu(item)}</div>
      ))}
    </div>
  );
}
