import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const clickHandler = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 text-center shadow-lg p-4">
      <div key={data?.title}>
        <div
          onClick={clickHandler}
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>▼</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
