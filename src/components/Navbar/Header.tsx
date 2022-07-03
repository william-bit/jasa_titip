import { Popover } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { IProfile, useStore } from "../../store/store";
import { Link } from "../Links";

export const Header = () => {
  const userProfile = useStore((state) => state.userProfile);
  console.log(userProfile);
  const setUserProfile = useStore((state) => state.setUserProfile);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("hai");
    setUserProfile({} as IProfile);
    navigate("/");
  };

  return (
    <div className="sticky top-0 flex justify-between px-8 py-4 text-white bg-red-600">
      <Link href="/">
        <div className="text-2xl font-extrabold cursor-pointer">TipBel.com</div>
      </Link>
      <div className="flex items-center space-x-8 text-lg font-semibold">
        <Link href="/">Home</Link>
        {!userProfile.name ? (
          <>
            <Link href="/auth">Sign In</Link>
          </>
        ) : (
          <>
            <Link href="/profile">{userProfile.name}</Link>
            {userProfile.role == 1 && (
              <Link href="/admin/product">Traveler Panel</Link>
            )}
            {userProfile.role == 0 && <Link href="/shop">Traveler Page</Link>}
            <span className="cursor-pointer" onClick={handleLogout}>
              LogOut
            </span>
          </>
        )}
      </div>
    </div>
  );
};
