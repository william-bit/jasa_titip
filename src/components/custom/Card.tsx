import { ShoppingCartIcon } from "@heroicons/react/outline";
import { ReactNode } from "react";
import { useStore } from "../../store/store";
import { Link } from "../Links";

interface ICard {
  title: string;
  description: string;
  detail: string;
  src: string;
  price: string;
  id: number;
  toCheckout?: boolean;
}
const Guard = ({
  children,
  id,
  toCheckout,
}: {
  children: ReactNode;
  id: number;
  toCheckout?: boolean;
}) => {
  const userProfile = useStore((state) => state.userProfile);
  return !userProfile.name ? (
    <>
      <Link
        href="/auth"
        className="flex items-center justify-center w-10 h-10 p-2 mx-5 mb-4 text-white bg-black border border-gray-700 rounded-full hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
      >
        {children}
      </Link>
    </>
  ) : (
    <Link
      href={`/${toCheckout ? "checkout" : "detail"}/${id}`}
      className="flex items-center justify-center w-10 h-10 p-2 mx-5 mb-4 text-white bg-black border border-gray-700 rounded-full hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
    >
      {children}
    </Link>
  );
};
const Card = ({
  id,
  title,
  description,
  detail,
  src,
  price,
  toCheckout,
}: ICard) => {
  return (
    <div className="relative flex flex-row-reverse w-full p-2 my-2 border-2 border-gray-300 rounded-md shrink-0 h-44">
      {src && (
        <img
          src={src}
          alt="Picture of the author"
          width="180px"
          height="300px"
          className="rounded-md"
        />
      )}
      {!src && (
        <div className="flex w-full h-full overflow-hidden image">
          <div className="flex items-center justify-center mx-auto bg-white ">
            <div className="font-bold capitalize text-9xl text-black-500">
              {title.charAt(0)}
            </div>
          </div>
        </div>
      )}
      <div className="w-full mx-3 text-left">
        <div>{title}</div>
        <div className="text-xs text-blue-500">{description}</div>
        <div className="text-xs text-justify">{detail}</div>
      </div>
      <div className="absolute flex items-end justify-start w-full h-full">
        <Guard id={id} toCheckout={toCheckout}>
          <ShoppingCartIcon className="h-5" />
        </Guard>
      </div>
    </div>
  );
};

export default Card;
