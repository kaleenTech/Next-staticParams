import React from "react";
import JsonData from "@/libs/data.json";
import LaptopsRender from "@/components/LaptopsRender";

async function getLaptopData(params) {
  const laptops = JsonData?.find((record, i) => {
    return record?.brand?.toLowerCase() === params?.laptop?.toLowerCase();
  });
  return laptops;
}

export async function generateStaticParams() {
  return [
    { laptop: "Apple" },
    { laptop: "Infinix" },
    { laptop: "Royal_Mirage" },
    { laptop: "Microsoft_Surface" },
    { laptop: "Nokia" },
    { laptop: "HP_Pavilion" },
  ];
}
export default async function Page({ params }) {
  const finalData = await getLaptopData(params);

  return (
    <div>
      <LaptopsRender data={finalData} />
    </div>
  );
}
