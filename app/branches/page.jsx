import Image from "next/image";
import TitleBranches from "../../components/hamburgerMenu/titles/titleBranches/page"

const Branchs = () => {
  const branch = [
    {
      img: "/branche1.webp",
      title: "... شعبه غرب خیابان",
      time: "روزهای عادی 08:00 الی 23:30 - روزهای تعطیل 08:00 الی 23:30",
    },
    {
      img: "/branch2.webp",
      title: "... شعبه شرق خیابان",
      time: "روزهای عادی 08:00 الی 23:30 - روزهای تعطیل 08:00 الی 23:30",
    },
    {
      img: "/branch3.webp",
      title: "... شعبه مرکز خیابان",
      time: "روزهای عادی 08:00 الی 23:30 - روزهای تعطیل 08:00 الی 23:30",
    },
  ];
  return (
    <>
      <section className="m-[30px]">
        <div className="w-[140px] xl:w-[190px] mx-auto my-4">
          <TitleBranches />
        </div>

        <div className="text-center">
          {branch.map((item) => {
            return (
              <div className="my-10 flex flex-col items-center justify-center gap-3 xl:text-xl">
                <Image
                  src={item.img}
                  alt="coffe Address"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-lg"
                />
                <p>{item.title}</p>
                <p>{item.time}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Branchs;
