'use client'
//module
import React, { useState } from "react";
import axios from "axios";

//components
import Header from "../common/Header";
import Footer from "../common/Footer";
import SocialAuthButton from "@/app/components/SocialAuthButton";
import InputField from "../common/InputField";
import CheckBox from "../common/CheckBox";

//styles
import "../auth.css";

const page = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    twoFactorAuth: false,
    terms: false,
  });

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("YOUR_API_URL", formData);
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center">
      <Header />
      <div className="max-w-[1172px]  shadow-2xl  mx-64 w-full mt-20 py-16 rounded-[50px]">
        <div className="flex flex-col items-center">
          <h2 className="w-fit text-[48px] mb-14 flex gap-8">
            <img
              src="./img/authpage/register.svg"
              width={51}
              height={51}
              alt=""
            />{" "}
            新規登録
          </h2>
          <div className="text-[24px] mx-6 max-w-[850px] w-full">
            <form action="" className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-8">
                <div className="w-[600px] flex flex-col gap-4">
                  <InputField
                    name={"username"}
                    type={"text"}
                    label={"ユーザー名"}
                    icon={"./img/authpage/user-profile.svg"}
                    placeholder={"例) smile1234"}
                    handleOnChange={handleOnChange}
                  />
                  <InputField
                    name={"email"}
                    type={"text"}
                    label={"メールアドレス"}
                    icon={"./img/authpage/mail.svg"}
                    placeholder={"例) sample@gmail.com"}
                    handleOnChange={handleOnChange}
                  />
                  <InputField
                    name={"password"}
                    type={"password"}
                    label={"パスワード"}
                    icon={"./img/authpage/password.svg"}
                    placeholder={"8文字以上の英数字"}
                    handleOnChange={handleOnChange}
                  />
                  <InputField
                    name={"confirmPassword"}
                    type={"password"}
                    label={"パスワード（確認用）"}
                    icon={"./img/authpage/password.svg"}
                    placeholder={"8文字以上の英数字"}
                    handleOnChange={handleOnChange}
                  />
                </div>
                <CheckBox id={"2fa"} label={"２段階認証を有効にする"} />
              </div>
              <CheckBox
                id={"privacy"}
                label={"利用規約とプライバシーポリシーに同意します。"}
              />
              <button className="mx-auto text-[32px] max-w-[500px] w-full py-5 px-5 bg-custome_blue_gradient rounded-full p-5 text-white flex gap-6 justify-center">
                登録 <span>&#x2B;</span>
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col  items-center">
          <h2 className="text-[32px] mb-10 mt-14">外部アカウントを連携</h2>
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
        <a
          href="/login"
          className="text-[32px] max-w-[500px] w-full py-5 px-5 bg-custome_blue_gradient rounded-full p-5 text-white flex gap-6 justify-center"
        >
          ログイン <span>&#8594;</span>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default page;
