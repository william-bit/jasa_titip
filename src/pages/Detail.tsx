import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Search } from "../components/custom/Search";
import { Link } from "../components/Links";
import { Header } from "../components/Navbar/Header";
import ListView from "../List/ListView";
import Sort from "../List/Sort";
import { getListProductVendor } from "../utils/data";

const Detail = () => {
  let { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ["trans", currentPage, id, search],
    () => getListProductVendor(currentPage, id, search),
    { keepPreviousData: true }
  );
  const config: Array<{ title: string; key: string; type?: string }> = [
    { title: "Photo", key: "photo", type: "image" },
    { title: "Name", key: "name" },
    { title: "Date", key: "created_at" },
    { title: "Price", key: "price" },
    { title: "Unit", key: "unit" },
    { title: "Location", key: "location" },
    { title: "Description", key: "description" },
    { title: "Status", key: "status", type: "status" },
  ];
  console.log(data);
  const handleChange = (value: number) => {
    setCurrentPage(value);
  };
  const searchHandle = (value: string) => {
    console.log(value);
    setSearch(value);
  };
  return (
    <div>
      <Header></Header>
      <div className="px-10 mt-4">
        <div className="font-bold">Searching Catalog</div>
        <div className="flex mt-5">
          <div className="flex flex-1">
            <div className="flex flex-col w-full ml-10 ">
              <div className="flex justify-center">
                <div className="w-7/12">
                  <Search searchHandle={searchHandle}></Search>
                </div>
              </div>
              <div>
                <div className="flex justify-between mt-2 px-52">
                  <Sort></Sort>
                  <Link
                    href={`/request/${id}`}
                    className="flex items-center justify-center w-40 px-2 py-1 mx-5 mb-4 text-white bg-black border border-gray-700 hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
                  >
                    Request Product
                  </Link>
                </div>
                <div className="flex justify-center w-full">
                  <ListView
                    data={data}
                    toCheckout={true}
                    error={error}
                    isLoading={isLoading}
                    isError={isError}
                    isFetching={isFetching}
                  ></ListView>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
