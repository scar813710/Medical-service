"use client";

import React, { useEffect, useState } from "react";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(1440);

  const topImageSrc =
    windowWidth > 768
      ? "./img/authpage/top_abstract_large.svg"
      : "./img/authpage/top_abstract_small.svg";
  const heroImageSrc =
    windowWidth > 425
      ? "./img/authpage/hero.svg"
      : "./img/authpage/hero-mobile.svg";
  return (
    <div className="relative w-full flex flex-col items-center">
      <div className=" -z-10 mx-auto">
        <img src="./img/authpage/top_abstract.svg" alt="" />
        <img src={heroImageSrc} className="md:-mt-[230px] mx-auto" alt="" />
      </div>
      <nav className="absolute top-0 flex justify-between max-w-[1280px] w-full px-[175px] mt-10 items-center">
        <img src="./img/authpage/bg_logo.svg" alt="" />
        <ul className="flex justify-between gap-8">
          <li className="flex">
            <img
              src="./img/common/help-circle-contained.svg"
              className=""
              width={24}
              height={24}
              alt=""
            />
            <span className="">よくあるご質問</span>
          </li>
          <li>新規登録 &#x2B;</li>
          <li>ログイン &#8594; </li>
        </ul>
        <button>
          <img src="./img/common/hamburger.svg" width={27} height={20} alt="" />
        </button>
      </nav>
    </div>
  );
};

export default Header;
