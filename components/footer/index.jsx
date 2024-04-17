import TitleContactUs from "../hamburgerMenu/titles/titleContactUs/page";
import TitleBranches from "../hamburgerMenu/titles/titleBranches/page";
import TitleMenu from "../hamburgerMenu/titles/titleMenu";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";



const Footer = () => {
  return (
    <div className="bg-[#e7e7e7] py-[30px] px-[5px] ">
      <p className="text-[#d34e01] text-4xl text-center">coffe moon</p>

      <div className="w-[180px]  mt-[20px] mx-auto sm:flex sm:items-center sm:justify-around sm:w-auto lg:w-[1015px]">
        <TitleBranches />
        <TitleMenu />
        <TitleContactUs />
      </div>

      <div className="text-center mt-5 p-4 xl:text-[22px]">
        <p>خوشحال میشیم ما را در صفحات مجازی دنبال کنید</p>

        <div className="text-3xl flex items-center justify-center gap-6 mt-[20px] xl:text-[33px]">
          <div className="hover:text-[#d62a78]">
            <Link href={"/"}>
              <RiInstagramFill />
            </Link>
          </div>
          <div className="hover:text-[#091b9f]">
            <Link href={"/"}>
              <RiLinkedinFill />
            </Link>
          </div>
          <div className="hover:text-[#0f0f0f]">
            <Link href={"/"}>
              <RiTwitterXFill />
            </Link>
          </div>
          <div className="hover:text-[#1c34e8]">
            <Link href={"/"}>
              <FaTelegramPlane />
            </Link>
          </div>
          <div className="hover:text-[#e11f1f]">
            <Link href={"/"}>
              <SiGmail />
            </Link>
          </div>
          <div className="hover:text-[#0ec618]">
            <Link href={"/"}>
              <RiWhatsappFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Footer;
