import Link from "next/link";
import s from "./AsideBar.module.scss";
import { useParams } from "next/navigation";

export function AsideBar() {
  const name = useParams();

  return (
    <aside className={s.Aside_into}>
      <p>
        <span>Character Select</span>
      </p>
      <ul className={s.Link_to_All}>
        <li style={{ flexBasis: "15%" }}>
          <Link href={`/characters/${name}`}>TOP</Link>
        </li>
        <li style={{ flexBasis: "55%" }}>
          <Link href={`/characters/${name}/movelist`}>COMMAND LIST</Link>
        </li>
        <li style={{ flexBasis: "30%" }}>
          <Link href={`/characters/${name}/outfit`}>COSTUME</Link>
        </li>
      </ul>
    </aside>
  );
}
