import TitleMenu from "../../components/hamburgerMenu/titles/titleMenu/index";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const data = await fetch("https://fake-coffee-api.vercel.app/api");
  return data.json();
};

const HomePage = async () => {
  const data = await getData();

  return (
    <>
      <div className="w-[140px] xl:w-[190px] mx-auto my-4">
        <TitleMenu />
      </div>

      <section
        className="flex flex-wrap
         items-center justify-around 
       h-auto mx-3 gap-2"
      >
        {data.map((item, i) => {
          return (
            <Link href={`/menu/${item.id}`} key={i}>
              <div className="m-3 mx-auto bg-[#e7e7e7] text-center rounded-xl xl:text-xl xl:w-[300px] w-[250px]">
                <Image
                  src={item.image_url}
                  alt="coffe Address"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <p className="pb-5 w-auto">name : {item.name}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default HomePage;
