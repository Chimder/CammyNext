import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const createCharacter = async (characterData: any) => {
  return prisma.character.create({
    data: characterData,
  });
};

export const getCharacter = async (name: any) => {
  return prisma.character.findUnique({
    where: { name },
  });
};

export const getAllCharacters = async () => {
  return prisma.character.findMany();
};

export const createVideo = async (videoData: any) => {
  return prisma.video.create({
    data: videoData,
  });
};

export const createSpecial = async (specialData: any) => {
  return prisma.special.create({
    data: specialData,
  });
};

export const createSuper = async (superData: any) => {
  return prisma.super.create({
    data: superData,
  });
};

export const createUnique = async (uniqueData: any) => {
  return prisma.unique.create({
    data: uniqueData,
  });
};

export const createThrows = async (throwsData: any) => {
  return prisma.throws.create({
    data: throwsData,
  });
};

export const createCommon = async (commonData: any) => {
  return prisma.common.create({
    data: commonData,
  });
};
