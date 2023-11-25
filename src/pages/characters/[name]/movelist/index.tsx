import clsx from "clsx";
import React, { useEffect, useState } from "react";
import AsideBar from "@/Components/AsideBar/AsideBar";
import ComboListArea from "@/Components/MoveList/ComboListArea";
import CharacterCard from "@/Components/CharacterCard/CharacterCard";
import Link from "next/link";
import { GetStaticProps } from "next";
import {
  CharactersTypes,
  getCards,
  getCharacter,
} from "@/shared/Api/axios-hooks";
import Image from "next/image";
import s from "./MoveList.module.scss";
import axios from "axios";

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

function CommandList() {
  const [combo, setCharacter] = useState<any>();
  const fetchData = async () => {
    const data = await axios.get("http://localhost:3000/api/findOne");
    console.log(data, "=====");
    setCharacter(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const backgr = {
    backgroundImage: `url(/img/bg_${combo?.name}.webp)`,
    backgroundRepeat: "no-repeat",
  };
  if (!combo) {
    return <div>Loading</div>;
  }
  const CH = 3;
  return (
    <div>
      <main className={s.Main_Character}>
        <article style={backgr}>
          <div className={s.Main_div}>
            <div
              className={clsx(
                s.Main_img_CH,
                combo?.zoom && s[`Main_img_CH_Zoom_${combo?.zoom}`],
                s.Main_img_CH
              )}
              key={combo?.name}
            >
              <span>
                <Image src={`/img/${combo?.name}.webp`} fill={true} alt='' />
              </span>
            </div>
            <section className={s.Second_section}>
              <h1>CHARACTERS</h1>
              <h2 style={{ textTransform: "uppercase" }}>{combo?.name}</h2>
            </section>
            <div className={s.Right_Aside}>
              <AsideBar />
            </div>
          </div>
        </article>

        <section className={s.SectionCombo}>
          <ComboListArea {...combo} />
        </section>

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
export default CommandList;
