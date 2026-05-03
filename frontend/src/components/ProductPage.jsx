import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./ui/button";

// add validation if product not found, display msg, using http status

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/product/${id}`);
        const data = await res.json();
        if (res.status === 404) setMessage("Product not found");
        else setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleColorClick = (e, color) => {
    e.stopPropagation();
    setSelectedColor(color);
  };

  if (!product) return <div className="bg-red-200">{message}</div>;

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-lg">
        <div className="grid justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm rounded-lg"
          />

          <Button className="mt-4 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
            Add to Cart
          </Button>
        </div>

        {/* 📄 Details */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <span className="text-xl text-blue-600 font-semibold">
            ₹{product.price}
          </span>

          <span className="text-yellow-500 font-medium">
            ⭐ {product.rating} ({product.reviewsCount} reviews)
          </span>

          <span className={product.inStock ? "text-green-600" : "text-red-500"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>

          <div className="flex flex-col mt-3 text-gray-700">
            <span>
              <strong>Brand:</strong> {product.brand}
            </span>
            <span>
              <strong>Category:</strong> {product.category}
            </span>
            <span>
              <strong>RAM:</strong> {product.ram}
            </span>
            <span>
              <strong>Storage:</strong> {product.storage}
            </span>
            <span>
              <strong>Battery:</strong> {product.battery}
            </span>
            <span>
              <strong>Screen:</strong> {product.screenSize}"
            </span>
            <span>
              <strong>Warranty:</strong> {product.warrantyMonths} months
            </span>
            <span>
              <strong>Release Year:</strong> {product.releaseYear}
            </span>
          </div>

          <span className="">
            <span className="text-gray-700 font-bold">Color:</span>
            <br />
            {product.colorOptions.map((color) => (
              <span key={color} className="">
                <Button
                  onClick={(e) => {
                    // #TODO convert inline fn to internal functions
                    handleColorClick(e, color);
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

          <div className="mt-6 ">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Product Highlights:
            </h3>
            <ul className="list-disc pl-5 text-gray-600">
              {product.connectivity?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
              {product.tags?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
