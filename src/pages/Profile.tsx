import SidebarProfile from "../components/layouts/SideProfile";
import { Header } from "../components/Navbar/Header";
import { ProfileForm } from "../custom/ProfileForm";

let listMenu = [
  { label: "Personal Info" },
  { label: "Ongoing transaction" },
  { label: "Transaction History" },
];

const ProfileCard = () => (
  <div className="p-3 bg-white border-t-4 border-blue-400">
    <div className="overflow-hidden image">
      <img
        className="h-auto mx-auto rounded-full w-28"
        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
        alt=""
      />
    </div>
    <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">Jane Doe</h1>
    <h3 className="leading-6 text-gray-600 font-lg text-semibold">
      Currently work at library
    </h3>
    <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
      eligendi dolorum sequi illum qui unde aspernatur non deserunt
    </p>
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
        <span className="ml-auto">Nov 07, 2016</span>
      </li>
    </ul>
  </div>
);
export const Profile = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex">
        <SidebarProfile listMenu={listMenu} />
        <div className="flex mx-auto">
          <div className="w-3/12 mr-3">
            <ProfileCard></ProfileCard>
          </div>
          <ProfileForm></ProfileForm>
        </div>
      </div>
    </div>
  );
};
