import axios from "axios";

const URL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosFetch = axios.create({
  baseURL: URL,
});

export type Combo = {
  arrows: string[];
  comboName: string;
  characterName?: string;
  energy: string;
  img: string;
  _id?: string;
};
type Video = {
  comboName?: string;
  video?: string;
  _id?: string;
};
export type CharactersTypes = {
  describe: string;
  hates: string;
  height: string;
  img: string;
  img1: string;
  img2: string;
  imgActive: string;
  imgNotActive: string;
  likes: string;
  name: string;
  out1: string[];
  out2: string[];
  special: Combo[];
  supel: Combo[];
  throws: Combo[];
  common: Combo[];
  unique: Combo[];
  video: Video[];
  weight: string;
  zoom?: number;
  main?: number;
  _id?: string;
};

export const getCharacterFirstEdit = async (
  name: string
): Promise<CharactersTypes> => {
  try {
    const { data } = await axiosFetch.get<CharactersTypes>(
      `/characters/${name}`
    );
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch character");
  }
};

export const getCards = async (): Promise<CharactersTypes[]> => {
  try {
    const { data } = await axiosFetch.get<CharactersTypes[]>("/cards");
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCharacter = async (name: string): Promise<CharactersTypes> => {
  try {
    const { data } = await axiosFetch.get(`/api/character/${name}`);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch character");
  }
};
