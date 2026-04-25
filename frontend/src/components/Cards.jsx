"use client";

import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent.jsx";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useNavigate } from "react-router-dom";

const Cards = ({ cols, filters }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [productsData, setProductsData] = useState([]);

  const navigate = useNavigate();

  const getProducts = () => {
    fetch("/product")
      .then((res) => res.json())
      .then((json) => setProductsData(json));
  };

  useEffect(() => {
    getProducts();
  }, []);

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
        {visibleItems.map((item) => (
          <CardComponent
            key={item.id}
            item={item}
            cols={cols}
            onClick={() => navigate(`/product/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
