import { useState } from "react";
import { useQuery } from "react-query";
import { Search } from "../components/custom/Search";
import { getListVendor } from "../utils/data";
import CheckInView from "./CheckInView";
import ListView from "./ListView";
import Location from "./Location";
import Sort from "./Sort";

const List = () => {
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
    <div className="px-10 mt-4">
      <div className="font-bold">Searching Traveler</div>
      <div className="flex mt-5">
        <div className="w-3/12 pr-10">
          <Location></Location>
          <CheckInView></CheckInView>
        </div>
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
  );
};

export default List;
