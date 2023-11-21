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
import { AsideBar } from "@/Components/AsideBar/AsideBar";
import { CharacterCard } from "@/Components/CharacterCard/CharacterCard";
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
    const name = String(params?.name);
    const data = await getCharacter(name);
    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
};

function Character({ data: characters }: NameProps) {
  const pathname = usePathname();
  const param = useParams();

  // const { data: characters, refetch } = useQuery({
  //   queryKey: ["character"],
  //   queryFn: async () => GetCharacter(param.name),
  // });

  const CH = 2;

  const backgr = {
    backgroundImage: `url(../img/bg_${characters?.name}.jpg)`,
    backgroundRepeat: "no-repeat",
  };

  return (
    <main className={s.Main_Character}>
      <article style={backgr}>
        <div className={s.Main_div}>
          <div
            className={clsx(
              s.Main_img_CH,
              characters?.main === 1
                ? s.Main_img_CH_1
                : characters?.main === 2
                ? s.Main_img_CH_2
                : characters?.main === 3
                ? s.Main_img_CH_3
                : characters?.main === 4
                ? s.Main_img_CH_4
                : characters?.main === 5
                ? s.Main_img_CH_5
                : characters?.main === 6
                ? s.Main_img_CH_6
                : characters?.main === 7
                ? s.Main_img_CH_7
                : characters?.main === 8
                ? s.Main_img_CH_8
                : s.Main_img_CH
            )}
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
