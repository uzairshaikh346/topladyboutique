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
    <div className="max-w-5xl mx-auto p-6 text-[#2C0F12]">
      {products.length > 0 && (
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group cursor-pointer"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-[#2C0F12] mb-2">{p.name}</h2>
              <p className="text-[#6B1E23] font-medium text-lg">${p.price}</p>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}