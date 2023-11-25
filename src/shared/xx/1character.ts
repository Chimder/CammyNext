import { prisma } from "../lib/prisma";
import { data } from "./AKI";

export async function addCharacterToDatabase(): Promise<void> {
  const dataa = data[0] as any;

  try {
    await prisma.character.upsert({
      where: {
        name: dataa.name,
      },
      update: {
        zoom: dataa.zoom,
        main: dataa.main,
        img: dataa.img,
        imgActive: dataa.imgActive,
        imgNotActive: dataa.imgNotActive,
        describe: dataa.describe,
        hates: dataa.hates,
        likes: dataa.likes,
        height: dataa.height,
        weight: dataa.weight,
        img1: dataa.img1,
        img2: dataa.img2,
        out1: { set: dataa.out1 },
        out2: { set: dataa.out2 },
      },
      create: {
        name: dataa.name,
        zoom: dataa.zoom,
        main: dataa.main,
        img: dataa.img,
        imgActive: dataa.imgActive,
        imgNotActive: dataa.imgNotActive,
        describe: dataa.describe,
        hates: dataa.hates,
        likes: dataa.likes,
        height: dataa.height,
        weight: dataa.weight,
        img1: dataa.img1,
        img2: dataa.img2,
        out1: { set: dataa.out1 },
        out2: { set: dataa.out2 },
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

// Вызовите функцию для добавления персонажа в базу данных
addCharacterToDatabase();
