"use client";
import { useState } from "react";

export default function AddProductPage() {
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({ name: "", price: "", desc: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Upload image to Cloudinary
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    } else {
      alert("❌ Please select a file.");
      return;
    }

    const uploadRes = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const { url } = await uploadRes.json();

    // 2. Save product in MongoDB with image url
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, price: Number(form.price), image: url }),
    });

    if (res.ok) {
      alert("✅ Product Added!");
      setForm({ name: "", price: "", desc: "" });
      setFile(null);
    } else {
      alert("❌ Error Adding Product");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files;
            if (files && files[0]) {
              setFile(files[0]);
            } else {
              setFile(null);
            }
          }}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="desc"
          placeholder="Description"
          value={form.desc}
          onChange={handleTextareaChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
