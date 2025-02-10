import React from "react";

const CheckBox = ({id, label}) => {
  return (
    <div>
      <p className="flex w-fit mx-auto mb-6 flex gap-2 text-[17px]">
        <input type="checkbox" name={id} id={id} className="w-4" />
        <label htmlFor={id}>
          {label}
        </label>
      </p>
    </div>
  );
};

export default CheckBox;
