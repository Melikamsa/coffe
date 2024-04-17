"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Image from "next/image";
import HamburgerMenu from "../hamburgerMenu";
import TitleBranches from "../hamburgerMenu/titles/titleBranches/page";
import TitleContactUs from "../hamburgerMenu/titles/titleContactUs/page";
import TitleMenu from "../hamburgerMenu/titles/titleMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="py-3 px-4 h-16 flex items-center justify-between bg-[#e7e7e7] xl:h-20">
        <h1 className="uppercase text-4xl xl:text-[30px] font-extrabold text-[23px] text-[#d34e01]">
          coffe moon
        </h1>

        <button
          className="text-xl xl:text-3xl md:hidden"
          onClick={() => setShowMenu(true)}
        >
          <FaBars />
        </button>

        <div className="max-[767px]:hidden flex items-center justify-between w-[450px] xl:w-[650px]">
        <TitleBranches />
          <TitleMenu />
          <TitleContactUs />
        </div>

      </div>
      <div className="w-full hover:">
        <Image
          alt="coffe"
          src={"/9774d36846eafeb9768f8d6128fda592.jpg"}
          width={2000}
          height={1000}
          sizes="100vw"
        />
      </div>
      {showMenu ? <HamburgerMenu setShow={setShowMenu} /> : null}
    </>
  );
};

export default Header;
