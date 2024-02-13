import React from "react";

const Partners = ({ className, title }) => {
  return (
    <div className={className}>
      <h2 className="text-primary text-[32px] text-center font-jura font-semibold  md:text-[40px]">
        {title}
      </h2>
      <span className="text-[20px] font-gil text-white text-center md:text-[24px]">
        Заработай с помощью советника сам, порекомендуй другу и получи 10%
        процентов от продажи каждого торгового советника
      </span>
      <span className="text-gun font-gil text-[14px]">
        *Бонус выплачивается проектом разово за каждого приглашенного
        пользователя
      </span>
    </div>
  );
};

export default Partners;
