import React from "react";

const ColorSwatch = ({ color, label, hex }: { color: string; label: string; hex: string }) => (
  <div className="flex flex-col items-center gap-3">
    <div
      className="w-20 h-20 rounded-full shadow-md"
      style={{ background: color, border: "3px solid hsl(36,20%,82%)" }}
    />
    <div className="text-center">
      <p className="font-serif-display font-light text-base" style={{ color: "hsl(345,20%,18%)" }}>
        {label}
      </p>
      <p className="text-xs font-sans-light tracking-wider" style={{ color: "hsl(345,10%,42%)" }}>
        {hex}
      </p>
    </div>
  </div>
);

const Rule = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-start gap-3">
    <span className="text-xl shrink-0 mt-0.5">{icon}</span>
    <p className="font-sans-light text-sm leading-relaxed" style={{ color: "hsl(345,10%,38%)" }}>
      {text}
    </p>
  </div>
);

export const DressCodeSection = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "hsl(36,33%,94%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
          <circle cx="200" cy="100" r="180" stroke="hsl(345,60%,40%)" strokeWidth="0.5" strokeOpacity="0.08" fill="none" />
          <circle cx="1000" cy="600" r="220" stroke="hsl(345,60%,40%)" strokeWidth="0.5" strokeOpacity="0.08" fill="none" />
          <line x1="0" y1="350" x2="1200" y2="350" stroke="hsl(345,60%,40%)" strokeWidth="0.3" strokeOpacity="0.06" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="h-px w-8" style={{ background: "hsl(345,60%,40%)" }} />
            <p className="text-xs tracking-[0.4em] uppercase font-sans-light" style={{ color: "hsl(345,60%,40%)" }}>
              дресс-код
            </p>
            <div className="h-px w-8" style={{ background: "hsl(345,60%,40%)" }} />
          </div>
          <h2
            className="font-serif-display font-light mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "hsl(345,20%,18%)" }}
          >
            Цвета вечера
          </h2>
          <p
            className="font-serif-display italic font-light text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "hsl(345,15%,30%)" }}
          >
            Мы будем рады, если вы поддержите палитру нашего торжества
            и придёте в бордовых или чёрных оттенках
          </p>
        </div>

        <div className="flex justify-center gap-10 md:gap-20 mb-14 flex-wrap">
          <ColorSwatch
            color="#6B1A2A"
            label="Бордовый"
            hex="#6B1A2A"
          />
          <ColorSwatch
            color="#8B2035"
            label="Тёмная роза"
            hex="#8B2035"
          />
          <ColorSwatch
            color="#1A1A1A"
            label="Чёрный"
            hex="#1A1A1A"
          />
          <ColorSwatch
            color="#2D2D2D"
            label="Антрацит"
            hex="#2D2D2D"
          />
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 rounded-sm"
          style={{ background: "hsl(36,25%,97%)", border: "1px solid hsl(36,20%,82%)" }}
        >
          <div className="space-y-4">
            <p className="text-xs tracking-[0.3em] uppercase font-sans-light mb-4" style={{ color: "hsl(345,60%,40%)" }}>
              Рекомендуем
            </p>
            <Rule icon="✅" text="Вечерние платья и костюмы в бордовых, винных, тёмно-красных оттенках" />
            <Rule icon="✅" text="Чёрные и тёмно-серые наряды" />
            <Rule icon="✅" text="Дополнения: золото, серебро, нюд в сочетании с основным цветом" />
          </div>
          <div className="space-y-4">
            <p className="text-xs tracking-[0.3em] uppercase font-sans-light mb-4" style={{ color: "hsl(345,60%,40%)" }}>
              Просим избежать
            </p>
            <Rule icon="🚫" text="Белый и молочный цвет — это цвет невесты" />
            <Rule icon="🚫" text="Слишком яркие и кричащие принты" />
            <Rule icon="🚫" text="Повседневная и спортивная одежда" />
          </div>
        </div>

        <p
          className="text-center mt-8 font-serif-display italic font-light text-base"
          style={{ color: "hsl(345,15%,45%)" }}
        >
          Главное — ваше хорошее настроение и улыбка 🤍
        </p>
      </div>
    </section>
  );
};

export default DressCodeSection;
