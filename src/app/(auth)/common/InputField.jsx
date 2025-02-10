import React from "react";

const InputField = ({ label, icon, placeholder, type, name, handleOnChange }) => {
  return (
    <div>
      <label htmlFor="" className="flex mb-2 gap-1">
        <img src={icon} alt="" />
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="p-6 shadow-md w-full rounded-md text-[18px]"
        placeholder={placeholder}
        onChange={(e)=> handleOnChange(e)}
      />
    </div>
  );
};

export default InputField;
