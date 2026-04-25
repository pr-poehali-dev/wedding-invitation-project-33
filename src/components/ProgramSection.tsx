import React, { useState } from "react";

interface ProgramItem {
  time: string;
  title: string;
  description: string;
  icon: string;
}

const programItems: ProgramItem[] = [
  {
    time: "15:30",
    title: "Сбор гостей",
    description: "Встреча гостей, приветственные напитки, живая музыка в фойе усадьбы",
    icon: "🥂",
  },
  {
    time: "16:00",
    title: "Церемония",
    description: "Торжественная церемония бракосочетания в Белом зале",
    icon: "💍",
  },
  {
    time: "17:00",
    title: "Фотосессия",
    description: "Прогулка по парку, семейные фото, поздравления от гостей",
    icon: "📸",
  },
  {
    time: "18:00",
    title: "Банкет",
    description: "Торжественный ужин, первые танцы, поздравительные речи",
    icon: "🍾",
  },
  {
    time: "20:00",
    title: "Торт",
    description: "Разрезание свадебного торта и десертная зона",
    icon: "🎂",
  },
  {
    time: "20:30",
    title: "Танцы",
    description: "Живая музыка и диджей сет до конца вечера",
    icon: "🎵",
  },
  {
    time: "00:00",
    title: "Финал",
    description: "Запуск фонариков и финальный фейерверк",
    icon: "✨",
  },
];

export const ProgramSection = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "hsl(36,28%,91%)" }}>
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(345,60%,40%), transparent)" }} />
      <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(345,60%,40%), transparent)" }} />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8" style={{ background: "hsl(345,60%,40%)" }} />
            <p className="text-xs tracking-[0.4em] uppercase font-sans-light" style={{ color: "hsl(345,60%,40%)" }}>
              программа вечера
            </p>
            <div className="h-px w-8" style={{ background: "hsl(345,60%,40%)" }} />
          </div>
          <h2
            className="font-serif-display font-light"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "hsl(345,20%,18%)" }}
          >
            Расписание
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: "linear-gradient(to bottom, transparent, hsl(345,60%,40%,0.3), transparent)" }}
          />

          <div className="space-y-4 md:space-y-0">
            {programItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isActive = activeIdx === idx;
              return (
                <div
                  key={idx}
                  className={`relative flex items-start gap-4 md:gap-0 cursor-pointer md:mb-0 mb-2`}
                  style={{ marginBottom: idx < programItems.length - 1 ? "1rem" : 0 }}
                  onClick={() => setActiveIdx(isActive ? null : idx)}
                >
                  <div
                    className={`md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"} w-full`}
                  >
                    <div
                      className="p-5 rounded-sm border transition-all duration-300"
                      style={{
                        borderColor: isActive ? "hsl(345,60%,40%)" : "hsl(36,20%,80%)",
                        background: isActive ? "hsl(345,60%,40%,0.06)" : "hsl(36,25%,97%)",
                      }}
                    >
                      <div className={`flex items-center gap-3 mb-2 ${isEven ? "md:justify-end" : ""}`}>
                        <span className="text-2xl">{item.icon}</span>
                        <span
                          className="text-sm font-sans-light tracking-widest"
                          style={{ color: "hsl(345,60%,40%)" }}
                        >
                          {item.time}
                        </span>
                      </div>
                      <h3
                        className="font-serif-display font-light text-lg mb-1"
                        style={{ color: "hsl(345,20%,18%)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm font-sans-light leading-relaxed transition-all duration-300"
                        style={{
                          color: "hsl(345,10%,38%)",
                          maxHeight: isActive ? "100px" : "0",
                          overflow: "hidden",
                          opacity: isActive ? 1 : 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 items-center justify-center w-3 h-3 rounded-full z-10"
                    style={{
                      background: isActive ? "hsl(345,60%,40%)" : "hsl(36,33%,94%)",
                      border: "2px solid hsl(345,60%,40%)",
                      boxShadow: isActive ? "0 0 12px hsl(345,60%,40%,0.5)" : "none",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <p
          className="text-center text-xs font-sans-light mt-10 tracking-wider"
          style={{ color: "hsl(345,10%,42%)" }}
        >
          нажмите на пункт программы, чтобы узнать подробнее
        </p>
      </div>
    </section>
  );
};

export default ProgramSection;
