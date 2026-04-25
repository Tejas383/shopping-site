"use client";

import React, { useState } from "react";
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
    // filters = {
    //   category: ["mobilephone", "accessories", "tv"],
    //   brand: ["apple", "samsung", "lg"],
    //   connectivity: ["wifi", "bluetooth"],
    // }

    for (let filterType in filters) {
      // filterType: string
      // = "category"

      const filterValues = filters[filterType];
      // array
      // = ["mobilephone", "accessories", "tv"]

      // if no filters of that particular filterType exist
      if (filterValues.length === 0) continue;

      let productField = product[filterType];
      // = product["category"]
      // = "Mobile Phone"

      let matches = false;

      if (Array.isArray(productField)) {
        // productField is an array
        // eg:
        // productField = ["5G", "WiFi", "Bluetooth"]

        matches = filterValues.some((val) =>
          productField.some((pVal) => pVal.toLowerCase() === val.toLowerCase()),
        );
      } else {
        // productField is a single value
        // eg:
        // productField = "Mobile Phone"

        matches = filterValues.some(
          (val) => val.toLowerCase() === productField?.toString().toLowerCase(),
        );
      }

      if (!matches) return false;
    }

    return true;
  });

  const totalItems = filteredData.length;
  const itemsPerPage = 10;

  const numberOfPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = filteredData.slice(startIndex, endIndex);

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
