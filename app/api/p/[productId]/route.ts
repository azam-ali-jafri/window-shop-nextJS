import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const productId = req.url.slice(req.url.lastIndexOf("/") + 1);

    const product = await db.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) throw NextResponse.json({ error: "Product not found" }, { status: 400 });

    return NextResponse.json(product);
  } catch (error) {
    console.log("GET POST ERROR: ", error);
    return NextResponse.json(error);
  }
}
