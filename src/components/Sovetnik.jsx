import React from "react";
import "../index.css";
import icon from "../assets/sovetnikHuman.png";
const sov = [
  {
    id: "1",
    name: "Cкорость",
    title: "Открывает и закрывает сделки за считанные секунды",
  },
  {
    id: "2",
    name: "Человеческий фактор",
    title:
      "Ведет работу 24/7, не упускает торговые данные, не подвержен принятию необдуманного решения",
  },
  {
    id: "3",
    name: "Многозадачность",
    title: "Ведет сбор всей информации по торговому активу непрерывно",
  },
  {
    id: "4",
    name: "Время",
    title: "Пользователь свободен от анализа рынка и изучения новостей",
  },
];
const Sovetnik = ({ className, title }) => {
  return (
    <div className={className}>
      <div className="block pb-[33px] pt-9 px-4 max-w-[880px] md:h-[551px]">
        <h2 className="text-[32px] font-jura font-bold text-white md:text-[41px] xl:text-[48px]">
          {title}
        </h2>
        <div className=" flex flex-wrap pt-10 gap-y-8 gap-x-10 justify-center md:justify-normal md:gap-x-4 xl:justify-center">
          {sov.map((item) => (
            <div
              key={item.id}
              className={`${
                item.id === "1" || item.id === "3"
                  ? "pl-2 bg:pl-[32px]"
                  : "pl-2 bg:pl-10"
              } blockInf flex flex-col gap-4 h-[168px] pt-2 w-[246px] sm:w-[266px] xl:w-[300px] bg:w-[380px] bg:pt-6`}
            >
              <p className="text-[20px] font-gilSemi text-white xl:text-2xl">
                {item.name}
              </p>
              <span
                className={`text-base text-white font-gil ${
                  item.id === "3" ? "max-w-[236px]" : "max-w-[273px]"
                }`}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="block  h-[551px] hidden md:flex md:min-w-[400px] xl:min-w-[480px] bg:w-[624px]  bg:py-10  bg:justify-center bg:items-center">
        <img src={icon} alt="human" className=" object-contain" />
      </div>
    </div>
  );
};

export default Sovetnik;
