import { Link } from "../Links";

export const Header = () => {
  return (
    <div className="sticky top-0 flex justify-between px-8 py-4 text-white bg-red-600">
      <Link href="/">
        <div className="text-2xl font-extrabold cursor-pointer">TipBel.com</div>
      </Link>
      <div className="flex items-center space-x-8 text-lg font-semibold">
        <Link href="/register">Register</Link>
        <Link href="/shop">List Vendor</Link>
        <Link href="/auth">Sign In</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </div>
  );
};
