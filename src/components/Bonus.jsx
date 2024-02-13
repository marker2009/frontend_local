import React from "react";
import "../index.css";
import icon1 from "../assets/stratefy.svg";
import icon2 from "../assets/settings.svg";
import icon3 from "../assets/choose.svg";
import icon4 from "../assets/person.svg";
import robot from "../assets/robot.png";

const sov = [
  {
    id: "1",
    icon: icon1,
    title:
      "Стратегии и алгоритмы заложенные в советника, позволяют настраивать его в различные режимы торговли",
  },
  {
    id: "2",
    icon: icon2,
    title: "Рекомендованные настройки торговли от разработчика",
  },
  {
    id: "3",
    icon: icon3,
    title: "Гибкость всех настроек советника",
  },
  {
    id: "4",
    icon: icon4,
    title: "Советники подходят даже для начинающих Инвесторов",
  },
];

const plash = [
  {
    id: "1",
    title: "Телеграмм чат с реальными пользователями продукта",
  },
  {
    id: "2",
    title:
      "Чат поддержки трейдера с публикацией уровней и событий по используемым активам",
  },
  {
    id: "3",
    title: "Чат поддержки",
  },
];

const Bonus = ({ className, title }) => {
  return (
    <div className={className}>
      <div className="block pb-[33px] pt-8 px-4 w-full md:w-[600px]  bg:h-[538px]">
        <h2 className="text-[32px] text-white font-jura font-bold md:text-[48px]">
          Бонусы
        </h2>
        <div className="pt-9 flex items-center flex-wrap justify-center gap-8 md:justify-normal">
          <div className="flex flex-col gap-6">
            {plash.map((item) => (
              <a
                href="https://t.me/+BVe-_LRT7gAwYTAy"
                target="_blank"
                rel="noopener noreferrer"
                key={item.id}
                className={`plash ${
                  item.id === "1" || item.id === "2"
                    ? "max-w-[265px] md:w-[180px] xl:w-[268px]"
                    : "max-w-[167px]"
                } items-center justify-center py-[15px] text-white font-gil text-[14px] px-6`}
              >
                <span>{item.title}</span>
              </a>
            ))}
          </div>
          <img src={robot} alt="robot" className=" object-contain" />
        </div>
      </div>
      <div className="block max-w-[880px] px-4 py-6 md:w-[400px] xl:w-[550px] xl:px-1  bg:w-[880px]  bg:h-[538px]">
        <h2 className="text-[32px] font-jura font-bold text-white md:text-[48px] xl:pl-3">
          {title}
        </h2>
        <div className=" flex flex-wrap pt-10 gap-y-8 gap-x-10 justify-center xl:items-center xl:gap-x-4 xl:gap-y-4">
          {sov.map((item) => (
            <div
              key={item.id}
              className={`blockInf flex flex-col gap-4 h-fit py-4 px-2 bg:w-[380px] bg:gap-y-8 bg:h-[168px] bg:pl-8 bg:py-1`}
            >
              <img
                src={item.icon}
                alt={item.id}
                className="w-[35px] h-[35px] object-fit bg:w-[56px]  bg:h-[56px]"
              />
              <span
                className={`text-[14px] text-white font-gil ${
                  item.id === "1" || item.id === "3"
                    ? "max-w-[284px]"
                    : "max-w-[224px]"
                } bg:text-base `}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bonus;
