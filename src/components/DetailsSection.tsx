import React from "react";
import Icon from "@/components/ui/icon";

const DiamondIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="7" y="0.5" width="9.19" height="9.19" rx="0.5" transform="rotate(45 7 0.5)" fill="hsl(43,74%,66%)" />
  </svg>
);

interface DetailCardProps {
  icon: string;
  label: string;
  value: string;
  sub?: string;
}

const DetailCard = ({ icon, label, value, sub }: DetailCardProps) => (
  <div className="group relative flex flex-col items-center text-center p-8 border border-transparent hover:border-[hsl(43,74%,66%)] transition-all duration-500 rounded-sm">
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"
      style={{ background: "linear-gradient(135deg, hsl(43,74%,66%,0.03), transparent)" }}
    />
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center mb-4 relative"
      style={{ background: "hsl(43,74%,66%,0.1)", border: "1px solid hsl(43,74%,66%,0.3)" }}
    >
      <Icon name={icon} size={22} className="text-gold" />
    </div>
    <p className="text-xs tracking-[0.3em] uppercase mb-2 font-sans-light" style={{ color: "hsl(43,50%,55%)" }}>
      {label}
    </p>
    <p className="font-serif-display text-xl font-light leading-snug" style={{ color: "hsl(45,80%,90%)" }}>
      {value}
    </p>
    {sub && (
      <p className="mt-1 text-sm font-sans-light" style={{ color: "hsl(45,15%,55%)" }}>
        {sub}
      </p>
    )}
  </div>
);

export const DetailsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "hsl(20,14%,6%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <rect x="0" y="0" width="1200" height="600" fill="none" />
          <line x1="0" y1="300" x2="1200" y2="300" stroke="hsl(43,74%,66%)" strokeWidth="0.4" strokeOpacity="0.08" />
          <line x1="600" y1="0" x2="600" y2="600" stroke="hsl(43,74%,66%)" strokeWidth="0.4" strokeOpacity="0.08" />
          <circle cx="600" cy="300" r="280" stroke="hsl(43,74%,66%)" strokeWidth="0.5" strokeOpacity="0.06" fill="none" />
          <circle cx="600" cy="300" r="200" stroke="hsl(43,74%,66%)" strokeWidth="0.5" strokeOpacity="0.06" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center gap-3 justify-center mb-4">
            <DiamondIcon />
            <p className="text-xs tracking-[0.4em] uppercase font-sans-light" style={{ color: "hsl(43,74%,66%)" }}>
              детали события
            </p>
            <DiamondIcon />
          </div>
          <h2 className="font-serif-display font-light" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "hsl(45,80%,90%)" }}>
            Где и когда
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DetailCard
            icon="Clock"
            label="Время начала"
            value="16:00"
            sub="Сбор гостей с 15:30"
          />
          <DetailCard
            icon="MapPin"
            label="Место"
            value="Усадьба «Дворянское гнездо»"
            sub="Банкетный зал «Золотой»"
          />
          <DetailCard
            icon="Navigation"
            label="Адрес"
            value="ул. Парковая, 14"
            sub="г. Москва, 30 мин от центра"
          />
        </div>

        <div
          className="mt-12 p-6 text-center rounded-sm"
          style={{ border: "1px solid hsl(43,74%,66%,0.2)", background: "hsl(43,74%,66%,0.04)" }}
        >
          <Icon name="Car" size={18} className="text-gold inline-block mb-2" />
          <p className="font-sans-light text-sm leading-relaxed" style={{ color: "hsl(45,15%,60%)" }}>
            Для гостей организован трансфер от станции метро Чистые пруды.
            <br />
            Автобус отправляется в 15:00, 15:20 и 15:40.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;