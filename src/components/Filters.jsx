import React from "react";
// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Filters = ({ cols, setCols }) => {
  return (
    <div className="w-[20%] border my-3 ml-2 rounded-xl p-3 shadow-lg shadow-purple-300/30 bg-white">
      <h2 className="font-bold text-2xl text-center underline text-purple-500 ">
        FILTERS
      </h2>
      <div className="text-center my-3 mx-3">
        {/* <br /> */}
        {/* <Label htmlFor="cards_num">Number of cards per row: </Label> */}
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
        {/* <Switch id="cards_num" /> */}
      </div>
    </div>
  );
};

export default Filters;
