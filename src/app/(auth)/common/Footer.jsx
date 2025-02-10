import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#D4F2EF] mt-48 w-full pt-24 pb-16 relative">
      <div className="mx-auto w-fit flex flex-col gap-10 items-center">
        <div className="flex gap-10">
          <a href="">FAQ</a> |<a href="">プライバシーポリシー</a> |
          <a href="">利用規約</a>
        </div>
        <div>
          <p className="flex items-center gap-4">
            Rare’s Smile powered by{" "}
            <img src="./img/authpage/footer/textlogo.svg" alt="" />
            <img src="./img/authpage/bg_logo.svg" alt="" />
          </p>
        </div>
      </div>
      <img src="./img/authpage/footer/secure.svg" alt="secure" className="absolute bottom-16 right-20" />
    </div>
  );
};

export default Footer;
