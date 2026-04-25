import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FilterType = ({type, label, filterData, handleCheckboxChange}) => {
  return (
    <div className="px-4 p-3 border rounded-xl shadow-sm bg-gradient-to-b from-blue-50 to-purple-50">
      <Label htmlFor="categories" className="font-semibold underline">
        {label}
      </Label>
      {filterData.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 pt-2 hover:bg-gray-100"
        >
          <Input
            type="checkbox"
            id={item.toLowerCase().replace(/\s+/g, "-")}
            className="h-4 w-4"
            onChange={(e) =>
              handleCheckboxChange(type, item, e.target.checked)
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
  );
};

export default FilterType;
