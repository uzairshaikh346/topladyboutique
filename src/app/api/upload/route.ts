import { NextResponse , NextRequest } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  if (typeof file === "string") {
    return NextResponse.json({ error: "Uploaded file is not a Blob" }, { status: 400 });
  }

  const bytes = await (file as Blob).arrayBuffer();
  const buffer = Buffer.from(bytes);

  interface CloudinaryUploadResult {
  secure_url: string;
  [key: string]: unknown;
  }

  const result = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "products" }, (err, res) => {
        if (err) reject(err);
        else resolve(res as CloudinaryUploadResult);
      })
      .end(buffer);
  });

  return NextResponse.json({ url: result.secure_url });
}
