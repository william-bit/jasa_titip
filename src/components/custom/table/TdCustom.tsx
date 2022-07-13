export const TdCustom = ({
  type,
  value,
  setting,
}: {
  type: string | undefined;
  value: any;
  setting: any;
}) => {
  if (type == "image") {
    return (
      <div className="flex items-center">
        <div className="flex-shrink-0 w-32 h-32">
          <img className="w-full h-full" src={value} alt="" />
        </div>
      </div>
    );
  }
  if (type == "status") {
    let colorSetting = setting?.status[value]?.color;
    let color = "bg-green-200";
    if (colorSetting == "red") {
      color = "bg-red-200";
    }
    if (colorSetting == "blue") {
      color = "bg-blue-200";
    }
    return (
      <span className="relative inline-block px-3 py-1 font-semibold leading-tight ">
        <span
          aria-hidden
          className={`absolute inset-0 ${color} rounded-full opacity-50`}
        ></span>
        <span className="relative">{setting?.status[value]?.label}</span>
      </span>
    );
  }
  return <p className="text-gray-900 whitespace-no-wrap">{value}</p>;
};
