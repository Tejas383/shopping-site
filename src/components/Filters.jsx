import React from "react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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
            <div className="text-center ">
              {/* <Button type="submit" variant="outline" className="">
                Apply
              </Button> */}
            </div>

            <div className="px-4 p-3 border rounded-xl shadow-sm bg-gradient-to-b from-blue-50 to-purple-50">
              <Label htmlFor="categories" className="font-semibold underline">
                Categories
              </Label>
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 pt-2 hover:bg-gray-100"
                >
                  <Input
                    type="checkbox"
                    id={item.toLowerCase().replace(/\s+/g, "-")}
                    className="h-4 w-4"
                    checked={filters.category.includes(item)}
                    onChange={(e) =>
                      handleCheckboxChange("category", item, e.target.checked)
                    }
                  />
                  <Label
                    htmlFor={item.toLowerCase().replace(/\s+/g, "-")}
                    className="text-sm cursor-pointer select-none"
                  >
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Filters;
