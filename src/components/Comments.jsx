import React from "react";

export default function Comments(props) {
  const { name, comment } = props;
  return (
    <div>
      <div className="flex flex-col w-[100%] border-[1px] border-gray-300 rounded-[5px] py-[20px] pl-[15px] mb-[10px]">
        <p className="text-[5vw] font-bold">{name}</p>
        <p className="font-bold text-gray-400"></p>
        <p>{comment}</p>
      </div>
    </div>
  );
}
