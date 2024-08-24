import React from "react";
import rays from "../assets/img/rays-logo.png";

function Copyrigth() {
  return (
    <div className="bg-[#2487CE] text-white py-3 mx-auto text-center text-sm lg:text-base rounded-t-xl">
      <p>&copy; 2024 LKSA Muhammadiyah Al-Falah Gunem. All rights reserved.</p>
      <div className="flex justify-center items-center gap-2">
        <span>Designed by</span>
        <img className="h-8" src={rays} alt="" />
      </div>
    </div>
  );
}

export default Copyrigth;
