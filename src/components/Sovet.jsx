import React from "react";
import icon1 from "../assets/risk.svg";
import icon2 from "../assets/caution.svg";
import icon3 from "../assets/invest.svg";
import icon4 from "../assets/stress.svg";
import icon5 from "../assets/key.svg";
import "../index.css";

const sov = [
  {
    id: "1",
    icon: icon1,
    title:
      "Не завышайте риски, настраивая советника в агресивный режим торговли",
  },
  {
    id: "2",
    icon: icon2,
    title: "Помните, все что связанно с фьючерсной торговлей является риском",
  },
  {
    id: "3",
    icon: icon3,
    title:
      "Реинвестируйте частями в спотового советника. Он поможет вам сохранить и заработать",
  },
  {
    id: "4",
    icon: icon4,
    title:
      "Не используйте для торговли кредитные и заемные средства, это поможет вам избежать стрессовых ситуаций",
  },
  {
    id: "5",
    icon: icon5,
    title:
      "Никому не передавайте свои ключи шифрования, не попадайтесь на уловки мошенников",
  },
];

const slice = sov.slice(0, 3);

const Sovet = ({ className, title }) => {
  return (
    <div className={className}>
      <h2 className="text-white text-[30px] font-jura font-bold text-center xl:text-5xl">
        {title}
      </h2>
      <div className="flex flex-col gap-4 sm:hidden">
        {slice.map((item) => (
          <div
            key={item.id}
            className={`blockInf flex flex-col gap-4 h-fit py-4 px-2`}
          >
            <img
              src={item.icon}
              alt={item.id}
              className="w-[35px] h-[35px] object-fit"
            />
            <span
              className={`text-[14px] text-white font-gil ${
                item.id === "1" || item.id === "3"
                  ? "max-w-[284px]"
                  : "max-w-[224px]"
              }`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <div className=" flex-wrap gap-4 hidden sm:flex justify-center">
        {sov.map((item) => (
          <div
            key={item.id}
            className={`blockInf flex flex-col gap-4  py-2 px-2 sm:w-[300px] h-[175px] xl:w-[360px]`}
          >
            <img
              src={item.icon}
              alt={item.id}
              className="w-[35px] h-[35px] object-fit xl:w-[56px] xl:h-[56px]"
            />
            <span className={`text-[16px] text-white font-gil `}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sovet;
