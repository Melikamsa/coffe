import { BiSolidFoodMenu } from "react-icons/bi";
import Link from "next/link";

const TitleMenu = () => {
  return (
    <Link href="/menu">
      <div className="flex justify-end items-center gap-2 py-3 xl:text-[22px]">
        <h1>منوی قهوه مون</h1>
        <div className="text-3xl xl:text-[33px]">
          <BiSolidFoodMenu />
        </div>
      </div>
    </Link>
  );
};

export default TitleMenu;
