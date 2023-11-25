import { NextApiRequest, NextApiResponse } from "next";
import { addCharacterToDatabase } from "@/shared/xx/1character";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await addCharacterToDatabase();

    res
      .status(200)
      .json({ message: "Данные успешно добавлены в базу данных." });
  } catch (error) {
    console.error("Ошибка при обработке API-запроса:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
}
