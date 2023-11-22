import Image from "next/image";
import { OutfitSectionProps } from "./Outfit-section";
import s from "@/pages/characters/[name]/outfit/Outfit.module.scss";

type CostumeCardPorps = Pick<
  OutfitSectionProps,
  "click" | "img1" | "img2" | "isTrue"
>;
export function CostumeCards({ click, img1, img2, isTrue }: CostumeCardPorps) {
  return (
    <>
      <li
        className={
          isTrue === true
            ? s.Outfit_type_inner_li_active
            : s.Outfit_type_inner_li
        }
        onClick={click}
      >
        <div className={s.Outfit_type_inner_card}>
          <span>
            <Image src={img1} fill={true} alt='' />
          </span>
        </div>
        <p>Outfit1</p>
      </li>
      <li
        className={
          isTrue === false
            ? s.Outfit_type_inner_li_active
            : s.Outfit_type_inner_li
        }
        onClick={click}
      >
        <div className={s.Outfit_type_inner_card}>
          <span>
            <Image src={img2} fill={true} alt='' />
          </span>
        </div>
        <p>Outfit2</p>
      </li>
    </>
  );
}
