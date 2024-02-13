import React from "react";
import arrow from "../assets/arrowgreen.svg";
import "../index.css";
const span = [
  {
    id: "1",
    paragraph:
      " – это программа в которую заложенны торговые алгоритмы, для управления капиталом с минимальным участием для пользователя.",
    span: "Торговые советники",
  },
  {
    id: "2",
    paragraph:
      " — сохранить и приумножить ваш капитал, дать Вам возможность зарабатывать, не имея  практической базы и опыта в сфере инвестирования. ",
    span: "Цель советника",
  },
];

const Main = ({ className, title }) => {
  return (
    <div className={className}>
      <div>
        <h2 className="text-[32px] text-white font-jura font-bold leading-[120%] max-w-[752px] md:text-[48px] xl:text-[56px]">
          {title}
        </h2>
        <div className="pt-6 flex flex-col gap-2">
          {span.map((item) => (
            <p
              key={item.id}
              className={`text-[13px] font-gilSemi leading-6 text-white ${
                item.id === "1" ? " max-w-[458px] " : " max-w-[496px] "
              } md:text-[16px]`}
            >
              <span className="text-primary">{item.span}</span>
              {item.paragraph}
            </p>
          ))}
        </div>
        <button className="mt-[48px] button text-[14px] font-gil text-white flex items-center justify-center px-[12px] gap-4 h-[56px]">
          <img src={arrow} alt="arrow" /> Подробнее о советниках
        </button>
      </div>
      <div className="w-[712px] h-[712px] bg-emerald-500 hidden"></div>
    </div>
  );
};

export default Main;
