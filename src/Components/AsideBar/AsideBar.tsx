import Link from "next/link";
import s from "./AsideBar.module.scss";
import { useRouter } from "next/router";

export default function AsideBar() {
  const router = useRouter();

  return (
    <aside className={s.Aside_into}>
      <p>
        <span>Character Select</span>
      </p>
      <ul className={s.Link_to_All}>
        <li style={{ flexBasis: "15%" }}>
          <Link href={`/characters/${router.query.name}`}>TOP</Link>
        </li>
        <li style={{ flexBasis: "55%" }}>
          <Link href={`/characters/${router.query.name}/movelist`}>
            COMMAND LIST
          </Link>
        </li>
        <li style={{ flexBasis: "30%" }}>
          <Link href={`/characters/${router.query.name}/outfit`}>COSTUME</Link>
        </li>
      </ul>
    </aside>
  );
}
