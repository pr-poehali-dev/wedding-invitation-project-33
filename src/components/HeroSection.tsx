import React from "react";

const FloatingOrb = ({ className }: { className: string }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 ${className}`} />
);

const GeometricLine = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <line x1="0" y1="0" x2="800" y2="600" stroke="hsl(43,74%,66%)" strokeWidth="0.5" strokeOpacity="0.15" />
    <line x1="800" y1="0" x2="0" y2="600" stroke="hsl(43,74%,66%)" strokeWidth="0.5" strokeOpacity="0.15" />
    <circle cx="400" cy="300" r="220" stroke="hsl(43,74%,66%)" strokeWidth="0.8" strokeOpacity="0.12" />
    <circle cx="400" cy="300" r="180" stroke="hsl(43,74%,66%)" strokeWidth="0.5" strokeOpacity="0.08" />
    <circle cx="400" cy="300" r="140" stroke="hsl(43,74%,66%)" strokeWidth="0.5" strokeOpacity="0.06" />
    <polygon points="400,60 700,420 100,420" stroke="hsl(43,74%,66%)" strokeWidth="0.6" strokeOpacity="0.1" fill="none" />
    <polygon points="400,540 700,180 100,180" stroke="hsl(43,74%,66%)" strokeWidth="0.6" strokeOpacity="0.1" fill="none" />
  </svg>
);

const FlowerDecor = ({ top, left, size = 60, delay = 0 }: { top: string; left: string; size?: number; delay?: number }) => (
  <svg
    className="absolute animate-float"
    style={{ top, left, animationDelay: `${delay}s`, opacity: 0.35 }}
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
  >
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <ellipse
        key={i}
        cx="30"
        cy="30"
        rx="6"
        ry="14"
        fill="hsl(43,74%,66%)"
        fillOpacity="0.6"
        transform={`rotate(${angle} 30 30)`}
      />
    ))}
    <circle cx="30" cy="30" r="5" fill="hsl(43,74%,66%)" fillOpacity="0.9" />
  </svg>
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/3511bf90-5fe3-4e1c-ac65-0de2a3bb3975/files/9a467ae4-bd73-4ca3-977e-35b60cc3f333.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[hsl(20,14%,6%)]" />

      <GeometricLine />
      <FloatingOrb className="w-96 h-96 bg-amber-400 top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <FloatingOrb className="w-72 h-72 bg-amber-600 bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />

      <FlowerDecor top="8%" left="5%" size={50} delay={0} />
      <FlowerDecor top="10%" left="88%" size={40} delay={1.5} />
      <FlowerDecor top="75%" left="3%" size={35} delay={2.5} />
      <FlowerDecor top="80%" left="90%" size={55} delay={0.8} />
      <FlowerDecor top="45%" left="92%" size={30} delay={3.2} />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-6 font-sans-light"
          style={{ color: "hsl(43,74%,66%)" }}
        >
          вы приглашены
        </p>

        <div className="flex items-center gap-4 justify-center mb-4">
          <div className="h-px flex-1 max-w-16" style={{ background: "hsl(43,74%,66%)" }} />
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 1 L11.5 7.5 L18 10 L11.5 12.5 L10 19 L8.5 12.5 L2 10 L8.5 7.5 Z" fill="hsl(43,74%,66%)" />
          </svg>
          <div className="h-px flex-1 max-w-16" style={{ background: "hsl(43,74%,66%)" }} />
        </div>

        <h1
          className="font-serif-display font-light mb-2 leading-none"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)", color: "hsl(45,80%,90%)" }}
        >
          Дмитрий
        </h1>
        <p className="font-serif-display italic" style={{ fontSize: "clamp(1.2rem, 4vw, 2rem)", color: "hsl(43,74%,66%)" }}>
          &amp;
        </p>
        <h1
          className="font-serif-display font-light leading-none mb-8"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)", color: "hsl(45,80%,90%)" }}
        >
          Александра
        </h1>

        <div className="flex items-center gap-4 justify-center mb-8">
          <div className="h-px flex-1 max-w-16" style={{ background: "hsl(43,74%,66%)" }} />
          <p className="text-sm tracking-[0.3em] uppercase font-sans-light" style={{ color: "hsl(43,74%,66%)" }}>
            23 июля 2026
          </p>
          <div className="h-px flex-1 max-w-16" style={{ background: "hsl(43,74%,66%)" }} />
        </div>

        <p
          className="font-serif-display italic font-light text-xl leading-relaxed"
          style={{ color: "hsl(45,30%,75%)" }}
        >
          Мы соединяем наши судьбы и приглашаем вас разделить
          <br />
          этот особенный день вместе с нами
        </p>

        <div className="mt-12 flex justify-center">
          <div className="w-px h-16" style={{ background: "linear-gradient(to bottom, hsl(43,74%,66%), transparent)" }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;