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

const Cards = ({ cols }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = productsData.length;
  const itemsPerPage = 10;

  const numberOfPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = productsData.slice(startIndex, endIndex);

  // console.log(cols);

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
        className="grid  p-3 gap-3 w-full"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {visibleItems.map((item, index) => (
          <CardComponent key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
