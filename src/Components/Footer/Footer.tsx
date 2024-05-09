/* eslint-disable react/no-unescaped-entities */
import React from "react";
import s from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={s.footer}>
      <p>
        <span></span>
      </p>
      <section className={s.footer_section}>
        <p className={s.logo}>
          <span>
            <Image src="/img/F_logo.webp" fill={true} alt="" />
            <span></span>
          </span>
        </p>
        <ul className={s.list}>
          <li className={s.list_title}>Street Fighter 6</li>
          <li className={s.list_platform}>
            <span>"Platform"</span>
            <ul className={s.list_platform_ul}>
              <li>
                <span>
                  <span></span>
                  <Image src="/img/PS5.webp" width={90} height={24} alt="" />
                </span>
              </li>
              <li>
                <span>
                  <span></span>
                  <Image src="/img/PS4.webp" width={90} height={24} alt="" />
                </span>
              </li>
              <li>
                <span>
                  <span></span>
                  <Image src="/img/XBOX.webp" width={200} height={26} alt="" />
                </span>
              </li>
              <li>
                <span>
                  <span></span>
                  <Image src="/img/Steam.webp" width={100} height={26} alt="" />
                </span>
              </li>
            </ul>
          </li>
          <li className={s.list_gender}>
            <span>"Gender"</span>
            "Fighting"
          </li>
          <li className={s.list_gender}>
            <span>"Release date"</span>
            "Available now!"
          </li>
          <li className={s.list_rating}>
            <span>"Rating"</span>
            <div>
              <a href="">
                <span>
                  <span></span>
                  <Image fill={true} src="/img/TEEN.webp" alt="" />
                </span>
              </a>
            </div>
          </li>
        </ul>
        <p className={s.caution}>
          "*Images represent a game under development. The contents on this page
          may differ from the full version of the game."
        </p>
        <ul className={s.sns}>
          <li className={s.sns_tw}>
            <a href="#">Twitter</a>
          </li>
          <li className={s.sns_ig}>
            <a href="#">Instagram</a>
          </li>
          <li className={s.sns_site}>
            <a href="#">Street Fighter series Official Website</a>
          </li>
        </ul>
      </section>
      <div></div>
    </div>
  );
}
