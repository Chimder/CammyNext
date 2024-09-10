import { Combo } from "@/shared/Api/axios-api";
import s from "./Combo.module.scss";
import clsx from "clsx";

interface CombosProps extends Combo {
  podsvet?: string;
  click: (data: React.MouseEvent<HTMLLIElement>) => void;
  left?: number;
  text?: string;
}
const Combos = ({
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
            <img src={img} alt='' />
          </span>
        </span>
      </div>
      <div className={s.comboArrow}>
        <span className={s.comboArrow_arts}>{comboName}</span>
        <span className={s.comboArrows}>
          {!arrows ? (
            <div className={s.comboArrow_arts}>{text}</div>
          ) : (
            arrows.map((arr, index) => <img src={arr} key={index} alt='' />)
          )}
        </span>
      </div>
      <div className={clsx(s.moveList_drive, s.moveList_drive_test)}>
        {/* <span>
          <Image src={energy} alt='' fill={true} />
        </span> */}
        {energy !== null && (
          <span>
            <img src={energy} alt='' />
          </span>
        )}
      </div>
    </li>
  );
};
export default Combos;
