import { ProfileForm } from "../components/custom/ProfileForm";
import SidebarProfile from "../components/layouts/SidebarProfile";
import { Header } from "../components/Navbar/Header";
import { useStore } from "../store/store";

let listMenu = [
  { label: "Personal Info" },
  { label: "Ongoing transaction" },
  { label: "History Transaction" },
  { label: "History Request Product" },
];

export const Profile = () => {
  const userProfile = useStore((state) => state.userProfile);
  const userJoin = new Date(userProfile.join);

  const ProfileCard = () => (
    <div className="p-3 bg-white border-t-4 border-blue-400 w-80">
      <div className="overflow-hidden image">
        <div className="flex items-center justify-center mx-auto border-2 rounded-full w-28 h-28">
          <div className="pb-3 text-6xl font-bold">
            {userProfile.name.charAt(0)}
          </div>
        </div>
      </div>
      <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
        {userProfile.name}
      </h1>
      <h3 className="leading-6 text-gray-600 font-lg text-semibold">
        Status as{" "}
        {userProfile.role == 0 ? <span>Tenant</span> : <span>Renter</span>}
      </h3>
      <p className="text-sm leading-6 text-gray-500 hover:text-gray-600"></p>
      <ul className="px-3 py-2 mt-3 text-gray-600 bg-gray-100 divide-y rounded shadow-sm hover:text-gray-700 hover:shadow">
        <li className="flex items-center py-3">
          <span>Status</span>
          <span className="ml-auto">
            <span className="px-2 py-1 text-sm text-white bg-green-500 rounded">
              Active
            </span>
          </span>
        </li>
        <li className="flex items-center py-3">
          <span>Login since</span>
          <span className="ml-auto">
            {userJoin.toLocaleDateString("us-EN", {
              weekday: "long",
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </span>
        </li>
        <li className="flex items-center py-3">
          <span>Balance</span>
          <div className="flex ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <span className="ml-2 font-bold"> 20.000.000</span>
          </div>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <Header></Header>
      <div className="flex">
        <SidebarProfile listMenu={listMenu}></SidebarProfile>
        <div className="flex mx-auto">
          <div className="mr-3 ">
            <ProfileCard></ProfileCard>
          </div>
          <ProfileForm></ProfileForm>
        </div>
      </div>
    </div>
  );
};
