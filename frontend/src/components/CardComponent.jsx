"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

// {
//     "id": "p001",
//     "name": "iPhone 15",
//     "category": "Mobile Phone",
//     "brand": "Apple",
//     "price": 79999,
//     "currency": "INR",
//     "rating": 4.6,
//     "reviewsCount": 12450,
//     "inStock": true,
//     "color": "Black",
//     "colorOptions": ["Pink", "Black", "White", "Blue"],
//     "storage": "128GB",
//     "ram": "6GB",
//     "screenSize": 6.1,
//     "battery": "3279mAh",
//     "connectivity": ["5G", "WiFi", "Bluetooth"],
//     "warrantyMonths": 12,
//     "releaseYear": 2024,
//     "tags": ["smartphone", "ios"],
//     "image": "https://example.com/images/iphone-15-black.jpg"
// }

const CardComponent = ({ item, onClick }) => {
  const { name, brand, price, rating, colorOptions, image } = item;

  const [selectedColor, setSelectedColor] = useState("");

  return (
    <Card
      onClick={onClick}
      className="shadow-lg shadow-purple-300/30 bg-white text-center hover:scale-101 transition duration-250"
    >
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <img src={image} alt={name} className=" h-50 rounded-md m-auto" />
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="flex justify-between">
          <span>
            <span className="font-semibold">Brand: </span>
            {brand}
          </span>
          <span>
            <span className="font-semibold">Price: </span>
            {price}
          </span>
        </div>
        <div className="flex items-center justify-center">
          <span className="font-semibold">Rating: </span>
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
            />
          </Stack>
        </div>
        <span>
          <span className="font-semibold">Color: </span>
          <span className="">
            {colorOptions.map((color) => (
              <span key={color} className="">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(color);
                  }}
                  className={`rounded-full cursor-pointer border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              </span>
            ))}
          </span>
        </span>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className=" hover:bg-purple-100 w-full">
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
