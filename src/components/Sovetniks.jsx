import React, { useState } from "react";
import "../index.css";
import sparta from "../assets/sparta.png";
import prit from "../assets/prit.png";
import arrow from "../assets/arrowgreen.svg";
import check from "../assets/check.svg";
import close from "../assets/close.svg";
import Modal from "react-modal";
const sov = [
  {
    id: "1",
    title: "Spartan",
    icon: sparta,
  },
  {
    id: "2",
    title: "Pritorian",
    icon: prit,
  },
];

const customStyles = {
  content: {
    "min-width": "300px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    "border-radius": "10px",
    border: "3px solid #7AE15E",
    background: "#000",
    padding: "10px 15px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust the opacity here
  },
};

const spartan = [
  {
    id: "1",
    icon: sparta,
    title: "Spartan",
    type: "Фьючерсы",
    paramets: [
      {
        id: "1",
        name: "Кредитное плечо",
      },
      {
        id: "2",
        name: "Кратность ордеров",
      },
      {
        id: "3",
        name: "Шаг набора позиции",
      },
      {
        id: "4",
        name: "Тайминг работы (тайм фреймы)",
      },
      {
        id: "5",
        name: "Два режима борьбы с PUMP/DUMP",
      },
      {
        id: "6",
        name: "Тейк профит",
      },
      {
        id: "7",
        name: "Стоп приказ",
      },
    ],
    order: "8 ордеров для каждой стороны",
    torg: "Постоянная торговля в двух режимах LONG/SHORT",
    act: "LTC, ETC,  MATIC",
    cost: "75 000 ₽",
  },
  {
    id: "2",
    icon: prit,
    title: "Pritorian",
    type: "Спот",
    paramets: [
      {
        id: "1",
        name: "Кратность ордеров",
      },
      {
        id: "2",
        name: "Шаг набора позиции",
      },
      {
        id: "3",
        name: "Тайминг работы (тайм фреймы) ",
      },
      {
        id: "4",
        name: "Два режима борьбы с DUMP",
      },
      {
        id: "5",
        name: "Тейк профит",
      },
    ],
    order: "8 ордеров ",
    torg: "Стоп приказ не предусмотрен  ",
    act: "KSM, LINK, ADA",
    cost: "45 000 ₽",
  },
];

const Sovetniks = ({ className, title }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedSpartan, setSelectedSpartan] = useState(null);

  const openModal = (spartanId) => {
    const spartan1 = spartan.find((item) => item.id === spartanId);
    console.log("Selected Spartan:", spartan1);
    setSelectedSpartan(spartan1);
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    console.log("Subtitle:", subtitle);
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={className}>
      <h2 className="text-[32px] font-jura font-bold text-white md:text-[48px]">
        {title}
      </h2>
      <div className="flex flex-wrap pt-5 gap-10 justify-center md:pt-16 xl:gap-16 bg:gap-4">
        {sov.map((item) => (
          <div
            key={item.id}
            className="fight w-full px-4 py-4 md:w-fit bg:w-[752px]   bg:h-[408px]"
          >
            <h2 className="text-[28px] font-gilSemi text-white xl:text-[40px] bg:absolute">
              {item.title}
            </h2>
            <div className="flex items-center justify-center flex-wrap pt-10 md:flex-col bg:flex-row bg:pt-0 bg:pl-[225px]">
              <img
                src={item.icon}
                alt={item.title}
                className="object-contain md:w-[400px] md:h-[500px] bg:w-[195px]   bg:h-[362px]"
              />
              <button
                onClick={() => openModal(item.id)}
                className="mt-[48px] button text-[16px] font-gil text-white flex items-center justify-center px-[12px] gap-4 h-[56px] w-[280px]"
              >
                <img src={arrow} alt="arrow" /> Узнать больше
              </button>
            </div>
          </div>
        ))}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Spartan Modal"
        >
          {selectedSpartan && (
            <div className="flex gap-6 sm:py-2 sm:px-3 items-center">
              <div>
                <div className="flex justify-between">
                  <h2
                    className="text-white font-gilSemi text-base md:text-[56px]"
                    ref={(_subtitle) => (subtitle = _subtitle)}
                  >
                    {selectedSpartan.title}
                  </h2>
                  <img
                    onClick={closeModal}
                    src={close}
                    alt="close"
                    className="w-[40px] h-[40px] cursor-pointer sm:absolute right-0 top-0"
                  />
                </div>
                <div className="flex text-white md:text-[18px] md:pt-8">
                  <span className="text-primary">Тип торговли:</span>
                  {selectedSpartan.type}
                </div>
                <div className="flex flex-col gap-2 md:pt-8">
                  <div>
                    <h2 className=" font-gilSemi text-[18px] text-white pt-3">
                      Настраиваемые параметры советника
                    </h2>
                    <div className="pt-3 flex flex-col md:gap-4">
                      {selectedSpartan.paramets.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-2 md:gap-4"
                        >
                          <div className="w-[23px] h-[23px] flex items-center justify-center border-[1px] border-line rounded-[5px]">
                            <img src={check} alt="check" />
                          </div>
                          <span className=" font-gil text-base text-white">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 md:pt-5">
                    <span className=" font-gilSemi text-base text-white md:text-[18px]">
                      {selectedSpartan.order}
                    </span>
                    <span className=" font-gil text-base text-white md:text-[18px]">
                      {selectedSpartan.torg}
                    </span>
                    <span className=" font-gil text-base text-white md:text-[18px]">
                      Доступные активы: {selectedSpartan.act}
                    </span>
                  </div>
                </div>
                <div className="flex text-white pt-2 md:text-[24px]">
                  <span className="text-primary">Стоимость:</span>
                  {selectedSpartan.cost}
                </div>
              </div>
              <img
                src={selectedSpartan.icon}
                alt=""
                className={`hidden sm:flex w-[344px] h-[450px] md:h-[624px] object-contain ${
                  selectedSpartan.id === "1" ? " transform scale-x-[-1]" : ""
                }`}
              />
            </div>
          )}
        </Modal>
      </div>
      <div className="flex flex-col items-center gap-5 pt-8  md:pt-16">
        <span className="font-jura font-bold text-[22px] text-center text-white md:text-[32px] xl:text-[40px]">
          Количество запущеных советников
        </span>
        <div className="persons px-4 rounded-md flex items-center justify-center py-1 md:rounded-xl">
          <span className="text-white text-[24px] font-extralight tracking-[7px] md:text-[32px]  md:px-9 md:tracking-[10px] xl:text-[60px]">
            0 1 2 1
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sovetniks;
