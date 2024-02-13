import React, { useCallback, useState } from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import axios from 'axios';
import online from "../assets/online.svg";
import pause from "../assets/pause.svg";
import set from "../assets/set.svg";
import plus from "../assets/plus.svg";
import line from "../assets/line.svg";
import what from "../assets/what.svg";
import Modal from 'react-modal';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { CookiesProvider, useCookies } from "react-cookie";
const seting = [
  {
    id: "1",
    name: "Long",
  },
  {
    id: "2",
    name: "Short",
  },
  {
    id: "3",
    name: "Take profit",
  },
  {
    id: "4",
    name: "Stop loss",
  },
  {
    id: "5",
    name: "Тайминг",
  },
  {
    id: "6",
    name: "Монета",
  },
  {
    id: "7",
    name: "Кратность",
  },
  {
    id: "8",
    name: "Кредитное плечо",
  },
  {
    id: "9",
    name: "Борьба с PumP и DumP",
  },
];

const moneta = [
  {
    id: "1",
    name: "LTC",
  },
  {
    id: "2",
    name: "ETC",
  },
  {
    id: "3",
    name: "MATIC",
  },
];

const time12 = [
  {
    id: "1",
    name: "15 мин",
  },
  {
    id: "2",
    name: "30 мин",
  },
  {
    id: "3",
    name: "1 ч",
  },
  {
    id: "4",
    name: "2 ч",
  },
  {
    id: "5",
    name: "4 ч",
  },
  {
    id: "6",
    name: "6 ч",
  },
  {
    id: "7",
    name: "8 ч",
  },
];


