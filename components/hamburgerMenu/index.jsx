// "use client";
import { GrClose } from "react-icons/gr";
import TitleBranches from "./titles/titleBranches/page";
import TitleMenu from "../hamburgerMenu/titles/titleMenu/index";
import TitleContactUs from "./titles/titleContactUs/page";

const HamburgerMenu = ({ setShow }) => {
  return (
    <>
      <div className="p-[30px] w-full h-screen fixed top-0 left-0 bg-slate-100">
        <button
          className="text-2xl text-orange-600"
          onClick={() => setShow(false)}
        >
          {/* {console.log(closeMenu)} */}
          <GrClose />
        </button>
        <div className="h-[120px] flex items-center justify-center">
          <p className="text-[#391d05] text-4xl text-center">coffe moon</p>
        </div>

        <section
          className="bg-[#f28b36] px-[20px] h-auto"
          onClick={() => setShow(false)}
        >
          <TitleBranches />
          <TitleMenu />
          <TitleContactUs />
          {console.log("menu hambergeri")}
        </section>
      </div>
    </>
  );
};

export default HamburgerMenu;
