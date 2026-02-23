"use server";

import { cookies } from "next/headers";

export async function verifyDgenPassword(
  password: string
): Promise<{ success: boolean }> {
  const correct = process.env.PROJECT_PASSWORD;

  if (correct && password === correct) {
    const jar = await cookies();
    jar.set("dgen-auth", "1", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/works/dgen-xr",
    });
    return { success: true };
  }

  return { success: false };
}