const Settings = () => {
  const [message, setMessage] = useState('');
  const [cookies, setCookie] = useCookies(["user", "pas"]);
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(false);
  const [moneta1, setMoneta] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(null);
  
  
  
  axios.post('/get_settings', {
    "user":  cookies['user'],
    "password": cookies['pas']
    })
  .then(function (response) {
     var r = response['data'];
     if (r['status'] != "ok"){
      window.location.href = '/main';
     }
     else{
        console.log(r['id']);
     }
    
  })
  const handleActive2 = useCallback(() => setActive((prev) => !prev), []);
  const submit = () => {
    confirmAlert({
      title: "Отановить бота",
      message: "Вы уверены?",
      buttons: [
        {
          label: "Да",
          onClick: () => alert("Click Yes")
        },
        {
          label: "Нет",
          onClick: () => alert("Click No")
        }
      ]
    });
  };
  const handleTimeClick = (item) => {
    // Handle click on the time block
    setSelectedTime(item);
    console.log(item, !time)
    setTime(!time);
    // You can perform additional actions if needed
  };
  const handleActive = (item) => {
    // Handle click on the time block
    handleActive2(item);
    console.log(item);
    // You can perform additional actions if needed
  };
  const handleActive1 = (item) => {
    // Handle click on the time block
    console.log(item);
    // You can perform additional actions if needed
  };
  const handleCoinClick = (item) => {
    // Handle click on the time block
    setSelectedCoin(item);
    setMoneta(!moneta1);
    // You can perfosrm additional actions if needed
  };
  

  return  (
    
    <div className=" third flex flex-col items-center">
      <header className="flex flex-col items-center px-2 pt-10 sm:hidden">
        <img src={logo} alt="logo" />
        <div className="flex gap-10">
          <Link to="/main" className=" font-gil text-[18px] text-white">
            Перейти к лендингу
          </Link>
          <Link
            to="/"
            className="button flex items-center px-5 justify-center font-gil text-[18px] text-white"
          >
            Выход
          </Link>
        </div>
      </header>
      <header className="hidden sm:flex items-center justify-between w-full mt-10 px-10">
        <Link to="/main" className=" font-gil text-[22px] text-white">
          Перейти к лендингу
        </Link>
        <img src={logo} alt="logo" />
        <Link
          to="/"
          className="button flex items-center px-5 justify-center font-gil text-[18px] w-[117px] h-[56px] text-white"
        >
          Выход
        </Link>
      </header>
      <div className="block w-full px-2 sm:hidden mt-6">
        <div className="flex  items-center justify-between">
          <h2 className="text-[32px] font-jura font-bold text-white">
            Pritorian
          </h2>
          <div className="flex gap-2">
            <img src={online} alt="icon" className="w-7 h-7 cursor-pointer" />
            <img src={pause} alt="icon" className="w-7 h-7 cursor-pointer" />
            <img
              src={set}
              alt="icon"
              onClick={handleActive}
              className="w-7 h-7 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <span className="text-[24px] text-white font-gilSemi">Pnl +20 %</span>
          <span className="text-[24px] text-white font-gilSemi">
            Срок в днях 8
          </span>
        </div>
      </div>
      <div className="block hidden sm:flex justify-between w-full items-center py-10 px-10 gg:mt-16 mt-6">
        <h2 className="text-[32px] font-jura font-bold text-white gg:text-[48px]">
          Pritorian
        </h2>
        <div className="flex gap-5 gg:gap-16">
          <span className="text-[24px] text-white font-gilSemi gg:text-[32px]">
            Pnl +20 %
          </span>
          <span className="text-[24px] text-white font-gilSemi gg:text-[32px]">
            Срок в днях 8
          </span>
        </div>
        <div className="flex items-center gap-5 gg:gap-16">
          <img src={online} alt="icon" className="w-7 h-7 cursor-pointer" />
          <img src={pause} onClick={submit} alt="icon" className="w-7 h-7 cursor-pointer" />
          <img
            src={set}
            alt="icon"
            onClick={handleActive}
            className="w-7 h-7 cursor-pointer"
          />
        </div>
      </div>
       
      {active === true ? (
        <>
          <div className="blockInf w-full px-2 pb-5 sm:hidden">
            {seting.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-2">
                <span className="text-white font-gilSemi text-[18px] pt-4">
                  {item.name}
                </span>
                <div className="flex justify-center flex-wrap w-full gap-6">
                  {item.id === "1" || item.id === "2" ? (
                    Array.from({ length: 7 }, (_, index) => (
                      <input
                        key={index}
                        type="text"
                        name="text"
                        id="text"
                        placeholder="Ввод"
                        className="hit w-[87px] h-[48px] text-white flex items-center pl-3 font-gil text-[14px] focus:outline-primary focus:outline"
                      />
                    ))
                  ) : item.id === "3" ||
                    item.id === "4" ||
                    item.id === "7" ||
                    item.id === "8" ? (
                    <div className="flex items-center gap-4 text-white text-[20px]">
                      <input
                        type="text"
                        name="text"
                        id="text"
                        placeholder="Ввод"
                        className="hit w-[87px] h-[48px] text-white flex items-center pl-3 font-gil text-[14px]  focus:outline-primary focus:outline"
                      />
                      %
                    </div>
                  ) : item.id === "9" ? (
                    <div className="flex gap-5">
                      <div className="flex items-center text-white text-[20px] gap-3">
                        <input
                          type="text"
                          name="text"
                          id="text"
                          placeholder="Ввод"
                          className="hit w-[87px] h-[48px] text-white flex items-center pl-3 font-gil text-[14px]  focus:outline-primary focus:outline"
                        />
                        %
                      </div>
                      <div className="flex items-center text-white text-[20px] gap-3">
                        <input
                          type="text"
                          name="text"
                          id="text"
                          placeholder="Ввод"
                          className="hit w-[87px] h-[48px] text-white flex items-center pl-3 font-gil text-[14px]  focus:outline-primary focus:outline"
                        />
                        %
                      </div>
                    </div>
                  ) : item.id === "5" ? (
                    <div
                      onClick={() => setTime(!time)}
                      className={` w-[180px] h-[48px] text-white  items-center pl-3 font-gil text-[14px] z-40 flex gap-5 ${
                        time === true ? "bg-zinc-900 rounded-xl" : "hit"
                      }`}
                    >
                      {selectedTime !== null
                        ? selectedTime.name
                        : "Выбрать время"}
                      <img
                        src={line}
                        alt=""
                        className={`${time === true ? " rotate-180" : ""}`}
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => setMoneta(!moneta1)}
                      className={`w-[180px] h-[48px] text-white items-center pl-3 font-gil text-[14px] flex gap-5 z-20 ${
                        moneta1 === true ? "bg-zinc-900 rounded-xl" : "hit"
                      }`}
                    >
                      {selectedCoin !== null
                        ? selectedCoin.name
                        : "Выбрать монету"}
                      <img
                        src={line}
                        alt=""
                        className={`${moneta1 === true ? " rotate-180" : ""}`}
                      />
                    </div>
                  )}
                  <div
                    className={`${
                      item.id === "5" ? "relative z-30" : "hidden"
                    }`}
                  >
                    {time && (
                      <div className="absolute -left-[204px] top-8 bg-black pt-5 pb-2 w-[180px] rounded-xl">
                        {time12.map((item) => (
                          <div
                            onClick={() => handleTimeClick(item)}
                            key={item.id}
                            className="text-white font-gil px-2 hover:bg-primary transition-colors cursor-pointer rounded-[8px]"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className={`${item.id === "6" ? "relative" : "hidden"}`}>
                    {moneta1 && (
                      <div className="absolute -left-[204px] top-8 bg-black pt-5 pb-2 w-[180px] rounded-xl">
                        {moneta.map((item) => (
                          <div
                            onClick={() => handleCoinClick(item)}
                            key={item.id}
                            className="text-white font-gil px-2 hover:bg-primary transition-colors cursor-pointer rounded-[8px]"
                          >
                            {item.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center pt-6">
              <button className="button w-[157px] h-[56px] flex items-center justify-center text-white font-gilSemi text-[18px]">
                Сохранить
              </button>
              <img src={what} alt="" />
            </div>
            
          </div>
          <div className="blockInf hidden sm:flex px-5 py-10 gg:w-[1328px] gg:justify-between gg:px-16">
            <div className="flex flex-col gap-6">
              {seting.map((item) => (
                <div key={item.id} className="flex flex-row items-center gap-2">
                  <span className="text-white font-gilSemi text-[18px] pt-4 w-[98px]">
                    {item.name}
                  </span>
                  <div className="flex gap-3">
                    {item.id === "1" || item.id === "2" ? (
                      <>
                        <div className="flex flex-wrap gap-3 gg:hidden">
                          {Array.from({ length: 7 }, (_, index) => (
                            <input
                              key={index}
                              type="text"
                              name="text"
                              id="text"
                              placeholder="Ввод"
                              className="hit w-[87px] h-[48px] text-white flex items-center pl-3 font-gil text-[14px]  focus:outline-primary focus:outline"
                            />
                          ))}
                        </div>
                        <div className="hidden gap-3 gg:flex">
                          {Array.from({ length: 7 }, (_, index) => (
                            <input
                              key={index}
                              type="text"
                              name="text"
                              id="text"
                              placeholder="Ввод"
                              className="hit w-[87px] h-[48px] text-white flex items-center pl-3 font-gil text-[14px]  focus:outline-primary focus:outline"
                            />
                          ))}
                        </div>
                      </>
                    ) : item.id === "3" ||
                      item.id === "4" ||
                      item.id === "7" ||
                      item.id === "8" ? (
                      <div className="flex items-center gap-4 text-white text-[20px]">
                        <input
                          type="text"
                          name="text"
                          id="text"
                          placeholder="Ввод"
                          className="hit w-[87px] h-[48px] text-white flex items-center pl-3 font-gil text-[14px]  focus:outline-primary focus:outline"
                        />
                        %
                      </div>
                    ) : item.id === "9" ? (
                      <div className="flex gap-5">
                        <div className="flex items-center text-white text-[20px] gap-3">
                          <input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Ввод"
                            className="hit w-[87px] h-[48px] text-white flex items-center pl-3 font-gil text-[14px]  focus:outline-primary focus:outline"
                          />
                          %
                        </div>
                        <div className="flex items-center text-white text-[20px] gap-3">
                          <input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Ввод"
                            className="hit w-[87px] h-[48px] text-white flex items-center pl-3 font-gil text-[14px]  focus:outline-primary focus:outline"
                          />
                          %
                        </div>
                      </div>
                    ) : item.id === "5" ? (
                      <div
                        onClick={() => setTime(!time)}
                        className={` w-[180px] h-[48px] text-white  items-center pl-3 font-gil text-[14px] z-40 flex gap-5 ${
                          time === true ? "bg-zinc-900 rounded-xl" : "hit"
                        }`}
                      >
                        {selectedTime !== null
                          ? selectedTime.name
                          : "Выбрать время"}
                        <img
                          src={line}
                          alt=""
                          className={`${time === true ? " rotate-180" : ""}`}
                        />
                      </div>
                    ) : (
                      <div
                        onClick={() => setMoneta(!moneta1)}
                        className={`w-[180px] h-[48px] text-white items-center pl-3 font-gil text-[14px] flex gap-5 z-20 ${
                          moneta1 === true ? "bg-zinc-900 rounded-xl" : "hit"
                        }`}
                      >
                        {selectedCoin !== null
                          ? selectedCoin.name
                          : "Выбрать монету"}
                        <img
                          src={line}
                          alt=""
                          className={`${moneta1 === true ? " rotate-180" : ""}`}
                        />
                      </div>
                    )}
                    <div
                      className={`${
                        item.id === "5" ? "relative z-30" : "hidden"
                      }`}
                    >
                      {time && (
                        <div className="absolute -left-[192px] top-8 bg-black pt-5 pb-2 w-[180px] rounded-xl">
                          {time12.map((item) => (
                            <div
                              onClick={() => handleTimeClick(item)}
                              key={item.id}
                              className="text-white font-gil px-2 hover:bg-primary transition-colors cursor-pointer rounded-[8px]"
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div
                      className={`${item.id === "6" ? "relative" : "hidden"}`}
                    >
                      {moneta1 && (
                        <div className="absolute -left-[192px] top-8 bg-black pt-5 pb-2 w-[180px] rounded-xl">
                          {moneta.map((item) => (
                            <div
                              onClick={() => handleCoinClick(item)}
                              key={item.id}
                              className="text-white font-gil px-2 hover:bg-primary transition-colors cursor-pointer rounded-[8px]"
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-between items-end">
              <img src={what} alt="" />
              <div className="flex flex-col items-end">
                <button
                  onClick={handleActive}
                  className="button w-[157px] h-[56px] flex items-center justify-center text-white font-gilSemi text-[18px]"
                >
                  Сохранить
                </button>
                
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-start w-full px-[20px]">
          <img src={plus} alt="plus" className="mt-5" />
        </div>
      )}
    </div>
  );
};

export default Settings;
