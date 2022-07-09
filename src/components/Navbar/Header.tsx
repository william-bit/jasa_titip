import { Popover } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { IProfile, useStore } from "../../store/store";
import { Link } from "../Links";

export const Header = () => {
  const userProfile = useStore((state) => state.userProfile);
  console.log(userProfile);
  return (
    <div className="sticky top-0 z-10 flex justify-between px-8 py-4 text-white bg-red-600">
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
            {userProfile.role == 1 && (
              <Link href="/admin/product">Traveler Panel</Link>
            )}
            {userProfile.role == 0 && <Link href="/shop">Traveler Page</Link>}
            <Link href="/profile">
              <div className="overflow-hidden image">
                <div className="flex items-center justify-center w-10 h-10 mx-auto bg-white border-2 rounded-full">
                  <div className="text-2xl font-bold text-red-500 capitalize">
                    {userProfile.name.charAt(0)}
                  </div>
                </div>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
