import { CharactersTypes, getCharacter } from "@/shared/Api/axios-hooks";
import s from "./MoveList.module.scss";
import prisma from "@/shared/lib/prisma";
import { GetStaticProps } from "next";
import clsx from "clsx";
import AsideBar from "@/Components/AsideBar/AsideBar";
import { ComboListArea } from "@/Components/MoveList/ComboListArea";
import CharacterCard from "@/Components/CharacterCard/CharacterCard";
import Link from "next/link";

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

function CommandList({ data: combo }: NameProps) {
  const backgr = {
    backgroundImage: `url(/img/bg_${combo?.name}.webp)`,
    backgroundRepeat: "no-repeat",
  };
  console.log("CCOMBO", combo);
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
                <img src={`/img/${combo?.name}.webp`} alt='' />
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
