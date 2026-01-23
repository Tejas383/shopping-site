import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

const CardComponent = ({ item }) => {
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

  return (
    <Card className="shadow-lg shadow-purple-300/30 bg-white">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
