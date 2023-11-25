import clsx from "clsx";
import { useState } from "react";
import { CharactersTypes, getCharacter } from "@/shared/Api/axios-hooks";
import { GetStaticProps } from "next";
import Image from "next/image";
import AsideBar from "@/Components/AsideBar/AsideBar";
import { OutfitSection } from "@/Components/Outfits/Outfit-section";
import CharacterCard from "@/Components/CharacterCard/CharacterCard";
import Link from "next/link";
import s from "../movelist/MoveList.module.scss";
import prisma from "@/shared/lib/prisma";

type NameProps = {
  data: CharactersTypes;
};

export const getStaticPaths = async () => {
  const data = await prisma.character.findMany();
  const paths = data.map((character) => ({
    params: { name: character.name },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const data = await getCharacter(params?.name as string);
    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
};

export default function Outfit({ data: characters }: NameProps) {
  const [activeOut, setActiveOut] = useState(true);

  const cardActive = () => {
    setActiveOut(!activeOut);
  };

  const backgr = {
    backgroundImage: `url(/img/bg_${characters?.name}.webp)`,
    backgroundRepeat: "no-repeat",
  };
  const CH = 4;

  if (!characters) {
    return (
      <>
        <div>lol</div>
      </>
    );
  }
  console.log(characters?.zoom);
  return (
    <div>
      <main className={s.Main_Character}>
        <article style={backgr}>
          <div className={s.Main_div}>
            <div
              className={clsx(
                s.Main_img_CH,
                characters.zoom && s[`Main_img_CH_Zoom_${characters.zoom}`],
                s.Main_img_CH
              )}
              key={characters.name}
            >
              <span>
                <Image
                  src={`/img/${characters.name}.webp`}
                  fill={true}
                  alt=''
                />
              </span>
            </div>
            <section className={s.Second_section}>
              <h1>CHARACTERS</h1>
              <h2 style={{ textTransform: "uppercase" }}>{characters.name}</h2>
            </section>
            <div className={s.Right_Aside}>
              <AsideBar />
            </div>
          </div>
        </article>

        <OutfitSection {...characters} click={cardActive} isTrue={activeOut} />

        <div className={s.Article_Two_Select}>
          <dl>
            <dt>
              <span>CHARACTER SELECT</span>
            </dt>
            <dd className={s.Article_Two_dd}>
              <ul className={s.Article_Two_List_character}>
                <CharacterCard CH={CH} />
              </ul>
            </dd>
          </dl>
          <p className={s.BackBtn}>
            <Link href='/characters'>
              <span>BACK TO LIST</span>
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
