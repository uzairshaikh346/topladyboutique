import { connectDB } from "../../../lib/connection";
import Product from "../../../model/product_schema";
import { NextRequest , NextResponse } from "next/server";

// ✅ GET - all products
export async function GET() {
  await connectDB();
  const products = await Product.find();
  return Response.json(products);
}

// ✅ POST - add new product
export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();

  const newProduct = await Product.create(body);
  return NextResponse.json(newProduct);
}
