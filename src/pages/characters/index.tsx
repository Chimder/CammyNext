import CharacterCard from "@/Components/CharacterCard/CharacterCard";
import s from "./Characters.module.scss";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";

function Characters() {
  const pathname = usePathname();
  const param = useParams();
  const navigation = useRouter();

  console.log(pathname, "pathname");
  console.log(param, "param");
  console.log(navigation, "navigation");
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
