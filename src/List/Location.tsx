import { listNation } from "../utils/data";

interface SelectionInterface {
  title: string;
}
const Selection = ({ title }: SelectionInterface) => {
  return (
    <div className="flex flex-col my-2">
      <label>{title}</label>

      <select name="location">
        {listNation.map((nation, index) => (
          <option key={index} value={nation}>
            {nation}
          </option>
        ))}
      </select>
    </div>
  );
};
const Location = () => {
  return (
    <div className="flex flex-col w-full p-2 border rounded-lg h-44">
      <Selection title="Nation"></Selection>
    </div>
  );
};

export default Location;
