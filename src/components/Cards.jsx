"use client";

import React, { useState, useEffect } from "react";
import productsData from "../data/products.json";
import CardComponent from "./CardComponent.jsx";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { AnimatePresence, motion } from "framer-motion";

const Cards = ({ cols, filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [filters]);

  // const filteredData = productsData.filter((product) => {
  //   const filterTypes = Object.keys(filters);

  //   for (let filterType of filterTypes) {
  //     const filterObj = filters[filterType];
  //     const objectKeys = Object.keys(filterObj);

  //     for (let objectKey of objectKeys) {
  //       if (filterObj[objectKey] === true) {
  //         if (product[filterType] !== objectKey) {
  //           return false;
  //         }
  //       }
  //     }
  //   }

  //   return true;
  // });

  // filters = {
  //   category: ["mobilephone", "accessories", "tv"]
  // }
  // product = {
  //   "id": "p001",
  //   "name": "iPhone 15",
  //   "category": "Mobile Phone",
  //   "brand": "Apple",
  //   "price": 79999,
  //   "currency": "INR",
  //   "rating": 4.6,
  //   "reviewsCount": 12450,
  //   "inStock": true,
  //   "color": "Pink",
  //   "colorOptions": ["Pink", "Black", "White", "Blue"],
  //   "storage": "128GB",
  //   "ram": "6GB",
  //   "screenSize": 6.1,
  //   "battery": "3279mAh",
  //   "connectivity": ["5G", "WiFi", "Bluetooth"],
  //   "warrantyMonths": 12,
  //   "releaseYear": 2024,
  //   "tags": ["smartphone", "ios"],
  //   "image": "https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UF1000,1000_QL80_.jpg"
  // },

  const filteredData = productsData.filter((product) => {
    for (let filterType in filters) {
      // filterType = category
      const filterValues = filters[filterType];
      if (filterValues.length === 0) continue;
      const productValue = product[filterType]?.toString().toLowerCase();
      const matches = filterValues.some(
        (val) => val.toLowerCase() === productValue,
      );
      // for (let type in filterType) { // type = mobilephone
      //   product[filterType] === type
      // }
      if (!matches) return false;
    }
    return true;
  });

  const totalItems = filteredData.length;
  // const totalItems = productsData.length;
  const itemsPerPage = 10;

  const numberOfPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // filters = {
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
  // }

  const visibleItems = filteredData.slice(startIndex, endIndex);
  // const visibleItems = productsData.slice(startIndex, endIndex);

  const zoomCard = (item) => {
    console.log(item.id);
    setSelectedCard(item);
  };

  return (
    <div className="w-full">
      {/* Pagination */}
      <Pagination className="mt-3">
        <PaginationContent className="">
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="hover:bg-gray-200 hover:border-gray-400 hover:border"
            />
          </PaginationItem>

          {Array.from({ length: numberOfPages }).map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={currentPage === i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className="hover:bg-gray-200 hover:border-gray-400 hover:border"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, numberOfPages))
              }
              className="hover:bg-gray-200 hover:border-gray-400 hover:border"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div
        className="grid p-3 gap-3 w-full"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {visibleItems.map((item, index) => (
          <CardComponent
            key={index}
            item={item}
            cols={cols}
            onClick={() => zoomCard(item)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg max-w-4xl w-full"
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => setSelectedCard(null)}
              >
                Close
              </button>
              <CardComponent item={selectedCard} cols={1} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Cards;
