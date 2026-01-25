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

const Cards = ({ cols, filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const filteredData = productsData.filter((product) => {
    const filterTypes = Object.keys(filters);

    for (let filterType of filterTypes) {
      const filterObj = filters[filterType];
      const objectKeys = Object.keys(filterObj);

      for (let objectKey of objectKeys) {
        if (filterObj[objectKey] === true) {
          if (product[filterType] !== objectKey) {
            return false;
          }
        }
      }
    }

    return true;
  });

  const totalItems = filteredData.length;
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
          <CardComponent key={index} item={item} cols={cols} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
