import React from "react";

export const WishesSection = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "hsl(36,28%,91%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
          <circle cx="600" cy="250" r="300" stroke="hsl(345,60%,40%)" strokeWidth="0.5" strokeOpacity="0.07" fill="none" />
          <circle cx="600" cy="250" r="220" stroke="hsl(345,60%,40%)" strokeWidth="0.4" strokeOpacity="0.05" fill="none" />
          <line x1="0" y1="0" x2="1200" y2="500" stroke="hsl(345,60%,40%)" strokeWidth="0.3" strokeOpacity="0.05" />
          <line x1="1200" y1="0" x2="0" y2="500" stroke="hsl(345,60%,40%)" strokeWidth="0.3" strokeOpacity="0.05" />
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div className="flex items-center gap-3 justify-center mb-4">
          <div className="h-px w-8" style={{ background: "hsl(345,60%,40%)" }} />
          <p className="text-xs tracking-[0.4em] uppercase font-sans-light" style={{ color: "hsl(345,60%,40%)" }}>
            пожелания
          </p>
          <div className="h-px w-8" style={{ background: "hsl(345,60%,40%)" }} />
        </div>

        <h2
          className="font-serif-display font-light mb-10"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "hsl(345,20%,18%)" }}
        >
          Дорогие гости
        </h2>

        <div
          className="relative p-10 rounded-sm"
          style={{ background: "hsl(36,25%,97%)", border: "1px solid hsl(36,20%,82%)" }}
        >
          <svg
            className="absolute top-4 left-6 opacity-20"
            width="40" height="30" viewBox="0 0 40 30"
          >
            <path d="M0 30 Q0 10 15 10 Q10 10 10 20 Q10 28 18 28 L18 30 Z M22 30 Q22 10 37 10 Q32 10 32 20 Q32 28 40 28 L40 30 Z" fill="hsl(345,60%,40%)" />
          </svg>

          <p
            className="font-serif-display font-light text-xl leading-relaxed mb-6"
            style={{ color: "hsl(345,15%,30%)" }}
          >
            Ваше присутствие для нас — огромная радость!
          </p>

          <div className="h-px mx-auto w-16 mb-6" style={{ background: "hsl(345,60%,40%,0.3)" }} />

          <p
            className="font-sans-light text-sm leading-relaxed"
            style={{ color: "hsl(345,10%,42%)" }}
          >
            А если вы захотите сделать подарок, будем благодарны
            за финансовую поддержку наших первых семейных шагов.
          </p>

          <svg
            className="absolute bottom-4 right-6 opacity-20 rotate-180"
            width="40" height="30" viewBox="0 0 40 30"
          >
            <path d="M0 30 Q0 10 15 10 Q10 10 10 20 Q10 28 18 28 L18 30 Z M22 30 Q22 10 37 10 Q32 10 32 20 Q32 28 40 28 L40 30 Z" fill="hsl(345,60%,40%)" />
          </svg>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-12" style={{ background: "hsl(345,60%,40%,0.3)" }} />
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M8 1 C8 1 2 5 2 9 C2 12 4.5 14 8 14 C11.5 14 14 12 14 9 C14 5 8 1 8 1Z" fill="hsl(345,60%,40%)" fillOpacity="0.6" />
          </svg>
          <div className="h-px w-12" style={{ background: "hsl(345,60%,40%,0.3)" }} />
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
