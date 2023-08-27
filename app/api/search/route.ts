import { db } from "@/lib/db";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q");

  if (!q) return new Response("Invalid request", { status: 400 });

  const results = await db.product.findMany({
    where: {
      name: {
        contains: q,
        mode: "insensitive",
      },
    },
  });

  return new Response(JSON.stringify(results));
}
