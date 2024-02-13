import React from "react";

const Birj = ({ className, title }) => {
  return (
    <div className={className}>
      <h2 className="text-primary text-[32px] text-center font-jura font-semibold xl:text-[48px]">
        {title}
      </h2>
      <span className="text-[16px] font-gil text-white text-center xl:text-2xl">
        Совершаемые торговые операции с помощью советника, будут
        вознаграждаться. Торгуя на бирже, вы получаете % от суммарного торгового
        объема ваших друзей, зарегистрированных по вашей реферальной ссылке
      </span>
      <span className="text-gun font-gil text-[14px] xl:text-base">
        *Подробная информация указана на бирже
      </span>
    </div>
  );
};

export default Birj;
