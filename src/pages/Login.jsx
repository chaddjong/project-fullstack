import React from "react";
import Logo from "../img/logo.png";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-[1px] border-gray-300 rounded-[10px] w-[80%] h-max flex flex-col items-center">
        <img src={Logo} className="w-[20vw] my-[20px]" alt="logo" />
        <form className="flex flex-col justify-center items-center gap-3">
          <input
            type="text"
            placeholder="Email"
            className="border-black border-[1px] pl-[5px] w-[40vw] h-[5vh]"
          />
          <input
            type="text"
            placeholder="Password"
            className="border-black border-[1px] pl-[5px] w-[40vw] h-[5vh]"
          />
          <button type="submit" className="bg-sky-500 text-white font-bold w-[20vw] rounded-md mt-[10px] mb-[20px]">Login</button>
        </form>
      </div>
    </div>
  );
}
