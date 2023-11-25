import CharacterCard from "@/Components/CharacterCard/CharacterCard";
import s from "./Characters.module.scss";
import { data } from "@/shared/xx/2";

function Characters() {
  // const pathname = usePathname();
  // const param = useParams();
  // const navigation = useRouter();

  const CH = 1;

  console.log(data[0].supel);
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
