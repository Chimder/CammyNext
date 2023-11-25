import { prisma } from "../lib/prisma";
import { data } from "./zangief";

export async function addAttacksToDatabase(
  // characterData: any,
  type: string
): Promise<void> {
  let attacks:
    | Array<{
        characterName: string;
        comboName: string;
        img: string;
        energy: string;
        arrows: string[];
        left?: number;
      }>
    | any;

  console.log(data[0], "==========================================");
  if (type === "special") {
    attacks = data[0].special;
  } else if (type === "common") {
    attacks = data[0].common;
  } else if (type === "supel") {
    attacks = data[0].supel;
  } else if (type === "throws") {
    attacks = data[0].throws;
  } else if (type === "unique") {
    attacks = data[0].unique;
  } else if (type === "character") {
    attacks = [data[0]]; // Обертываете в массив, чтобы использовать единый цикл для character
  } else {
    throw new Error("Invalid attack type");
  }

  try {
    if (attacks) {
      for (const attackData of attacks) {
        if (type === "character") {
          await prisma.character.create({
            data: {
              name: attackData.name,
              zoom: attackData.zoom,
              main: attackData.main,
              img: attackData.img,
              imgActive: attackData.imgActive,
              imgNotActive: attackData.imgNotActive,
              describe: attackData.describe,
              hates: attackData.hates,
              likes: attackData.likes,
              height: attackData.height,
              weight: attackData.weight,
              img1: attackData.img1,
              img2: attackData.img2,
              out1: { set: attackData.out1 },
              out2: { set: attackData.out2 },
              video: {
                create: attackData.video.map((v: any) => ({
                  comboName: v.comboName,
                  video: v.video,
                })),
              },
              special: {
                create: attackData.special.map((s: any) => ({
                  comboName: s.comboName,
                  img: s.img,
                  energy: s.energy,
                  arrows: { set: s.arrows },
                  left: s.left,
                })),
              },
              supel: {
                create: attackData.supel.map((su: any) => ({
                  comboName: su.comboName,
                  img: su.img,
                  energy: su.energy,
                  arrows: { set: su.arrows },
                  left: su.left,
                })),
              },
              unique: {
                create: attackData.unique.map((u: any) => ({
                  comboName: u.comboName,
                  img: u.img,
                  energy: u.energy,
                  arrows: { set: u.arrows },
                  left: u.left,
                })),
              },
              throws: {
                create: attackData.throws.map((t: any) => ({
                  comboName: t.comboName,
                  img: t.img,
                  energy: t.energy,
                  arrows: { set: t.arrows },
                  left: t.left,
                })),
              },
              common: {
                create: attackData.common.map((c: any) => ({
                  comboName: c.comboName,
                  img: c.img,
                  energy: c.energy,
                  arrows: { set: c.arrows },
                  left: c.left,
                })),
              },
            },
          });
        } else {
          // Создание записи в других таблицах (Special, Common, и т. д.)
          await (prisma[type] as any).create({
            data: {
              comboName: attackData.comboName,
              img: attackData.img,
              energy: attackData.energy,
              arrows: { set: attackData.arrows },
              left: attackData.left,
              characterName: attackData.characterName,
            },
          });
        }
      }
    }
  } catch (error) {
    console.error("Ошибка при добавлении данных в базу данных:", error);
  } finally {
    await prisma.$disconnect();
  }
}
