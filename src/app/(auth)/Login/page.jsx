import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../auth.css";
import SocialAuthButton from "@/app/components/SocialAuthButton";
import InputField from "../common/InputField";

const page = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center">
      <Header />
      <div className="max-w-[1172px]  shadow-2xl  mx-64 w-full mt-20 py-16 rounded-[50px]">
        <div className="flex flex-col items-center">
          <h2 className="w-fit text-[48px] mb-14 flex gap-8">
            <img
              src="./img/authpage/login-destop.svg"
              width={80}
              height={64}
              alt=""
            />{" "}
            ログイン
          </h2>
          <h3 className="text-[32px] mb-16 text-custome_blue">
            メールアドレスでログイン
          </h3>
          <div className="text-[24px] mx-6 max-w-[600px] w-full">
            <form action="" className="flex flex-col gap-4">
              <InputField label={'メールアドレス'} icon={'./img/authpage/mail.svg'} placeholder={'例) sample@gmail.com'} />
              <InputField label={'パスワード'} icon={'./img/authpage/password.svg'} placeholder={'8文字以上の英数字'} />
              <div className="mt-6 mb-10 flex gap-2">
                <input type="checkbox" className=" w-5" name="2fa" id="2fa" />
                <label htmlFor="2fa">２段階認証を有効にする</label>
              </div>
              <p className="flex w-fit mx-auto mb-6">
                <img src="./img/common/help-circle-contained.svg" alt="" />
                パスワードをお忘れですか？
              </p>
              {/* <button className="mx-auto text-[32px] bg-custome_blue_gradient max-w-[500px] w-full text-white py-5 px-5 rounded-full">ログイン</button> */}
              <button className="mx-auto text-[32px] max-w-[500px] w-full py-5 px-5 bg-custome_blue_gradient rounded-full p-5 text-white flex gap-6 justify-center">
                ログイン <span>&#8594;</span>
              </button>
            </form>
          </div>
        </div>
        <div className="relative  w-[80%] text-center mx-auto mt-28">
          <div className="division-line -z-10 overflow-hidden"></div>
          <p className="w-fit px-12 mx-auto bg-white z-10">または</p>
        </div>
        <div className="flex flex-col  items-center">
          <h2 className="text-[32px] mb-10  mt-14">外部アカウントでログイン</h2>
          <div className="max-w-[800px] w-full flex flex-col gap-6">
            <SocialAuthButton
              text={"Google でログイン"}
              image={"./img/authpage/socialauth/google.svg"}
            />
            <SocialAuthButton
              text={"Apple でログイン"}
              image={"./img/authpage/socialauth/apple.svg"}
            />
            <SocialAuthButton
              text={"X でログイン"}
              image={"./img/authpage/socialauth/x.svg"}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[1172px]  shadow-2xl  mx-64 mt-10 w-full py-16 rounded-[50px] flex flex-col items-center">
        <h2 className=" text-[32px] mb-8">はじめてご利用の方</h2>
        <a href="/register" className="text-[32px] max-w-[500px] w-full py-5 px-5 bg-custome_blue_gradient rounded-full p-5 text-white flex gap-6 justify-center">
          新規登録 <span>&#x2B;</span>{" "}
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default page;
