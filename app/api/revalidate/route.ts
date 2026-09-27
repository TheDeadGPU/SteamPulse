"use server";

import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");

  // Verify the bearer token matches our CRON_SECRET environment variable.
  // The request sent by Vercel Cron Jobs automatically has the CRON_SECRET in the Authorization header.
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "Unauthorized" }),
      { status: 401, headers: { "Content-Type": "application/json" } },
    );
  }

  // Our Bearer token has been verified, proceed with revalidation.
  revalidateTag("steam-charts-game-list", "max");
  return NextResponse.json({
    revalidated: true,
    message: "Revalidated steam-charts-game-list tag",
    timestamp: new Date().toISOString(),
  });
}
