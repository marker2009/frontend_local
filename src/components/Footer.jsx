import React from "react";
import logo from "../assets/logo.svg";
import min from "../assets/min.svg";
import max from "../assets/max.svg";

const links = [
  {
    id: "1",
    name: "ПОЛИТИКА ВОЗВРАТА ДЕНЕЖНЫХ СРЕДСТВ",
  },
  {
    id: "2",
    name: "ДОГОВОР ОФЕРТЫ",
  },
  {
    id: "3",
    name: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
  },
  {
    id: "4",
    name: "ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ",
  },
  {
    id: "5",
    name: "СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ",
  },
  {
    id: "6",
    name: "СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ,РАЗРЕШЕННЫХ СУБЪЕКТОМ",
  },
];
const Footer = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex justify-center items-center flex-col gap-10 md:items-start">
        <img src={logo} alt="logo" />
        <div className="flex items-center gap-10">
          <img src={min} alt="icon" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/+BVe-_LRT7gAwYTAy"
          >
            {" "}
            <img src={max} alt="icon" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {links.map((item) => (
          <span
            key={item.id}
            className="font-gil text-base text-white md:text-end"
          >
            {item.name}
          </span>
        ))}
        <span className="font-gil text-base text-white pt-3 md:text-end">
          нажимая на данные. должны открываться юр.документы
        </span>
      </div>
    </div>
  );
};

export default Footer;
