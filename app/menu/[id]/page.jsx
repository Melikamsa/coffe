"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

const Coffe = () => {
  const params = useParams();

  const [coffeData, setCoffeData] = useState({});

  useEffect(() => {
    axios
      .get(`https://fake-coffee-api.vercel.app/api/${params.id}`)
      .then((result) => {
        setCoffeData(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <>
      <p>{console.log(params)}</p>
      <p>{console.log(coffeData)}</p>
      <div className="bg-[#e7e7e7] w-[80%] m-auto my-14 h-auto px-5 py-7 rounded-2xl flex flex-col items-start justify-start gap-[10px] md:w-[700px] lg:text-lg 2xl:text-xl">
        <Image
          src={coffeData.image_url}
          alt={coffeData.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />

        <p>
          <span className="font-bold"> name : </span>
          {coffeData.name}
        </p>
        <p>
          <span className="font-bold"> price : </span>
          {coffeData.price} $
        </p>

        <p>
          <span className="font-bold">weight : </span>
          {coffeData.weight} gr
        </p>

        <p>
          <span className="font-bold"> region : </span>
          {coffeData.region}
        </p>

        <p>
          <span className="font-bold"> description : </span>
          {coffeData.description}
        </p>
      </div>
    </>
  );
};

export default Coffe;
