import React from "react";
import Header from "../components/Header";
import "../index.css";
import Main from "../components/Main";
import Sovetnik from "../components/Sovetnik";
import Sovetniks from "../components/Sovetniks";
import Partners from "../components/Partners";
import Bonus from "../components/Bonus";
import Active from "../components/Active";
import FAQ from "../components/FAQ";
import Birj from "../components/Birj";
import Sovet from "../components/Sovet";
import Footer from "../components/Footer";

const MainScreen = () => {
  return (
    <>
      {" "}
      <div className="main">
        <Header
          className={
            "text-white flex flex-col items-center justify-center border-b-[0.5px] border-line pb-6 pt-[31.5px]"
          }
        />
        <Main
          className={
            "px-[30px] pt-[88px] pb-[192px] flex gap-4 items-center md:px-[125px]"
          }
          title={"Безопасная и доступая торговля для всех пользователей "}
        />
      </div>
      <div className="second pt-[100px] flex flex-col gap-[100px] justify-center items-center">
        <Sovetnik
          title={"Преимущества Советника"}
          className={
            "flex  items-center justify-center gap-[18px] px-[20px] md:px-[125px] bg:px-0"
          }
        />
        <Bonus
          title={"Инновации "}
          className={
            "flex flex-wrap items-center justify-center gap-[16px] px-[20px] md:px-[125px] bg:px-0 bg:gap-10"
          }
        />
        <Sovetniks
          className={"px-[20px] md:px-[125px] bg:px-0"}
          title={"Советники"}
        />
        <Partners
          className={
            "partners flex items-center justify-center flex-col gap-8 px-[20px] pt-7 pb-4 mx-4 md:mx-0 md:px-[125px] bg:w-full"
          }
          title={"Партнерская программа от Project Imperial"}
        />
        <Birj
          className={
            "partners flex items-center justify-center flex-col gap-8 px-[20px] pt-7 pb-4 mx-4 xl:mx-0 xl:px-[220px]"
          }
          title={"Партнерская программа от биржи"}
        />
        <Active
          className={"flex flex-col gap-5 px-4 md:px-[125px] xl:px-0"}
          title={"Активы которыми мы торгуем"}
        />
        <FAQ
          className={
            "px-4 flex flex-col gap-10 py-5 md:px-[125px] bg:px-0 bg:max-w-[1520px]"
          }
          title={"F.A.Q"}
        />
      </div>
      <div className="last pt-[100px] h-fit flex flex-col gap-[100px] py-10 items-center">
        
        <Sovet
          className={
            "block px-4 flex flex-col gap-5 py-7 mx-4 xl:mx-[125px] bg:mx-0 bg:max-w-[1520px]"
          }
          title={"Советы от Project Imperial"}
        />
      </div>
      <div className=" justify-center w-full flex">
        <Footer
          className={
            "flex flex-wrap justify-center gap-24 py-10 px-4 md:justify-between bg:w-[1520px]"
          }
        />
      </div>
    </>
  );
};
export default MainScreen;

