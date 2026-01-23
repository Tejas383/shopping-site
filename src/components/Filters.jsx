import React from "react";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const Filters = () => {
  return (
    <div className="w-[20%] border my-3 ml-2 rounded-xl p-3 shadow-lg shadow-purple-300/30 bg-white">
      <h2 className="font-bold text-2xl text-center underline text-purple-500 ">
        FILTERS
      </h2>
      <div className="text-center">
        Number of cards per row:
        <br />
        {/* <Switch className="bg-pink-300" /> */}
        <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </div>
  );
};

export default Filters;
