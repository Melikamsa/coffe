import { HiBuildingStorefront } from "react-icons/hi2";
import Link from "next/link";
const TitleBranches = () => {
  return (
    <Link href="/branches">
      <div className="flex justify-end items-center gap-2 py-3 xl:text-[22px]">
        <h1>شعب قهوه مون</h1>
        <div className="text-3xl xl:text-[33px]">
          <HiBuildingStorefront />
        </div>
      </div>
    </Link>
  );
};

export default TitleBranches;
