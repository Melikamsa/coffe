import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center p-13">
      <Image src={"/loading.svg"} width={150} height={150} alt="loading" />
    </div>
  );
};

export default Loading;
