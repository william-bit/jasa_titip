import { HomeDataCard, ICard } from "../../utils/data";

export const Card = (props: ICard) => {
  return (
    <div className="flex flex-col w-full h-full p-2 mt-2 border-2 border-gray-300 rounded-md">
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
      </div>
    </div>
  );
};
export const Content = () => {
  return (
    <div className="flex justify-center">
      <div className="grid w-1/2 grid-cols-2 gap-4 mt-4 justify-items-center">
        {HomeDataCard.map((card, index) => (
          <Card {...card}></Card>
        ))}
      </div>
    </div>
  );
};
