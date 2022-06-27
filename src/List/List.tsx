import { Search } from "../custom/Search";
import CheckInView from "./CheckInView";
import ListView from "./ListView";
import Location from "./Location";
import Sort from "./Sort";

const List = () => {
  return (
    <div className="px-10 mt-4">
      <div className="font-bold">Searching Vendor</div>
      <div className="flex mt-5">
        <div className="w-3/12 pr-10">
          <Location></Location>
          <CheckInView></CheckInView>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col w-full ml-10 ">
            <div className="flex justify-center">
              <div className="w-7/12">
                <Search></Search>
              </div>
            </div>
            <div>
              <Sort></Sort>
              <ListView></ListView>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
