import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import FilterType from "./FilterType.jsx";

const Filters = ({ cols, setCols, filters, setFilters }) => {
  console.log(filters);

  const applyFilters = (e) => {
    // console.log(categoryList);
    console.log(filters);
    e.preventDefault();
  };

  const categories = [
    "Mobile Phone",
    "Laptop",
    "HeadPhones",
    "Tablet",
    "Smart Home",
    "Wearable",
    "Accessories",
    "Storage",
    "Camera",
    "Television",
    "Home Appliance",
  ];

  const brands = [
    "Apple",
    "Samsung",
    "Google",
    "OnePlus",
    "Xiaomi",
    "Dell",
    "HP",
    "Lenovo",
    "Asus",
    "Sony",
    "Bose",
    "JBL",
    "Nothing",
    "Amazon",
    "Logitech",
    "Keychron",
    "SanDisk",
    "Canon",
    "LG",
    "Dyson",
    "Philips",
  ];

  const colors = [
    "Pink",
    "Black",
    "Silver",
    "Blue",
    "Yellow",
    "White",
    "Green",
    "Gray",
    "Transparent",
    "Purple",
    "Graphite",
    "Midnight",
  ];

  const handleCheckboxChange = (filterType, value, checked) => {
    setFilters((prev) => {
      const current = prev[filterType] || [];

      return {
        ...prev,
        [filterType]: checked
          ? [...current, value]
          : current.filter((v) => v !== value),
      };
    });
  };

  return (
    <div className="w-[20%] border my-3 ml-2 rounded-xl p-3 shadow-lg shadow-purple-300/30 bg-white">
      <div className="text-center my-3 ">
        <p>Number of cards per row:</p>
        <Input
          type="number"
          value={cols}
          placeholder="cols"
          min="1"
          max="4"
          className="m-2 h-5 w-15 focus-visible:ring-[1px] focus-visible:border-purple-300 pl-3 pr-0"
          onChange={(e) => setCols(Number(e.target.value))}
        />
      </div>

      <div className="">
        <h2 className="font-bold text-2xl text-center underline text-purple-500 ">
          FILTERS
        </h2>

        <Form>
          <form onSubmit={applyFilters} className="w-2/3 space-y-2 w-full py-3">
            <FilterType
              type="category"
              label="Categories"
              filterData={categories}
              handleCheckboxChange={handleCheckboxChange}
            />
            <FilterType
              type="brand"
              label="Brands"
              filterData={brands}
              handleCheckboxChange={handleCheckboxChange}
            />
            <FilterType
              type="color"
              label="Colors"
              filterData={colors}
              handleCheckboxChange={handleCheckboxChange}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Filters;
