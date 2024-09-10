import clsx from "clsx";
import React from "react";
import s from "./Character.module.scss";
import Image from "next/image";
import Link from "next/link";
import { CharactersTypes } from "@/shared/Api/axios-api";
import AsideBar from "@/Components/AsideBar/AsideBar";
import CharacterCard from "@/Components/CharacterCard/CharacterCard";
import { GetStaticProps } from "next";
import prisma from "@/shared/lib/prisma";
type NameProps = {
  data: CharactersTypes;
};

export const getStaticPaths = async () => {
  const data = await prisma.character.findMany({ select: { name: true } });
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
    const data = await prisma.character.findUnique({
      where: {
        name: params?.name as string,
      },
      include: {
        video: true,
        special: true,
        common: true,
        supel: true,
        throws: true,
        unique: true,
      },
    });
    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
};

function Character({ data: characters }: NameProps) {
  const CH = 2;
  const backgr = {
    backgroundImage: `url(../img/bg_${characters?.name}.webp)`,
    backgroundRepeat: "no-repeat",
  };

  return (
    <main className={s.Main_Character}>
      <article style={backgr}>
        <div className={s.Main_div}>
          <div
            className={clsx(
              s.Main_img_CH,
              characters?.main && s[`Main_img_CH_${characters.main}`],
              s.Main_img_CH
            )}
            key={characters?.name}
          >
            <span>
              <Image src={`/img/${characters?.name}.webp`} fill={true} alt="" />
            </span>
          </div>
          <section className={s.Second_section}>
            <h1>CHARACTERS</h1>
            <h2 style={{ textTransform: "uppercase" }}>{characters?.name}</h2>
            <p>{characters?.describe}</p>
            <ul>
              <li>
                <span className={s.spanOne}>Hates</span>
                <span className={s.spanTwo}>{characters?.hates}</span>
              </li>
              <li>
                <span className={s.spanOne}>Likes</span>
                <span className={s.spanTwo}>{characters?.likes}</span>
              </li>
              <li>
                <span className={s.spanOne}>Height</span>
                <span className={s.spanTwo}>{characters?.height}</span>
              </li>
              <li>
                <span className={s.spanOne}>Weight</span>
                <span className={s.spanTwo}>{characters?.weight}</span>
              </li>
            </ul>
          </section>
          <div className={s.Right_Aside}>
            <AsideBar />
          </div>
        </div>
      </article>

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
          <Link href="/characters">
            <span>BACK TO LIST</span>
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Character;
