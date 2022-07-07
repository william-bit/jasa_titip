import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Search } from "../components/custom/Search";
import { Header } from "../components/Navbar/Header";
import ListView from "../List/ListView";
import Sort from "../List/Sort";
import { getListProductVendor } from "../utils/data";

const Detail = () => {
  let { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
    ["trans", currentPage, id],
    () => getListProductVendor(currentPage, id),
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
    setSearch(value);
  };
  return (
    <div>
      <Header></Header>
      <div className="px-10 mt-4">
        <div className="font-bold">Searching Catalog</div>
        <div className="flex mt-5">
          <div className="w-3/12 pr-10"></div>
          <div className="flex flex-1">
            <div className="flex flex-col w-full ml-10 ">
              <div className="flex justify-center">
                <div className="w-7/12">
                  <Search searchHandle={searchHandle}></Search>
                </div>
              </div>
              <div>
                <Sort></Sort>
                <ListView
                  data={data}
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
  );
};

export default Detail;
