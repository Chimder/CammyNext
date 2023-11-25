import CharacterCard from "@/Components/CharacterCard/CharacterCard";
import s from "./Characters.module.scss";

function Characters() {
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
