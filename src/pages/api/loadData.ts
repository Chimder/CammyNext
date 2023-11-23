import { NextApiRequest, NextApiResponse } from "next";
import charactersData from "@/shared/data.json";
import {
  createCharacter,
  createVideo,
  createSpecial,
  createSuper,
  createUnique,
  createThrows,
  createCommon,
} from "@/shared/lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    for (const characterData of charactersData) {
      const {
        video,
        special,
        superMove,
        unique,
        throws,
        common,
        ...character
      } = characterData;

      const createdCharacter = await createCharacter(character);

      if (video) {
        await createVideo({ ...video, characterName: createdCharacter.name });
      }

      if (special) {
        await createSpecial({
          ...special,
          characterName: createdCharacter.name,
        });
      }

      if (superMove) {
        for (const superMoves of superMove) {
          await createSuper({
            ...superMoves,
            characterName: createdCharacter.name,
          });
        }
      }

      if (unique) {
        for (const uniqueMove of unique) {
          await createUnique({
            ...uniqueMove,
            characterName: createdCharacter.name,
          });
        }
      }

      if (throws) {
        for (const throwMove of throws) {
          await createThrows({
            ...throwMove,
            characterName: createdCharacter.name,
          });
        }
      }

      if (common) {
        for (const commonMove of common) {
          await createCommon({
            ...commonMove,
            characterName: createdCharacter.name,
          });
        }
      }
    }

    res.status(200).json({ message: "Data loaded successfully" });
  } catch (error) {
    console.error("Error loading data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
