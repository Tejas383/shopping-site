import React, { useState } from "react";
import Cards from "./components/Cards.jsx";
import Filters from "./components/Filters.jsx";

const App = () => {
  const [cols, setCols] = useState(3);

  // Filters
  // const [filters, setFilters] = useState({
  //   Category: {
  //     "Mobile Phone": false,
  //     Laptop: false,
  //     HeadPhones: false,
  //     Tablet: false,
  //     "Smart Home": false,
  //     Wearable: false,
  //     Accessories: false,
  //     Storage: false,
  //     Camera: false,
  //     Television: false,
  //     "Home Appliance": false,
  //   },
  //   // Brand: {
  //   //   Apple,: false,
  //   //   Samsung,: false,
  //   //   Google,: false,
  //   //   OnePlus,: false,
  //   //   Xiaomi,: false,
  //   //   Dell,: false,
  //   //   HP,: false,
  //   //   Lenovo,: false,
  //   //   Asus,: false,
  //   //   Sony,: false,
  //   //   Bose,: false,
  //   //   JBL,: false,
  //   //   Nothing,: false,
  //   //   Amazon,: false,
  //   //   Logitech,: false,
  //   //   Keychron,: false,
  //   //   SanDisk,: false,
  //   //   Canon,: false,
  //   //   LG,: false,
  //   //   Dyson,: false,
  //   //   Philips,: false,
  //   // },
  //   // // prices: [],
  //   // // ratings: [],
  //   // // inStock: null,
  //   // Colors: {
  //   //   Pink: false,
  //   //   Black: false,
  //   //   Silver: false,
  //   //   Blue: false,
  //   //   Yellow: false,
  //   //   White: false,
  //   //   Green: false,
  //   //   Gray: false,
  //   //   Transparent: false,
  //   //   Purple: false,
  //   //   Graphite: false,
  //   //   Midnight: false,
  //   // },
  //   // // storage: [],
  //   // // ram: [],
  //   // // screenSize: [],
  //   // // battery: [],
  //   // connectivity: {
  //   //   "5G": false,
  //   //   WiFi: false,
  //   //   Bluetooth: false,
  //   //   "USB-C": false,
  //   //   "USB-A": false,
  //   // },
  //   // // warrantyMonths: [],
  //   // "Release Year": {
  //   //   2024: false,
  //   //   2023: false,
  //   //   2022: false,
  //   //   2021: false,
  //   //   2020: false,
  //   // },
  //   // tags: {
  //   // "smartphone": false,
  //   // "ios": false,
  //   // "android": false,
  //   // "flagship": false,
  //   // "camera": false,
  //   // "fast-charge": false,
  //   // "budget": false,
  //   // "ultrabook": false,
  //   // "windows": false,
  //   // "midrange": false,
  //   // "business": false,
  //   // "gaming": false,
  //   // "noise-cancelling": false,
  //   // "premium": false,
  //   // "true-wireless": false,
  //   // "design": false,
  //   // "tablet": false,
  //   // "android-tablet": false,
  //   // "voice-assistant": false,
  //   // "smartwatch": false,
  //   // "mouse": false,
  //   // "keyboard": false,
  //   // "mechanical": false,
  //   // "portable-ssd": false,
  //   // "usb": false,
  //   // "mirrorless": false,
  //   // "vlogging": false,
  //   // "smart-tv": false,
  //   // "oled": false,
  //   // "vacuum": false,
  //   // "kitchen": false
  //   // },
  // });

  const [filters, setFilters] = useState({
    category: [],
    brand: [],
  })

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
