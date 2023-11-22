import clsx from "clsx";
import React from "react";
import s from "./Combo.module.scss";
import { Combo } from "@/shared/Api/axios-hooks";
import Image from "next/image";
interface CombosProps extends Combo {
  podsvet?: string;
  click: (data: React.MouseEvent<HTMLLIElement>) => void;
  left?: number;
  text?: string;
}
export const Combos = ({
  arrows,
  comboName,
  img,
  energy,
  text,
  click,
  left,
  podsvet,
}: CombosProps) => {
  return (
    <li
      className={
        left === 2 && podsvet === comboName
          ? s.moveList_li_combo_end_active
          : left === 1 && podsvet === comboName
          ? s.moveList_li_combo_active
          : podsvet === comboName
          ? s.moveList_li_active
          : left === 1
          ? s.moveList_li_combo
          : left === 2
          ? s.moveList_li_combo_end
          : s.moveList_li
      }
      onClick={click}
    >
      <div className={s.moveList_li_div}>
        <span>
          <span>
            <Image src={img} fill={true} alt='' />
          </span>
        </span>
      </div>
      <div className={s.comboArrow}>
        <span className={s.comboArrow_arts}>{comboName}</span>
        <span className={s.comboArrows}>
          {!arrows ? (
            <div className={s.comboArrow_arts}>{text}</div>
          ) : (
            arrows.map((arr, index) => (
              <Image src={arr} key={index} fill={true} alt='' />
            ))
          )}
        </span>
      </div>
      <div className={clsx(s.moveList_drive, s.moveList_drive_test)}>
        <span>
          <Image src={energy} alt='' fill={true} />
        </span>
      </div>
    </li>
  );
};
