const Selection = () => {
  return (
    <div className="flex flex-col my-2">
      <select name="sorting">
        <option value="recommended">Recommended</option>
        <option value="ranting">Ranting</option>
        <option value="buy">Most Buy</option>
        <option value="view">View</option>
      </select>
    </div>
  );
};

const Sort = () => {
  return (
    <div className="flex items-center mt-2 font-bold">
      <div>Sort by :</div>
      <Selection></Selection>
    </div>
  );
};

export default Sort;
