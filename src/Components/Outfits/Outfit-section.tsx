/* eslint-disable react/no-unescaped-entities */
import React from "react";
import style from "@/pages/characters/[name]/outfit/Outfit.module.scss";
import { CharactersTypes } from "@/shared/Api/axios-hooks";
import { CostumeCards } from "./CostumeCard";
import Image from "next/image";

export interface OutfitSectionProps extends CharactersTypes {
  isTrue: boolean;
  click: () => void;
}
export function OutfitSection({
  isTrue,
  img1,
  img2,
  click,
  out1,
  out2,
}: OutfitSectionProps) {
  return (
    <section className={style.Outfit_Section}>
      <div className={style.Outfit_type}>
        <div className={style.Outfit_type_inner}>
          <ul>
            <CostumeCards
              img1={img1}
              img2={img2}
              click={click}
              isTrue={isTrue}
            />
          </ul>
          <div
            className={
              isTrue === true
                ? style.Outfit_select_card
                : style.Outfit_select_card_next
            }
          >
            <div className={style.Outfit_select_card_inner}>
              <span className={style.Outfit_type_line}></span>
              <span className={style.Outfit_type_arrow}></span>
            </div>
          </div>
        </div>
      </div>

      <div className={style.Outfit_Detail}>
        <div className={style.Outfit_Detail_inner}>
          <div className={style.Outfit_Detail_inner_content}>
            <h3>Outfit1</h3>
            <div>
              <div>
                <p>How to Get</p>
                <ul>
                  <li>"None"</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.Outfit_Detail_Main}>
            <h4>Color</h4>
            <div className={style.Outfit_Detail_Main_inner}>
              <div>
                <p>How to get</p>
                <ul>
                  <li>"Color 1-2 : None"</li>
                  <li>"Color 3-9 : Purchase in shop"</li>
                </ul>
              </div>
              <ul className={style.Outfit_List_wrapper}>
                {isTrue === true
                  ? out1.map((card, index) => (
                      <li key={index} className={style.Outfit_List_wrapper_li}>
                        <p>01</p>
                        <div>
                          <span>
                            <Image key={index} src={card} alt='' fill={true} />
                          </span>
                        </div>
                      </li>
                    ))
                  : out2.map((card, index) => (
                      <li key={index} className={style.Outfit_List_wrapper_li}>
                        <p>01</p>
                        <div>
                          <span>
                            <Image key={index} src={card} alt='' fill={true} />
                          </span>
                        </div>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
