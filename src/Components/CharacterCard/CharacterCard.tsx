import React, { useEffect } from "react";
import style from "./CharacterCard.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CharactersCards } from "@/shared/Data/CharactersCard";

type Type = {
  CH: number;
};

const CharacterCard = ({ CH }: Type) => {
  const pathname = usePathname();
  const [active, setActive] = React.useState<number | boolean>(false);

  useEffect(() => {
    CharactersCards.forEach((card) => {
      const imgActive = new Image();
      imgActive.src = card.imgActive;

      const imgNotActive = new Image();
      imgNotActive.src = card.imgNotActive;
    });
  }, []);

  const enter = (i: number) => {
    setActive(i);
  };

  const leave = () => {
    setActive(false);
  };

  return (
    <>
      {CharactersCards &&
        CharactersCards.map((card, index: number) => (
          <li
            key={index}
            className={
              pathname === "/characters"
                ? style.CharacterLi
                : style.CharacterLi_small
            }
            onMouseLeave={() => leave()}
            onMouseEnter={() => enter(index)}
          >
            <Link
              key={index}
              className={
                pathname === "/characters"
                  ? style.CharacterImg
                  : style.CharacterImg_small
              }
              style={{
                backgroundImage:
                  active === index
                    ? `url(${card.imgActive})`
                    : `url(${card.imgNotActive})`,
              }}
              href={
                CH === 4
                  ? `/characters/${card.name}/outfit`
                  : CH === 3
                  ? `/characters/${card.name}/movelist`
                  : CH === 2
                  ? `/characters/${card.name}`
                  : CH === 1
                  ? `/characters/${card.name}`
                  : "/characters/"
              }
            ></Link>
          </li>
        ))}
    </>
  );
};

export default CharacterCard;
