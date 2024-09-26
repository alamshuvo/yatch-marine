import React, { useEffect, useState } from "react";
import FilterTop from "../components/FilterTop";
import { PiColumnsDuotone, PiTextColumnsDuotone } from "react-icons/pi";
import FilterData from "../components/FilterData";

const Filter = () => {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [isOneColumn, setIsOneColumn] = useState(false);

  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("error", error));
  }, []);
  console.log(data);

  useEffect(() => {
    const filteredData = data?.filter((item) =>
      filter ? item.category === filter : true
    );

    setFilteredData(filteredData);
  }, [data, filter]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "lowToHigh" ? "highToLow" : "lowToHigh");
  };

  const sortedYachtsData = [...filteredData].sort((a, b) =>
    sortOrder === "lowToHigh" ? a.price - b.price : b.price - a.price
  );
  //   console.log(sortedYachtsData);
  const toggleLayout = () => {
    setIsOneColumn(!isOneColumn);
  };

  return (
    <div>
      <div>
        <FilterTop></FilterTop>
      </div>
      {/* filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 p-4 md:p-10 mt-24 bg-hover">
        <div className="flex justify-between items-center gap-2 container  mx-auto">
          <p className="text-xl font-semibold text-white">Filter By Category</p>
          <select
            onChange={(e) => setFilter(e.target.value)}
            name="categories"
            value={filter}
            className="px-4 py-3.5 bg-[#dee1e4] text-black md:w-2/4 m-auto text-sm border-2 border-gray-100 shadow-current  shadow-xl w-full"
          >
            <option value="">All Categories</option>
            <option value="Luxury">"Luxury"</option>
            <option value="Fishing">"Fishing"</option>
            <option value="Sport">"Sport"</option>
          </select>
        </div>

        {/* filter by price */}
        <div>
          <button
            className="text-2xl p-2 rounded-lg bg-current text-white font-semibold  "
            onClick={toggleSortOrder}
          >
            Sort by Price:{" "}
            {sortOrder === "lowToHigh" ? "Low to High" : "High to Low"}
          </button>
        </div>

        <div className="flex justify-between gap-5 items-center">
          <button>
          </button>
          <button></button>
          <button onClick={toggleLayout}>
            {isOneColumn ? (
              <PiTextColumnsDuotone className="text-4xl text-white" />
            ) : (
                <PiColumnsDuotone className="text-4xl text-white" />
            )}
          </button>
        </div>
      </div>
      {/* render filter data */}
      <div>
        <FilterData
          filteredData={filteredData}
          sortedYachtsData={sortedYachtsData}
          sortOrder={sortOrder}
          isOneColumn={isOneColumn}
        ></FilterData>
      </div>
    </div>
  );
};

export default Filter;
