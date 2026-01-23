import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
//     "storage": "128GB",
//     "ram": "6GB",
//     "screenSize": 6.1,
//     "battery": "3279mAh",
//     "connectivity": ["5G", "WiFi", "Bluetooth"],
//     "warrantyMonths": 12,
//     "releaseYear": 2024,
//     "tags": ["smartphone", "ios"],
//     "image": "https://example.com/images/iphone-15-black.jpg"
//   }

const CardComponent = ({ item, cols }) => {
  // console.log(item)
  const {
    name,
    category,
    brand,
    price,
    rating,
    reviewsCount,
    inStock,
    color,
    storage,
    ram,
    screenSize,
    battery,
    connectivity,
    warrantyMonths,
    releaseYear,
    tags,
    image,
  } = item;

  const numCols = (cols) => {
    switch (cols) {
      case 1:
        return 4;
      case 2:
        return 2;
      case 3:
        return 2;
      case 4:
        return 1;
    }
  }

  return (
    <Card className="shadow-lg shadow-purple-300/30 bg-white text-center ">
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <img src={image} alt={name} className=" h-50 rounded-md m-auto" />
      </CardHeader>
      <CardContent>
        <p
          className="grid"
          style={{ gridTemplateColumns: `repeat(${numCols(cols)}, minmax(0, 1fr))` }}
        >
          <span>
            <span className="font-semibold">Brand:</span> {brand}
          </span>
          <span>
            <span className="font-semibold">Price:</span> {price}
          </span>
          <span>
            <span className="font-semibold">Rating:</span> {rating}
          </span>
          <span>
            <span className="font-semibold">Color:</span> {color}
          </span>
        </p>
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
