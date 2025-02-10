import React from "react";

const SocialAuthButton = ({ text,image }) => {
  return(

    <div>
        <button className="flex gap-4 text-[18px] w-full justify-center border border-gray-400 py-8 rounded-[10px] shadow-md"><img src={image} width={24} height={24} alt={text} />{text}</button>
    </div>
  );
};

export default SocialAuthButton;
