import React from "react";

interface Prop {
  label?: string;
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  value: string;
}

const TextField = (props: Prop) => {
  return (
    <div className="w-full">
      <label
        htmlFor={props.name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {props.label}
      </label>
      <input
        value={props.value}
        onChange={props.handleChange}
        name={props.name}
        type={props.type}
        className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
      />
      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"></span>
    </div>
  );
};

export default TextField;
