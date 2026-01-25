import React from "react";
// import { Switch } from "@/components/ui/switch";
// import { Label } from "@/components/ui/label";
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

  // const [filters, setFilters] = useState({
  //   categories: categories: {
  //     "Mobile Phone": false,
  //     "Laptop": false,
  //     "HeadPhones": false,
  //     "Tablet": false,
  //     "Smart Home": false,
  //     "Wearable": false,
  //     "Accessories": false,
  //     "Storage": false,
  //     "Camera": false,
  //     "Television": false,
  //     "Home Appliance": false,
  //   },
  //   brands: [],
  //   prices: [],
  //   ratings: [],
  //   inStock: null,
  //   colors: [],
  //   storage: [],
  //   ram: [],
  //   screenSize: [],
  //   battery: [],
  //   connectivity: [],
  //   warrantyMonths: [],
  //   releaseYears: [],
  //   tags: [],
  // });

  const applyFilters = () => {
    // console.log(categoryList);
  };

  return (
    <div className="w-[20%] border my-3 ml-2 rounded-xl p-3 shadow-lg shadow-purple-300/30 bg-white">
      <div className="text-center my-3 ">
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

      <div className="">
        <h2 className="font-bold text-2xl text-center underline text-purple-500 ">
          FILTERS
        </h2>

        <Form>
          <form
            onSubmit={applyFilters}
            className="w-2/3 space-y-2 w-full py-3"
          >
            <div className="text-center ">
              <Button type="submit" variant="outline" className="">
                Apply
              </Button>
            </div>

            {Object.entries(filters).map(([filterType, values]) => (
              <div
                key={filterType}
                className="px-4 p-3 border rounded-xl shadow-sm bg-gradient-to-b from-blue-50 to-purple-50"
              >
                <Label htmlFor={filterType} className="font-semibold underline">
                  {filterType}
                </Label>
                <div>
                  {Object.entries(values).sort().map(([item, pres]) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 pt-2 hover:bg-gray-100"
                    >
                      <Input
                        type="checkbox"
                        id={item.toLowerCase().replace(/\s+/g, "-")}
                        className="h-4 w-4"
                        // checked={pres}
                        onChange={(e) => {
                            setFilters((prev) => ({
                                ...prev,
                                [filterType]: {
                                    ...values,
                                    [item]: e.target.checked,
                                },
                            }))
                        }}
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
              </div>
            ))}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Filters;
