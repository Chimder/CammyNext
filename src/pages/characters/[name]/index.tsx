import clsx from "clsx";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import s from "./Character.module.scss";
import Image from "next/image";
import Link from "next/link";
import {
  CharactersTypes,
  getCards,
  getCharacter,
} from "@/shared/Api/axios-hooks";
import AsideBar from "@/Components/AsideBar/AsideBar";
import CharacterCard from "@/Components/CharacterCard/CharacterCard";
import { useParams, usePathname } from "next/navigation";
import { GetStaticProps } from "next";
type NameProps = {
  data: CharactersTypes;
};

export const getStaticPaths = async () => {
  const data = await getCards();
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

function Character({ data: characters }: NameProps) {
  const pathname = usePathname();
  const param = useParams();

  const CH = 2;
  const backgr = {
    backgroundImage: `url(../img/bg_${characters?.name}.webp)`,
    backgroundRepeat: "no-repeat",
  };

  console.log(characters?.main);
  // const mainClass = characters?.main ? `${s.Main_img_CH}_${characters.main}` : s.Main_img_CH;
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
              <Image src={`/img/${characters?.name}.webp`} fill={true} alt='' />
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
          <Link href='/characters'>
            <span>BACK TO LIST</span>
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Character;
