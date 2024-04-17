import { IoCall } from "react-icons/io5";
import Link from "next/link";
const TitleContactUs = () => {
  return (
    <Link href="/contactUs">
      <div className="flex justify-end items-center gap-2 py-3 xl:text-[22px] ">
        <h1>تماس با ما</h1>
        <div className="text-3xl xl:text-[33px]">
          <IoCall />
        </div>
      </div>
    </Link>
  );
};

export default TitleContactUs;
