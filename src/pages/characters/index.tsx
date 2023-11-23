import CharacterCard from "@/Components/CharacterCard/CharacterCard";
import s from "./Characters.module.scss";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Characters() {
  const pathname = usePathname();
  const param = useParams();
  const navigation = useRouter();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/post");
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(characters);
  const CH = 1;
  return (
    <main className={s.contents}>
      <div className={s.contents_into}>
        <div className={s.select_CH}>
          <h1 className={s.main_h1}>FIGHTERS</h1>
          <div className={s.Characters}>
            <ul>
              <CharacterCard CH={CH} />
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Characters;
