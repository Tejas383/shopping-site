import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage.jsx";
import ShopLayout from "./components/ShopLayout.jsx";

const App = () => {
  const [cols, setCols] = useState(3);

  const [filters, setFilters] = useState({});

  return (
    <div className="bg-blue-50 min-h-screen">
      <h1 className="font-bold text-3xl bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300 text-white p-5 text-center">
        SHOPPING APP
      </h1>

      <Routes>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route
          path="/"
          element={
            // #TODO: convert to reusable component
            <ShopLayout
              cols={cols}
              setCols={setCols}
              filters={filters}
              setFilters={setFilters}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
