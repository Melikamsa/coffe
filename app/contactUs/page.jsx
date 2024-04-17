import TitleContactUs from "../../components/hamburgerMenu/titles/titleContactUs/page";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall, IoTimerSharp } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const ContactUs = () => {
  const contact = [
    {
      icon: <FaLocationDot />,
      title: "آدرس",
      description: " ... تهران",
    },
    {
      icon: <IoCall />,
      title: "تلفن تماس ",
      description: "۰۹۱۲۳۴۵۶۷۸۹",
    },
    {
      icon: <SiGmail />,
      title: "پست الکترونیک",
      description: "...@gmail.com",
    },
    {
      icon: <IoTimerSharp />,
      title: "ساعت کاری دفتر مرکزی ",
      description: "از شنبـــه تا چهارشنبه ۸:۳۰ صبح الی ۱۷:۲۰ عصر ",
    },
  ];
  return (
    <div className="my-5 mx-2">
      <div className="w-[140px] xl:w-[190px] mx-auto my-4">
        <TitleContactUs />
      </div>

      <section className="sm:flex sm:flex-wrap sm:items-center gap-2 sm:justify-between">
        {contact.map((item) => {
          return (
            <section className="m-3 py-5 mx-auto bg-[#e7e7e7] text-center rounded-xl xl:text-xl xl:w-[300px] w-[250px] h-[180px]  flex-col flex items-center justify-between">
              <div className="text-4xl mx-auto w-9">{item.icon}</div>
              <div>
                <p className="font-bold">{item.title}</p>
                <p>{item.description}</p>
              </div>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default ContactUs;
