import Link from "next/link";
import s from "./AsideBar.module.scss";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function AsideBar() {
  const param = useParams();
  const pathname = usePathname();
  const router = useRouter();
  // console.log(router.query.name);

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
