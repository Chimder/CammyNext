import { NextApiRequest, NextApiResponse } from "next";
import { addAttacksToDatabase } from "@/shared/xx/test";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Ваш JSON-объект с данными персонажа и специальными атаками

    await addAttacksToDatabase("character");
    await addAttacksToDatabase("special");
    await addAttacksToDatabase("common");
    await addAttacksToDatabase("supel");
    await addAttacksToDatabase("throws");
    await addAttacksToDatabase("unique");

    res
      .status(200)
      .json({ message: "Данные успешно добавлены в базу данных." });
  } catch (error) {
    console.error("Ошибка при обработке API-запроса:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
}
