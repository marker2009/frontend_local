import React, { useCallback, useState } from "react";

const quest = [
  {
    id: "1",
    name: "Есть ли инструкция по настройке и пользованию советника?",
    title:
      "Да есть, при получении советника Вам будут отправлены все инструкции с настройками в письменном виде.",
  },
  {
    id: "2",
    name: "Можно ли использовать советника на ПК и Смартфоне?",
    title:
      "Да можно, каждый пользователь проходит регистрацию на указанном сайте биржи для работы и в дальнейшем может пользоваться как ПК, так и смартфоном.",
  },
  {
    id: "3",
    name: "Куда обращаться если советник перестал работать?",
    title:
      "Для вашего общения и возможных обращений - создан общий чат, где каждый может задать, либо решить возникший вопрос. Наши сотрудники всегда и в кратчайшие сроки постараются Вам помочь. Обращаем внимание, что нахождение в чате не является обязательным условием после получения доступа к торговым советникам, уточняйте информацию у нашей службы поддержки.",
  },
  {
    id: "4",
    name: "Может ли советник вывести средства с биржи без моего согласия?",
    title:
      "Нет, доступ к вашим средствам имеется только у Вас. Ваши средства хранятся на указанной для работы бирже. Вы не передаете их в управление Project Imperial.",
  },
  {
    id: "5",
    name: "Когда я смогу вывести средства?",
    title:
      "В любое удобное для Вас время, согласно условиям вывода указанной биржи",
  },
  {
    id: "6",
    name: "Как осуществляется ввод денежных средств на биржу?",
    title:
      "Вам будт выслана инструкция, так же можно получить эту информацию на самой бирже",
  },
  {
    id: "7",
    name: "Как осуществляется вывод средств в фиатные деньги?",
    title:
      "Вам будт выслана инструкция, так же можно получить эту информацию на самой бирже",
  },
];

const slice = quest.slice(0, 4);

const FAQ = ({ className, title }) => {
  const [all, setAll] = useState(false);

  const handleAll = useCallback(() => setAll((prev) => !prev), []);

  return (
    <div className={className}>
      <h2 className="text-white font-jura font-bold text-[32px] md:text-[48px]">
        {title}
      </h2>
      <div className="flex flex-col gap-7 md:hidden">
        {all === true
          ? quest.map((item) => (
              <div key={item.id} className="flex flex-col gap10">
                <div className="flex justify-between items-start border-b-[0.5px] border-gun pb-2">
                  <span className="text-white text-[16px] font-gilSemi">
                    {item.name}
                  </span>
                </div>
                <span className="text-gray-400 font-gil text-[12px] pt-4">
                  {item.title}
                </span>
              </div>
            ))
          : slice.map((item) => (
              <div key={item.id} className="flex flex-col gap10">
                <div className="flex justify-between items-start border-b-[0.5px] border-gun pb-2">
                  <span className="text-white text-[16px] font-gilSemi">
                    {item.name}
                  </span>
                </div>
                <span className="text-gray-400 font-gil text-[12px] pt-4">
                  {item.title}
                </span>
              </div>
            ))}

        <p
          className="text-white cursor-pointer text-center font-gil text-xl border-[1px] border-gun rounded-full"
          onClick={handleAll}
        >
          {all === false ? "Show more" : "Show less"}
        </p>
      </div>
      <div className="hidden md:flex flex-col gap-7">
        {quest.map((item) => (
          <div key={item.id} className="flex flex-col gap10">
            <div className="flex justify-between items-start border-b-[0.5px] border-gun pb-2">
              <span className="text-white text-[16px] font-gilSemi md:text-xl xl:text-[32px]">
                {item.name}
              </span>
            </div>
            <span className="text-gray-400 font-gil text-[12px] pt-4 md:text-base">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
