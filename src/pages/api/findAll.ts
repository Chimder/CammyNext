import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/shared/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const character = await prisma.character
      .findMany
      //   {
      //   include: {
      //     video: true,
      //     special: true,
      //     common: true,
      //     supel: true,
      //     throws: true,
      //     unique: true,
      //   },
      // }
      ();

    res.status(200).json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
