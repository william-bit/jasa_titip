import { ShoppingCartIcon } from "@heroicons/react/outline";
import { ReactNode, useState } from "react";
import { useQuery } from "react-query";
import { useStore } from "../../store/store";
import { getListVendor, HomeDataCard, ICard } from "../../utils/data";
import { Link } from "../Links";
import CardCustom from "../../components/custom/Card";

const Guard = ({ children, id }: { children: ReactNode; id: number }) => {
  const userProfile = useStore((state) => state.userProfile);
  return !userProfile.name ? (
    <>
      <Link
        href="/auth"
        className="flex items-center justify-center w-10 h-10 p-2 mb-6 text-white bg-black border border-gray-700 mx-9 hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
      >
        {children}
      </Link>
    </>
  ) : (
    <Link
      href={`/checkout/${id}`}
      className="flex items-center justify-center w-10 h-10 p-2 mb-6 text-white bg-black border border-gray-700 mx-9 hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
    >
      {children}
    </Link>
  );
};

export const Card = (props: ICard) => {
  return (
    <div className="relative flex flex-col w-full h-full p-2 mt-2 border-2 border-gray-300 rounded-md">
      <div className="flex ml-3">
        <img
          className="w-32 h-32 mr-3 rounded-lg h-22"
          src={props.src}
          alt="Picture of the author "
        />
        <div>
          <div>{props.title}</div>
          <div className="text-xs text-blue-500">{props.origin}</div>
          <div className="text-xs">{props.description}</div>
        </div>
        <div className="absolute flex items-end justify-end w-full h-full">
          <Guard id={1}>
            <div>
              <ShoppingCartIcon className="h-5" />
            </div>
          </Guard>
        </div>
      </div>
    </div>
  );
};

export const CardSection = ({
  title,
  data,
}: {
  title: string;
  data: ICard[];
}) => (
  <>
    <div className="mt-4 text-lg font-bold">{title}</div>
    <div className="flex ">
      <div className="grid w-full grid-cols-3 gap-4 justify-items-center">
        {data.map((card, index) => (
          <Card key={index} {...card}></Card>
        ))}
      </div>
    </div>
  </>
);

export const Content = () => {
  const [search, setSearch] = useState("");

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ["vendor", search],
    () => getListVendor(search)
  );
  console.log(data);
  const searchHandle = (value: string) => {
    setSearch(value);
  };
  return (
    <div className="flex justify-center">
      <div className="w-7/12 mt-5">
        <CardSection title="Catalog" data={HomeDataCard}></CardSection>
        <div className="mt-4 text-lg font-bold">Traveler</div>
        <div className="grid w-full grid-cols-3 gap-4 justify-items-center">
          {data?.data.resource.data.map((row: any, index: number) => (
            <CardCustom
              id={row.id}
              src={row.photo}
              title={row.name}
              price={row.price}
              description={row.vendor?.address}
              detail={row.description}
            ></CardCustom>
          ))}
        </div>
      </div>
    </div>
  );
};
