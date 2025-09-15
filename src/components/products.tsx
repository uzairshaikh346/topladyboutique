"use client";
import { useEffect, useState } from "react";

type Product = {
  _id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="border rounded-lg shadow p-4 flex flex-col items-center"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-40 h-40 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600">${p.price}</p>
            <p className="text-sm mt-2 text-center">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
