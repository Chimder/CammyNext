import Link from "next/link";
import s from "./AsideBar.module.scss";
import { useParams } from "next/navigation";

export function AsideBar() {
  // const param = useParams();
  const name = useParams();
  console.log(name);

  return (
    <aside className={s.Aside_into}>
      <p>
        <span>Character Select</span>
      </p>
      <ul className={s.Link_to_All}>
        <li style={{ flexBasis: "15%" }}>
          <Link href={`/characters/${param.slug}`}>TOP</Link>
        </li>
        <li style={{ flexBasis: "55%" }}>
          <Link href={`/characters/${param.slug}/movelist`}>COMMAND LIST</Link>
        </li>
        <li style={{ flexBasis: "30%" }}>
          <Link href={`/characters/${param.slug}/outfit`}>COSTUME</Link>
        </li>
      </ul>
    </aside>
  );
}
