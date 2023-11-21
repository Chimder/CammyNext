import React, { useEffect, useState } from "react";
import s from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [headerSize, setHeaderSize] = useState(false);
  const changesize = () => {
    if (window.scrollY <= 140) {
      setHeaderSize(false);
    } else {
      setHeaderSize(true);
    }
  };
  useEffect(() => {
    changesize();
    window.addEventListener("scroll", changesize);
  });

  return (
    <header className={headerSize ? s.header_small : s.header_small}>
      <div className={headerSize ? s.headerInto_small : s.headerInto}>
        <p className={s.header_p}>
          <Link href='/'>
            <span>
              <span>
                <Image src='/img/H_logo.png' fill={true} alt='aada' />
              </span>
            </span>
          </Link>
        </p>

        <nav className={s.header_nav}>
          <div>
            <ul className={s.global_ul}>
              <li className={s.all}>
                <Link href='/'>
                  <div>
                    <div className={s.all_p}>HOME</div>
                  </div>
                </Link>
              </li>
              <li className={s.all}>
                <Link href='#'>
                  <div>
                    <div className={s.all_p}>MODES</div>
                  </div>
                </Link>
              </li>
              <li className={s.all_divv}>
                <Link href='/characters'>
                  <div className={s.all_div}>
                    <div>CHARACTERS</div>
                  </div>
                </Link>
              </li>
              <li className={s.all}>
                <Link href='#'>
                  <div>
                    <div className={s.all_p}>NEWS</div>
                  </div>
                </Link>
              </li>
              <li className={s.all}>
                <Link href='#'>
                  <div>
                    <div className={s.all_p}>COLUMN</div>
                  </div>
                </Link>
              </li>
              <li className={s.all}>
                <Link href='#'>
                  <div>
                    <div className={s.all_p}>SUPPORT</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className={s.buckler}>
            <span className={s.buckler_span}>
              <div className={s.buckler_span_div}>
                <div>Bucklers Boot Camp</div>
              </div>
              <span className={s.buckler_span_span}>
                <span>
                  <span></span>
                  <Image src='/img/icon_lock.png' fill={true} alt='' />
                </span>
              </span>
            </span>
          </div>
          <dl className={s.dl}>
            <dt>
              <span>
                <div>en-us</div>
              </span>
            </dt>
          </dl>
          <p className={s.product}>
            <a href=''>
              <svg
                id='a'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 55 30'
              >
                <path d='M16.9,13.4c-0.1,0.1-1.8,1.8-1.8,1.8s1.7,1.8,1.8,1.8c0,0.1,0.2,0.2,0.2,0.6c0,0.4,0,4.9,0,4.9s0,0.9,0,2.9 c0,0.1,0,0.4-0.1,0.5c-0.5,0.5-3.2,3.2-3.7,3.7c0,0-0.2,0.2-0.5,0.2c-0.1,0-11.8,0-11.8,0s0-23,0-25c0-0.1,0-0.4,0.1-0.5 C1.6,3.7,4.3,1,4.8,0.6c0-0.1,0.2-0.2,0.5-0.2c0.1,0,11.8,0,11.8,0s0,12.3,0,12.5C17.1,13.1,17.1,13.3,16.9,13.4z M6.7,12.1h4.6 V5.7H6.7V12.1z M6.7,24.2c1.5,0,3.2,0,4.6,0v-6.3H6.7V24.2z'></path>
                <path d='M25.5,0.4v23.8h4.7V0.4h5.7c0,0,0,24.5,0,24.8c0,0.3-0.1,0.5-0.1,0.5l-3.7,3.7c0,0-0.2,0.2-0.5,0.2c-1.4,0-6.9,0-7.3,0 c-0.4,0-0.7-0.3-0.7-0.3S20.3,26,20,25.7c-0.2-0.2-0.2-0.3-0.2-0.7c0-0.4,0-24.6,0-24.6H25.5z'></path>
                <path d='M54.2,0.4c0,0,0,8.7,0,9.2c0,0.1-0.1,0.4-0.2,0.7c0,0.1-2.7,6.1-5,11v8.4h-5.7v-8.4c-2.2-4.9-4.9-10.8-5-11 C38.1,9.9,38,9.7,38,9.6c0-0.4,0-9.2,0-9.2h5.7v9.2l2.3,5.4l2.3-5.4V0.4H54.2z'></path>
              </svg>
            </a>
          </p>
        </nav>
      </div>
    </header>
  );
}
