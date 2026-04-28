import React from "react";
import Cards from "./Cards.jsx";
import Filters from "./Filters.jsx";

const ShopLayout = ({ cols, setCols, filters, setFilters }) => {
  return (
    <div>
      <div className="flex">
        <Filters
          cols={cols}
          setCols={setCols}
          filters={filters}
          setFilters={setFilters}
        />
        <Cards cols={cols} filters={filters} />
      </div>
    </div>
  );
};

export default ShopLayout;
