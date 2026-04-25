import React, { useState, useEffect } from "react";
import Cards from "./components/Cards.jsx";
import Filters from "./components/Filters.jsx";

const App = () => {
  const [cols, setCols] = useState(3);

  // Filters
  // const [filters, setFilters] = useState({
  //   prices: [],
  //   ratings: [],
  //   inStock: null,
  //   storage: [],
  //   ram: [],
  //   screenSize: [],
  //   battery: [],
  //   warrantyMonths: [],
  // });

  const [filters, setFilters] = useState({});

  return (
    <div className="bg-blue-50">
      <h1 className="font-bold text-3xl bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300 text-white p-5 text-center">
        SHOPPING APP
      </h1>
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

export default App;
