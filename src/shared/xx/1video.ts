import { prisma } from "../lib/prisma";
import { data } from "./zangief";

const videos = [
  // ... ваш массив видео
];

export async function createVideosInDatabase(): Promise<void> {
  try {
    for (const video of data[0].video) {
      // Используйте Prisma для создания записей в базе данных
      await prisma.video.create({
        data: {
          comboName: video.comboName,
          video: video.video,
          characterName: video.characterName, // Привязка к персонажу по имени
        },
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    // Обязательно отключитесь от базы данных после завершения операции
    await prisma.$disconnect();
  }
}

// Вызовите функцию для создания видео в базе данных
createVideosInDatabase();
